// =====================================
// Inclusive Heritage - Main JavaScript
// =====================================


// Website Loaded Message

document.addEventListener("DOMContentLoaded", function(){


    console.log("Inclusive Heritage Website Loaded Successfully");



});




// =====================================
// Smooth Scrolling
// =====================================


const links = document.querySelectorAll("a[href^='#']");


links.forEach(link =>{


    link.addEventListener("click", function(event){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            event.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});




// =====================================
// Navigation Hover Effect
// =====================================


const navLinks = document.querySelectorAll(".navbar ul li a");


navLinks.forEach(link =>{


    link.addEventListener("mouseover", function(){


        this.style.transition="0.3s";


    });


});




// =====================================
// Current Year Footer Update
// =====================================


const year = new Date().getFullYear();


const footerText = document.querySelector("footer p");


if(footerText){


    footerText.innerHTML =

    "© " + year +

    " Inclusive Heritage | Enhancing Immersion and Accessibility at Mysore Palace";


}