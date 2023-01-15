# PointCloudVR
_[Repo link](https://github.com/leoforney/PointCloudVR)_

PointCloudVR is based on a college assignment for my COM S 336 (Computer Graphics) final project. 
The assignment my partner and I created would load a Point Cloud file (.PLY) and display the vertices in WebGL.
In addition to this, it also featured some interesting effects that would manipulate the point data. These effects
include collapsing the points, adding noise, falling points, exploding the object, and dissolve.

This break, I wanted to break into the WebVR scene and experiment with it to get some insight on the future of VR.
I discovered that WebVR/WebXR is extremely promising for building complex scenes. Using my Quest 2, I got to converting the project to WebVR.

Because the project was written in pure WebGL (with the help of the matrix translation code in THREE.js), it would be extremely hard to 
drop a VR renderer in this. I decided to take the best route and convert the whole code to a THREE.js scene. This was done because
of THREE's built-in VR support. After including the .PLY loader, I abstracted from [TeleportVR](https://github.com/Sean-Bradley/TeleportVR), so I can walk around the scene.

When it comes to the models themselves, I'm not talented with blender modeling so I needed a simple way to get the models. I used Polycam on my iPhone to scan various different
things that looked interesting. However, for Polycam, the .PLY files that it exports are in binary. Our PLY loader code was written for the ascii version of PLY's.
I then used [MeshLab](https://www.meshlab.net/) to convert the binary files to their ASCII equivalent. As soon as the objects were ready, I just dropped
them into the project and viola!

After the heavy reduction of the scene, I now have a working point cloud object viewer. Because the Quest 2 has a limited performance cap compared to PCVR, 
models had to be moderately small to view them without stutter.

Here's a demo of the project working with a personal model:

![PointCloud VR Demo](/img/pointcloudvrdemo.gif)

Keep in mind, this project is still a work in progress. It will still be updated with more features.
