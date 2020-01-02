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
	$userEmail	 	= $_POST['myEmail'];
	$userMessage 		= $_POST['myMessage'];
	$to 			= "jclc.ast@mail.ru";
	$subject 		= "kaini@kashok.kz";
	$body 			= "Information Submitted:";
	$body .= "\r\n Имя: " . $userName;
	$body .= "\r\n Почта: " . $userEmail;
    $body .= "\r\n Вопрос: " . $userMessage;
    $headers = 'From: kaini@kashok.kz';
	if(mail($to, $subject, $body, $headers)){
		echo "success";
		header("Location:https://kashok.kz/");
	}
	else{
		echo "Couldn't send";
	}
   
    }
?>

