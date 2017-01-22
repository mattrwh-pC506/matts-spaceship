from sqlalchemy.orm import relationship
from sqlalchemy import (
    Column, 
    Sequence, 
    Integer, 
    String, 
    Float, 
    Date,
    ForeignKey,
)

from krull.core import get_app

app = get_app()

class Education(app.db.Base):
    __tablename__ = "education"

    id = Column(Integer, Sequence('education_id_seq'), primary_key=True)

    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship('User', back_populates="education")

    school = Column(String(50))
    degree = Column(String(50))
    major = Column(String(50))
    gpa = Column(Float(2))
    start_date = Column(Date)
    end_date = Column(Date)
