from flask import Flask, render_template

app = Flask(__name__)

# Beispielziele
goals = [
    {"title": "Ziel 1", "description": "Beschreibung für Ziel 1"},
    {"title": "Ziel 2", "description": "Beschreibung für Ziel 2"},
    {"title": "Ziel 3", "description": "Beschreibung für Ziel 3"},
]

@app.route('/')
def index():
    return render_template('index.html', goals=goals)

if __name__ == '__main__':
    app.run(debug=True)