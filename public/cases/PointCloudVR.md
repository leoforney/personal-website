# PointCloudVR
_[Repo link](https://github.com/leoforney/PointCloudVR)_

PointCloudVR is based on a college assignment for my COM S 336 (Computer Graphics) final project. 
The assignment my partner and I created would load a Point Cloud file (.PLY) and display the vertices in WebGL.
In addition to this, it also featured some interesting effects that would manipulate the point data. These effects
include collapsing the points, adding noise, falling points, exploding the object, and dissolve.

This break, I wanted to break into the WebVR scene and expirement with it to get some insight on the future of VR.
I discovered that WebVR/WebXR is extremely promising for building complex scenes. Using my Quest 2, I got to converting the project to WebVR.

Because the project was written in pure WebGL (with the help of the matrix translation code in THREE.js), it would be extremely hard to 
drop a VR renderer in this. I decided to take the best route and convert the whole code to a THREE.js scene. This was done because
of THREE's built-in VR support. After including the .PLY loader, I abstracted from TeleportVR, so I can walk around the scene.

To be continued...
