---
title: Kubernetes
permalink: /docs/kubernetes/
---
<h2>What is Kubernetes?</h2>

Kubernetes is an open source, container orchestration tool that is critical to the managing of cloud applications.

Businesses turn to the cloud for the benefits of agility, flexibility, portability, and cost control. As the reliance on multicloud environments grows, the need to better manage those environments and the applications that reside in them also grows. Containers helped address those challenges by packaging together code and all its dependencies as efficient and lightweight packages that can run in any environment. Containers simplified cloud computing, but they also complicated environment management. Kubernetes resolves much of the complexity of managing cloud applications by automating the deployment, scaling, and management of containerized applications.

In the following video, Sai Vennam gives an overview of Kubernetes and its components.

<iframe width="800" height="450" src="https://www.youtube.com/embed/aSrqRSk43lY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2>Docker and Kubernetes</h2>

There is a common misconception that Docker and Kubernetes compete with each other and that you must use one rather than the other. This is untrue; the two projects do different things, and they can complement each other.

Docker was one of the first popular mainstream container software tools to hit the market. Created by Docker, Inc. in 2013, the program manages the containerization and running of container packages.

Kubernetes, created by Google in 2014, is a container orchestration system that manages the creation, operation, and termination of many containers. It is now operated by the Cloud Native Computing Foundation (CNCF), which is a vendor-agnostic industry group under the auspices of the Linux Foundation.

Docker turns program source code into containers and then executes them, whereas Kubernetes manages the configuration, deployment, and monitoring of many containers at once (including both Docker containers and others).

This "Kubernetes Explained" video offers a high-level overview of Kubernetes’ architecture.

The service that Kubernetes does compete directly with is Docker Swarm. This is Docker Inc.’s own container orchestration tool, and it is built into Docker as a native service.

While Docker Swarm is naturally focused on managing Docker containers, Kubernetes is focused on openness, supporting a variety of technologies and third-party products. As such, it supports not only the Docker containers in its original implementation but also a range of other container frameworks, such as Kata Containers. In 2018, it engineered this support via its Container Runtime Interface (CRI), which acts as an interface between Kubernetes and a variety of container frameworks.

For more information about Docker and Kubernetes, read the <a href="https://www.ibm.com/blogs/cloud-computing/2018/07/30/kubernetes-docker-vs/" target="_blank">Kubernetes vs. Docker blog post</a> and watch the "Kubernetes vs. Docker: It's Not an Either/Or Question" video:

<iframe width="800" height="450" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
