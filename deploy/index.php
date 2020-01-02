<?php
    $error_message="";
    if(preg_match('/http|www/i',$comments)) {
        $error_message .= "We do not allow a url in the comment.<br />";
    }    
    if(strlen($error_message) > 0) {
        died($error_message);
    }
    else{
	if(!empty($_POST['website'])) die();
	$userName 		= $_POST['myName'];
	$userTel	 	= $_POST['myTel'];
	$to 			= "jclc.ast@mail.ru";
    $subject 		= "kaini@kashok.kz";
    $lang           = $_POST['action'];
	$body 			= "Information Submitted:";
	$body .= "\r\n Имя: " . $userName;
    $body .= "\r\n Телефон: " . $userTel;
    $body .= "\r\n Интересован(-а): " . $lang;
    $headers = 'From: kaini@kashok.kz';
	if(mail($to, $subject, $body, $headers)){
		echo "success";
		header("Location:https://kashok.kz/");
	}
	else{
		echo "Couldn't send";
	}
    
    header("Location:https://kashok.kz/");
    }
?>

<!-- $error_message="";
    if(preg_match('/http|www/i',$comments)) {
        $error_message .= "We do not allow a url in the comment.<br />";
    }    
    if(strlen($error_message) > 0) {
        died($error_message);
    }
    else{
	if(!empty($_POST['website'])) die();
	$userName 		= $_POST['myName'];
	$userTel	 	= $_POST['myTel'];
	$userMessage 		= $_POST['myMessage'];
	$to 			= "masujimk@gmail.com";
	$subject 		= "Email from my website";
	$body 			= "Information Submitted:";
	$body .= "\r\n Name: " . $userName;
	$body .= "\r\n Email: " . $userEmail;
	$body .= "\r\n Message: " . $userMessage;
    mail($to, $subject, $body);
    } -->