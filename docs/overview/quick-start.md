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
        <span class="material-symbols-outlined">settings_suggest</span>
        <h3>Scenarios</h3>
        <p>Select and customize safety monitoring scenarios</p>
    </a>
    <a href="#step-4-alert-configuration" class="flow-item">
        <span class="flow-number">4</span>
        <span class="material-symbols-outlined">notifications_active</span>
        <h3>Alerts</h3>
        <p>Set up notifications and response workflows</p>
    </a>
    <a href="#step-5-dashboard-access" class="flow-item">
        <span class="flow-number">5</span>
        <span class="material-symbols-outlined">dashboard</span>
        <h3>Dashboard</h3>
        <p>Monitor safety metrics in real-time</p>
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
        <img src="../img/visionify-activate-account.jpg" alt="Account Activation" />
        <div class="step-content">
            <h4>1. Activate Your Account</h4>
            <p>Once you've signed up for enterprise account, you will receive an activation email from Visionify team. Accept the invite from email & activate the account. Set your own password here.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-sign-in.jpg" alt="Sign In" />
        <div class="step-content">
            <h4>2. Sign In</h4>
            <p>Login with your username & password.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-events-dashboard.jpg" alt="Events Dashboard" />
        <div class="step-content">
            <h4>3. Access Dashboard</h4>
            <p>You will be directed to events dashboard page.</p>
        </div>
    </div>
</div>

---

## Step 2: Camera Onboarding {#step-2-camera-integration}

Connecting your cameras to VisionAI is straightforward. Follow these steps to integrate your existing camera infrastructure:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../img/visionify-cameras-page.jpg" alt="Cameras Page" />
        <div class="step-content">
            <h4>1. Go to Cameras Page</h4>
            <p>Navigate to the Cameras page from the main dashboard. Here you'll see all your connected cameras and their status.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../img/visionify-add-camera.jpg" alt="Add Camera Button" />
        <div class="step-content">
            <h4>2. Add New Camera</h4>
            <p>Click on the "Add Camera" button to begin the integration process. VisionAI supports IP cameras, CCTV systems, and NVR/DVR setups.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../img/visionify-add-camera-popup.jpg" alt="Camera Configuration" />
        <div class="step-content">
            <h4>3. Provide Camera Details</h4>
            <p>Enter your camera details including name, RTSP URL, and location. Test the connection to ensure proper setup before saving.</p>
        </div>
    </div>
</div>

!!! note
    1. Test your Camera RTSP URL to make sure it is playing. You can test it using [VLC Player](https://www.videolan.org/vlc/index.html).
    2. Initially, you will see a blank screen for camera. The screenshot for the camera will update once the camera is connected.

---

## Step 3: Scenario Configuration {#step-3-scenario-configuration}

Setting up safety monitoring scenarios is easy with VisionAI. Follow these steps to configure your first scenario:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../img/visionify-scenario-flow-start.jpg" alt="Add New Scenario" />
        <div class="step-content">
            <h4>1. Start Scenario Setup</h4>
            <p>From the camera details page, click on the "Add New Scenario" button to begin configuring safety monitoring for your camera.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../img/visionify-scenario-get-this-button.jpg" alt="Select Scenario" />
        <div class="step-content">
            <h4>2. Choose Scenario</h4>
            <p>Browse through available safety scenarios and click "Get This" on your desired scenario. Each scenario is designed for specific safety monitoring needs.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../img/visionify-scenario-configure-zones.jpg" alt="Configure Zones" />
        <div class="step-content">
            <h4>3. Define Monitoring Zones</h4>
            <p>Configure specific zones where you want to monitor safety events. Draw and adjust zones directly on your camera feed for precise monitoring.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../img/visionify-scenario-apply.jpg" alt="Apply Settings" />
        <div class="step-content">
            <h4>4. Fine-tune Parameters</h4>
            <p>Adjust model confidence thresholds and event duration parameters to match your safety requirements. Click "Apply" to activate the scenario.</p>
        </div>
    </div>
</div>

!!! tip
    Start with default parameters and adjust based on your environment's specific needs. You can always modify these settings later.

---

## Step 4: Alert Configuration {#step-4-alert-configuration}

Configure comprehensive notification settings through your dedicated observability platform at `customername.visionify.ai/observability`. VisionAI offers multiple alert types to ensure your team stays informed of safety events:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../img/visionify-alerts-daily-digests.jpg" alt="Daily Digest Configuration" />
        <div class="step-content">
            <h4>1. Daily Digest Emails</h4>
            <p>Set up automated daily summaries of safety events, incidents, and compliance metrics. Perfect for management oversight and trend analysis.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-alerts-periodic-reports.jpg" alt="Periodic Reports" />
        <div class="step-content">
            <h4>2. Periodic Reports</h4>
            <p>Schedule detailed reports with CSV attachments, delivered via email or Microsoft Teams. Customize reports by area, camera, or specific event types for targeted insights.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-alerts-text-alerts.jpg" alt="Text Message Alerts" />
        <div class="step-content">
            <h4>3. Text Message Alerts</h4>
            <p>Enable real-time SMS notifications for immediate awareness of critical safety events. Ideal for urgent situations requiring immediate attention.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-alerts-speaker-notifications.jpg" alt="Speaker Alerts" />
        <div class="step-content">
            <h4>4. Speaker Based Alerts</h4>
            <p>Configure automated audio announcements for real-time safety notifications in your facility. Perfect for immediate on-site response to safety events.</p>
        </div>
    </div>
</div>

!!! tip
    Combine multiple alert types for comprehensive coverage. For example, use speaker alerts for immediate on-site response, while keeping management informed through daily digests and periodic reports.

---

## Step 5: Dashboard Access {#step-5-dashboard-access}

The VisionAI dashboard provides comprehensive insights into your safety metrics and events. Here's how to navigate and utilize the dashboard effectively:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../img/visionify-dashboard-metrics.jpg" alt="Dashboard Metrics" />
        <div class="step-content">
            <h4>1. Safety Metrics Overview</h4>
            <p>Access the Dashboard from the left navigation menu to view key safety metrics. Select custom time ranges to analyze trends across weeks, months, or specific date ranges. Track compliance rates, incident counts, and safety improvements over time.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-dashboard-events.jpg" alt="Events Listing" />
        <div class="step-content">
            <h4>2. Events Listing</h4>
            <p>Navigate to the Events page to review specific safety incidents. Filter events by time range, scenarios, event types, or specific cameras. Each event includes a 12-second video clip for detailed investigation and analysis.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../img/visionify-event-details.jpg" alt="Events Page" />
        <div class="step-content">
            <h4>3. Event Details</h4>
            <p>On the event details page, you can view a 12-second video clip of the event. You can click thumbs up/down to vote on the event. You can also add the event to your watchlist or safety campaign.</p>
        </div>
    </div>
</div>

!!! tip
    Use the dashboard's filtering capabilities to focus on specific areas or types of safety events. This helps in identifying patterns and addressing recurring safety concerns promptly.

---

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