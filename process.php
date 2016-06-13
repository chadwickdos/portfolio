<?php
$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$subject = 'Contact Form - www.richardlamoste.com';
$message = $data->name.' | '.$data->email.' | '.$data->message;
// echo "Name : ".$data->name."\n";
// echo "Email : ".$data->email."\n";
// echo "Message : ".$data->message."\n";

echo 'Message sent. Thanks!';

mail('chadwickdos@gmail.com', $subject, $message); 
?>