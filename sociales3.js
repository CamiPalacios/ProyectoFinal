function Validar(){
    var norte =document.getElementById('norte').value;
    var central =document.getElementById('central').value;
    var sur =document.getElementById('sur').value;


    if(norte != 'Norte' && norte!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(norte == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if( central!= 'Central' && central!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(central == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    if(sur != 'Sur' && sur!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(sur == ''){
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