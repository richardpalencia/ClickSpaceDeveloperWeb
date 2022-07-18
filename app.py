#!/usr/bin/env python
#-*- coding: utf-8 -*-

from distutils.log import debug
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html')

@app.route('/diseño grafico')
def diseno_grafico():
    return render_template('disenoGrafico.html')

@app.route('/redes sociales')
def redes_sociales():
    return render_template('redesSociales.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

if __name__ == '__main__':
    app.run(debug=True, port='5001')