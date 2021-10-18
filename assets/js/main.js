/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

function show(){

	var name = document.getElementById("name").value;
	// still need to add email config .indexOf("@") 
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var api = "https://21c7bl605f.execute-api.us-east-1.amazonaws.com/Dev/contactus";

	email.toString();
	
	// set parameters for dynamodb table
	var params = {
		"name":name,
		"email":email,
		"message":message,
	};
	
	
	// calling api function
	var xhttp = new XMLHttpRequest();
	
	// when button pressed will run lambda function
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			// this will return lambda asnwer as an alert
			alert(xhttp.responseText);
		}
	};

	// email characters
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// checking if email is correct
	var checkemail = mailformat.test(email);
	
	// errors if wrong or no values are insert
	if(name === "" || name === null){
		alert("Please insert a name!");
	}else if (!checkemail){
		alert("Not a valid e-mail!");
	}else if(message === "" || message === null){
		alert("Please insert a nice comment!");

	// this will run the serveles service
	} else{
		
		// calling post method on api getway
		xhttp.open("POST", api, false);
		
		// sending parameters to lambda 
		var a = xhttp.send(JSON.stringify(params));
		
		// this will reset the input values once data submitted 
		document.getElementById("name").value = '';
		document.getElementById("email").value = '';
		document.getElementById("message").value = '';

	}
}




