from fastapi import APIRouter

from app.api.v1.image.router import router as image_router

api_router = APIRouter()

# Register image detection routes
api_router.include_router(image_router)