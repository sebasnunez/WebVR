
function show (id){
    var valor = $('#'+id).attr("alt");
    document.getElementById('cielo').setAttribute('src','#' + id);
    $('#descripcion').attr("value", "Conoce " + valor);
}

function redireccionar(id){
    console.log(id);
    switch(id){
        case 1: 
        window.location="/ejercicio2.html";
        break;
        case 2: 
        window.location="/";
    }
}