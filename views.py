from flask import Blueprint, render_template, request, url_for

views = Blueprint("views",__name__, url_prefix='/')

@views.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == 'GET':
        return render_template('home.html')
    elif request.method == 'POST':
        return "nigger"