from flask import Flask, render_template
from helpers import random_element
from constants import ELEMENTS

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/play')
def play():
    element = random_element(ELEMENTS)
    return render_template('play.html')