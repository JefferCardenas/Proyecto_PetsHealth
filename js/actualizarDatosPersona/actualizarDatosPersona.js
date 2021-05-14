
var idPersona=null;

$(function () {

    listarPersona();

    $("#btnActualizarDatos").click(function () {
        if ($("#txt_identificacion").val() != "" &&
            $("#txt_nombre").val() != "" &&
            $("#txt_apellido").val() != "" &&
            $("#txt_telefono").val() != "" &&
            $("#txt_correo").val() != "" 
        ) {
            actualizarPersona();
        } else {
            alertaCamposVacios();
        }
    });
});


function listarPersona() {

    let parametros = {
        accion: "listarUsuario",
    };

    $.ajax({
        url: "../../../controlador/usuarioControl.php",
        data: parametros,
        type: "post",
        dataType: "json",
        cache: false,
        success: function (resultado) {
            if (resultado.estado) {
                let datos = resultado.datos;
                idPersona=datos.idPersona;
                $("#txt_identificacion").val(datos.perIdentificacion);
                $("#txt_nombre").val(datos.perNombre);
                $("#txt_apellido").val(datos.perApellido);
                $("#txt_telefono").val(datos.perTelefono);
                $("#txt_correo").val(datos.perCorreo);
            }
        },
        error: function (ex) {
            console.log(ex.responseText);
        },
    });
}

function actualizarPersona() {

    let parametros = {
        accion: "actualizarPersona",
        idPersona: idPersona,
        identificacion: $("#txt_identificacion").val(),
        nombre: $("#txt_nombre").val(),
        apellido: $("#txt_apellido").val(),
        telefono: $("#txt_telefono").val(),
        correo: $("#txt_correo").val(),
    };

    $.ajax({
        url: "../../../controlador/usuarioControl.php",
        data: parametros,
        type: "post",
        dataType: "json",
        cache: false,
        success: function (resultado) {
            if (resultado.estado) {
                Swal.fire({
                    title: 'Muy bien',
                    text: 'Usuario actualizado con exito.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        confirmButton: 'btnAceptar',
                    }
                });
                window.location.reload(); 
                listarPersona();
            }
        },
        error: function (ex) {
            console.log(ex.responseText);
        },
    });

}
