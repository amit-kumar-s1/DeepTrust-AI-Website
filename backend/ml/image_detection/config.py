from pathlib import Path
import torch

# ==========================================================
# Base Paths
# ==========================================================

BASE_DIR = Path(__file__).resolve().parent

MODELS_DIR = BASE_DIR / "models"

WEIGHTS_DIR = MODELS_DIR / "weights"

# ==========================================================
# Inference Settings
# ==========================================================

THRESHOLD = 0.40

DEVICE = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

USE_CUDA = DEVICE.type == "cuda"

# ==========================================================
# Image Sizes
# ==========================================================

IMAGE_SIZE_RESNET = 224
IMAGE_SIZE_B0 = 224
IMAGE_SIZE_B4 = 380
IMAGE_SIZE_DINO = 518

# ==========================================================
# ImageNet Normalization
# ==========================================================

IMAGENET_MEAN = [0.485, 0.456, 0.406]
IMAGENET_STD = [0.229, 0.224, 0.225]