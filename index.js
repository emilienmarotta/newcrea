/* -- FAQ -- */

const faqBoxWrapperQuestions = document.getElementsByClassName("faq-box-wrapper-question");

for (let i = 0; i < faqBoxWrapperQuestions.length; i++) {
    faqBoxWrapperQuestions[i].addEventListener("click", function(event) {
        event.preventDefault();
        
        const button = this.querySelector(".faq-box-wrapper-question-visible");
        const faqBoxWrapperQuestionHidden = this.querySelector(".faq-box-wrapper-question-hidden");
        
        for (let j = 0; j < faqBoxWrapperQuestions.length; j++) {
            if (faqBoxWrapperQuestions[j] !== this) {
                const otherButton = faqBoxWrapperQuestions[j].querySelector(".faq-box-wrapper-question-visible");
                const otherContent = faqBoxWrapperQuestions[j].querySelector(".faq-box-wrapper-question-hidden");

                otherButton.classList.remove("active");
                otherContent.style.maxHeight = null;
            }
        }

        if (button.classList.contains("active")) {
            button.classList.remove("active");
            faqBoxWrapperQuestionHidden.style.maxHeight = null;
        } else {
            button.classList.add("active");
            faqBoxWrapperQuestionHidden.style.maxHeight = faqBoxWrapperQuestionHidden.scrollHeight + "px";
        }
    });
}