class UI{

    static alerta(etiqueta, classN){
        const el = document.querySelector(etiqueta);
        el.className = `form-control text-uppercase ${classN}`;
    }

    static limpiarCampos(){
        document.querySelector('#id_nombre').value = '';
        document.querySelector('#id_empresa').value = '';
        document.querySelector('#id_phoneNumber').value = '';
        document.querySelector('#id_email').value = '';
        document.querySelector('#id_asunto').value = '';
    }

}

//captura el evento click del boton del formulario
const btn_enviar = document.querySelector('#id_btn_enviar').addEventListener('click', isClick);

function isClick(e){
    if(Validaciones() == false){
        e.preventDefault();
    }
    else{
        alert("aqui ira la presentacion");
        UI.limpiarCampos();
        //remplasar por animacion de "envio de datos realizaddo"
    }    
}


function Validaciones(){
    let aux = false; 
    if(validacionTexto('#id_nombre') == false || validacionTexto('#id_empresa') == false || validarPhone() == false|| validarEmail() == false){
        alert('Compruebe la solicitud de algun campo');
        aux = false;
    }
    else{
        aux = true;
    }

    return aux;
}

/*
function Validaciones(){
    let aux = false;

    const valUser = new Promise((resolve, reject)=>{
        if(validacionTexto('#id_nombre') == false){
            reject('el campo esta incorrecto');
        }
        else{
            resolve('el campo esta correcto');
        }
    });

    const valEmpresa = new Promise((resolve, reject)=>{
        if(validacionTexto('#id_empresa') == false){
            reject('el campo esta incorrecto');
        }
        else{
            resolve('el campo esta correcto');
        }
    });

    valUser.then(response =>{
        console.log('usuario' + response);
        return aux = true;
    }).catch(err =>{
        console.log('usuario' + err);
        alert('comprebe el campo nombre')
        return aux = false;
    });

    valEmpresa.then(response => {
        console.log('empresa' + response);
    }).catch(err =>{
        console.log('empresa' + err);
    });

    return aux;
    
}*/















//validar textos
function validacionTexto(etiqueta){
    const el = document.querySelector(etiqueta).value;

    let aux = false;
    
    if(el == "" || el.length < 10 || el.length >40){
        UI.alerta(etiqueta , 'is-invalid');      
        aux = false;
    }
    else{
        UI.alerta(etiqueta, 'is-valid');
        aux = true;
    }

    return aux;
}

function validarPhone(){
    const numberPhone = document.querySelector('#id_phoneNumber').value;
    let aux = false;
    //falta validar si es un numero
    if(numberPhone == ""){
        UI.alerta('#id_phoneNumber', 'is-invalid');      
        aux = false;
    }
    else{
        UI.alerta('#id_phoneNumber', 'is-valid');
        aux = true;
    }

    return aux;
}

function validarEmail(){
    const email = document.getElementById('id_email').value;
    /* Aqui debo validar la sintaxis del correo electronico */
    //const expresion = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    let aux = false;

    if(email == ""){
        UI.alerta('#id_email', 'is-invalid');
        aux = false;
    }
    else{
        aux = true;
    }

    return aux;
}

function validarAsunto(){
    const asunto = document.getElementById('id_asunto').value;
}