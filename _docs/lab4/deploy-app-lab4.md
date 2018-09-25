---
title: Deploying and Running
permalink: /docs/deploy-app-lab4/
---

<a name="top"/>

In this section you will see how to deploy, run and test your new application in IBM Cloud DevOps Environment.

`_1.` Now you just need to deploy your application. Click on “**Deploy**” button.
![deploy app](../images/lab3/deploy-app.png)

`_2.` When ready, you should see the green circle again (1) and the running information (2).
![Open Deployed App](../images/lab3/open-deployed-app.png)

`_3.` Back to the Work Services Developers page, on the “**Inspirational Sentiment**” page (1), open the “**Listen to Events**” page (2). Here you should see the “Inspiration Webhook”, click on the “**Enable**” button (3).
![Enable Event](../images/lab3/enable-event.png)

`_5.` Before we submit the message to test our listener app, let’s add the app in the “Sales Team” space. Open the Workspace browser tab again, and the “**Sales Team**” space should be open (if not, please open it).
![Sales Team Space](../images/lab1/sales-team.png)

`_6.` On “Sales Team” space click on the “**Space Settings**” (you just need to click on the space’s name).
![Space Settings](../images/lab1/space-settings.png)

`_7.` Click “**Apps**”.
![Apps](../images/lab1/apps.png)

`_8.` Scroll down and click on your “**Inspirational Sentiment**” (1).
![Inspirational Listener](../images/lab3/add-inspirational-sentiment.png)

`_9.` Then click on “**Add App**” button (2). If you completed any other mini-lab, you should have some other inspirational application on the page. To avoid conflict you should remove the other apps first, you just need to open the “Apps Added to Space” and remove the other apps created for other mini-labs. When done, **close** the Space settings dialog.
![Adding App](../images/lab3/add-app.png)

`_10.` Now we are ready to test it. On the “Sales Team” space, submit the message “**I am really worried because we delayed the launch of the product, and I am having a lot of problems with my customers**” (1).  Check the **replied message** from the “Inspirational Sentiment” application (2).
![Inspiration Quote](../images/lab3/inspiration-sentiment-msg.png)

*Congratulations! Your app is almost done. Let’s include some motivational message by invoking an external REST service.*

<br/>
[Back to Top](#top)  
