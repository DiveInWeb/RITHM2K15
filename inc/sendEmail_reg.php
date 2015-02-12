<?php

// Replace this with your own email address
$siteOwnersEmail = 'rakeshnitcalicut@gmail.com';


if($_POST) {

   $name = trim(stripslashes($_POST['regName']));
   $college = trim(stripslashes($_POST['regCollege']));
   $email = trim(stripslashes($_POST['regEmail']));
   $mobile = trim(stripslashes($_POST['regMobile']));
   $contact_message = trim(stripslashes($_POST['regMessage']));
   $event = trim(stripslashes($_POST['regEvent']));

   // Check First Name
	if (strlen($name) < 2) {
		$error['name'] = "Please enter your first name.";
	}
	// Check Last Name
	if (strlen($college) < 2) {
		$error['college'] = "Please enter your last name.";
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Please enter a valid email address.";
	}
	// Check Mobile Number
	if (strlen($mobile) < 10) {
		$error['mobile'] = "Please enter a valid mobile number.";
	}

	//Check Event Submission
	if (strlen($event) < 2) {
		$error['event'] = "Please select an event";
	}

   // Set Message
   $message .= "Email from: " . $name . "<br />";
	$message .= "Email address: " . $email . "<br />";
   $message .= "Message: <br />";
   $message .= $contact_message;
   $message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

   // Set From: header
   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!$error) {

      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);

		if ($mail) { echo "OK"; }
      else { echo "Something went wrong. Please try again."; }
		
	} # end if - no validation error

	else {

		$response = (isset($error['fname'])) ? $error['fname'] . "<br /> \n" : null;
		$response .= (isset($error['lname'])) ? $error['lname'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;

	} # end if - there was a validation error

}

?>