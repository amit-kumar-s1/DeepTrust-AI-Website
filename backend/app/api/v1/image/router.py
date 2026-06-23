from io import BytesIO
import time

from fastapi import APIRouter, File, HTTPException, UploadFile
from PIL import Image, UnidentifiedImageError

from app.api.v1.image.schemas import ImageDetectionResponse, ModelScores
from app.services.image.image_detection_service import image_detection_manager

router = APIRouter(
    prefix="/detect",
    tags=["Image Detection"],
)

# Max file size: 10 MB
MAX_FILE_SIZE = 10 * 1024 * 1024


@router.post("/image", response_model=ImageDetectionResponse)
async def detect_image(file: UploadFile = File(...)):
    start_time = time.time()

    # ----------------------------
    # 1. Validate file existence
    # ----------------------------
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    # ----------------------------
    # 2. Validate content type
    # ----------------------------
    if file.content_type not in ["image/jpeg", "image/png", "image/jpg"]:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type. Only JPG and PNG allowed.",
        )

    # ----------------------------
    # 3. Read file safely
    # ----------------------------
    contents = await file.read()

    # ----------------------------
    # 4. Validate file size
    # ----------------------------
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="File too large. Max allowed size is 10MB.",
        )

    # ----------------------------
    # 5. Decode image safely
    # ----------------------------
    try:
        image = Image.open(BytesIO(contents))
        image = image.convert("RGB")
    except UnidentifiedImageError:
        raise HTTPException(
            status_code=400,
            detail="Invalid or corrupted image file.",
        )

    # ----------------------------
    # 6. Run ML inference
    # ----------------------------
    try:
        result = image_detection_manager.predict(image)
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Model inference failed: {str(e)}",
        )

    # ----------------------------
    # 7. Format response
    # ----------------------------
    processing_time = (time.time() - start_time) * 1000

    return ImageDetectionResponse(
        prediction=result["prediction"],
        confidence=result["confidence"],
        fake_probability=result["fake_probability"],
        real_probability=result["real_probability"],
        processing_time_ms=processing_time,
        models=ModelScores(
            resnet18=result["models"]["resnet18"],
            efficientnet_b0=result["models"]["efficientnet_b0"],
            efficientnet_b4=result["models"]["efficientnet_b4"],
            dinov2=result["models"]["dinov2"],
        ),
    )