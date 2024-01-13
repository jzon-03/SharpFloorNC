<?php

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

if($_POST['body']){
    $mainSuccess = mail("jguevarra@sharpfloornc.com",$_POST['subject'], $_POST['body'], implode("\r\n", $headers));
    $success = mail("6077686410@mms.att.net",'', 'Customer sent you a message');

    // Send the email
    if(!$mainSuccess){
        header('HTTP/1.1 500 Internal Server Error');
        echo $mainSuccess;
    }else{
        header('HTTP/1.1 200 OK');
        echo $mainSuccess;
    }
}
?>