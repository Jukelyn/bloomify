__version__ = '0.10.0'
git_version = '9d5561b1f1224426a34ac13391f9c62f03c75b2f'
from torchvision.extension import _check_cuda_version
if _check_cuda_version() > 0:
    cuda = _check_cuda_version()
