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

    static error(id){
        const el = document.getElementById(id);
        el.style.opacity = 1;
    }

    static good(id){
        const el = document.getElementById(id);
        el.style.opacity = 0;
    }
}


function validar(){
    let nombre = document.getElementById('id_nombre').value;
    let empresa = document.getElementById('id_empresa').value;
    let numero = document.getElementById('id_phoneNumber').value;
    let email = document.getElementById('id_email').value;

    const r_nombre = validarNombre(nombre);
    const r_empresa = validarEmpresa(empresa);
    const r_numero = validarNumero(numero);
    const r_email = validarEmail(email);

    if(r_nombre == false || r_empresa == false || r_numero == false || r_email == false){
        //alert('Comprueba los datos solicitados');
        return false;
    }
    else{
        alert('datos enviados');
    }

}


const validarNombre = (el) => {
    if(el === "" || el.length < 10){
        UI.alerta('#id_nombre', 'is-invalid');
        UI.error('error_nombre');
        return false;
    }
    else{
        UI.alerta('#id_nombre', 'is-valid');
        UI.good('error_nombre');
    }
}

const validarEmpresa = (el) =>{
    if(el === "" || el.length < 10){
        UI.alerta('#id_empresa', 'is-invalid');
        UI.error('error_empresa');
        return false;
    }
    else{
        UI.alerta('#id_empresa', 'is-valid');
        UI.good('error_empresa');
    }
}

const validarNumero = (numero) =>{
    if(numero === "" || numero.length != 10 || isNaN(numero)){
        UI.alerta('#id_phoneNumber', 'is-invalid');
        UI.error('error_numero');
        return false;
    }
    else{
        UI.alerta('#id_phoneNumber', 'is-valid');
        UI.good('error_numero');
    }
}

const validarEmail = (email) =>{
    if(email === "" || email.length < 10){
        UI.alerta('#id_email', 'is-invalid');
        UI.error('error_email');
        return false;
    }
    else{
        UI.alerta('#id_email', 'is-valid');
        UI.good('error_email');
    }
}


