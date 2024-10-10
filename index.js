let titulo = document.querySelector('h1')
let parrafo = document.querySelector('p')
let img = document.querySelector('img')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')

b1.onclick = function () {
    titulo.textContent = 'Liebre mara'
    parrafo.textContent = 'Es un mamífero herbívoro que tiene un gran tamaño, puede llegar a tener 75cm de largo y 16k de peso. Esta en una situación vulnerable debido a la perdida de su hábitat'
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7S7l_gTpvPMa_AT5qmqFnRX1NQ_XqpiEJNg&s'
}

b2.onclick = function () {
    titulo.textContent = 'Venado de las pampas'
    parrafo.textContent = 'Es un ciervo de tamaño mediano, su pelaje es de color bayo o crema claro, corto y brilloso, es un herbívoro que come gramíneas, semillas, pastos, hojas, etc. Se encuentra en peligro de extinción por el hecho de su cacería ilegal.'
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFPb1r9RnkpAcu9QdmoNojAcFn-27fHM5jw&s'
}

b3.onclick = function () {
    titulo.textContent = 'Tortuga terrestre'
    parrafo.textContent = 'Es un reptil que cuenta con un caparazón de color castaño, que se alimenta de frutos de arbustos, leguminosas, lombrices, etc. Esta en peligro de extinción por el comercio ilegal que hay de ella.'
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jouFD7bnLc6u5T34U-rolfrPifBMkEG6ow&s'
}