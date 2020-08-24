from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/<path:path>')
def generic_path(path):
    return ('Your path is ' + path)