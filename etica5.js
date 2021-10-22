const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

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
		});

		list.addEventListener('dragleave', function (e) {
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
		});
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