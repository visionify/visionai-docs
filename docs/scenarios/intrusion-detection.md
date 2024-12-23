# **Intrusion Detection**

> An advanced physical intrusion detection system powered with Computer Vision and AI.

## Overview

Intrusion detection is a system to monitor suspicious activities indicating an intrusion. Intrusion detection is important to detect and prevent unauthorized access to the facility, production area and other restricted areas within a building or manufacturing setup. An intrusion detection system helps prevent theft and vandalism, protecting the facility from malicious activities that can disrupt production, damage equipment, and compromise sensitive information. In addition, an effective intrusion detection system helps to ensure compliance with regulations and standards related to security and safety in the industry.

The current physical intrusion detection systems have a limited detection range and a number of other problems. 
Existing solutions:
- Do not provide comprehensive coverage across a large sprawling area.
- Can be affected by environmental factors in the outdoors and raise false alarms.
- Are vulnerable to tampering.
- Do not offer much flexibility in terms of getting integrated well with other security measures like video surveillance not cost-effective. 


## Vision AI based monitoring

Expand your security capabilities with VisionAI, a modern AI and ML solution to detect intrusions and protect your premises against all potential physical intrusion threats. Our model can accurately identify suspicious behaviors that may indicate a physical intrusion and instantly alerts the security personnel, allowing them to take appropriate and timely action against it to avoid associated dangers.
 
Our smart solution seamlessly integrates with the existing camera infrastructure and analyzes the real-time video feed. It can help in different ways, offers a comprehensive solution to detect all forms of physical intrusion, and ensures compliance with all security and safety regulations.


## Model Details

### Dataset

The dataset consists of high-quality images and videos collected from diverse sources and is designed to reflect real-world scenarios. The dataset is representative of all types of environments that should be taken care of while detecting physical intrusion.  
 
- Different locations/environments – The dataset includes images/videos from a variety of indoor and outdoor environments, locations, weather conditions and building layouts.
 
- Diversity of intruders – The dataset considers images and videos of intruders from different backgrounds trying to intrude in various poses such as standing, walking, running, crawling etc. 

- Balanced - The dataset is evenly distributed and balanced between intrusion and non-intrusion examples to prevent bias towards one class of data.

- Different angles and perspectives - The dataset includes images and videos captured from different angles and lighting conditions to ensure the model can detect intrusion in various real-world scenarios.

### Model card

 <div class="table">
    <table class="fl-table">
        <thead>
        <tr><th>Dataset size</th>
            <th>Version</th>
            <th>Camera support</th>
            <th>Precision</th>
            <th>Recall</th>
            <th> mAP  </th>  
        </thead>
        <tbody>
        <tr>
            <td>2326</td>
            <td>v5</td>
            <td>Ceiling</td>
            <td>65% </td>
            <td>71% </td>
            <td>71% </td>
        </tr>
        </tbody>
    </table>
</div>

### Scenario details

Our VisionAI solution for intrusion detection can be deployed to a physical perimeter integrated with the existing camera infrastructure and works in different scenarios to detect physical intrusion. The model is equipped to detect the following;

- Any person with suspicious behavior
- Anybody trying to intrude in a building or perimeter
- Anybody trying to trespass a restricted area without permission
- Anybody loitering around a restricted area for an extended period 

=== "Test now with online Web-Cam"
     To test this model & scenario, you can use the following steps:

     - Install the visionai package from PyPI
     
        ```console
        $ pip install visionai
        
        ```
     
     - Test the scenario from your local web-cam
     

        ```console
        $ visionai scenario test intrusion-detection

        Downloading models for scenario: intrusion-detection
        Model: intrusion-detection: https://workplaceos.blob.core.windows.net/models/yolov5s-intrusion-detection/yolov5s-intrusion-detection-0.0.1.zip
        

        Starting scenario: intrusion-detection..

        ```
    - You should be able to see the events generated on your console window with detection of intrusions within the camera field of view.

=== "With RTSP Camera - Pipelines"
     [TODO]
 
=== "With Azure Setup"
     VisionAI app is available at a Azure Market place, one can download and use it by following steps mentioned [here](../reference/azure-managed-app.md)



## Features

- Real-time monitoring: The model can be deployed to a physical perimeter integrated with the existing camera infrastructure and works in real-time to detect physical intrusion.

- Comprehensive coverage: The model can detect intrusion in a variety of environments, locations, weather conditions and building layouts.

- Customizable: The model can be customized to detect intrusion in a specific area or location based on user requirements.

-Integration: The model can be integrated with other security measures like video surveillance to provide a comprehensive solution to detect all forms of physical intrusion.

- Alert system: The solution has an alert system to notify the security personnel in case of an intrusion.


## Training with custom data

The scenario is provided as part of our GPL-v3 package for VisionAI. If you wish to train this with custom datasets, please contact us and we can provide you with the training code. You can do custom training with your own datasets for free, as long as it complies with GPLv3 license (you give back the code to the community). If you are interested in a custom license, please [contact us](../company/contact.md).


## Learn More

- [Quick Start](../overview/quick-start.md)
- [Camera Placement Guide](../overview/camera-placement-guide.md)
- [Supported Scenarios](../overview/scenarios.md)
- [Camera Management](../overview/cameras.md)
- [FAQs](../overview/faqs.md)


---

## Contact Information

<div class="grid-cards">
    <div class="grid-card">
        <h3><span class="material-symbols-outlined">contact_phone</span> Sales Inquiries</h3>
        <p>Get in touch with our sales team for demos and pricing information.</p>
        <ul class="contact-list">
            <li>Email: <a href="mailto:sales@visionify.ai">sales@visionify.ai</a></li>
            <li>Phone: +1 720-449-1124</li>
        </ul>
    </div>
    <div class="grid-card">
        <h3><span class="material-symbols-outlined">support_agent</span> Technical Support</h3>
        <p>Need help? Visit our support portal or contact our technical team.</p>
        <ul class="contact-list">
            <li><a href="https://support.visionify.ai">https://support.visionify.ai</a></li>
            <li><a href="mailto:support@visionify.ai">support@visionify.ai</a></li>
        </ul>
    </div>
    <div class="grid-card">
        <h3><span class="material-symbols-outlined">calendar_month</span> Schedule a Demo</h3>
        <p>See VisionAI in action with a personalized demo from our team.</p>
        <div class="demo-button">
            <a href="https://cal.com/visionify/30min" class="cta-button">
                <span class="material-symbols-outlined">event</span>
                Book Your Demo
            </a>
        </div>
    </div>
</div>

---