// =====================================
// Inclusive Heritage - Feedback JavaScript
// =====================================


const feedbackForm = document.getElementById("feedbackForm");



feedbackForm.addEventListener("submit", function(event){


    event.preventDefault();



    // Getting form values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const rating = document.getElementById("rating").value;

    const message = document.getElementById("message").value.trim();




    // Empty field validation

    if(name === "" || email === "" || rating === "" || message === ""){


        alert("Please fill all the required fields.");

        return;


    }




    // Email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailPattern.test(email)){


        alert("Please enter a valid email address.");

        return;


    }




    // Success Message

    alert(

        "Thank you for your valuable feedback! 😊\n\n" +

        "Name: " + name +

        "\nRating: " + rating +

        "\nYour suggestions have been recorded."

    );



    // Reset form

    feedbackForm.reset();



});




// Page Load Message

console.log("Feedback Page Loaded Successfully");