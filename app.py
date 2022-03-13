from distutils.log import debug
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html')

@app.route('/identifica-tu-necesidad')
def identifica():
    return render_template('identifica.html')

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

if __name__ == '__main__':
    app.run(debug=True, port='5001')