# rest api that generates an exercise based on the user's input of the body part(s) they want to work out

from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import random

# import exercise.json key value pairs are exercises and the value is a list of body parts
import json
with open('exercises.json') as f:
    data = json.load(f)

app = Flask(__name__)

@app.route('/generateExercise', methods=['GET'])
def generateExercise():
    # get the body parts the user wants to work out
    bodyParts = request.args.get('bodyParts')
    # split the body parts into a list
    bodyParts = bodyParts.split(',')
    # create a list of exercises that the user can do
    exercises = []
    # iterate through the list of exercises
    for exercise in data:
        # iterate through the body parts the user wants to work out
        for bodyPart in bodyParts:
            # if the exercise is in the list of exercises the user wants to work out, add it to the list of exercises
            # exercise is a key in the dictionary, so we need to access the value of the key to get the list of body parts
            # capitalize the body part so that it matches the format of the body parts in the json file
            # if bodyPart in data[exercise]:
            #     exercises.append(exercise)
            if bodyPart.capitalize() in data[exercise]:
                exercises.append(exercise)
    
    if exercises:
        # return the exercises
        return jsonify(exercises)

    
    # if there are no exercises that the user can do, return an error message
    return jsonify("No exercises found")

# function that gets a list of all possible body parts
@app.route('/getBodyParts', methods=['GET'])
def getBodyParts():
    # create a list of all body parts
    bodyParts = []
    # iterate through the list of exercises
    for exercise in data:
        # iterate through the body parts of each exercise
        for bodyPart in data[exercise]:
            # if the body part is not already in the list of body parts, add it
            if bodyPart not in bodyParts:
                bodyParts.append(bodyPart)
    # return the list of alphabetized body parts
    return jsonify(sorted(bodyParts))

if __name__ == '__main__':
        app.run(port='5002')