function ValidarRespuestas(){
    var cubo =document.getElementById('cubo').value;
    var esfera =document.getElementById('esfera').value;
    var prisma =document.getElementById('prisma').value;
    var piramide =document.getElementById('piramide').value;
    var cilindro =document.getElementById('cilindro').value;
    var cono =document.getElementById('cono').value;

    //CONO
    if(cono != 'Cono' && cono!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(cono == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //CILINDRO
    if(cilindro != 'Cilindro' && cilindro!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(cilindro == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //CUBO
    if(cubo != 'Cubo' && cubo!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(cubo == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //ESFERA
    if(esfera != 'Esfera' && esfera!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(esfera == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //PRISMA
    if(prisma != 'Prisma' && prisma!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(prisma == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //PIRAMIDE
    if(piramide != 'Piramide' && piramide!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(piramide == ''){
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

function ValidarRespuestas2(){
    var a =document.getElementById('a').value;
    var b =document.getElementById('b').value;
    var c =document.getElementById('c').value;

    //A
    if(a != 'A' && a!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(a == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //B
    if(b != 'B' && b!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(b == ''){
        swal ({
            title: "Complete todo",
            icon: "warning",
            button:"ok",
        }) ;
        return
    }


    //C
    if(c != 'C' && c!=''){
        swal ({
            title: "Revisar respuestas",
            icon: "error",
        }) ;
        return
    }
    if(c == ''){
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