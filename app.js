window.onload=function(){

    document.getElementById("frm").addEventListener('submit', validar);
    document.getElementById("frm").addEventListener('reset', resetear)

    //variables
    var nombre = document.getElementById('nombre');
    var error_nombre = document.getElementById('error-nombre');
    var apellido = document.getElementById('apellido');
    var error_apellido = document.getElementById('error-apellido');
    var email = document.getElementById('email');
    var error_email = document.getElementById('error-email');
    var edad = document.getElementById('edad');
    var error_edad = document.getElementById('error-edad');
    var sexo = document.getElementsByName('sexo');
    var error_sexo = document.getElementById('error-sexo');
    var tema = document.getElementsByName('tema');
    var error_tema = document.getElementById('error-tema');
    var modal = document.getElementById("modal-exito");
    var span = document.getElementsByClassName("close")[0];
    var exito=true;

   //resetear
    function resetear(){
        limpiaReset();
   }

   //limpia los errores al resetear
    function limpiaReset(){
        var arrayVarError=[error_nombre,error_apellido,error_edad,error_email,error_sexo,error_tema]
        i=0;
        for(i;i<(arrayVarError.length);i++){
            
            arrayVarError[i].classList.add('ocultar-error');
        }

    }

    //validaciones
    function validar(evento){
        evento.preventDefault();
        exito=true;
        largo(nombre,error_nombre,apellido,error_apellido);
        validar_email();
        validar_edad();
        validar_sexo();
        validar_temas();
        abrir_modal();
        
    }
    
    //abrir modal
    function abrir_modal(){
        if(exito){
            modal.style.display="block";
        }
    }

    //valida  nombre y apellido
    function largo(x,y,z,w){
        if(x.value.length < 3){
            y.classList.remove('ocultar-error');
            exito=false;
        }
        if(z.value.length<3){
            w.classList.remove('ocultar-error');
            exito=false;
        }
    }

    //valida email
    function validar_email(){
        emailEstructura = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailEstructura.test(email.value)) {
            error_email.classList.remove('ocultar-error');
            exito=false;
        }
    }

    //valida edad entero (0;100)
    function validar_edad(){
        edadEstructura=/[0-9]+/;
        if(edad.value <= 0 || edad.value >=100 || (!edadEstructura.test(edad.value)) ){
            error_edad.classList.remove('ocultar-error');
            exito=false;
        }
    }

    //valida sexo
    function validar_sexo() {
        if ((sexo[0].checked == false) && (sexo[1].checked == false) && (sexo[2].checked == false)){
            error_sexo.classList.remove('ocultar-error');
            exito=false;
        }
    }

    //valida temas
    function validar_temas(){
        
        var cont=0;
        var i=0;
        for(i;i<(tema.length);i++){
            if(tema[i].checked==false){
                cont=cont+1;
            }
        }

        if(cont==(tema.length)){
            error_tema.classList.remove('ocultar-error')
            exito=false;

        }
    }

    //limpia los errores
    function limpiar_error(){
        var error_activo = "error-" + document.activeElement.name;
        var error = document.getElementById(error_activo);
        error.classList.add('ocultar-error');
    }
    
    // eventos limpieza errores
    nombre.addEventListener('focus',limpiar_error);
    apellido.addEventListener('focus', limpiar_error);
    email.addEventListener('focus',limpiar_error);
    edad.addEventListener('focus',limpiar_error);
    sexo.forEach(sexo => sexo.addEventListener('change', limpiar_error));
    tema.forEach(tema => tema.addEventListener('change', limpiar_error));
    
    //MODAL

    //para cerrar el modal cuando click X
    span.onclick = function() {
    modal.style.display = "none";
    }

    //para cerrar modela click en pantalla
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //setea el intervalo y color de parpadeo
    window.setInterval(parpadea,500);
    var color="red";

    //funcion parpadea el mensaje de exito
    function parpadea(){
        
        var mensaje_parpadea=document.getElementById("mensaje_parpadea")
        color=(color=="#08cc15")? "red" : "#08cc15";
        mensaje_parpadea.style.color=color;
    }
}

