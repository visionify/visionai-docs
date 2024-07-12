# Hand Wash

> Enhance hygiene compliance with our cutting-edge hand wash detection model, designed to accurately monitor and promote effective hand washing practices.

<figure markdown>
  ![Image title](https://visionai.azureedge.net/docs-images/docs-visionify-version1.0-23March23/hand-wash-detection.png "Hand-wash detection at work-place!"){ width="350" }
  <figcaption>Detection of hand-wash</figcaption>
</figure>

## Overview


Hand hygiene is critical to preventing the spread of infectious diseases. However, ensuring that individuals properly wash their hands at appropriate times can be challenging, particularly in high-traffic areas. 

A hand wash detection model can help address this challenge by automatically detecting and monitoring hand washing behaviors, providing real-time feedback and alerts to individuals who may need to improve their hygiene practices. This can enhance overall hygiene compliance, reduce the spread of germs and diseases, and promote a safer and healthier environment for all.

## Vision AI based monitoring


Vision AI-based hand-wash system is designed to detect and ensure no one misses hand wash. The system uses image processing and machine learning algorithms to analyze the hand region in images or videos and detect hand wash based on specific features.

Overall, the hand wash detection model is an important tool for promoting hygiene and preventing the spread of disease in a range of environments, from hospitals and schools to offices and public spaces. By detecting whether people have used hand wash, the system can help encourage good hygiene practices and reduce the risk of infection.

## Model Details

### Dataset

The dataset consists of images and videos collected from various sources. 

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
            <td>7326</td>
            <td>v5</td>
            <td>Straight</td>
            <td>79%</td>
            <td>84%</td>
            <td>76%</td>
        </tr>
        </tbody>
    </table>
</div>
 

### Scenario details

The business logic for this scenario is as follows: 

- We use existing camera feeds from the premises to monitor and detect the instances of missing hand wash.

- VisionAI system is able to run on edge devices. It uses camera feeds for processing. 

- An alarming system is in place as part of an hand wash detection solution. 

=== "Test now with online Web-Cam"
     To test this model & scenario, you can use the following steps:

     - Install the visionai package from PyPI
     
        ```console
        $ pip install visionai
        
        ```
     
     - Test the scenario from your local web-cam
     

        ```console
        $ visionai scenario test hand-wash-detection

        Downloading models for scenario: hand-wash-detection
        Model: hand-wash-detection: https://workplaceos.blob.core.windows.net/models/yolov5s-hand-wash-detection/yolov5s-hand-wash-detection-0.0.4.zip
        

        Starting scenario: hand-wash-detection..

        ```

    - You should be able to see the information generated on your console window with the detections of missing hand-wash event within the camera field of view.

=== "With RTSP Camera - Pipelines"
     [TODO]
 
=== "With Azure Setup"
     VisionAI app is available at a Azure Market place, one can download and use it by following steps mentioned [here](../overview/azure-managed-app.md)





## Features

- Hand region detection: The system should be able to accurately detect the hand region in an image or video, which can be done using skin color segmentation or hand detection algorithms.

- Real-time performance: The system should be able to operate in real-time, analyzing images or videos quickly and accurately to detect whether a person has missed hand wash or not.

- Robustness: The system should be able to perform well under varying conditions, such as different lighting conditions, hand positions, or hand appearances due to age, skin color, or skin conditions.



## Training with custom data

The scenario is provided as part of our GPL-v3 package for VisionAI. If you wish to train this with custom datasets, please contact us and we can provide you with the training code. You can do custom training with your own datasets for free, as long as it complies with GPLv3 license (you give back the code to the community). If you are interested in a custom license, please [contact us](../company/contact.md).


## Contact Us

- For technical issues, you can open a Github issue [here](https://github.com/visionify/visionai).
- For business inquiries, you can contact us through [our website](https://visionify.ai/contact-us/).