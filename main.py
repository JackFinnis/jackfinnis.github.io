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

app.run(host='0.0.0.0')