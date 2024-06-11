function validar() {
    var retorno_nombre_usuario = validar_nombre_usuario();
    var retorno_password = validar_password();
    var retorno_confirmar_password = validar_confirmar_password();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_aficiones = validar_aficiones();
    return retorno_nombre_usuario && retorno_password && retorno_confirmar_password && retorno_direccion && retorno_comuna && retorno_telefono && retorno_aficiones;
}

function validar_nombre_usuario() {
    var nombre_usuario = document.getElementById("input-nombre-usuario").value;
    var div_error = document.getElementById("error-nombre-usuario");
    console.log("Validando nombre de usuario:", nombre_usuario);
    if (nombre_usuario === "") {
        div_error.innerHTML = "El nombre de usuario es obligatorio";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_password() {
    var password = document.getElementById("input-password").value;
    var div_error = document.getElementById("error-password");
    console.log("Validando contraseña:", password);
    if (password === "") {
        div_error.innerHTML = "La contraseña es obligatoria";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_confirmar_password() {
    var password = document.getElementById("input-password").value;
    var confirmar_password = document.getElementById("input-confirmar-password").value;
    var div_error = document.getElementById("error-confirmar-password");
    console.log("Validando confirmar contraseña:", confirmar_password);
    if (confirmar_password === "") {
        div_error.innerHTML = "Confirmar la contraseña es obligatorio";
        div_error.className = "text-danger small";
        return false;
    } else if (password !== confirmar_password) {
        div_error.innerHTML = "Las contraseñas no coinciden";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("input-direccion").value;
    var div_error = document.getElementById("error-direccion");
    console.log("Validando dirección:", direccion);
    if (direccion === "") {
        div_error.innerHTML = "La dirección es obligatoria";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var comuna = document.getElementById("select-comuna").value;
    var div_error = document.getElementById("error-comuna");
    console.log("Validando comuna:", comuna);
    if (comuna === "default") {
        div_error.innerHTML = "Debe seleccionar una comuna";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var codigo_pais = document.getElementById("input-codigo-pais").value;
    var telefono = document.getElementById("input-telefono").value;
    var div_error = document.getElementById("error-telefono");
    console.log("Validando teléfono:", codigo_pais, telefono);
    if (codigo_pais === "" || telefono === "") {
        div_error.innerHTML = "El código de país y el número de teléfono son obligatorios";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function validar_aficiones() {
    var aficiones = document.getElementById("lista-aficiones").getElementsByTagName("li");
    var div_error = document.getElementById("error-aficiones");
    console.log("Validando aficiones:", aficiones.length);
    if (aficiones.length === 0) {
        div_error.innerHTML = "Debe agregar al menos una afición";
        div_error.className = "text-danger small";
        return false;
    } else {
        div_error.innerHTML = "";
        return true;
    }
}

function agregarAficion() {
    var input_aficion = document.getElementById("input-aficiones");
    var aficion = input_aficion.value;
    var lista_aficiones = document.getElementById("lista-aficiones");

    if (aficion !== "") {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = aficion;
        li.onclick = function () {
            lista_aficiones.removeChild(li);
        };
        lista_aficiones.appendChild(li);
        input_aficion.value = "";
    }
}

function togglePassword(id) {
    var input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
