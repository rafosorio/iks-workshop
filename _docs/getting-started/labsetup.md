---
title: Lab Setup
permalink: /docs/labsetup/
---

### Prerequisites
We’ll assume some familiarity with JavaScript and Node.JS, but you should be able to follow along even if you haven’t used them before. However, you may not know why we did certain things the way we did.

### What we will be doing
In this lab you will see how easy is to create intelligent conversations apps using Watson Work Services and Node.js that leverage Watson intelligence to improve your employees productivity and your business results.

The lab instructions are very specific to the tools we used as we built the lab. However, these are not requirements of tools or code platform for create Watson Work Services Apps! You can use a text editor to write your code and any application server to deploy your app. To simplify the lab, you will use IBM Cloud Platform to write and deploy your app.

In this lab you are able to try different types of Workspace Apps

- Notification App
    - The lab 1 will show how to create an app that post a message to a specific space;

- Listener App
    - The lab 2 will show how to create an app to listen an event in a space. In our case, you will listen “message-created” event;

- Annotation App
    - The lab 3 will show how to leverage Watson Annotations to send specific message in a space;

- Action Fulfillment App
    - The lab 4 will show how to create an app that understand the conversation and show a more rich user interface for the end user;

All mini labs don’t have any dependency. So you are able to do only the specific mini lab that you want.  However all the mini labs have a similar scenario: send motivational quotes for a sales team.

In this lab you will learn:
1.	How to post messages in a Workspace Space (mini-lab #1);
2.	How to listen messages in a Workspace Space using webhook API (mini-lab #2);
3.	How to listen and analyze the message’s annotation created by Watson (mini-lab #3);
4.	How to integrate and train Watson Conversation to understand your messages (mini-lab #4);
5.	How to create an Action Fulfillment app (mini-lab #4);

In all mini-labs, you will use IBM Cloud platform to fork and edit your code (no local IDE or tools are necessary).

All these tools installation are straightforward, take the defaults during installation and you will be all set.

Before you start the lab, you will need to have:
1.	A Workspace account. If you don't have a Workspace account, check here how to create a free Watson Workspace Preview account (check next step, to read more details about Watson Workspace Preview). 
2.	An IBM Cloud (Bluemix) account. As described before, in this lab, you will create and deploy your app using IBM Cloud Platform.  After you create the Workspace account, you will have an IBMid for this user, so you just need to enable IBM Cloud platform for this user, it is a really simple process. Please access the IBM Cloud site and follow the “Create a free account” process.
