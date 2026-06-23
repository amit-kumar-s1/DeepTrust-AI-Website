import torch

from ..models.loader import DEVICE

import torch
from concurrent.futures import ThreadPoolExecutor

from ..models.loader import DEVICE

executor = ThreadPoolExecutor(max_workers=4)


def _run(model, x, fn):
    with torch.inference_mode():
        return fn(model(x))


def predict(models, tensors):

    x224 = tensors["224"].unsqueeze(0).to(DEVICE, non_blocking=True)
    x380 = tensors["380"].unsqueeze(0).to(DEVICE, non_blocking=True)
    x518 = tensors["518"].unsqueeze(0).to(DEVICE, non_blocking=True)

    # ----------------------------------------
    # Run all models in parallel
    # ----------------------------------------

    futures = [
        executor.submit(_run, models["resnet18"], x224,
                        lambda m, x: torch.softmax(m(x), dim=1)[:, 1]),

        executor.submit(_run, models["efficientnet_b0"], x224,
                        lambda m, x: torch.softmax(m(x), dim=1)[:, 1]),

        executor.submit(_run, models["efficientnet_b4"], x380,
                        lambda m, x: torch.sigmoid(m(x)).squeeze(1)),

        executor.submit(_run, models["dinov2"], x518,
                        lambda m, x: torch.sigmoid(m(x)).squeeze(1)),
    ]

    resnet_prob, b0_prob, b4_prob, dino_prob = [f.result() for f in futures]

    return {
        "resnet18": float(resnet_prob),
        "efficientnet_b0": float(b0_prob),
        "efficientnet_b4": float(b4_prob),
        "dinov2": float(dino_prob),
    }