from flask import Flask, render_template
app = Flask(__name__, static_folder='', template_folder='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/discounts')
def discounts():
    return render_template('discounts.html')

@app.route('/app')
def app_():
    return render_template('app.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/1')
def clue():
    return render_template('1.html')

app.run(host='0.0.0.0')