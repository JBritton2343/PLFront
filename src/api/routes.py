"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, make_response
from api.models import db, User, Power, CPUFan, CaseFans, Motherboards, Mouse, GPUS, Keyboards, Cases, Processors, RAM, Storage
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
import jwt
import datetime
import requests

api = Blueprint('api', __name__)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        
        if not token:
            return jsonify({'message': 'Token not found!'}), 401
        
        try:
            data = jwt.decode(token, api.config['JWT_SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message' : 'Token is not valid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated
@api.route('/hello', methods=['POST', 'GET'])
def handle():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET', "POST"])
@token_required
def handle_hello(current_user, user_id):
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')

    user = User(public_id=str(uuid.uuid4()), name=data['name'], password=hashed_password)
    db.session.add(user)
    db.session.commit()
    


    response_body = {
        "msg": "Welcome back" +user.name+ "are you ready to shop again?"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def create_user():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(public_id=str(uuid.uuid4()), name=data['name'], password=hashed_password, email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message' : 'newuser created'})

@api.route('/user/<public_id>', methods=['DELETE'])
@token_required
def delete_user(current_user, public_id):
    user=User.query.filter_by(public_id).first()

    if not user:
        return jsonify({'message' : 'No user found!'})
    
    db.session.delete(user)
    db.session.commit()

    return jsonify({'message' : 'user has been deleted'})
@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 402

    access_token = create_access_token(identify=user.id)
    return jsonify({"token": access_token, "user_id": user.id})

@api.route("/login", methods=['POST'])
def login():
    auth=request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response("user not found", 401, {'www-Authenticate' : "Basic realm='Login required!'"})
    user = User.query.filter_by(name=auth.username).first()
    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic Realm="Login required!"'})
    if check_password_hash(user.password, auth.password):
        token=jwt.encode({'public_id' : user.public_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes = 30)})

        return jsonify({'token' : token.decode('UTF-8')})
    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic Realm="Login required!"'})

@api.route('/Power', methods=['GET'])
def get_power():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/power_supply?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)
@api.route('/CaseFans', methods=['GET'])
def get_cfans():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/case_fan?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/RAM', methods=['GET'])
def get_ram():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/ram?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Mouse', methods=['GET'])
def get_mouse():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/mouse?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Keyboards', methods=['GET'])
def get_keyboards():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/keyboard?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/CPUFan', methods=['GET'])
def get_cpufans():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/cpu_fan?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Cases', methods=['GET'])
def get_cases():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/case?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Storage', methods=['GET'])
def get_storage():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/storage?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Processors', methods=['GET'])
def get_processors():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/processor?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/GPUs', methods=['GET'])
def get_gpus():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/gpu?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)

@api.route('/Motherboards', methods=['GET'])
def get_motherboards():
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/motherboard?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'         
      ).json()
    
    return jsonify(resp)    