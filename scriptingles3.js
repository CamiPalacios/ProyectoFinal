const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
var respuesta = document.querySelector("#correccion");


let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = '#5CE1E6';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = '#5CE1E6';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = '#5CE1E6';
		});
	}
}

//cambiar imagen

// Actor
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("on")) {
        image.src = "imagenes/tapaceleste.png";
    } else {
        image.src = "imagenes/remera.png";
    }
}

// Film
function changeImage2() {
    var image2 = document.getElementById('myImage2');
    if (image2.src.match("on")) {
        image2.src = "imagenes/tapaceleste.png";
    } else {
        image2.src = "imagenes/sueter.png";

    }
}

// Radio
function changeImage3() {
    var image3 = document.getElementById('myImage3');
    if (image3.src.match("on")) {
        image3.src = "imagenes/tapaceleste.png";
    } else {
        image3.src = "imagenes/zapato.png";
    }
}
function changeImage4() {
    var image4 = document.getElementById('myImage4');
    if (image4.src.match("on")) {
        image4.src = "imagenes/tapaceleste.png";
    } else {
        image4.src = "imagenes/pollera.png";

    }
}
function changeImage5() {
    var image5 = document.getElementById('myImage5');
    if (image5.src.match("on")) {
        image5.src = "imagenes/tapaceleste.png";
    } else {
        image5.src = "imagenes/media.png";
    }
}
function changeImage6() {
    var image6 = document.getElementById('myImage6');
    if (image6.src.match("on")) {
        image6.src = "imagenes/tapaceleste.png";
    } else {
        image6.src = "imagenes/pantalon.png";
    }
}

//validar respuestas

function ValidarRespuestas(){

    for(let j = 0; j < lists.length; j++){
        var foto = lists[j];

        console.log("foto", foto.id)

        if (foto.children && foto.children[0])

            if (foto.id === foto.children[0].children[0].id)
                console.log("texto:", foto.children[0].children[0].id)
            else {
                swal ({
                    title: "Revisar respuestas",
                    icon: "error",
                }) ;
                return
            }
        else {
            console.log("vacio")
            swal ({
                title: "Complete todo",
                icon: "warning",
                button:"ok",
            }) ;
            return
        }

    }

    swal ({
        title: "Muy Buen Trabajo",
        icon: "success",
    }) ;
    



}	 