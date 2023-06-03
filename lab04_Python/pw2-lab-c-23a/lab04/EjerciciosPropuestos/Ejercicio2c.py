from interpreter import draw
from chessPictures import *

figure = queen 
"""ejercicio 3"""
for x  in range (3):
    figure = figure.join(queen)

draw(figure)
