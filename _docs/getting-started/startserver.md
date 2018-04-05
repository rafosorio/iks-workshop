---
title: Start Development Server
permalink: /docs/startserver/
---

### Initialize and start the Express Server

We will use an Express server to host our widgets during development and testing of our widgets.  It will greatly simplify the process of iterating through various versions of the code without having to constantly redeploy the widget(s) to the Connections environment.  (Again, Express is not necessary in order to develop or run ICEC widgets; using these tools just makes our work easier.) The express server will serve the widgets under the ```/build/public``` directory.   With the ngrok tunnel, all the widgets will be served over https. 

Open a new terminal by selecting **View** > **Integrated Terminal**

Make sure that you are in the directory of the repository that you cloned earlier, you may need to change to it first by issuing the following command:

```
cd icec-widgets-starter
```

Once in the directory issue the following command:
```
npm install
```

This process may run for less than 2 minutes. Once the npm modules required are installed, enter the following command to compile the Express server

```
npm run build
```

Once that is completed, run the following command to start the server. You may receive a prompt to allow ngrok to be accessible via your desktop firewall; approve it. (On a Mac, you may have to run the command using sudo: `sudo npm run start`.) ngrok is a tunnel to your local server that will be hosting your widgets during development.
```
npm run start
```

![server running](../images/serverrun.png)

Once the server is started, you should see a message similar to the one in the screenshot above, letting you know that the server is running and the URL to access the server.   

Using the main browser in your system, try accessing the server using the URL provided.  You should see a welcome message on the screen.  Take note of this URL as you may need it during the lab.

<p>
<span class="label label-warning">Take Note</span>
Every time the server is started/restarted, the URL changes.  
</p>

The server is now running, and you can leave it running throughout the lab.  

You can go back to this terminal window later if you want to review the access logs of the server, stop or start the server.  
For now, we want to switch to a different terminal session for compiling our widgets.  

### Stopping the server

In the terminal that runs the server type ```q``` and press Enter.

![stop server](../images/stopserver.png)


