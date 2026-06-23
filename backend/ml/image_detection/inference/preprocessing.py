from PIL import Image

from torchvision import transforms

from ..config import (
    IMAGE_SIZE_RESNET,
    IMAGE_SIZE_B0,
    IMAGE_SIZE_B4,
    IMAGE_SIZE_DINO,
)


# ==========================================================
# ImageNet Normalization
# ==========================================================

from ..config import IMAGENET_MEAN, IMAGENET_STD

# ==========================================================
# Transform Builder
# ==========================================================

def build_transform(image_size: int):

    return transforms.Compose([
        transforms.Resize((image_size, image_size)),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=IMAGENET_MEAN,
            std=IMAGENET_STD,
        ),
    ])


# ==========================================================
# Individual Transforms
# ==========================================================

transform_224 = build_transform(IMAGE_SIZE_RESNET)
transform_380 = build_transform(IMAGE_SIZE_B4)
transform_518 = build_transform(IMAGE_SIZE_DINO)


# ==========================================================
# Main Preprocessing Function
# ==========================================================

def preprocess_image(image: Image.Image):

    image = image.convert("RGB")

    return {

        "224": transform_224(image),

        "380": transform_380(image),

        "518": transform_518(image),

    }