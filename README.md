# GifTV

Built using NodeJS, ExpressJS and Socket.IO

To run, navigate to the project directory and type

    npm install
Then simply run

    nodemon
    
The app uses Socket.IO to facilitate communication between two clients.

The mobile client:

![Alt mobile](GifTV%20mobile.png?raw=true "Mobile")

and the Gif TV web client:

![Alt web](GifTV%20web.png?raw=true "Web")

4 gifs will be shown on the web client and the timer on the top left of each Gif will countdown to 0.

When the counter hits 0, a new gif will load on that quad.

If you press the corresponding Zap Button on the mobile view, the Gif will persist for another 5 seconds. This is a good way to keep an especially interesting, funny or confusing Gif on the screen for a longer period of time!
