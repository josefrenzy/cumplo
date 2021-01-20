# from flask imports Flask
from flask import render_template, Flask, json, jsonify
# from flask import request, make_response, Response
import os
app = Flask(__name__)
@app.route('/')
def hello():
    return render_template("index.html")#'Hello, World!'

@app.route('/api/v1/calculo/udis')
def udis():
    return jsonify({'status':True,'message':'data calculated correctly'})


port = os.getenv('PORT', '8080')
if __name__ == '__main__':
    # app.run(debug=True)  # Run local
    app.run(host='0.0.0.0',port=int(port),debug = True)


#1_kdp>dUa+dk