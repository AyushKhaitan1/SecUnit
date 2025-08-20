def log_message(message):
    # Function to log messages to a file
    with open("surveillance/logs.txt", "a") as log_file:
        log_file.write(message + "\n")

def trigger_alert(alert_message):
    # Function to trigger an alert
    log_message(f"ALERT: {alert_message}")
    # Additional code to send notifications can be added here

def calculate_frame_difference(frame1, frame2):
    # Function to calculate the difference between two frames
    return cv2.absdiff(frame1, frame2)

def is_motion_detected(frame_diff, threshold=30):
    # Function to determine if motion is detected based on frame difference
    gray = cv2.cvtColor(frame_diff, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, threshold, 255, cv2.THRESH_BINARY)
    return cv2.countNonZero(thresh) > 500  # Adjust the threshold as needed