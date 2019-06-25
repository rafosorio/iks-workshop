---
title: Managed Kubernetes
permalink: /docs/managedk8/
---

<h2>What are microservices?</h2>
<p>Microservices are small applications that perform a single service and communicate with each other via application programming interfaces (APIs).</p>

<p>
A developer can assemble microservices into a larger complete application, but update, improve, and maintain microservices individually. This independence allows developers to add or improve functionality (or troubleshoot and repair application issues) faster than they can in a "monolithic" application architecture, in which the application is developed, updated, or repaired as a single unit. The independence of the individual microservices allows changes to executed or rolled back without impairing the application's function as a whole.
</p>

<img src="//1.cms.s81c.com/sites/default/files/2019-06-03/microservices-misconceptions_0.png" alt="Microservices vs. monolith">

<p><em>Source: IBM Garage - "<a href="https://www.ibm.com/cloud/garage/architectures/microservices">Microservices for fast time to market and improved app quality</a>"</em></p>

<p>The term "microservices" also refers to the architectural approach of building applications from microservices vs. the monolithic approach.</p>

<p>For another look into microservices, watch the video “What are Microservices?”:</p>

<iframe width="800" height="450" src="https://www.youtube.com/embed/CdBtNQZH8a4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2>What are the pros and cons of microservices?</h2>

<p>
Before you embrace the microservices architectural model, weigh the pros and cons.
</p>

<p><b>Pros</b></p>
<ul>
<li>
<b>Ensures the right tool for the job</b>: Reliance on microservices architecture allows a developer to compose a specific toolset that solves a business need rather than choosing a one-size-fits-all approach that provides an approximate fit or only partially answers the need.
</li>
<li>
<b>Simplifies deployment</b>: With microservices, you can create, update, and deploy a single service independently of the rest of the system. You can isolate deployment, which does not impede the functionality of the application. If the service update fails for some reason, automation can roll back the update, isolating the impact.
</li>
<li>
<b>Enables continuous integration/continuous delivery (CI/CD)</b>: Each microservice is independently deployable. That means all types of changes—improvements, bug fixes, added features, added functionalities—can be quickly and safely rolled into production at any time. Development teams can construct automated CI/CD pipelines to make this process even easier.
</li>
<li>
<b>Future-proofs your organization</b>:Monolithic legacy systems have become a burden on many organizations. They are so entwined into the operation of a company that getting rid of them seems impossible. Shifting toward a microservices architecture prevents that sort of entrenchment from taking place. Since systems are composable and decentralized, you can constantly replace, improve, or even remove microservices without creating significant impact or risk.
</li>
</ul>


<p><b>Cons</b></p>
<ul>
<li>
<b>May require organizational change</b>: Small teams independently create, develop, and maintain each microservice. Teams must act independently and take ownership of the microservice over its entire lifecycle. It may take time to transition teams to this new way of operating and thinking.
</li>
<li>
<b>Makes management complex</b>: Microservices mean to more parts, more pieces, and more teams that require oversight and management. That also means more opportunities for testing, security, and communications to break down or fail.
</li>
<li>
<b>Can create more problems than it solves</b>: Your monolithic applications may not easily break down into microservices. You might not understand the full relationship between an application's various parts. When separated into multiple services, this may create a distributed and decentralized behemoth that is far more difficult to manage than the monolithic application had been.
</li>
<li>
<b>Complicates testing</b>: In a distributed and decentralized architecture, testing is more difficult. Teams must ensure that changes made to a microservice don't negatively impact other services or the application as a whole. You might require automation so that if upgrades or improvements fail, the service automatically falls back to the previous version of the service.
</li>
</ul>

<h2>When to use microservices</h2>
<p>
You should use microservices when you need fluidity, flexibility, and scalability for your cloud applications. The goal should be to adapt applications to industry, user, and market demands by delivering a constantly improving service. Microservices work best in organizations that use agile and DevOps practices and have teams skilled in application architecture.
</p>
<p>For more info on DevOps, check out "<a href="https://www.ibm.com/cloud/learn/devops-a-complete-guide">DevOps: A Complete Guide</a>."</p>

<h2>When not to use microservices</h2>
<p>
Microservices may not be the best option for your organization if you don’t operate in a highly competitive field that must adapt quickly to user or market demands. Many organizations might find microservices too disruptive and complex to manage. In those cases, you could see little to no return on investment for the effort. If your company’s development teams do not already use agile or DevOps practices, using the microservices architectural model will require a cultural change.
</p>
