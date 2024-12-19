# **Equipment monitoring**

## **Rust and Corrosion Detection** 

> Ensure the safety of employees by inspecting machine equipment for the presence of rust/corrosion. 

![Rust and corrosion detection](https://visionai.azureedge.net/docs-images/docs-visionify-version1.0-23March23/rustcorrosion_collage.jpg "Detection of Rust/Corrosion!"){width="400"}

## Overview 

Visual inspection of industrial environments is a common requirement across heavy industries, such as transportation, construction, and shipbuilding, and typically requires qualified experts to perform the inspection. Inspection locations can often be remote or in adverse environments that put humans at risk, such as bridges, skyscrapers, and offshore oil rigs. 

Many of these industries deal with huge metal surfaces and harsh environments. A common problem across these industries is metal corrosion and rust. Although corrosion and rust are used interchangeably across different industries (we also use the terms interchangeably in this post), these two phenomena are different. 

Visionify’s AI Vision Model for Rust/Corrosion Detection is designed to detect instances of rust/corrosion if any in machine parts, manufacturing equipments etc. 

## Events

VisionAI model's generated events would be:

- Rust or corrosion event detected


## Model Details 
### Dataset

The dataset for this scenario is based on rust/corrosion detection algorithms. The dataset is made up of images and videos gathered from various sources where instances of rust were found. The dataset has been catalogued to ensure real-world situations. It has an even distribution of:

- Variations of pieces of equipment
- Different(indoor/outdoor) environments
- Different rust severity
- Variations in camera orientations
- Using security camera feeds

Total number of images used was 5572.

### Model

The model is based off of the YOLOv5 algorithm. The model is trained on a custom dataset of images and videos. The model is trained based on the above dataset compiled by our team.

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
            <td>Straight</td>
            <td>79%</td>
            <td>49%</td>
            <td>56%</td>
        </tr>
        </tbody>
    </table>
</div>


The model is adaptable enough to run on any edge computing device.

### Scenario details

The business logic for this scenario is as follows: 

- We use existing camera feeds from the premises to monitor the equipments in the workplace. 
- VisionAI system is able to run on edge devices. It uses camera feeds for processing. 
- We detect instances of rust/corrosion if any in machine parts, manufacturing equipments.

=== "Test now with online Web-Cam"
     To test this model & scenario, you can use the following steps:

     - Install the visionai package from PyPI
     
        ```console
        $ pip install visionai
        
        ```
     
     - Test the scenario from your local web-cam
     

        ```console
        $ visionai scenario test rust-detection

        Downloading models for scenario: rust-detection
        Model: rust-detection: https://workplaceos.blob.core.windows.net/models/yolov5s-people/yolov5s-people-0.0.4.zip
        

        Starting scenario: rust-detection..

        ```
    - You should be able to see the events generated on your console window with the detections of smoking/vaping event within the camera field of view.

=== "With RTSP Camera - Pipelines"
     [TODO]
 
=== "With Azure Setup"
     VisionAI app is available at a Azure Market place, one can download and use it by following steps mentioned [here](../reference/azure-managed-app.md)




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
