from PIL import Image

from ml.image_detection.service import image_detection_service


class ImageDetectionManager:
    """
    Bridge between FastAPI and ML Image Detection Service.
    """

    def predict(self, image: Image.Image):

        return image_detection_service.predict(image)


# Singleton
image_detection_manager = ImageDetectionManager()