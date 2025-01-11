document.getElementById("hamburger").addEventListener('click', function() {
    let list = document.querySelector('#menuOptions')
    let menuIcon = document.getElementById('hamburger');
    if(menuIcon.name === "menu"){
        menuIcon.name = "close";
        list.classList.add('top-[80px]', 'opacity-100');
    }else{
        menuIcon.name = "menu"
        list.classList.remove('top-[80px]', 'opacity-100');  
    }
})


// Common function to close the menu
function closeMenu() {
    let list = document.querySelector('#menuOptions');
   
    let menuIcon = document.getElementById('hamburger');
    list.classList.remove('top-[80px]', 'opacity-100');
    
    // change the closeButton to menu button 
    if (menuIcon.name === 'close') { 
        menuIcon.name = 'menu'; 
    } 
}

//sare menu Options ko click karne par ,closebutton converts to menubutton
document.getElementById("menuOptions").addEventListener("click", function() {
    closeMenu();
})

//take to home page
document.getElementById("home").addEventListener('click', function(e) {
    e.preventDefault();
    //scroll to top of the website
    window.scrollTo({top: 0, behavior: 'smooth'}); 
})

// when click on about go to about page 
document.getElementById("about").addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "about.html";
})


// take to contact section 
document.querySelector('#contact').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('footerContact').scrollIntoView({ behavior: 'smooth' });       
});

// open login 
document.querySelector('#login').addEventListener('click', function() {
    document.getElementById("login-popup").style.display = "flex";  
})

//open signup
function openSignup(){
    document.getElementById("signup-popup").style.display = 'flex';
}

//close login and signup
function closePopup(event){
    document.getElementById(event).style.display = 'none';
}
