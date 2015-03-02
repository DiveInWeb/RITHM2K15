<?php
$conn=mysql_connect("localhost", "", ""); // localhost , db name, password
mysql_select_db('',$conn); //table name
$myemail ="rithm2k14@regencyengg.com";

$name=$_POST['name'];
$college=$_POST['college'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$address=$_POST['address'];
$gender=$_POST['gender'];
$event2=$_POST['event2'];
/* $aco=$_POST['aco']; */

$sql = "INSERT INTO reg (`name`, `college`, `phone`, `email`, `address`,`gender`,`event`) values('".$name."','".$college."','".$phone."','".$email."','".$address."','".$gender."','".$event2."')";

       mysql_query($sql) or die(mysql_error());


       $to = $_POST['email'];

       $subject = "Thank you for registring with RITHM 2K14";

       $message = "Greetings from RITHM Team! \r\r Dear $name, \r\r Welcome to RITHM 2K14!\r\r You are successfully registred with RITHM 2K14 in $event2 event with the email address: $email . \r\r\rThanks & Regards,\r\r RITHM 2K14 Team";

       $headers = 'From: RITHM2K14@gmail.com' . "\r\n" .

    'Reply-To: RITHM2K14@gmail.com' . "\r\n" .

    'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
	
	$to = $myemail; 
	$email_subject = "Registration form submission: $name";
	$email_body = "You have received a new Registration. "." Here are the details:\n Name: $name \n College: $college \n  Email: $email \n Phone: $phone \n Address: \n $address \n Events: $event2 \n Gender: $gender \n"; 
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);

?>
<html><body bgcolor="url(../images/tq.jpg)"><center><h2><font color=black><br><br><br><br><br><br><br><br><br><br><br><br>Registration is completed successfully. <br>Thank you for participating in RITHM 2k14.</hr><br> 
<h3>To go back to home page, <a href="http://ritcse.com/2k14/Home/home.html">Click Here</a></h3>
</font></center></body></html>
