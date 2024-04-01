<?php
if($_POST){
    $to_email = "10tentourism@gmail.com"; 
    $subject = "New message from " . $_POST["name"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    if(mail($to_email, $subject, $message, $headers)){
        echo "Your message has been sent successfully.";
    } else{
        echo "Unable to send email. Please try again.";
    }
}
?>
