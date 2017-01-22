from sqlalchemy import Column, Sequence, Integer, String
from sqlalchemy.orm import relationship
from krull.core import get_app

from models.education import Education
from models.work_experience import WorkExperience
from models.projects import Projects

app = get_app()

class User(app.db.Base):
    __tablename__ = "user"

    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    name = Column(String(50))
    password = Column(String(30))
    address = Column(String(250))
    email = Column(String(50))
    phone_number = Column(String(50))

    education = relationship(Education, back_populates="user")
    work_experience = relationship(WorkExperience, back_populates="user")
    projects = relationship(Projects, back_populates="user")
    
    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
