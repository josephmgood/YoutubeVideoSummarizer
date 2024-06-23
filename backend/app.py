from flask import Flask, render_template, request, jsonify
from flask_cors import CORS



app = Flask(__name__, static_folder='../static', template_folder='templates')
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for all routes

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_url():
    if request.method == 'OPTIONS':
        return '', 204
    data = request.get_json()
    url = data.get('url')
    # Process the URL (e.g., download and transcribe video)
    # Return a JSON response
    return jsonify({"summary": "This is a dummy summary", "url": url})

if __name__ == '__main__':
    app.run(debug=True)