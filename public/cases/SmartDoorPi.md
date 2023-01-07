# SmartDoorPi
_[Repo link](https://github.com/leoforney/SmartDoorPi)_

When it comes to owning your own place, many keep it safe by purchasing a professional security system. There are many well
known companies that offer various packages. They almost all include door sensors when installing them. But what happens if you don't
want to pay for the subscription anymore? Can you repurpose that system and installation pretty easily?

After completing my project _SmartDoorPi_ I can say for certain that you easily repurpose an old security system.

Initially starting the project I had **2** objectives:
- Create a low-cost solution for people that want to eliminate their home security system subscription
- Getting experience with IOT and embedded devices

This project was initially started in 2016, but has evolved immensely since then. The first prototype that I developed was with a Raspberry Pi 3
and I wrote the initial code in Java. It included a servlet that you could configure the pins and see the status of them.
Additionally, this Java program would store this data (current status and a log) inside [Firebase](https://firebase.google.com/). I then made a
complementary [Android application](https://github.com/leoforney/SmartDoorPi-Android) that could view this data. For interfacing with the GPIO pins in Java, I used [Pi4J](https://pi4j.com/) which worked pretty good.
My favorite feature is that you could provision pins and attach listeners to them for changes. This saved CPU and would remove the need for an event loop.

As soon as I could retrieve data from the pins, I decided the best IOT platform was Samsung SmartThings. Because we already had Z-Wave devices in our home (including a siren) 
it would be ideal to tie the door pins into it. This could be done by creating a "device handler" in the SmartThings IDE and updating the contact sensor status. For some reason, Samsung designed the 
contact sensor device type to _not accept changes_. Disappointing. So to find a workaround, I used this community made Universal Virtual Device Type called [uDTH](https://community.smartthings.com/t/release-universal-virtual-device-type-and-translator/47836?page=7).
It worked like a charm. The system was then working fully and could update door changes in sub-millisecond time.

However, one issue with this solution. It needed to be restarted every so often because the JVM would _crash_ and/or _hang_.

Fast-forward to 2021, I have accumulated a good amount of knowledge in C/C++ and wanted to revisit this project.

Instead of a Raspberry Pi 3, I utilized the new low-power Raspberry Pi Zero W. Here's it mounted in the old panel, connected to all the door contact pins.
<br/><img src="img/smartdoorpi.jpg" alt="drawing" style="width: 100%; height: auto; max-width: 400px" alt="Raspberry Pi Zero W mounted"/><br/>
For interfacing with the GPIO I used the library that Pi4J was built upon. This 
library was [WiringPi](http://wiringpi.com/). When it came to sending the data, I used libcurl and linked it dynamically to the CMake project.

The way the "SmartApp" was set up, it had two endpoints per door. No data needed to be sent in the request, but the endpoints needed to be hit to change the door.

Here's an excerpt from the re-worked `main.cpp`:
```cpp
void sendDoorStatus(ns::door &door, const std::string& endpoint, const std::string& apiKey) {
    CURL *curl;
    CURLcode res;

    /* In windows, this will init the winsock stuff */
    curl_global_init(CURL_GLOBAL_ALL);

    /* get a curl handle */
    curl = curl_easy_init();
    if(curl) {

        struct curl_slist *chunk = NULL;

        std::string authHeader = "Authorization: Bearer ";
        authHeader.append(apiKey);

        chunk = curl_slist_append(chunk, authHeader.c_str());

        std::string compiledEndpoint = endpoint;
        compiledEndpoint.append("/doors/");
        compiledEndpoint.append(door.codeName);
        if (door.current) {
            compiledEndpoint.append("/open");
        } else {
            compiledEndpoint.append("/close");
        }

        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, chunk);
        curl_easy_setopt(curl, CURLOPT_URL, compiledEndpoint.c_str());
        curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "PUT");

        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, "Test content");

        /* Perform the request, res will get the return code */
        res = curl_easy_perform(curl);

        /* Check for errors */
        if(res != CURLE_OK) {
            std::cerr << "curl_easy_perform() error: " << curl_easy_strerror(res) << std::endl;
        }

        /* always cleanup */
        curl_easy_cleanup(curl);
    }
    curl_global_cleanup();
}
```

To configure the pins and doors, I decided to go with a simple config.json file that could be generated and loaded on startup.
Here's the struct of the door:

```cpp
struct door {
    std::string name;
    std::string codeName;
    bool current;
    int pin;
    bool prev;
};
```

So once the door configurations are loaded to its structs, the pins are set up for input mode, and the main loop listens for door changes. Here's that final piece of the puzzle:
```cpp
bool firstRun = true;
while (true) {
    for (auto & i : doorsVector) {
        i.prev = i.current;
        i.current = !digitalRead(i.pin);
        if (i.prev != i.current || firstRun) {
            std::cout << i.name << " has changed to " << i.current << std::endl;
            sendDoorStatus(i, smartthingsEndpoint, apiKey);
        }
    }

    if (firstRun)
        firstRun = false;

    delay(500);
}
```

All together, this code is extremely simple, but very effective and does its job great. In the future, I'm planning on taking this
away from the SmartThings platform and integrate it to the Google Home ecosystem. Potentially looking to integrate [Matter](https://csa-iot.org/all-solutions/matter/) to do this.
