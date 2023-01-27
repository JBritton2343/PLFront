from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Float


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email            
            # do not serialize the password, its a security breach
        }

class Power(db.Model):
    __tablename__ = "power"
    id = db.Column(db.Integer, primary_key=True)

class CaseFans(db.Model):
    __tablename__ = "casefans"
    id = db.Column(db.Integer, primary_key=True)

class RAM(db.Model):
    __tablename__ = "ram"
    id = db.Column(db.Integer, primary_key=True)

class Mouse(db.Model):
    __tablename__ = "mouse"
    id = db.Column(db.Integer, primary_key=True)

class Keyboards(db.Model):
    __tablename__ = "keyboards"
    id = db.Column(db.Integer, primary_key=True)

class CPUFan(db.Model):
    __tablename__ = "fans"
    id = db.Column(db.Integer, primary_key=True)

class Cases(db.Model):
    __tablename__ = "cases"
    id = db.Column(db.Integer, primary_key=True)

class Storage(db.Model):
    __tablename__ = "storage"
    id = db.Column(db.Integer, primary_key=True)

class Processors(db.Model):
    __tablename__ = "processors"
    id = db.Column(db.Integer, primary_key=True)

class GPUS(db.Model):
    __tablename__ = "gpus"
    id = db.Column(db.Integer, primary_key=True)

class Motherboards(db.Model):
    __tablename__ = "motherboards"
    id = db.Column(db.Integer, primary_key=True)