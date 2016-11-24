import os
from pathlib import Path

from krull.server import run_krull
from krull.core import build_app

BASE_PROJECT_PATH = os.path.abspath(os.path.join(os.getcwd(), '../..'))
INDEX_PATH = '{}/frontend/app/index.html'.format(BASE_PROJECT_PATH)
DATA_PATH = '{}/backend/assets/data'.format(BASE_PROJECT_PATH)

configs = {
    "BASE_PROJECT_PATH": BASE_PROJECT_PATH,
    "INDEX_PATH": INDEX_PATH,
    "DATA_PATH": DATA_PATH,
}

app = build_app(configs)

if __name__ == '__main__': 
    run_krull(app)
