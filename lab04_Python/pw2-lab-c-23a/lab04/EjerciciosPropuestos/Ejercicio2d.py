from interpreter import draw
from chessPictures import *

figure = square 
"""ejercicio 3"""
for x  in range (7):
    if (x % 2 == 0):
        figure = figure.join(square.negative())
    else:
        figure = figure.join(square)

draw(figure)
