from interpreter import draw
from chessPictures import *

"""ejercicio 1"""

line1 = knight.join(knight.negative())
line2 = knight.join(knight.negative())
figure = line1.up(line2.horizontalMirror())

draw(figure)
