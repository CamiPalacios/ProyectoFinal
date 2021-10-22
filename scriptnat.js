function Validar(){
    var jupiter =document.getElementById('jupiter').value;
    var marte =document.getElementById('marte').value;
    var mercurio =document.getElementById('mercurio').value;
    var neptuno =document.getElementById('neptuno').value;
    var saturno =document.getElementById('saturno').value;
    var tierra =document.getElementById('tierra').value;
    var urano =document.getElementById('urano').value;
    var venus =document.getElementById('venus').value;


    if(jupiter != 'Jupiter' && jupiter!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(jupiter == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if( marte!= 'Marte' && marte!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(marte == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if(mercurio != 'Mercurio' && mercurio!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(mercurio == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if(neptuno != 'Neptuno' && neptuno!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(neptuno == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if(saturno != 'Saturno' && saturno!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(saturno == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if(tierra != 'Tierra' && tierra!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(tierra == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }



    if(urano != 'Urano' && urano!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(urano == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if(venus != 'Venus' && venus!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(venus == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }
    //ALERT DE "MUY BUEN TRABAJO"
    console.log("muy buen trabajo");
    swal ({
        title: "Muy Buen Trabajo",
        icon: "success",
    }) ;
}
//----------------------------------------------------------------------------

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
function Validar2(){
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
//----------------------------------------------------------------------------
function Validar3(){
    var res =document.getElementById('respiratorio').value;
    var endo =document.getElementById('endocrino').value;
    var ner =document.getElementById('nervioso').value;
    var cir =document.getElementById('circulatorio').value;
    var mus =document.getElementById('muscular').value;
    var inm =document.getElementById('inmune').value;


    if(res != 'Respiratorio' && res!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(res == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if( endo!= 'Endocrino' && endo!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(endo == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if(ner != 'Nervioso' && ner!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(ner == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }

    if(cir != 'Circulatorio' && cir!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(cir == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if( mus!= 'Muscular' && mus!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(mus == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if(inm != 'Inmune' && inm!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(inm == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }

    //ALERT DE "MUY BUEN TRABAJO"
    console.log("muy buen trabajo");
    swal ({
        title: "Muy Buen Trabajo",
        icon: "success",
    }) ;
}