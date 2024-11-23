# Finding RTSP URLs for IP Cameras

RTSP (Real Time Streaming Protocol) URLs are essential for connecting IP cameras to VisionAI. This guide will help you locate the correct RTSP URL format for various camera manufacturers.

## General Format
Most RTSP URLs follow this basic structure:
`rtsp://username:password@camera-ip-address:port/stream-path`

## Camera Manufacturers

### Hikvision
Default RTSP URL formats:

- Main Stream: `rtsp://username:password@camera-ip:554/h264/ch1/main/av_stream`
- Sub Stream: `rtsp://username:password@camera-ip:554/h264/ch1/sub/av_stream`

Additional Notes:

- Default credentials: admin/12345
- Port 554 is standard
- Newer models might use h265 instead of h264 in the URL

### Dahua
Default RTSP URL formats:

- Main Stream: `rtsp://username:password@camera-ip:554/cam/realmonitor?channel=1&subtype=0`
- Sub Stream: `rtsp://username:password@camera-ip:554/cam/realmonitor?channel=1&subtype=1`

Additional Notes:

- Default credentials: admin/admin
- Channel numbers start from 1
- Some models use port 554, others might use 37777

### Axis
Default RTSP URL formats:

- MJPEG: `rtsp://username:password@camera-ip/axis-media/media.amp`
- H.264: `rtsp://username:password@camera-ip/axis-media/media.amp?videocodec=h264`

Additional Notes:

- Default credentials: root/pass
- [AXIS IP Utility](https://www.axis.com/support/tools/axis-ip-utility) can help locate cameras
- Comprehensive [VAPIX documentation](https://www.axis.com/vapix-library/) available

### Amcrest
Default RTSP URL formats:

- Main Stream: `rtsp://username:password@camera-ip:554/cam/realmonitor?channel=1&subtype=0`
- Sub Stream: `rtsp://username:password@camera-ip:554/cam/realmonitor?channel=1&subtype=1`

Additional Notes:

- Default credentials: admin/admin
- Similar format to Dahua (uses same protocol)
- [Amcrest IP Config Tool](https://amcrest.com/amcrest-ip-config-software-tool-download) helps find camera IPs

### Avigilon
Default RTSP URL format:

- Main Stream: `rtsp://username:password@camera-ip:554/defaultPrimary?streamType=u`

Additional Notes:

- Default credentials vary by installation
- [Avigilon Camera Configuration Tool](https://www.avigilon.com/support/tools) helps configure cameras
- Contact support for specific camera models

### Verkada

**Note:** Verkada cameras use a proprietary cloud-based system and don't support direct RTSP connections by default. To integrate with VisionAI:
1. Contact Verkada support for API access
2. Use [Command API](https://www.verkada.com/docs/command-api/) integration
3. Consider alternative camera options if direct RTSP access is required

## Finding Your Camera's IP Address

1. **Network Scanner Method:**

     - Use tools like [Advanced IP Scanner](https://www.advanced-ip-scanner.com/)
     - [Angry IP Scanner](https://angryip.org/)
     - [ONVIF Device Manager](https://sourceforge.net/projects/onvifdm/)

2. **Router Method:**

     - Log into your router's admin panel
     - Look for connected devices or DHCP client list
     - Identify camera by MAC address (usually on camera label)

3. **Manufacturer Tools:**

      - Most manufacturers provide their own IP finding tools
      - Usually available on their support websites
      - Often combine discovery and configuration features

## Troubleshooting Tips

1. **Connection Issues:**

      - Verify camera is on same network as VisionAI
      - Check username/password
      - Ensure ports are open (usually 554)
      - Try both HTTP and HTTPS variants

2. **Stream Quality:**

      - Main streams provide highest quality but require more bandwidth
      - Sub streams are good for remote viewing
      - Match stream resolution to your needs

3. **Security:**

      - Always change default passwords
      - Use strong passwords
      - Consider network segregation for cameras
      - Keep firmware updated

## Testing RTSP URLs

You can test RTSP URLs using:

- [VLC Media Player](https://www.videolan.org/)
- [RTSP Simple Player](https://www.unifore.net/ip-video-surveillance/rtsp-simple-player.html)
- [ONVIF Device Manager](https://sourceforge.net/projects/onvifdm/)

## Additional Resources

- [ONVIF Device Manager](https://sourceforge.net/projects/onvifdm/) - Universal tool for IP cameras
- [Security Camera Reviews](https://ipvm.com/) - Detailed camera information
- [IP Video Market](https://ipvm.com/reports/camera-finder) - Camera comparison tool
- [VisionAI Documentation](/) - Main documentation
