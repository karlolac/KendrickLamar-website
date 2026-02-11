document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});



const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email');

        if (name.length < 2) {
            feedback.style.color = "red";
            feedback.textContent = "Molimo unesite ispravno ime.";
        } else {
            feedback.style.color = "green";
            feedback.textContent = `Hvala ${name}, poruka je uspješno poslana!`;
            contactForm.reset(); 
        }
    });
}