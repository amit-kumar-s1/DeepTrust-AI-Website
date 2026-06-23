from statistics import mean


# ==========================================================
# Ensemble Configuration
# ==========================================================

THRESHOLD = 0.40


# ==========================================================
# Soft Voting Ensemble
# ==========================================================

def ensemble_predict(predictions: dict):

    # Fast unpack (slightly faster than repeated dict access)
    resnet = predictions.get("resnet18", 0.0)
    b0 = predictions.get("efficientnet_b0", 0.0)
    b4 = predictions.get("efficientnet_b4", 0.0)
    dino = predictions.get("dinov2", 0.0)

    # Weighted soft voting (better + more stable than plain mean)
    fake_probability = (
        0.25 * resnet +
        0.20 * b0 +
        0.25 * b4 +
        0.30 * dino
    )

    real_probability = 1.0 - fake_probability

    prediction = "FAKE" if fake_probability >= THRESHOLD else "REAL"

    confidence = max(fake_probability, real_probability) * 100

    return {
        "prediction": prediction,
        "confidence": round(confidence, 2),
        "fake_probability": round(fake_probability, 4),
        "real_probability": round(real_probability, 4),
        "models": {
            "resnet18": round(resnet, 4),
            "efficientnet_b0": round(b0, 4),
            "efficientnet_b4": round(b4, 4),
            "dinov2": round(dino, 4),
        }
    }