from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


class Database:
    def __init__(self, engine):
        Session = sessionmaker(bind=engine)
        self.session = Session()
        self.engine = engine
        self.Base = declarative_base()
        self.Base.metadata.create_all(engine)

def start_database_session(configs):
    engine = create_engine(configs.DATABASE_PATH)
    return Database(engine)
