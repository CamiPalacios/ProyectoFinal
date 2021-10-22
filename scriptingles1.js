const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

// historia de juegos: los que va en cada juego de la materia
miStorage = window.localStorage;
var ingles = localStorage.getItem('ingles');
console.log('ingles datos guardados', JSON.parse(ingles))
ingles_object =  JSON.parse(ingles);


if (ingles_object!=null && ingles_object[0]==0){
    ingles_object[0]=1
    localStorage.setItem('ingles', JSON.stringify(ingles_object));
}


// visitadosIngles=[1,4,7,8]

// visitadosIngles=[{id:1,puntaje:6},{id:4, puntaje:10},{7,8]
        


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
			this.style.backgroundColor = '#c89ef0';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = '#c89ef0';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = '#c89ef0';
		});
	}
}

//cambiar imagen

// Actor
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("on")) {
        image.src = "imagenes/carta-tapa.jpg";
    } else {
        image.src = "imagenes/Actor.jpg";
    }
}

// Film
function changeImage2() {
    var image2 = document.getElementById('myImage2');
    if (image2.src.match("on")) {
        image2.src = "imagenes/carta-tapa.jpg";
    } else {
        image2.src = "imagenes/Film.jpg";

    }
}

// Radio
function changeImage3() {
    var image3 = document.getElementById('myImage3');
    if (image3.src.match("on")) {
        image3.src = "imagenes/carta-tapa.jpg";
    } else {
        image3.src = "imagenes/radio.jpg";
    }
}
function changeImage4() {
    var image4 = document.getElementById('myImage4');
    if (image4.src.match("on")) {
        image4.src = "imagenes/carta-tapa.jpg";
    } else {
        image4.src = "imagenes/Cinema.jpg";

    }
}
function changeImage5() {
    var image5 = document.getElementById('myImage5');
    if (image5.src.match("on")) {
        image5.src = "imagenes/carta-tapa.jpg";
    } else {
        image5.src = "imagenes/Horror.jpg";
    }
}
function changeImage6() {
    var image6 = document.getElementById('myImage6');
    if (image6.src.match("on")) {
        image6.src = "imagenes/carta-tapa.jpg";
    } else {
        image6.src = "imagenes/Subtitles.jpg";
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