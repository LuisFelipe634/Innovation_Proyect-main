from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/utb')
def utb():
    return render_template('utb.html')

@app.route('/services')
def services():
    return render_template('services.html')

# --- ESTAS SON LAS RUTAS QUE TE FALTABAN EN TU ARCHIVO ---
@app.route('/escuela/digital')
def digital():
    return render_template('escuela_digital.html')

@app.route('/escuela/ingenieria')
def ingenieria():
    return render_template('escuela_ingenieria.html')

@app.route('/escuela/negocios')
def negocios():
    return render_template('escuela_negocios.html')

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)