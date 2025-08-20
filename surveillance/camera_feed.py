import cv2

def get_camera_feed(camera_url):
    cap = cv2.VideoCapture(camera_url)
    if not cap.isOpened():
        raise Exception("Could not open video device")

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Process the frame (e.g., display it, save it, etc.)
        cv2.imshow('Camera Feed', frame)

        # Exit on 'q' key press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()