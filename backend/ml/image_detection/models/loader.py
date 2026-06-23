from pathlib import Path

from .hf_downloader import download_model

import torch

from .architectures import build_models

# -----------------------------
# Device
# -----------------------------
from ..config import DEVICE, WEIGHTS_DIR

if torch.cuda.is_available():
    torch.backends.cudnn.benchmark = True

# -----------------------------
# Weights Folder
# -----------------------------


#RESNET_PATH = WEIGHTS_DIR / "deepfake_image.pth"
#B0_PATH = WEIGHTS_DIR / "best_model_v2.pth"
#B4_PATH = WEIGHTS_DIR / "Gravex200_best_model.pth"
#DINO_PATH = WEIGHTS_DIR / "best_model.pth"

#for path in [RESNET_PATH, B0_PATH, B4_PATH, DINO_PATH]:
#    if not path.exists():
#        raise FileNotFoundError(f"Model weights not found: {path}")

print("Downloading models from Hugging Face (if needed)...")

RESNET_PATH = download_model("deepfake_image.pth")
B0_PATH = download_model("best_model_v2.pth")
B4_PATH = download_model("Gravex200_best_model.pth")
DINO_PATH = download_model("best_model.pth")

print("All model weights are ready.")

# -----------------------------
# Load All Models
# -----------------------------

def load_models():

    print("=" * 60)
    print("Loading Image Detection Models...")
    print("=" * 60)

    # Build architectures
    try:
        model_resnet, model_b0, model_b4, model_dino = build_models()
    except Exception as e:
        raise RuntimeError(
            f"Failed to build model architectures: {e}"
        ) from e

    # -----------------------------
    # ResNet18
    # -----------------------------
    print("Loading ResNet18...")

    model_resnet.load_state_dict(
        torch.load(
            RESNET_PATH,
            map_location=DEVICE,
            weights_only=False
        )
    )

    # -----------------------------
    # EfficientNet-B0
    # -----------------------------
    print("Loading EfficientNet-B0...")

    model_b0.load_state_dict(
        torch.load(
            B0_PATH,
            map_location=DEVICE,
            weights_only=False
            
        )
    )

    # -----------------------------
    # EfficientNet-B4
    # -----------------------------
    print("Loading EfficientNet-B4...")

    checkpoint = torch.load(
        B4_PATH,
        map_location=DEVICE,
        weights_only=False
    )

    model_b4.load_state_dict(
        checkpoint["model_state_dict"]
    )

    del checkpoint


    # -----------------------------
    # DINOv2
    # -----------------------------
    print("Loading DINOv2...")

    checkpoint = torch.load(
        DINO_PATH,
        map_location=DEVICE,
        weights_only=False
    )

    model_dino.load_state_dict(
        checkpoint["model_state_dict"]
    )

    del checkpoint

    # -----------------------------
    # Move to GPU
    # -----------------------------
    models = {
        "resnet18": model_resnet.to(DEVICE).eval(),
        "efficientnet_b0": model_b0.to(DEVICE).eval(),
        "efficientnet_b4": model_b4.to(DEVICE).eval(),
        "dinov2": model_dino.to(DEVICE).eval(),
    }

    if DEVICE.type == "cuda":
        torch.cuda.empty_cache()

    print("All models loaded successfully.")
    print("=" * 60)

    return models