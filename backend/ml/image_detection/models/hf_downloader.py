import os
from huggingface_hub import hf_hub_download
from ..config import WEIGHTS_DIR

REPO_ID = "not-human-s1/DeepTrust-AI-DeepFake-Image-Detection-Model"
HF_TOKEN = os.getenv("HF_TOKEN")


def download_model(filename: str):
    """
    Download a model from Hugging Face into WEIGHTS_DIR.
    If it already exists locally, it won't be downloaded again.
    """

    WEIGHTS_DIR.mkdir(parents=True, exist_ok=True)

    return hf_hub_download(
        repo_id=REPO_ID,
        filename=filename,
        token=HF_TOKEN,
        local_dir=WEIGHTS_DIR,
        local_dir_use_symlinks=False,
    )