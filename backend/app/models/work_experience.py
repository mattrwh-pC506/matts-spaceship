from sqlalchemy import Column, Sequence, Integer, String, Text, Date

from krull.core import get_app


app = get_app()

class WorkExperience(app.db.Base):
    __tablename__ = "work_experience"

    id = Column(Integer, Sequence('work_experience_id_seq'), primary_key=True)
    company = Column(String(50))
    title = Column(String(50))
    description = Column(Text)
    start_date = Column(Date)
    end_date = Column(Date)
