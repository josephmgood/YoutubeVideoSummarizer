from flask import Flask, render_template, request, jsonify
from flask_cors import CORS



app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for all routes

@app.route('/test')
def index():
    return jsonify({"message:": "Hello World!"})

@app.route('/process', methods=['POST'])
def process_url():
    data = request.get_json()
    url = data.get('url')
    # Process the URL (e.g., download and transcribe video)
    # Return a JSON response
    return jsonify({"summary": "This is a dummy summary", "url": url})

if __name__ == '__main__':
    app.run(debug=True)