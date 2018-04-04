---
title: Box Example with Authentication
permalink: /docs/box-sample/
---

<a name="top"/>

We built an example of this widget that allows for end user authentication, the widget is a sample and is hosted on a Bluemix server.  You can add this widget to your own ICEC environment to see how it works.  


<iframe width="853" height="505" src="https://www.youtube.com/embed/Ynvr8SZx6Nw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

###### 1. Register the widget

Edit your `custom.js`

- Add the following script as seen in earlier examples

```javascript
	XCC.X.boxDemo = function () {

		function content(container$, widgetData) {
			$.get("https://mp-box.mybluemix.net/box.html", function (data) {
				container$.html(data);
			})
		}

		XCC.W.registerCustomWidget("Box Demo", "boxDemo", content);
	};
```

The name of the widget is `boxDemo` as seen from the line that starts with `XCC.X.boxDemo = function() `.  We need to add that exact name to the appropriate variable.  We can add it to the `XCC.X.customWidgetsDEV` array.
<br/>

Save your `custom.js`, add the widget to an ICEC page and give it a spin.  This widget allows you to login with your Enterprise Box account and is not dependent on the Developer Token

<br/>




