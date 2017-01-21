from sqlalchemy import Column, Sequence, Integer, String

from krull.core import get_app


app = get_app()

class Users(app.db.Base):
    __tablename__ = "users"

    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    password = Column(String(30))
    address = Column(String(250))
    email = Column(String(50))
    phone_number = Column(String(50))
    
    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
