<p align="center">
  <a href="https://docs.visionify.ai"><img src="https://raw.githubusercontent.com/visionify/visionai-docs/main/docs/img/visionai-toolkit-by-visionify.png" alt="VisionAI Toolkit by Visionify"></a>
</p>
<p align="center">
    <em>VisionAI Apps for Workplace Safety. Pretrained & Ready to deploy. </em>
</p>
<p align="center">
<!-- <a href="https://github.com/visionify/visionai-docs/actions/workflows/codeql.yml" target="_blank">
    <img src="https://github.com/visionify/visionai-docs/actions/workflows/codeql.yml/badge.svg" alt="CodeQL">
</a> -->

</a>
<a href="https://dev.azure.com/visionify/workplace-safety/_build/latest?definitionId=5&branchName=main" target="_blank">
    <img src="https://dev.azure.com/visionify/workplace-safety/_apis/build/status/visionify.visionai-docs?branchName=main" alt="Test Status">
<a href="https://pypi.org/project/visionai" target="_blank">
    <img src="https://img.shields.io/pypi/v/visionai?color=%2334D058&label=pypi%20package" alt="Package version">
</a>
</p>

---

**Documentation**: <a href="https://docs.visionify.ai" target="_blank">https://docs.visionify.ai</a>

---

## Overview

**VisionAI** offers a collection of pre-trained apps tailored for workplace safety use cases. Developed by **Visionify** as part of the **Workplace Safety** suite, VisionAI is ready for production deployment and accessible through web-based GUI.

### What is VisionAI?
- A Platform to run AI scenarios for CCTV cameras.
- Choose from the list of scenarios [here](scenarios/index.md) for workplace safety & building security.

### How does it work?
- Migrate CCTV feeds to the cloud. Manage cameras, choose AI scenarios and configuring alerting from cloud.

Key features of **VisionAI** include:

- **No hardware installation**: Works with any IP/security cameras using RTSP streams. No need to install any new cameras, sensors, or other hardware.

- **User-friendly**: Easy-to-use web interface for managing cameras and associated apps, catering to both technical and non-technical users.

- **Production-ready**: Apps are trained on diverse, carefully curated datasets from industrial and academic sources, ensuring out-of-the-box functionality.

- **Customizable**: Allows app customization and model fine-tuning with a flexible architecture based on the NVIDIA Triton server. Refer to customization documentation for more details.

- **Integrations**: VisionAI currently integrates with Azure Event hubs, Redis PubSub for reports, alerts and notifications. We have roadmap plans to add support for other message brokers as well.

## VisionAI Apps

VisionAI offers a variety of workplace health and safety scenarios, with continuous development of new use cases. View the complete list of VisionAI Apps [here](scenarios/index.md). If you require a specific scenario not listed here, feel free to [contact us](company/contact.md).

Our primary focus is on workplace health and safety models, but we are expanding our scope to include Quality Inspection, Food Safety/Debris Detection, and more. These additional scenarios are available to customers on a case-by-case basis.


## Quick Start

### Prerequisite

#### Operating System(OS)

Ubuntu 22.04

#### Docker
- Install Docker Engine and Docker tools<br>
        Open a terminal window and run the following commands to install Docker Engine, Docker CLI, Docker Compose, and Docker Buildx plugin:
    ```console
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```


- Grant permissions to Docker<br>
    Run the following command to grant permissions to Docker:
    ```console
    sudo chmod 666 /var/run/docker.sock
    ```
    This will avoid the error that may occur during fetching the server API version.
  
        


#### Disc Space

VisionAI application uses Docker containers to run the apps and the Docker images are large in size. Minimum of 100GB of free space is requied on the host machine.

#### RAM requirement

VisionAI application requires minimum 16GB RAM to run the apps.

#### GPU

VisionAI is a Video-based AI platform that uses GPU for inference. It is recommended to use a GPU with at least 8GB of memory for optimal performance. VisionAI supports NVIDIA GPUs only - Following are a few recommended options:

- NVIDIA GeForce RTX 2060/RTX 2060 Ti
- NVIDIA GeForce RTX 3050/RTX 3050 Ti
- NVIDIA P40
- NVIDIA A100

#### Internet Connectivity

During initial download and setup portion of VisionAI application, we would need good internet connectivity in order to download the required dependencies and Docker containers. Once the setup is complete, VisionAI can be used offline.

---
### License

You can purchase license by contacing us: <sales@visionify.ai>

For any queries related to VisionAI toolkit usage: <support@visionify.ai>

---




## VisionAI Web Application
- VisionAI supports a web-based option for managing cameras, scenarios. 



- You can manage cameras, scenarios, see events etc., directly on the web-app. The web-app is running your own local compute instance. All the data is saved in your machine, and it is persistent as long as VisionAI application is not uninstalled.



## VisionAI Web-app
> VisionAI web-app is a software application that runs in a web browser. It is designed to provide a user-friendly interface and functionality that can be accessed from any device, without the need for installation on the device.

Open http://localhost:3001 in the browser. Use your default username/password as master/master. After this, you will be asked to create a new admin user. Please use a strong password and create an admin user.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/login.png)

### Cameras

Once you are signed in, you will see a blank dashboard page. Let’s add an IP camera to the system. In order to do this, go to “Cameras” tab on the left menu and Click on the + button.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/camera-add.jpg)


A new pop-up window will appear to add cameras. You can enter the camera name, description, and RTSP URI for the camera. The RTSP URI can be obtained from the Camera or NVR documentation. You can ignore the other fields as they are optional. Click on “Submit” button.

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/add-cam.jpg)


Once you have added the camera, it should appear on the Cameras window and should show the initial streaming for the camera. Add any additional cameras in a similar fashion. Once all cameras have been added, the front-screen should look like this:

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/added-cameras.png)

### Scenarios

We can enable Vision AI scenarios for each of these cameras. In order to do this, go to Scenarios tab on the left menu to browse through the available scenarios.

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/scenario.png).

This shows details about the Scenario.You can now click on the “Get this” button again to apply the scenario to cameras.


![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/get-this.jpg).

In the next page, Select the Cameras for which you want to apply this scenario.

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/select-camera.png) 


Next, ensure you check the config box to proceed to the camera thumbnail. On the camera thumbnail page, create a zone directly. After creating the zone, click the "Submit" button to save your changes. Then, proceed by clicking on the "Next" button.

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/zone.png)

In the following step, mark the "Select Events" option, then click the "Next" button. You have successfully applied the scenario to the camera.

![VisionAI Web Application](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/select-event.jpg)


VisionAI will now download these models and begin executing them for the chosen scenarios.






## Redis
- VisionAI supports out-of-box integration with Redis, Prometheus, Grafana and Azure Event Hub. Once the web-app is started, you can view the Grafana dashboard at: http://localhost:3003. The default username and password is `admin`/`admin`.

``` bash
Redis server is at: redis://localhost:6379
```



## Next steps

Congratulations! You have successfully configured and used VisionAI toolkit. You can also browse through our [scenarios](scenarios/index.md) section to understand different use-cases that are supported currently. If you have a need for a scenario, do not hesitate to submit a [request](https://github.com/visionify/visionai/issues) here.
