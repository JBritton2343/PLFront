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
def handle_hello():
    users=User.query.all()    
    users_array=[user.serialize() for user in users]    
    return jsonify(users_array), 200


@api.route('/signup', methods=['POST'])
def create_user():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')
    check_user = User.query.filter_by(email=data["email"]).first()
    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409
    new_user = User( name=data['name'], password=hashed_password, email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': new_user.serialize()
    }
    return jsonify(payload), 200

# @api.route('/user/<public_id>', methods=['DELETE'])
# @token_required
# def delete_user(current_user, public_id):
#     user=User.query.filter_by(public_id).first()

#     if not user:
#         return jsonify({'message' : 'No user found!'})
    
#     db.session.delete(user)
#     db.session.commit()

#     return jsonify({'message' : 'user has been deleted'})
@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 402

    access_token = create_access_token(identify=user.id)
    return jsonify({"token": access_token, "user_id": user.id})

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad email or password"}), 401
    new_user = User.query.filter_by(email=email, password=password).first()
    if not new_user :
        return jsonify({"msg": "Bad email or password"}), 401
    access_token = create_access_token(identity=user.id, expires_delta=datetime.timedelta(minutes=60))
    return jsonify(access_token=access_token)

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

@api.route('/power/<string:id>', methods=['GET', 'PUT'])
def get_single_power(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/power_supply?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    power_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            power_info = resp[i]

    return jsonify(power_info)

@api.route('/gpus/<string:id>', methods=['GET', 'PUT'])
def get_single_videocard(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/gpu?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    gpu_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            gpu_info = resp[i]

    return jsonify(gpu_info)      

@api.route('/cases/<string:id>', methods=['GET', 'PUT'])
def get_single_case(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/case?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    case_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            case_info = resp[i]

    return jsonify(case_info)

@api.route('/casefans/<string:id>', methods=['GET', 'PUT'])
def get_single_casefan(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/case_fan?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    casefan_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            casefan_info = resp[i]

    return jsonify(casefan_info)

@api.route('/keyboards/<string:id>', methods=['GET', 'PUT'])
def get_single_keyboard(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/keyboard?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    keyboard_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            keyboard_info = resp[i]

    return jsonify(keyboard_info)         

@api.route('/ram/<string:id>', methods=['GET', 'PUT'])
def get_single_ram(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/ram?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    ram_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            ram_info = resp[i]

    return jsonify(ram_info)

@api.route('/mice/<string:id>', methods=['GET', 'PUT'])
def get_single_mouse(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/mouse?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    mouse_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            mouse_info = resp[i]

    return jsonify(mouse_info)

@api.route('/motherboards/<string:id>', methods=['GET', 'PUT'])
def get_single_motherboard(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/mohterboard?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    motherboard_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            motherboard_info = resp[i]

    return jsonify(motherboard_info)

@api.route('/processors/<string:id>', methods=['GET', 'PUT'])
def get_single_processor(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/processor?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    processor_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            processor_info = resp[i]

    return jsonify(processor_info)

@api.route('/storage/<string:id>', methods=['GET', 'PUT'])
def get_single_storage(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/storage?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    storage_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            storage_info = resp[i]

    return jsonify(storage_info)
@api.route('/cpufans/<string:id>', methods=['GET', 'PUT'])
def get_single_cpu_fan(id):
    resp = requests.get(
        'https://computer-components-api.p.rapidapi.com/cpu_fan?rapidapi-key=41cb48f8aamsh58505b2951fb31fp11fea2jsn0df23ab93684&limit=10&offset=0'
    ).json()

    cpu_fan_info={}
    for i in range(len(resp)):
        if resp[i][
            "id"] == id: 
            cpu_fan_info = resp[i]

    return jsonify(cpu_fan_info)      