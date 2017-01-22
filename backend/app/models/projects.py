from sqlalchemy.orm import relationship
from sqlalchemy import (
    Column,
    Sequence, 
    Integer, 
    String, 
    Text,
    Date,
    ForeignKey,
)

from krull.core import get_app


app = get_app()

class Projects(app.db.Base):
    __tablename__ = "projects"

    id = Column(Integer, Sequence('projects_id_seq'), primary_key=True)
    name = Column(String(50))
    role = Column(String(50))
    description = Column(Text, nullable=True)
    release_date = Column(Date)
    link = Column(String(250), nullable=True)
    thumbnail = Column(String(250), nullable=True)
    project_type = Column(String(50))

    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", back_populates="projects")
