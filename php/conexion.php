<?php

    $host = "localhost";
    $user = "root";
    $pws = "";
    $database = "contacto";
    

    $conexion =  mysqli_connect($host, $user, $pws, $database);
    mysqli_query($conexion, "SET NAMES 'utf8'");

    if(!isset($_SESSION)){
        session_start();
    }

    // if (!$conexion) {
    //     die('No pudo conectarse: ' . mysqli_error());
    // }
    // echo 'Conectado satisfactoriamente';
    // // mysqli_close($conexion);

?>
    