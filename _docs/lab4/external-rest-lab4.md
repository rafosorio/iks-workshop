---
title: Invoking External Rest Services
permalink: /docs/external-rest-lab4/
---

<a name="top"/>

In this section, you will learn how to improve your code to invoke external Rest Services. Here you will use the public Quote Rest API from TheySaidSo, more information available on <a href="https://theysaidso.com" target="blank">https://theysaidso.com</a>. They have a huge collection of quotes in their database, and you will access the quote of the day for a specific category, based in the user message. Let’s do it!

`_1.` Go back to the IBM Cloud browser tab, and go to the end of the “index.js” file and insert the code of the **getQuote** (1) function:
```
function getQuote(callback){
	var quoteURL = "http://quotes.rest/qod.json?category=inspire";

	// Issue the request
  	request.get(quoteURL, function(error, response, body) {
  		//Check for error
    	if (error) {
      		console.log("GetQuote - Error:", error);
			callback(true,null);
    	}
    	//Check for right status code
    	if (response.statusCode !== 200) {
      		console.log("Getquote : Error :", response.statusCode);
      		callback(true,null);
    	}
    	callback(false,JSON.parse(body));
	});
}
```
Let’s analyze the code! This code is a simple GET Request (2) for the Quote Rest API to get the quote of the day of the category “inspire”. At the end, the body parsed json is returned for the callback function (3). It is really simple!!!
![getQuote function](../images/lab3/getQuote.png)

`_2.` Now, let’s go back to the app.post code. On the “eventType” equals “message-annotation-added”, delete the postMessageToSpace call (see the picture below).
![App Post](../images/lab3/apppost.png)

`_3.` As replacement of the postMessageToSpace, insert the code below:
```
if (docSentiment.type === "negative" && docSentiment.score < -0.60) {
	getQuote(function(error, result) {
    		if (!error) {
         		msgText = msgText+"\r\n"+"Inspiration Quote:"+result.contents.quotes[0].quote;
	 		postMessageToSpace(spaceId, jwt, msgText, function(success) {
	 			return;
	 		});
     		}
	});
} else {
	postMessageToSpace(spaceId, jwt, msgText, function(success) {
        	return;
	});
}
```

`_4.` Here if the sentiment type is negative, you will call the Quote REST API, and you are getting the quote json value and aggregating in the message to be post on the space.  If it is positive you just post the sentiment analysis message. Please ident your code, to look like the code below:
![GetQuote](../images/lab3/getQuoteMethod.png)

`_5.` Great! Now you are ready. Your code is sending the quote received from the Quote REST API, instead of the message received in the Query Parameter. Let’s test it! Click on “**Deploy**” button again (1). If you see a message asking if you want to re-deploy your message, please click **OK**.
![Deploy App Again](../images/lab2/deploy-app-again.png)

`_6.` Now we are ready to test it. On the “Sales Team” space, submit again the message “**I am really worried because we delayed the launch of the product, and I am having a lot of problems with my customers**” (1).  Check the **replied message** from the “Inspirational Sentiment” application (2). You should have a real inspirational quote that came from Quote Rest API
<p>
<span class="label label-warning">Note</span>
Your quote should be different of the picture bellow, since the API provides a different quote per day
</p>
![App in Workspace](../images/lab3/inspirational-listener-rest.png)

`_7.` Let’s try a positive message now, submit the message “**I am really excited with our meeting tonight**” (1).  Check the **replied message** from the “Inspirational Sentiment” application (2). You should have a real inspirational quote that came from Quote Rest API

![App in Workspace](../images/lab3/inspirational-positive-rest.png)

If you want to change the category of the quote, you are welcome. The API provides sport, fun, life, etc. You just need to change the category query parameter of the “queryURL var” of the “getQuote” function, and redeploy your app.

*Congratulations! You learned how to use the annotation framework and leverage Watson Intelligence to create Cognitive Conversation Apps for Workspace using Node.JS and external REST service. Next lab, you will see how to train Watson to understand your conversation and how to create an Action Fulfillment application.*


<br/>
[Back to Top](#top)  
