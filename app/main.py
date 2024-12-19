from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_from_html():
    data = request.json
    print(data)
    return jsonify({ 'message': 'ok'}), 200

@app.route('/enosh', methods=['GET'])
def enosh():
    return render_template_string('<h1>enosh!</h1>')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)