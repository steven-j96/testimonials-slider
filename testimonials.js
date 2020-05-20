
var userImage = [];
// Create User Images -->
userImage[0] = new Image();
userImage[0].src = 'images/image-john.jpg';

userImage[1] = new Image();
userImage[1].src = 'images/image-tanya.jpg';

// <-- 

var userQuote = [];
//  Create User Quotes -->
userQuote[0] = document.createElement("p");
userQuote[0].innerHTML = "If you want to lay the best foundation possible I'd recommend taking this course. Thd depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."

userQuote[1] = document.createElement("p");
userQuote[1].innerHTML = "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in th ejob of my dreams and so excited about the future."
// <--

var userName = []
//  Create User Names-->
userName[0] = document.createElement("p");
userName[0].innerHTML = "John Tarkpor";


userName[1] = document.createElement("p");
userName[1].innerHTML = "Tanya Sinclair";
// <--

var userRole = [];
//  Create User Role -->
userRole[0] = document.createElement("p");
userRole[0].innerHTML = "Junior Front End Developer";

userRole[1] = document.createElement("p");
userRole[1].innerHTML = "UX Engineer"
// <--


// Add click listeners for next and previous -->
var nextUser = document.querySelector(".next-user");
var previousUser = document.querySelector(".previous-user");

nextUser.addEventListener("click", function(){
    nextQuote();
})

previousUser.addEventListener("click", function(){
    previousQuote();
})
// <--


// Change content to next/previous item in array -->
function createUser() {
    document.querySelector(".user").src = userImage[i].src;
    document.querySelector(".quote-text").innerHTML = userQuote[i].textContent;
    document.querySelector(".user-name").innerHTML = userName[i].textContent;
    document.querySelector(".user-role").innerHTML = userRole[i].textContent;
}

// <--


var i = 0; 
function nextQuote (){
    // if i is the length of the array reset i to 0
    if (i === userName.length-1){
        i = 0;
    }
    // else add 1 to i
    else{
        i++;
    }
    createUser();
}

function previousQuote(){
    // if i is 0 reset i to the length of the array
    if (i === 0){
        i = userName.length-1;
    }
    // else take 1 from i
    else {
        i--;
    }
    createUser();
}
