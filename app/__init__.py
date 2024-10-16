from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS  # Permitir requests do frontend React
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

mysql = MySQL(app)
CORS(app)  # Ativar CORS para permitir conexões do frontend

from .controllers import *
