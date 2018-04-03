<?php 
//define variables and set to empty values

$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$website = test_input($_POST["website"]);
	$comment = test_input($_POST["comment"])	;
	$gender = test_input($_POST["gender"]);
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
	$nameErr = "Only letters and white space allowed";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$emailErr = "Invalid email format. Please use-- example@email.com--format";
}

if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website)) {
	$websiteErr = "Invalid URL";
}
 ?>

Name: <input type="text" name="name" value="<?php echo $name; ?>">

Email: <input type="text" name="email" value="<?php echo $email; ?>">

Website: <input type="text" name="website" value="<?php echo $website; ?>">

Comment: <textarea name="comment" rows="5" cols="40">
	<?php echo $comment; ?>
</textarea>

Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male










