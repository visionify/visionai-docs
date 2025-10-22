# Quick Start Guide

VisionAI is an enterprise-grade computer vision platform that transforms your existing camera infrastructure into an intelligent workplace safety system. This guide will walk you through the setup process and help you get started with your first safety monitoring deployment.

<div class="quick-start-flow">
    <a href="#step-1-account-setup" class="flow-item">
        <span class="flow-number">1</span>
        <span class="material-symbols-outlined">login</span>
        <h3>Sign In</h3>
        <p>Create your enterprise account and set up team access</p>
    </a>
    <a href="#step-2-camera-integration" class="flow-item">
        <span class="flow-number">2</span>
        <span class="material-symbols-outlined">videocam</span>
        <h3>Cameras</h3>
        <p>Connect your existing camera infrastructure</p>
    </a>
    <a href="#step-3-scenario-configuration" class="flow-item">
        <span class="flow-number">3</span>
        <span class="material-symbols-outlined">memory</span>
        <h3>AI Scenarios</h3>
        <p>Select and customize safety monitoring scenarios</p>
    </a>
    <a href="#step-4-events-dashboard" class="flow-item">
        <span class="flow-number">4</span>  
        <span class="material-symbols-outlined">view_agenda</span>
        <h3>Events</h3>
        <p>Select and customize safety monitoring scenarios</p>
    </a>
     <a href="#step-5-task-Management" class="flow-item">
        <span class="flow-number">5</span>
        <span class="material-symbols-outlined">list_alt_check</span>
        <h3>Tasks</h3>
        <p>Detailing the tasks assigned, their progress, and recommendations for improvement</p>
    </a>
</div>

<div class="quick-start-flow">
    <a href="#step-6-view-access" class="flow-item">
        <span class="flow-number">6</span>
        <span class="material-symbols-outlined">speed_camera</span>
        <h3>Views</h3>
        <p>It allows administrators to create custom views that provide a structured way to monitor surveillance data efficiently</p>
    </a>
    <a href="#step-7-alert-configuration" class="flow-item">
        <span class="flow-number">7</span>
        <span class="material-symbols-outlined">notifications_active</span>
        <h3>Alerts</h3>
        <p>Set up notifications and response workflows</p>
    </a>
    <a href="#step-8-dashboard-access" class="flow-item">
        <span class="flow-number">8</span>
        <span class="material-symbols-outlined">dashboard</span>
        <h3>Dashboard</h3>
        <p>Monitor safety metrics in real-time</p>
    </a>
     <a href="#step-9-sites-comparison" class="flow-item">
        <span class="flow-number">9</span>
        <span class="material-symbols-outlined">query_stats</span>
        <h3>Sites Comparison</h3>
        <p>This report provides a summary of site comparison insights</p>
    </a>

</div>

---

## Prerequisites
- Active enterprise subscription or trial account. [Contact Sales](https://visionify.ai/contact).
- Access to your organization's CCTV/camera infrastructure.
- RTSP URLs for your cameras. You can test RTSP URLs using [VLC Player](https://www.videolan.org/vlc/).

---

## Step 1: Sign In {#step-1-account-setup}

Getting started with VisionAI is simple. Here's how to activate your enterprise account:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-activate-account.png" alt="Account Activation" />
        <div class="step-content">
            <h4>1. Activate Your Account</h4>
            <p>Once you've signed up for enterprise account, you will receive an activation email from Visionify team.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/password-setup.png" alt="Password Setup" />
        <div class="step-content">
            <h4>2. Password Setup</h4>
            <p>Accept the invite from email & activate the account. Set your own password here.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-sign-in.png" alt="Sign In" />
        <div class="step-content">
            <h4>3. Sign In</h4>
            <p>After successfully setting up your password, you should be able to log in to the Visionify dashboard using your username and password.</p>
        </div>
    </div>
</div>

---

## Step 2: Camera Onboarding {#step-2-camera-integration}

Connecting your cameras to VisionAI is straightforward. Follow these steps to integrate your existing camera infrastructure:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify_empty_cameras-page.png" alt="Cameras Empty Page" />
        <div class="step-content">
            <h4>1. Go to Cameras Page</h4>
            <p>Navigate to the Cameras page from the main dashboard. Click on the <b>"Add Camera"</b> button to begin the integration process. VisionAI supports IP cameras, CCTV systems, and NVR/DVR setups.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-add-camera-popup.jpg" alt="Add Camera Button" />
        <div class="step-content">
            <h4>2. Add New Camera Details</h4>
            <p>Enter your camera details including name, RTSP URL, and location. Test the connection to ensure proper setup before saving.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-cameras-page.png" alt="Camera Configuration" />
        <div class="step-content">
            <h4>3. Cameras List</h4>
            <p>Here you'll see all your connected cameras along with their current status. Use the available filters on the Cameras page to view cameras by area.</p>
        </div>
    </div>
</div>

!!! note
    1. Test your Camera RTSP URL to make sure it is playing. You can test it using [VLC Player](https://www.videolan.org/vlc/index.html).
    2. Initially, you will see a blank screen for camera. The screenshot for the camera will update once the camera is connected.

---

## Step 3: Configuring AI Scenarios  {#step-3-scenario-configuration}
<div class="step-with-media equal-split">
  <div class="media-container">
    <img src="../../img/scenario_config.gif" alt="Scenario Configuration" />
  </div>
  <div class="steps-container">
    <div class="setup-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Initiate Scenario Setup</h4>
        <p>Click "Add New Scenario" on camera details page to begin configuration.</p>
      </div>
    </div>
    <div class="setup-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Select a Scenario</h4>
        <p>Choose from available safety scenarios by clicking "Get This" button.</p>
      </div>
    </div>
    <div class="setup-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>Set Up Monitoring Zones</h4>
        <p>Draw and adjust monitoring zones directly on camera feed.</p>
      </div>
    </div>
    <div class="setup-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>Configure Pause Times</h4>
        <p>Set break periods to pause detection during scheduled downtimes.</p>
      </div>
    </div>
    <div class="setup-step">
      <div class="step-number">5</div>
      <div class="step-content">
        <h4>Fine-tune Settings</h4>
        <p>Adjust confidence thresholds and duration, then click "Apply".</p>
      </div>
    </div>
  </div>
</div>

!!! tip
    Start with the default parameters and adjust them later based on the specific needs of your environment. These settings can always be modified at any time.

---

## Step 4: Events {#step-4-events-dashboard}
Setting up safety monitoring scenarios in VisionAI is straightforward. Follow these steps to configure your first scenario:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-dashboard-events.jpg" alt="Events Listing" />
        <div class="step-content">
            <h4>1. Events Listing</h4>
            <p>Navigate to the Events page to review specific safety incidents. Filter events by time range, scenarios, event types, or specific cameras & Area Wise ,Shift Wise. Each event includes a 12-second video clip for detailed investigation and analysis.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-event-details.jpg" alt="Events Page" />
        <div class="step-content">
            <h4>2. Event Details</h4>
            <p>On the Event Details page, you can view a 12-second video clip of the event. You can click thumbs up/down to vote on the event. Additionally, you can <b>leave a review, mark the event as accurate or inaccurate</b>, and view the severity level of the event—categorized as <b>Low, Moderate, or High</b>—to better understand its criticality.</p>
        </div>
    </div>
</div>
!!! tip
    Start with the default parameters and adjust them later based on the specific needs of your environment. These settings can always be modified at any time.
---

## Step 5: Tasks {#step-5-task-Management}
The VisionAI Task Management is essential to ensure work is organized, responsibilities are clear, and progress is tracked effectively within the application:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-task.jpg" alt="Task" />
        <div class="step-content">
            <h4>Task Overview</h4>
            <p>Access the Dashboard from the left navigation menu to view key Task.Task Management helps users create, assign, track, and manage tasks within the application. It ensures that all work items are organized, progress is monitored, and responsibilities are clear.</p>
        </div>
    </div>
</div>
!!! tip
    Use clear titles and due dates when creating tasks to ensure easy tracking and accountability. Regularly update task statuses to keep your team informed and aligned.
---

## Step 6: Views {#step-6-view-access}

The purpose of the Views feature is to provide customized dashboards for specific cameras, areas, or events, enabling quick access to incident insights and performance metrics for faster decision-making.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-views.jpg" alt="Views" />
        <div class="step-content">
            <h4>Views Overview</h4>
            <p>Access the Dashboard from the left navigation menu to view key Views.The purpose of the Views page is to allow users to create and monitor customized event dashboards for specific cameras, areas, or events, enabling quick access to relevant incident data and performance metrics.</p>
        </div>
    </div>
</div>
!!! tip
    Create separate views for high-priority areas or event types to quickly monitor critical incidents without filtering through all data—this saves time and improves response efficiency.
---

## Step 7: Alerts {#step-7-alert-configuration}
Configure comprehensive notification settings through your dedicated observability platform at `customername.visionify.ai/observability`. VisionAI offers multiple alert types to ensure your team stays informed of safety events:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-alerts-daily-digests.jpg" alt="Daily Digest Configuration" />
        <div class="step-content">
            <h4>1. Daily Digest Emails</h4>
            <p>Set up automated daily summaries of safety events, incidents, and compliance metrics. Perfect for management oversight and trend analysis.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-alerts-periodic-reports.jpg" alt="Periodic Reports" />
        <div class="step-content">
            <h4>2. Periodic Reports</h4>
            <p>Schedule detailed reports with CSV attachments, delivered via email or Microsoft Teams. Customize reports by area, camera, or specific event types for targeted insights.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-alerts-text-alerts.jpg" alt="Text Message Alerts" />
        <div class="step-content">
            <h4>3. Text Message Alerts</h4>
            <p>Enable real-time SMS notifications for immediate awareness of critical safety events. Ideal for urgent situations requiring immediate attention.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-alerts-whatsapp-alerts.jpg" alt="Whatsapp Alerts" />
        <div class="step-content">
            <h4>4. Whatsapp Message Alerts</h4>
            <p>Enable real-time Whatsapp notifications for immediate awareness of critical safety events. Ideal for urgent situations requiring immediate attention.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-Teams-alerts.jpg" alt="Teams Alerts" />
        <div class="step-content">
            <h4>5. Teams Alerts</h4>
            <p>Enable real-time Teams notifications for immediate awareness of critical safety events. Ideal for urgent situations requiring immediate attention.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-alerts-speaker-notifications.jpg" alt="Speaker Alerts" />
        <div class="step-content">
            <h4>6. Speaker Based Alerts</h4>
            <p>Configure automated audio announcements for real-time safety notifications in your facility. Perfect for immediate on-site response to safety events.</p>
        </div>
    </div>
</div>
!!! tip
    Combine multiple alert types for comprehensive coverage. For example, use speaker alerts for immediate on-site response, while keeping management informed through daily digests and periodic reports.
---

## Step 8: Dashboard {#step-8-dashboard-access}
The VisionAI dashboard provides comprehensive insights into your safety metrics and events. Here's how to navigate and utilize the dashboard effectively:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-dashboard-metrics.jpg" alt="Dashboard Metrics" />
        <div class="step-content">
            <h4>Safety Metrics Overview</h4>
            <p>Access the Dashboard from the left navigation menu to view key safety metrics. Select custom time ranges to analyze trends across weeks, months, or specific date ranges. Track compliance rates, incident counts, and safety improvements over time.</p>
        </div>
    </div>
</div>
!!! tip
    Use the dashboard's filtering capabilities to focus on specific areas or types of safety events. This helps in identifying patterns and addressing recurring safety concerns promptly.
---

## Step 9: Sites Comparison {#step-9-sites-comparison}
The VisionAI The Sites for Comparison page is to enable users to analyze and evaluate safety performance across different locations, helping identify high-risk areas, improvement opportunities, and trends over time.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-site-comparision.jpg" alt="Sites Comparison" />
        <div class="step-content">
            <h4>Sites Comparison Overview</h4>
            <p>Access the Dashboard from the left navigation menu to view key Sites Comparision.We can select and compare up to five sites to view key metrics such as Time Between Events, Total Events, and Reviewed Events, along with detailed charts like Events Overview and Severity Breakdown, enabling data-driven decision-making and proactive safety management..</p>
        </div>
    </div>
</div>
!!! tip
    Use the "Sites Comparison" feature regularly to monitor underperforming locations—tracking metrics like time between incidents and reviewed event rates can help prioritize safety audits and training efforts effectively.
---




    
    
<!-- 
## AI Scenarios

- [PPE Compliance](../scenarios/ppe-detection.md)
- [Staircase Safety](../scenarios/staircase-safety.md)
- [Mobile Phone Compliance](../scenarios/mobile-phone-compliance.md)


## Learn More

- [Quick Start](../overview/quick-start.md)
- [Camera Placement Guide](../overview/camera-placement-guide.md)
- [Supported Scenarios](../overview/scenarios.md)
- [Camera Management](../overview/cameras.md)
- [FAQs](../overview/faqs.md)

--- -->

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