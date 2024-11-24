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

Congratulations! You have successfully configured and used VisionAI toolkit. You can also browse through our [scenarios](scenarios/index.md) section to understand different use-cases that are supported currently. If you have a need for a scenario, do not hesitate to submit a [request](https://github.com/visionify/visionai-docs/issues) here.
