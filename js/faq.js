const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.innerHTML = "+";

        } else {

            answer.style.display = "block";
            icon.innerHTML = "−";

        }

    });

});