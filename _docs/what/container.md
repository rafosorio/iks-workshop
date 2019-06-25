---
title: Container
permalink: /docs/container/
---

Now that you understood why you should invest in modernize your applications using microservices and cloud native approach. It is time to understand the technology to deliver it. Let's start with Containers.

<h2>What is containerization?</h2>

Containerization has become a major trend in software development as an alternative or companion to virtualization. It involves encapsulating or packaging up software code and all its dependencies so that it can run uniformly and consistently on any infrastructure. The technology is quickly maturing, resulting in measurable benefits for developers and operations teams as well as overall software infrastructure.

Containerization allows developers to create and deploy applications faster and more securely. With traditional methods, code is developed in a specific computing environment which, when transferred to a new location, often results in bugs and errors. For example, when a developer transfers code from a desktop computer to a virtual machine (VM) or from a Linux to a Windows operating system. Containerization eliminates this problem by bundling the application code together with the related configuration files, libraries, and dependencies required for it to run. This single package of software or “container” is abstracted away from the host operating system, and hence, it stands alone and becomes portable—able to run across any platform or cloud, free of issues.

The concept of containerization and process isolation is decades old, but the emergence of the open source Docker Engine in 2013, an industry standard for containers with simple developer tools and a universal packaging approach, accelerated the adoption of this technology. Research firm Gartner projects that more than 50% of companies will use container technology by 2020. And results from a late 2017 survey conducted by IBM suggest that adoption is happening even faster, revealing that 59% of adopters improved application quality and reduced defects as a result.

Containers are often referred to as “lightweight,” meaning they share the machine’s operating system kernel and do not require the overhead of associating an operating system within each application. Containers are inherently smaller in capacity than a VM and require less start-up time, allowing far more containers to run on the same compute capacity as a single VM. This drives higher server efficiencies and, in turn, reduces server and licensing costs.

Put simply, containerization allows applications to be “written once and run anywhere.” This portability is important in terms of the development process and vendor compatibility. It also offers other notable benefits, like fault isolation, ease of management and security, to name a few. Click here to learn more about the benefits of containerization.

For more of an overview, see this video—"Containerizaton Explained."

<br/>

<iframe width="800" height="450" src="https://www.youtube.com/embed/0qotVMX-J5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p> </p>

<h2>Container orchestration</h2>
Containers are small and easy to reproduce consistently, and companies tend to use a lot of them. Organizations can run many identical container images alongside each other to scale an application resiliently.

This requires a new way of managing software. Traditionally, companies would manage a smaller number of physical or virtual servers and diligently look after each one. However, containers can be created and deleted very quickly.

Container orchestration is the process of managing each container throughout its lifecycle and encompasses:

<ul>
<li>Provisioning</li>
<li>Redundancy</li>
<li>Health monitoring</li>
<li>Resource allocation</li>
<li>Scaling and load balancing</li>
<li>Moving between physical hosts</li>
</ul>

Kubernetes is the most popular container orchestration system by far, but there are others, including Apache Mesos, Nomad, and Docker Swarm.

For more information, check out our video: "Container Orchestration Explained":
