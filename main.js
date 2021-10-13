// Create a registration system

var objPeople = [
	{
		username: 'sam',
		password: 'password25'
	},
	{
		username: 'matt',
		password: 'password88'
	},
	{
		username: 'chris',
		password: 'password3'
	}
]

// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('username').value
	// retreive data from password and store in password variable
	var password = document.getElementById('password').value

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to 
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			window.location.href="./index.html";
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			console.log('incorrect username or password')
			alert('username or password is wrong please try again')
			break
		}
	}
}

// register functionality
function registerUser() {
    
			  
			
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			
			// alert user that the username is take
			alert('That username is already in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
		else if (registerPassword.length >= 8 && registerUser != objPeople[i].username){
			document.getElementById('loginForm').style.display = "block";
			document.getElementById('regForm').style.display = "none";
		}
	}
	
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
	


}


// dark theme code 
function darkTheme(){

    // document.getElementById('navbar').style.display = "none";
    document.getElementById('darkButton').style.background = "yellow";
    document.getElementById('main').style.color = "yellow";
    document.getElementById('fotter').style.background = "#333"
    document.getElementById('fotter_middle').style.color = "white"
    document.getElementById('fotter_left').style.color = "white"
    document.getElementById('fotter_right').style.color = "white"
    document.getElementById('fotter_bottom').style.color = "white"
    document.body.style.background = "black";
    document.getElementById('darkButton').style.display = "none";
    document.getElementById('lightButton').style.display = "block";

}

		    
// light theme code 
function lightTheme(){

    // document.getElementById('navbar').style.display = "none";
    document.getElementById('darkButton').style.background = "white";
    document.getElementById('main').style.color = "black";
    document.getElementById('fotter').style.background = "#ccc"
    document.getElementById('fotter_middle').style.color = "black"
    document.getElementById('fotter_left').style.color = "black"
    document.getElementById('fotter_right').style.color = "black"
    document.getElementById('fotter_bottom').style.color = "black"
    document.body.style.background = "#f1f5f8";
    document.getElementById('lightButton').style.display = "none";
    document.getElementById('darkButton').style.display = "block";

}