#  Visionai Web Application Instructions

The VisionAI  web application is the main interface through which users can interact with the system. 

It supports the following functionality:
1. Onboard any IP cameras onto the VisionAI System.
2. Pick and choose AI scenarios you want to run on these IP cameras.
3. Configure events, notifications (email/text) and video recording settings.
4. Configure video clips recording for different events.

The web-application is available at http://localhost. 





## Basic Usage

1. Please open localhost in the browser.
2. Use your default username/password as master/master.
3. After this, you will be asked to create a new admin user. Please use a strong password and create an admin user.

![Sign-In page](https://visionai.azureedge.net/docs-images/Web-app_Pictures/login.png)






## Cameras

Once you are signed in, you will see a blank dashboard page. 
Let’s add an IP camera to the system. In order to do this,
1. Go to the “Cameras” tab on the left menu bar.
2. Then Click on the  + button.


![Add-Camera](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/camera-add.jpg
)

A new pop-up window will appear to add cameras. You can enter the camera name, description, and RTSP URI for the camera. The RTSP URI can be obtained from the Camera or NVR documentation. You can ignore the other fields as they are optional. Click on “Add” button.

![Notification-Settings-for-Camera](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/add-camera.jpg
)

Once you have added the camera, it should appear on the Cameras window and should show the initial streaming for the camera. Add any additional cameras in a similar fashion. Once all cameras have been added, the front-screen should look like this:


![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/added-cameras.png)







## Scenarios

Once you are signed in, you will see a blank dashboard page. 
You may select any scenario from the list of active scenarios.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/scenario.png
)

This shows details about the Scenario.You can now click on the “Get this” button again to apply the scenario to cameras.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/get-this.jpg)


In the next page, Select the Cameras for which you want to apply this scenario.
Click “Save and Next”

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/select-camera.png)

 Next, ensure you check the config box to proceed to the camera thumbnail. On the camera thumbnail page, create a zone directly. After creating the zone, click the "Submit" button to save your changes. Then, proceed by clicking on the "Next" button.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/zone.png)

In the following step, mark the "Select Events" option, then click the "Next" button. You have successfully applied the scenario to the camera.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/select-event.jpg)










## Events

This page will show the list of events that have occurred in the selected time frame.

![](https://visionai.azureedge.net/docs-images/Web-app_Pictures/events-page.png)






## Graphs

This page summarizes the events that occurred in the form of graphical representation.

![](https://visionai.azureedge.net/docs-images/Web-app_Pictures/dashboard1.png)

![](https://visionai.azureedge.net/docs-images/Web-app_Pictures/dashboard2.png)

![](https://visionai.azureedge.net/docs-images/Web-app_Pictures/dashboard3.png)




## Settings

1. User

   To enter the user settings, first locate and click on the user profile button at the top right corner of the screen. In the dropdown menu that appears, select 'Settings.' This action will open the user management page, allowing you to customize your preferences. On the user management  page, click on the 'Add User' button to create a new user.



![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/user-settings.jpg)

This action will open the user management page. Click on the '+ Add User' button to create a new user.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/add-user.jpg)

After clicking on the '+ Add User' button, a user fields box will open. Fill in the required fields and click on the 'Submit' button.

![](https://docsvisionify.blob.core.windows.net/docs-images/Web-app_Pictures/adduser-submit.jpg)


An invitation email will be sent to the provided email address. The user should then create a password by accepting the invitation through the email.