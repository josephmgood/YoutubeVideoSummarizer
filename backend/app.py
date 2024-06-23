from flask import Flask, render_template
import os
import subprocess


backend_dir = os.path.dirname(os.path.abspath(__file__))
template_dir = os.path.join(backend_dir, '../frontend/')

app = Flask(__name__, template_folder=template_dir)

@app.get('/')

def home():
    return render_template("index.html")

def convert_video_to_audio


if __name__ == '__main__':
    app.run(debug=True)
