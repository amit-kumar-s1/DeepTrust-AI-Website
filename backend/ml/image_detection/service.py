import time

from PIL import Image

from .models.loader import load_models
from .inference.preprocessing import preprocess_image
from .inference.predictor import predict
from .inference.ensemble import ensemble_predict


class ImageDetectionService:

    def __init__(self):

        print("=" * 60)
        print("Initializing Image Detection Service...")
        print("=" * 60)

        self.models = load_models()

        print("Image Detection Service Ready.")
        print("=" * 60)

    def predict(self, image: Image.Image):

        start_time = time.perf_counter()

        tensors = preprocess_image(image)

        predictions = predict(
            self.models,
            tensors
        )

        result = ensemble_predict(predictions)

        result["processing_time_ms"] = round(
            (time.perf_counter() - start_time) * 1000,
            2
        )

        return result


# =====================================================
# Global Singleton
# =====================================================

image_detection_service = ImageDetectionService()