from sqlalchemy import Column, Sequence, Integer, String, Text

from krull.core import get_app


app = get_app()

class Projects(app.db.Base):
    __tablename__ = "projects"

    id = Column(Integer, Sequence('projects_id_seq'), primary_key=True)
    name = Column(String(50))
    description = Column(Text)
    link = Column(String(250))
    thumbnail = Column(String(250))
