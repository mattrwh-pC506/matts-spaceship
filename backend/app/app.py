import os
from pathlib import Path

from krull.server import run_krull
from krull.core import build_app

from database import start_database_session


BASE_PROJECT_PATH = os.path.abspath(os.path.join(os.getcwd(), '../..'))
INDEX_PATH = '{}/frontend/app/index.html'.format(BASE_PROJECT_PATH)
DATA_PATH = '{}/backend/assets/data'.format(BASE_PROJECT_PATH)

configs = {
    "BASE_PROJECT_PATH": BASE_PROJECT_PATH,
    "INDEX_PATH": INDEX_PATH,
    "DATA_PATH": DATA_PATH,
    "DATABASE_PATH": "sqlite:///../database.db",
}

if __name__ == '__main__': 
    app = build_app(configs, db_factory=start_database_session)
    run_krull(app)
