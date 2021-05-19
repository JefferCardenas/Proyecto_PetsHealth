<?php

?>

<div class="container vista-principal">

<div class="contenedorTitulo">
        <h1 class="titulo fredoka">Bienvenido Administrador</h1>
</div>
    
    <h4 class="texto-bienvenida text-center ">Hola <span class="user"> <?php echo $_SESSION["nombreUsuario"]; ?> </span>
        te presentamos
        algunos modulos que puedes realizar como <span class="rol">Administrador </span> </h4>
    <div class="row g-5 py-5">
        <div class="col-md-4 d-flex align-items-start">
            <div  class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <a href="asignarVeterinario/">
            <img src="../../componente/img/vistaGeneral/veterinarian (3).png" width="50px" alt="">
            </a> 
            </div>
            <div class="titulos-modulos ">
                <h2>Asignar citas
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit sit dignissimos nam pariatur ullam illum eum, enim neque accusamus illo non, asperiores
                    nihil at quidem expedita cumque debitis adipisci! Delectus?
                    .</p>
            </div>
        </div>
        <div class="col-md-4 d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <a href="verEmpleados/">
               <img src="../../componente/img/vistaGeneral/vet.png" width="50px" alt="">
            </a>
            </div>
            <div class="titulos-modulos ">
                <h2>
                Gestionar empledos
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit sit dignissimos nam pariatur ullam illum eum, enim neque accusamus illo non, asperiores
                    nihil at quidem expedita cumque debitis adipisci! Delectus?
                    .</p>
            </div>
        </div>
        <div class="col-md-4 d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <a href="gestionProductos/">
            <img src="../../componente/img/vistaGeneral/medicine.png" width="50px" alt="">
            
            </a>
            </div>
            <div class="titulos-modulos ">
                <h2>Gestionar productos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit sit dignissimos nam pariatur ullam illum eum, enim neque accusamus illo non, asperiores
                    nihil at quidem expedita cumque debitis adipisci! Delectus?
                </p>
            </div>
        </div>
        <!-- PARTE DOS -->
        <div class="col-md-6 d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <a href="verReporteGraficoCitas/">
            <img src="../../componente/img/vistaGeneral/health-report.png" width="50px" alt="">
            
            </a>
            </div>
            <div class="titulos-modulos ">
                <h2>ver reportes</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit sit dignissimos nam pariatur ullam illum eum, enim neque accusamus illo non, asperiores
                    nihil at quidem expedita cumque debitis adipisci! Delectus?
                </p>
            </div>
        </div>
        <div class="col-md-6 d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <a href="gestionServicios/">
            <img src="../../componente/img/vistaGeneral/veterinarian (2).png" width="50px" alt="">
            
            </a>
            </div>
            <div class="titulos-modulos ">
                <h2>Gestionar servicios</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit sit dignissimos nam pariatur ullam illum eum, enim neque accusamus illo non, asperiores
                    nihil at quidem expedita cumque debitis adipisci! Delectus?
                    .</p>
            </div>
        </div>

    </div>
</div>