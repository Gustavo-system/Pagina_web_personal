<?php

    $host = "LocalHost";
    $user = "root";
    $pws = "";
    $database = "contacto";
    

    $conexion =  mysqli_connect($host, $user, $pws, $database);

    if (!$conexion) {
        die('No pudo conectarse: ' . mysqli_error());
    }
    echo 'Conectado satisfactoriamente';
    // mysqli_close($conexion);

    ?>
    