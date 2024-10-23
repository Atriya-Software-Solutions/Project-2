from flask import Blueprint, make_response, jsonify
from .controller import MainController
from models import User
from db import db

main_bp = Blueprint('main', __name__)
main_controller = MainController()
@main_bp.route('/', methods=['GET'])
def index():
    """ Example endpoint with simple greeting.
    ---
    tags:
      - Example API
    responses:
      200:
        description: A simple greeting
        schema:
          type: object
          properties:
            data:
              type: object
              properties:
                message:
                  type: string
                  example: "Hello World!"
    """
    result=main_controller.index()
    return make_response(jsonify(data=result))
#Add a new user (POST)
@main_bp.route('/add', methods=['POST'])
def add():
    data = make_response.json
    new_user = User(name=data['name'], email = data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User has been add successfully", "user": new_user.to_dict()}), 201

#Get all users (GET)
@main_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [user.to.dict() for user in users]
    return jsonify(users_list), 200

#Get a single user (GET)
@main_bp.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = user.query.get_or_404(user_id)
    return jsonify(user.to_dict()), 200

# Update a user (PUT)
@main_bp.route('/update/<int:user_id>', methods=['PUT'])
def update(user_id):
    data = make_response.json
    user = user.query.get_or_404(user_id)
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    db.session.commit()
    return jsonify ({"message": "User update successfull", "user": user.to_dict()}), 200

# Delete a user(DELETE)
@main_bp.route('/delete_user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = user.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
      