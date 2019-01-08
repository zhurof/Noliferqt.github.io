<?php 	
	$myemail = "lenk-v@mail.ru";//e-mail адресата 
		
	$phone = $_POST["phone"];
	$theme = $_POST["theme"];	
	$message = "Заявка с сайта - резчики-кровли.рф Номер телефона - $phone";
	
	mail($myemail, $theme, $message);
?>