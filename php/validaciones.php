<?php

if(isset($_POST['submit'])){

	require_once 'conexion.php';
    
    $user_name = isset($_POST['username']) ? mysqli_real_escape_string($conexion, $_POST['username']) : false;
    $empresa = isset($_POST['empresa']) ? mysqli_real_escape_string($conexion, $_POST['empresa']) : false;
    $numero = isset($_POST['numeroTelefonico']) ? mysqli_real_escape_string($conexion, $_POST['numeroTelefonico']) : false;
    $email = isset($_POST['email']) ? mysqli_real_escape_string($conexion, $_POST['email']) : false;
    $asunto = isset($_POST['asunto']) ? mysqli_real_escape_string($conexion, $_POST['asunto']) : false; 
    
    $errores = array();

    // Validar campo nombre
	if(!empty($user_name) && !is_numeric($user_name) && !preg_match("/[0-9]/", $user_name)){
		$nombre_validado = true;
	}else{
		$nombre_validado = false;
		$errores['username'] = "El nombre es un campo obligatorio y no puede estar vacio";
	}
	
	// Validar empresa
	if(!empty($empresa) && !is_numeric($empresa) && !preg_match("/[0-9]/", $empresa)){
		$empresa_valida = true;
    }else{
		$empresa_valida = false;
		$errores['empresa'] = "Las empresa no son válido";
    }
    
    //validar Numero Telefonico
    if(!empty($numero) && is_numeric($numero) && preg_match("/[0-9]/", $numero) && strlen($numero) == 10){
        $numero_valido = true;
    }else{
        $numero_valido = false;
        $errores['numero'] = "El numero Telefonico es incorrecto";
    }
	
	// Validar el email
	if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
		$email_validado = true;
	}else{
		$email_validado = false;
		$errores['email'] = "El email no es válido";
	}
	
	// var_dump($errores);
	// die();
    
    $guardar_usuario = false;
	
	if(count($errores) == 0){
		$guardar_usuario = true;
		
		// INSERTAR USUARIO EN LA TABLA USUARIOS DE LA DB
        $sql = "INSERT INTO contactos VALUES(null, '$user_name', '$empresa', '$numero', '$email', '$asunto')";
        
		$guardar = mysqli_query($conexion, $sql);
		
		// var_dump(mysqli_error($conexion));
		// die();
		if ($guardar) {
			//echo "<script>alert('Los datos han sido almacenados correctamente');</script>";
			require_once 'envioEmail.php';
			//header('Location: http://localhost/Pagina_web_personal/#contactame');
		}
		else{
			echo "<script>alert('UPS!!!... Lo lamento, problemas internos, Intentalo más tarde');</script>";
			//header('Refrese:2; url=http://localhost/Pagina_web_personal/#contactame');
		}
		
	}else{
		echo "<script>alert('UPS!!!... Lo lamento, problemas en el servidor');</script>";
		//header('Refrese:2; url=http://localhost/Pagina_web_personal/#contactame');
	}
	
}

header('Location: http://localhost/Pagina_web_personal/#contactame');