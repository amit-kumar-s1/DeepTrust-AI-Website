from pydantic import BaseModel


class ModelScores(BaseModel):
    resnet18: float
    efficientnet_b0: float
    efficientnet_b4: float
    dinov2: float


class ImageDetectionResponse(BaseModel):
    prediction: str
    confidence: float

    fake_probability: float
    real_probability: float

    processing_time_ms: float

    models: ModelScores