var primeraFila;
var idProducto;

$(function(){
    /**se obtiene toda la etiqueta del primer tr de la tabla */
    primeraFila = $('#primeraFila');
    /**funcion que lista todos los productos */
    listarProductos();

    /**evento que ejecuta unja funcion para agregar un producto */
    $('#btn_modalAgregar').click(function(){

        abrirModalAgregar();

    });

});

function listarProductos(){

    $('.otraFila').remove();
    $('#tbl_productos').append(primeraFila);

    var parametros = {
        accion: 'listarProductos'
    };

    $.ajax({
        url: '../../../controlador/productoControl.php',
        data: parametros,
        dataType: 'json',
        type: 'post',
        cache: false,

        success: function(resultado){

            console.log(resultado);

            $.each(resultado.datos, function(j, dato){
                
                $('#nombre').html(dato.proNombre);
                $('#precio').html(dato.proPrecio);
                $('#unidad').html(dato.proUnidadMedida);
                $('#btn_actualizar').attr('onclick', 'modalActualizar('+dato.idProducto+')');
                $('#btn_eliminar').attr('onclick', 'modalEliminar('+dato.idProducto+')');

                $('#tbl_productos tbody').append(primeraFila.clone(true).attr('class','otraFila'));

            }); 

            $('#tbl_productos tbody tr').first().remove();

            $('#tbl_productos').DataTable({

                responsive: true,

                language: {
                    processing:     "Traitement en cours...",
                    search:         "Buscar",
                    lengthMenu:    "Mostrar _MENU_ Elementos",
                    info:           "Mostrando de _START_ a _END_ de _TOTAL_ elementos",
                    infoEmpty:      "Mostrando de 0 a 0 de 0 elementos",
                    infoFiltered:   "(filtro de _MAX_ elementos en total)",
                    infoPostFix:    "",
                    loadingRecords: "Chargement en cours...",
                    zeroRecords:    "No existe registro con ese nombre",
                    emptyTable:     "Aucune donnée disponible dans le tableau",
                    paginate: {
                        first:      "Premier",
                        previous:   "Anterior",
                        next:       "Siguiente",
                        last:       "Ultimo"
                    },
                    aria: {
                        sortAscending:  ": activer pour trier la colonne par ordre croissant",
                        sortDescending: ": activer pour trier la colonne par ordre décroissant"
                    }
                }
            });
            
        },
        error: function(e){

        }
    });

}

function abrirModalAgregar(){

    $('#mdl_agregar').modal();
    
    $('#btn_agregar').click(function(){
        
        agregarProducto();
    });

}

function agregarProducto(){

    if($('#txt_nombre').val() == '' || $('#txt_precio').val() == '' || $('#cb_unidad').val() == 0){

        alertaCamposVacios();

    }else{

        var parametros = {
            accion: 'agregarProducto',
    
            nombre: $('#txt_nombre').val(),
            precio: $('#txt_precio').val(),
            unidad: $('#cb_unidad').val()
        };
    
        $.ajax({
    
            url: '../../../controlador/productoControl.php',
            data: parametros,
            dataType: 'json',
            type: 'post',
            cache: false,
    
            success: function(resultado){
    
                console.log(resultado.mensaje);

                Swal.fire({
                    icon: 'success',
                    title: 'Muy bien',
                    text: resultado.mensaje,
                    confirmButtonText: 'Aceptar',
                    customClass: {
                        confirmButton: 'btnAceptar'
                      } 
                });

                limpiar();
                window.location.reload();
                
            },
            error: function(e){

                console.log(e);
            }
        });
    }
}

function limpiar(){

    $('#txt_nombre').val('');
    $('#txt_precio').val('');
    $('#cb_unidad').val(0);
}

function modalActualizar(id){

    idProducto = id;  
    listarDatosProducto();
    $('#mdl_actualizar').modal();
}

function listarDatosProducto(){

    var parametros = {
        accion: 'listarDatosProducto',
        idProducto: idProducto
    };

    $.ajax({
        url:'../../../controlador/productoControl.php',
        data:parametros,
        dataType:'json',
        type:'post',
        cache:'false',

        success:function(resultado){
            console.log(resultado);

            $.each(resultado.datos, function(j, dato){
                
                $('#txt_nombreA').val(dato.proNombre);
                $('#txt_precioA').val(dato.proPrecio);
                $('#cb_unidadA').val(dato.proUnidadMedida);
            });

            $('#btn_actualizarM').click(function(){
            
                actualizarDatosProducto(idProducto);

            });
        },
        error:function(e){
            console.log('ERROR');
        }
    });
}

function actualizarDatosProducto(id){

    var parametros = {

        nombre: $('#txt_nombreA').val(),
        precio: $('#txt_precioA').val(),
        unidad: $('#cb_unidadA').val(),
        accion: 'actualizarDatosProducto',
        idProducto: id
    };

    $.ajax({

        url: '../../../controlador/productoControl.php',
        data:parametros,
        dataType:'json',
        type: 'post',
        cache: false,

        success: function(resultado){

            console.log(resultado);

            Swal.fire({
                icon: 'success',
                title: 'Muy bien',
                text: 'Se actualizaron los datos correctamente',
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'btnAceptar'
                  } 
            });

            window.location.reload();

        },
        error:function(e){

            alertaError();
            console.log(e.responseText);
            
        }
    });
}

function modalEliminar(id){

    idProducto = id;   
    
    Swal.fire({
        title:'Deseas eliminar este producto?',
        icon:'question',
        showCancelButton: true,
        confirmButtonText:'Si',
        cancelButtonText:'No',
        customClass: {
            confirmButton: 'btnAceptar',
            cancelButton: 'btnCancelar',
        }

    }).then((result) => {

        if(result.isConfirmed){
            eliminarProducto();
            window.location.reload();
        }
    });

}

function eliminarProducto(){

    var parametros = {

        accion: 'eliminarProducto',
        idProducto: idProducto
    };

    $.ajax({

        url:'../../../controlador/productoControl.php',
        data:parametros,
        dataType: 'json',
        type:'post',
        cache:'false',

        success: function(resultado){

            console.log(resultado);
        },
        error:function(e){

            console.log(e.responseText);
        }
    });

}

