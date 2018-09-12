---
title: Listen to Events
permalink: /docs/listen-events-lab3/
---

<a name="top"/>

In this section you will see how to listen to events. Here you need to configure your app to listens “message-created” event, let’s see how to do it!

`_1.` On the App page, click on “**Listen to Events**” page.
![listen events](../images/lab2/listen-events.png)

`_2.` Click “**Add an outbound webhook**”.
![Add Outbound Webhook](../images/lab2/add-outbound-event.png)

`_3.` On the “Create new event listener” dialog, enter “**Inspiration Webhook**” (1) as the Webhook Name, enter “**wws-webhook-**`<yourinitials>`**.mybluemix.net/callback**” (2), and select the “**message-created**” event (3)
<p>
<span class="label label-warning">Note</span>
here you are able to select the list of events that you want to listen to.  
</p>
When done, click “**Save**” (4).
![New Event Listener](../images/lab2/new-event-listener.png)

`_4.` Great job! Your webhook is ready. You need to copy the “**Webhook Secret**” (1) and save it somewhere safe. Once you dismiss this confirmation the Webhook Secret will no longer be available. Then, click “**Close**”.
![Webhook Secret](../images/lab2/webhook-secret.png)

<br/>
[Back to Top](#top)  
