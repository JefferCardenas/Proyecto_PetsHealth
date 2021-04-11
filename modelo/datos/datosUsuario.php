<?php
class datosUsuario
{
    private $miConexion;
    private $retorno;

    public function __construct(){
        $this->miConexion= Conexion::singleton();
        $this->retorno = new stdClass();
    }

    /**
     * Obtiene los datos del empleado al iniciar la sesión
     * se agrupa la cantidad de roles que tiene dicho usuario 
     * dado su login y password
     */
    public function iniciarSesion(Usuario $user){
        try{
            $sql="SELECT * ,COUNT(ur.idUsuario) as cantidadRoles 
            FROM usuario  as u INNER JOIN persona as p
            on u.idPersona=p.idPersona inner join empleado as e on
              e.idPersona=p.idPersona inner join usuariorol as ur on
              ur.idUsuario=u.idUsuario inner join rol  as r on r.idRol=ur.idRol
              where usuLogin=? and usuPassword=?";

            $resultado=$this->miConexion->prepare($sql);
            $resultado->bindParam(1,$user->getLogin());
            $resultado->bindParam(2,$user->getPassword());
            $resultado->execute();  
            if($resultado->rowCount()>0){
                $this->retorno->mensaje="Datos del Empleado";
                $this->retorno->estado=true; 
                $this->retorno->datos=$resultado->fetchObject();
            }else{
                $this->retorno->mensaje="Error por favor revisar las credenciales";
                $this->retorno->estado=false; 
                $this->retorno->datos=null;
            }                 
        }catch(PDOException $ex){
            $this->retorno->estado=false;
            $this->retorno->mensaje=$ex->getMessage();
            $this->retorno->datos=null;
        }
        return $this->retorno;
    }

    /**
     * Obtengo el usuario  mediante el correo
     * para recuperar contraseña
     */
    public function obtenerUsuario($txtUser){
        try{
            $sql="SELECT  p.perIdentificacion ,p.perCorreo ,
             p.perNombre ,p.perApellido ,u.idUsuario  FROM persona as p
            INNER JOIN usuario as u on u.idPersona=p.idPersona
            WHERE p.perCorreo=?";
            $resultado=$this->miConexion->prepare($sql);
            $resultado->bindParam(1,$txtUser);
            $resultado->execute();  
            if ($resultado->rowCount() > 0) {
                $this->retorno->estado = true;
                $this->retorno->mensaje = "datos del usuario";
            } else {
                $this->retorno->estado = false;
                $this->retorno->mensaje = "No existe usuario con ese correo en nuestro sistema ";
            }
                $this->retorno->datos=$resultado->fetchObject();         
        }catch(PDOException $ex){
            $this->retorno->estado=false;
            $this->retorno->mensaje=$ex->getMessage();
            $this->retorno->datos=null;
        }
        return $this->retorno;
    }

     // * actualiza la contraseña  del usuario 
   public function actualizarPaswordUsuario($password,$idUsuario){
    try{
        $sql="UPDATE usuario SET usuPassword=? WHERE idUsuario=?";
        $resultado=$this->miConexion->prepare($sql);
        $resultado->bindParam(1, $password);
        $resultado->bindParam(2, $idUsuario);
        $resultado->execute();
     // validar si hubo cambios en las filas   
        if ($resultado->rowCount() > 0) {
         $this->retorno->estado=true;
         $this->retorno->mensaje="Contraseña del usuario actualizado con exito";
     } else {
         $this->retorno->estado=false;
         $this->retorno->mensaje="Error al cambiar la Contraseña del usuario";
     }
     $this->retorno->datos = $resultado->fetchObject();

                            
    } catch (PDOException $ex) {
        $this->retorno->estado=false;
        $this->retorno->mensaje=$ex->getMessage();
        $this->retorno->datos=null; 
    }
    return $this->retorno;
}
}