# PassChecker
_[Server repo link](https://github.com/leoforney/PassCheckerServer)_\
_[App repo link](https://github.com/leoforney/PassChecker)_

Project Lead the Way was an extremely popular program at my school to get students into engineering. Having a desire to write
software, I jumped into this program without hesitation. The way the program is structured is that it teaches you fundamentals of almost
every discipline of engineering. At the end of the 4-year program, you have a senior design project. PassChecker was my group's project.

Our problem statement goes as follows:
- There are roughly 500 cars in our high school parking lots, they all require parking passes
- Security guards go out and check each car's windshield for a pass
- Snow sometimes blocks the windshield, so the guards have to check a printed sheet of passes and the license plate numbers
- Time cost is about an hour with two guards on a golf cart

With the problem being established, we created a solution where this whole process is automated. Using a computer that would be
stored inside the school, we devised an application that can take a picture input and tell if the car is in the pass database.

This backend server used [MongoDB](https://www.mongodb.com/) and [OpenALPR](https://github.com/openalpr/openalpr) to work properly. For serving the 
content we used [Spring Boot](https://spring.io/projects/spring-boot). This decision was made because the ease of implementing the database and accessing with POJO.
Additionally, we used MongoDB because none of us were familiar with SQL and it was extremely easy to get started. With the backend we also wanted a simple GUI
we also wanted this GUI to be in the browser, because the administration might want to use it to add/remove students to the database. We decided to
go with [Vaadin](https://vaadin.com/) because of it's ease to use it in pure Java.

As far as the mobile application, I built it upon the Android platform because of its ability to use USB devices easily. With that being established, we
used [jiangdongguo's AndroidUSBCamera](https://github.com/jiangdongguo/AndroidUSBCamera) to process the camera streams and forwarded the frames to the backend server.
Once the backend server checks against the mongo database, it returns if there is a match or not.

There's a bar at the top to tell if the license plate is a match or not, marked with colors. Additionally, for accessibility, the app would make sounds to indicate a match or not.
Lastly, the app had a manual entry for if the license plate was covered or the camera couldn't read it.

Here's a gif of all of this working in action:

![Passchecker demo](/img/passchecker.gif)

When the guards would be checking, they could only go about a max of 5-10 mph. For a golf-cart that is very doable and faster than the speed of manually checking.
What I personally learned from this project are REST APIs, text recognition, and database design. I also utilized my Android development experience for this so that was also a nice bonus.
