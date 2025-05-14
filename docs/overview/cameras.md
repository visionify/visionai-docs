# Cameras

<div class="quick-start-flow">
    <a href="#supported-cameras" class="flow-item">
        <div class="flow-number">1</div>
        <span class="material-symbols-outlined">videocam</span>
        <h3>Supported Cameras</h3>
        <p>View compatible IP cameras and required specifications</p>
    </a>
    
    <a href="#adding-cameras" class="flow-item">
        <div class="flow-number">2</div>
        <span class="material-symbols-outlined">add_circle</span>
        <h3>Adding Cameras</h3>
        <p>Learn how to add and configure new cameras</p>
    </a>
    
    <a href="#camera-details" class="flow-item">
        <div class="flow-number">3</div>
        <span class="material-symbols-outlined">info</span>
        <h3>Camera Details</h3>
        <p>View and manage camera information</p>
    </a>
    
    <a href="#camera-scenarios" class="flow-item">
        <div class="flow-number">4</div>
        <span class="material-symbols-outlined">view_agenda</span>
        <h3>Scenarios</h3>
        <p>Configure detection scenarios for each camera</p>
    </a>
</div>

<div class="quick-start-flow">    
    <a href="#camera-events" class="flow-item">
        <div class="flow-number">5</div>
        <span class="material-symbols-outlined">event</span>
        <h3>Events</h3>
        <p>View and manage detected events</p>
    </a>
    
    <a href="#livestream" class="flow-item">
        <div class="flow-number">6</div>
        <span class="material-symbols-outlined">live_tv</span>
        <h3>Livestream</h3>
        <p>Access real-time camera feeds</p>
    </a>
    
    <a href="#recording" class="flow-item">
        <div class="flow-number">7</div>
        <span class="material-symbols-outlined">record_voice_over</span>
        <h3>Recording</h3>
        <p>Configure and manage video recordings</p>
    </a>
    
    <a href="#camera-removal" class="flow-item">
        <div class="flow-number">8</div>
        <span class="material-symbols-outlined">delete</span>
        <h3>Remove Camera</h3>
        <p>Learn how to remove cameras from the system</p>
    </a>
</div>

## Supported Cameras {#supported-cameras}

VisionAI supports a wide range of IP cameras including:

- ONVIF-compliant IP cameras
- RTSP stream cameras
- HTTP stream cameras
- USB cameras (when connected to edge device)
- LTE Network Cameras

Please refer to [Supported Cameras Guide](../overview/finding-rtsp-urls.md) for more details on supported cameras. Regardless of the camera type, the following are the minimum requirements:

- Resolution: 1080p (1920x1080)
- Frame rate: 20 fps
- Intranet bandwidth per camera: 2MBPS
- Protocol support: RTSP, ONVIF, or HTTP
- Network connectivity: Ethernet, WiFi or LTE

## Adding Cameras {#adding-cameras}

Connecting your cameras to VisionAI is straightforward. Follow these steps to integrate your existing camera infrastructure:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../../img/visionify-cameras-page.jpg" alt="Cameras Page" />
        <div class="step-content">
            <h4>1. Go to Cameras Page</h4>
            <p>Navigate to the Cameras page from the main dashboard. Here you'll see all your connected cameras and their status.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-add-camera.jpg" alt="Add Camera Button" />
        <div class="step-content">
            <h4>2. Add New Camera</h4>
            <p>Click on the "Add Camera" button to begin the integration process. VisionAI supports IP cameras, CCTV systems, and NVR/DVR setups.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-add-camera-popup.jpg" alt="Camera Configuration" />
        <div class="step-content">
            <h4>3. Provide Camera Details</h4>
            <p>Enter your camera details including name, RTSP URL, and location. Test the connection to ensure proper setup before saving.</p>
        </div>
    </div>
</div>

!!! note
    1. Test your Camera RTSP URL to make sure it is playing. You can test it using [VLC Player](https://www.videolan.org/vlc/index.html).
    2. Initially, you will see a blank screen for camera. The screenshot for the camera will update once the camera is connected.


## Camera Details {#camera-details}

You can click on any camera to view its details.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-cameras-details-page-2.jpg" alt="Cameras Details Page" />
        <div class="step-content">
            <h4>1. Click on a Camera</h4>
            <p>Click on a camera to view its details. The camera details page will show the status of the camera, the AI scenarios applied to the camera, recent events, livestream options, recording options and more.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-details-events.jpg" alt="View Recent Events" />
        <div class="step-content">
            <h4>2. View Recent Events</h4>
            <p>On the camera details page - we show the last 8 events for the camera. We also show the total number of events in the last 24hrs, 7 days, or 30 days. To dig more into events, you can visit the Events page.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-ai-scenarios.jpg" alt="View/Edit AI Scenarios" />
        <div class="step-content">
            <h4>3. View/Edit AI Scenarios</h4>
            <p>View or Edit the AI scenarios configured for the camera. Currently applied scenarios are highlighted on the right.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-details-livestream.jpg" alt="View Livestream" />
        <div class="step-content">
            <h4>4. View Livestream</h4>
            <p>Click on the view live-stream button to view the live-inference view of the camera.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-record-video.jpg" alt="Record Video" />
        <div class="step-content">
            <h4>5. Record Inference Video</h4>
            <p>Record live inference video from the camera. The recorded video is available under the Recordings tab.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-view-streaming-status.jpg" alt="View Camera Status" />
        <div class="step-content">
            <h4>6. View Camera Status</h4>
            <p>Sometimes cameras might not be streaming. This page will show you the status of the camera.</p>
        </div>
    </div>
</div>


## Camera Scenarios {#camera-scenarios}

You can configure scenarios from the camera details page. 

<div class="setup-steps">

    <div class="setup-step">
        <img src="../../img/visionify-camera-ai-scenarios.jpg" alt="View/Edit AI Scenarios" />
        <div class="step-content">
            <h4>1. View/Edit AI Scenarios</h4>
            <p>Camera Details page shows all the AI scenarios avaialble for the camera. You can add a new scenario by clicking the "Add Scenario" button.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../../img/visionify-camera-add-ai-scenario.jpg" alt="View/Edit AI Scenarios" />
        <div class="step-content">
            <h4>2. Add AI Scenario</h4>
            <p>Adding AI scenario is a 3 step process. First, you select the scenario. We support a wide variety of scenarios. Once you click on Get this - it will walk you through setting up zones & detection parameters for the scenario.
        </div>
    </div>


</div>


## Camera Events {#camera-events}

Most recent 8 events for the camera are shown on the camera details page. You can view details about each event by clicking on the event. For filtering/sorting events from all cameras - please visit the Events page.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-cameras-details-page-2.jpg" alt="Cameras Details Page" />
        <div class="step-content">
            <h4>1. Click on a Camera</h4>
            <p>Click on a camera to view its details. The camera details page will show the status of the camera, the AI scenarios applied to the camera, recent events, livestream options, recording options and more.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-camera-details-events.jpg" alt="View Recent Events" />
        <div class="step-content">
            <h4>2. View Recent Events</h4>
            <p>On the camera details page - we show the last 8 events for the camera. We also show the total number of events in the last 24hrs, 7 days, or 30 days. To dig more into events, you can visit the Events page.</p>
        </div>
    </div>
</div>


## Livestream {#livestream}

Livestream allows you to access real-time camera feeds from the camera. We support inference live-stream - that way you can see what we are inferencing in real-time:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-camera-details-livestream.jpg" alt="View Livestream" />
        <div class="step-content">
            <h4>View Livestream</h4>
            <p>Click on the view live-stream button to view the live-inference view of the camera.</p>
        </div>
    </div>
</div>

## Recording {#recording}

Recording feature allows to record 10 minutes of video. Just click on the record video button at the right corner of the camera details page.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-camera-record-video.jpg" alt="Record Video" />
        <div class="step-content">
            <h4>Record Video</h4>
            <p>Click on the record video button at the right corner of the camera details page. The recorded video is available under the Recordings tab.</p>
        </div>
    </div>
</div>


## Camera Removal {#camera-removal}

To remove a camera from the system, you can navigate to Camera Listing Page. From here, you see an option to remove the camera.

!!! note "Data Retention"
    Camera removal doesn't automatically delete historical data. Configure data retention policies separately.

---

## Next Steps

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

<div class="back-to-top">
    <a href="#" class="back-to-top-button">
        <span class="material-symbols-outlined">arrow_upward</span>
    </a>
</div>
---