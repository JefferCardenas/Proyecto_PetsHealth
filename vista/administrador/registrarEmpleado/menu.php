<?php

    extract($_REQUEST);
?>

<nav class="menu">

    <div class="logo">
        <img src="https://i.imgur.com/yzjVfUS.png" alt="Logo de la empresa" width="100px" height="60px">
    </div>

        <input type="checkbox" id="btn_menu">
        <label for="btn_menu" id="icono_menu"><i class="fas fa-bars"></i></label>

    <div class="menu-items uno">
        <ul>
            <li class="item">
                <a>Home</a>
            </li>
            <li class="sub_menu item">
                <a>Menu Despleglable <i class="fa fa-caret-down"></i></a>

                <ul>
                    <li><a href="#">Citas Asignadas</a></li>
                    <li><a href="#">Citas No Programadas</a></li>                    
                </ul>
            </li>
            <li class="item">
                <a>About</a>
            </li>
        </ul>
    </div> 
</nav>