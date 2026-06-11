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
        <p>Create custom views to monitor surveillance data efficiently</p>
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
     <a href="#step-9-safety-intelligence" class="flow-item">
        <span class="flow-number">9</span>
        <span class="material-symbols-outlined">query_stats</span>
        <h3>Safety Intelligence</h3>
        <p>Multi-site analytics with portfolio overview, predictive insights, and others.</p>
    </a>
    <a href="#step-10-recordings" class="flow-item">
        <span class="flow-number">10</span>
        <span class="material-symbols-outlined">video_library</span>
        <h3>Recordings</h3>
        <p>Start camera recordings to review or download clips</p>
    </a>
    <a href="#step-11-reports" class="flow-item">
        <span class="flow-number">11</span>
        <span class="material-symbols-outlined">summarize</span>
        <h3>Reports</h3>
        <p>Generate AI-powered safety reports or build custom reports.</p>
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

The Views feature provides customized dashboards for specific cameras, areas, or events, enabling quick access to incident insights and performance metrics. Views now include a **Share** feature that generates a shareable link for any view, and a **revamped Settings panel** with granular control over display preferences and camera groupings.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-views-list.png" alt="Views List — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Views listing page -->
        <div class="step-content">
            <h4>1. Views Overview</h4>
            <p>Navigate to <b>Views</b> from the left sidebar to see all saved views. Each view card shows the cameras, areas, and events it monitors. Use <b>Play</b> to open the live view, <b>Edit</b> to modify it, or <b>Delete</b> to remove it.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-views-settings.png" alt="Views Revamped Settings — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the revamped Settings panel -->
        <div class="step-content">
            <h4>2. Configure Settings</h4>
            <p>Open the <b>Settings</b> panel inside any view to configure camera groupings, event filters, display layout, and refresh intervals. Settings are saved per view for a tailored monitoring experience.</p>
        </div>
    </div>

    <div class="setup-step">
        <img src="../../img/visionify-views-share.png" alt="Views Share Feature — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Share button and generated shareable link -->
        <div class="step-content">
            <h4>3. Share a View</h4>
            <p>Click the <b>Share</b> button on any view to generate a unique, shareable link. Recipients can access the view without logging in, making it easy to share with other people.</p>
        </div>
    </div>
</div>

## Step 7: Notifications {#step-7-alert-configuration}
Configure alerts and digests directly from the **Notifications** page in the sidebar—no separate observability platform needed. All alert types are configured through in-app modals, and each alert includes a **Test** button to verify delivery before going live.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-notifications-page.png" alt="Notifications Page — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Notifications sidebar page -->
        <div class="step-content">
            <h4>1. Open Notifications</h4>
            <p>Click <b>Notifications</b> in the left sidebar to access all alert and digest settings in one place. The page lists all configured alerts with their status, schedule, and delivery channels.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-notifications-digest-modal.png" alt="Digest Configuration Modal — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Daily Digest configuration modal -->
        <div class="step-content">
            <h4>2. Configure Digests</h4>
            <p>Click <b>Add Digest</b> to open the configuration modal. Set the frequency (daily, weekly), add recipient email addresses, and select which scenarios and areas to include. Digests deliver a safety summary with trend charts and key metrics to a broader audience.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-notifications-alerts-modal.png" alt="Alert Configuration Modal — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Alert configuration modal -->
        <div class="step-content">
            <h4>3. Configure Alerts</h4>
            <p>Click <b>Add Alert</b> to open the alert modal. Choose the alert type—<b>Email, WhatsApp, Microsoft Teams</b>—set priority level, select cameras or areas to monitor, and add recipient contacts. Multiple alert types can be active simultaneously.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-notifications-test.png" alt="Test Alert Feature — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Test button sending a sample alert -->
        <div class="step-content">
            <h4>4. Test Your Alerts</h4>
            <p>Use the <b>Test</b> button next to any configured alert or digest to send a sample notification immediately. This confirms delivery to the right recipients and channels before any real safety event occurs.</p>
        </div>
    </div>
</div>
!!! tip
    Always use the Test feature after configuring a new alert to confirm end-to-end delivery. Combine digest emails for management summaries with real-time alerts for on-call responders.
---

## Step 8: Dashboard {#step-8-dashboard-access}
The VisionAI Dashboard provides comprehensive insights into your safety metrics and events. Here's how to navigate and utilize the dashboard effectively:

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-dashboard-metrics.png" alt="Dashboard Metrics" />
        <div class="step-content">
            <h4>Safety Metrics Overview</h4>
            <p>View key metrics including <b>Total Events, Reviewed Events, Accurate Events, Time Since Last Event,</b> and <b>Time Between Events</b>. Select custom time ranges to analyze trends across weeks, months, or specific date ranges. Use filters for scenarios, cameras, shifts, and areas to focus on what matters most.</p>
        </div>
    </div>
        <div class="setup-step">
        <img src="../../img/visionify-dashboard-safety-score.png" alt="Dashboard Safety Score — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Dashboard showing the Safety Score chart -->
        <div class="step-content">
            <h4>Safety Score</h4>
            <p>The <b>Safety Score</b> chart shows your overall safety rating as a radial gauge, color-coded by performance: <b>green (&gt;90)</b>, <b>orange (50–89)</b>, and <b>red (&lt;50)</b>. A 7-day trend line tracks whether performance is improving or regressing over the week.</p>
        </div>
    </div>
</div>
!!! tip
    Monitor the Safety Score trend daily to catch regressions early. Use the area and camera filters to drill into specific locations when the score dips—this helps surface recurring incidents faster.
---

## Step 9: Safety Intelligence {#step-9-safety-intelligence}
The **Safety Intelligence** page is a multi-site analytics hub for evaluating safety performance across your entire portfolio. It goes beyond simple site comparisons to provide predictive insights, compliance audits, and segment-level breakdowns—all organized into four dedicated tabs.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-safety-intelligence-portfolio.png" alt="Safety Intelligence Portfolio Tab — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Safety Intelligence Portfolio tab -->
        <div class="step-content">
            <h4>1. Portfolio Overview</h4>
            <p>The <b>Portfolio</b> tab shows a KPI strip (Safety Score, MTTR, and more), a <b>Site Performance Leaderboard</b> ranking all locations by safety score, a <b>Top Risks</b> panel, a <b>World Map</b> of your sites, and a <b>Time Heatmap</b> showing when incidents peak across the day and week.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-safety-intelligence-segments.png" alt="Safety Intelligence Segments Tab — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Safety Intelligence Segments tab -->
        <div class="step-content">
            <h4>2. Segments</h4>
            <p>The <b>Segments</b> tab breaks performance down by country, region, or custom site groupings. Compare safety metrics across segments to identify geographic patterns, high-performing regions, and areas that need targeted intervention.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-safety-intelligence-predictive.png" alt="Safety Intelligence Predictive Tab — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Safety Intelligence Predictive tab -->
        <div class="step-content">
            <h4>3. Predictive Insights</h4>
            <p>The <b>Predictive</b> tab uses historical incident data to forecast risk trends and surface early warning signals before incidents escalate. Use these insights to allocate safety resources proactively.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-safety-intelligence-compliance.png" alt="Safety Intelligence Compliance Tab — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of Safety Intelligence Compliance tab -->
        <div class="step-content">
            <h4>4. Compliance Audit</h4>
            <p>The <b>Compliance</b> tab tracks adherence to safety policies across all sites. View compliance scores per scenario, identify chronically non-compliant areas, and generate audit-ready reports for leadership or regulators.</p>
        </div>
    </div>
</div>
!!! tip
    Start with the Portfolio tab for a high-level view, then use the Leaderboard to find underperforming sites. Drill into Segments to identify regional patterns, and use Predictive Insights to plan safety interventions before incidents spike.
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

## Step 10: Recordings {#step-10-recordings}
Recordings let you capture full-length video from any camera on demand. Start and stop recordings directly from the **Camera Details** page; all clips are then available on the **Recordings** page for playback, review, and deletion.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-recordings-start.png" alt="Start Recording from Camera Details — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Recording toggle button on Camera Details page -->
        <div class="step-content">
            <h4>1. Start a Recording</h4>
            <p>Open any camera's <b>Camera Details</b> page and scroll to the <b>Recording</b> section below the applied scenarios. Click the red record button to start capturing. The button turns solid red while recording is active. Click it again to stop. A pulsing indicator confirms the recording is live.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-recordings-page.png" alt="Recordings Page — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Recordings listing page -->
        <div class="step-content">
            <h4>2. Browse Recordings</h4>
            <p>Navigate to <b>Recordings</b> in the left sidebar to see all clips in a grid layout. Filter by camera, status (<b>Completed, In Progress, Started, Stopped</b>), and date range. Each card shows a thumbnail, start time, and duration. Clips are sorted newest first.</p>
        </div>
    </div>
</div>

## Step 11: Reports {#step-11-reports}
The Reports page gives you on-demand safety reports in two modes: **AI-generated** narrative reports and fully customizable **standard reports**. AI reports are written by GPT and ready in seconds; standard reports let you build a tailored data export filtered by time, scenario, area, camera, and shift.

<div class="setup-steps">
    <div class="setup-step">
        <img src="../../img/visionify-reports-page.png" alt="Reports Page — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Reports listing page -->
        <div class="step-content">
            <h4>1. Reports Overview</h4>
            <p>Navigate to <b>Reports</b> in the left sidebar. The page lists all saved reports with their title, type, time range, creator, and creation date. Use the search bar to find a report by name, or filter by type: <b>Standard, AI, Weekly Toolbox Talk, Monthly Executive Summary, Insurance Risk,</b> or <b>Incident Investigation</b>. In-progress reports appear pinned at the top with a live countdown.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-reports-ai-drawer.png" alt="AI Report Generation Drawer — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the AI Report drawer (e.g. Weekly Toolbox Talk) -->
        <div class="step-content">
            <h4>2. Generate an AI Report</h4>
            <p>Click <b>Generate New Report</b> and select an AI report type from the catalog:</p>
            <ul>
                <li><b>Weekly Toolbox Talk</b> — 5-minute crew safety talk with real events, screenshots, and discussion questions</li>
                <li><b>Monthly Executive Summary</b> — C-suite overview with risk posture, month-over-month deltas, and recommendations</li>
                <li><b>Quarterly Insurance Risk</b> — 90-day underwriter-facing risk profile</li>
                <li><b>Incident Investigation</b> — First-pass investigation for a single event with 5-Why analysis and root cause</li>
            </ul>
            <p>Enter the required date or event ID in the drawer, then click <b>Generate</b>. The report is ready in 10–45 seconds.</p>
        </div>
    </div>
    <div class="setup-step">
        <img src="../../img/visionify-reports-preview.png" alt="Report Preview and Download — screenshot pending" />
        <!-- PLACEHOLDER: Replace with screenshot of the Report preview page with download options -->
        <div class="step-content">
            <h4>4. Preview and Download</h4>
            <p>The preview page shows stat cards, safety score, bar charts, pie charts, and trend lines for your selected filters. When satisfied, download as <b>Excel</b> for raw data or <b>PDF</b> for a formatted report. Both formats are saved to the Reports list for future access.</p>
        </div>
    </div>
</div>

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