from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Goal(Base):
    __tablename__ = 'goals'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)

# SQLite-Datenbank einrichten
engine = create_engine('sqlite:///goals.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
