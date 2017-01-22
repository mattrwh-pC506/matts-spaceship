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

class WorkExperience(app.db.Base):
    __tablename__ = "work_experience"

    id = Column(Integer, Sequence('work_experience_id_seq'), primary_key=True)

    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", back_populates="work_experience")

    company = Column(String(50))
    title = Column(String(50))
    description = Column(Text, nullable=True)
    start_date = Column(Date)
    end_date = Column(Date)
