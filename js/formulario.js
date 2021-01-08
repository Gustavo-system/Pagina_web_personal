class UI{

    static alerta(etiqueta, classN){
        const el = document.querySelector(etiqueta);
        el.className = `form-control text-uppercase ${classN}`;
    }

    // static limpiarCampos(){
    //     document.querySelector('#id_nombre').value = '';
    //     document.querySelector('#id_empresa').value = '';
    //     document.querySelector('#id_phoneNumber').value = '';
    //     document.querySelector('#id_email').value = '';
    //     document.querySelector('#id_asunto').value = '';
    // }

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
        return false;
    }

}


const validarNombre = (el) => {
    if(el === "" || el.length < 10){
        UI.alerta('#id_nombre', 'is-invalid');
        return false;
    }
    else{
        UI.alerta('#id_nombre', 'is-valid');
    }
}

const validarEmpresa = (el) =>{
    if(el === "" || el.length < 10){
        UI.alerta('#id_empresa', 'is-invalid');
        return false;
    }
    else{
        UI.alerta('#id_empresa', 'is-valid');
    }
}

const validarNumero = (numero) =>{
    if(numero === "" || numero.length != 10 || isNaN(numero)){
        UI.alerta('#id_phoneNumber', 'is-invalid');
        return false;
    }
    else{
        UI.alerta('#id_phoneNumber', 'is-valid');
    }
}

const validarEmail = (email) =>{
    if(email === "" || email.length < 10){
        UI.alerta('#id_email', 'is-invalid');
        return false;
    }
    else{
        UI.alerta('#id_email', 'is-valid');
    }
}
