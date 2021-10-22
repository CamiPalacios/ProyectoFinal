function ValidarRespuesta() {
    var opcion1 = document.getElementById('opcion1').value;
    var opcion2 = document.getElementById('opcion2').value;
    var opcion3 = document.getElementById('opcion3').value;
    var opcion4 = document.getElementById('opcion4').value;
    var opcion5 = document.getElementById('opcion5').value;
    var opcion6 = document.getElementById('opcion6').value;


    if (opcion1 != 'Opcion1' && opcion1 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion1 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }
    
    if (opcion2 != 'Opcion2' && opcion2 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion2 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }
    if (opcion3 != 'Opcion3' && opcion3 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion3 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }
    if (opcion4 != 'Opcion4' && opcion4 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion4 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }
    if (opcion5 != 'Opcion5' && opcion5 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion5 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }
    if (opcion6 != 'Opcion6' && opcion6 != '') {
        swal({
            title: "Revisar respuestas",
            icon: "error",
        });
        return
    }
    if (opcion6 == '') {
        swal({
            title: "Complete todo",
            icon: "warning",
            button: "ok",
        });
        return
    }

    //ALERT DE "MUY BUEN TRABAJO"
    console.log("muy buen trabajo");
    swal({
        title: "Muy Buen Trabajo",
        icon: "success",
    });
}