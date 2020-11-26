
function valid() {
	
	var email = document.getElementById('email1').value;
	var user_name = document.getElementById('un').value;
	var password = document.getElementById('pass').value;
	var confirm_password = document.getElementById('confirm').value;
	var phone = document.getElementById('phoneno').value;


    function change(){

		document.getElementById('form1').style.height = "490px";
		document.getElementById('btn').style.left = "790px";
		document.getElementById('btn').style.top = "640px";
	}


    if( user_name.search(/[a-zA-Z]/) == -1)
	{
		 document.getElementById('error').innerHTML = "*Include atleast 1 character in username.";
		 change();
         return false;
	}	

    if( (email.search(/[@]/) == -1) || (email.search(/[.]/) == -1) )
	{
		 document.getElementById('error').innerHTML = "*Invalid format of email.";
		 change();
         return false;
	}

	if(email.indexOf('@') == 0 )
	{
		 document.getElementById('error').innerHTML = "*Invalid position of @ in email.";
		 change();
         return false;
	}

	if( (email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.') )
	{
		 document.getElementById('error').innerHTML = "*Invalid position of . in email.";
		 change();
         return false;
    }
    
    if(isNaN(phone))
	{
		 document.getElementById('error').innerHTML = "*Phone number should contain only digits.";
		 change();
         return false;
	}

	if(phone.length != 10)
	{
		 document.getElementById('error').innerHTML = "*Phone number should be of length 10.";
		 change();
         return false;
	}

	if( password.search(/[0-9]/) == -1)
	{
		 document.getElementById('error').innerHTML = "*Include atleast 1 digit in password.";
		 change();
         return false;
	}

    if( password.search(/[a-z]/) == -1)
	{
		 document.getElementById('error').innerHTML = "*Include atleast 1 lower case character in password.";
		 change();
         return false;
	}

	if( password.search(/[A-Z]/) == -1)
	{
		 document.getElementById('error').innerHTML = "*Include atleast 1 upper case character in password.";
		 change();
         return false;
	}

	if( password.search(/[~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\;\:\'\"\,\<\.\>\/\?]/) == -1)
	{
		 document.getElementById('error').innerHTML = "*Include atleast 1 special character in password.";
		 change();
         return false;
	}

	if( (password.length < 5)  || (password.length > 10) )
	{
		 document.getElementById('error').innerHTML = "*Password length should be between 5 to 10 characters.";
		 change();
         return false;
	}

	if(confirm_password != password )
	{
		 document.getElementById('error').innerHTML = "*Passwords are different.";
		 change();
         return false;
	}


}  