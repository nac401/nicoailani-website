function sendEmail() {
    const templateParams = {
        title: document.querySelector('.individual__work__title').textContent,
        email: document.querySelector('#email').value
    };

    emailjs.send("service_ef49n7g", "template_ai1ae4y", templateParams).then(
        ()=> alert("Request sent!").catch(()=>alert("Request not sent. Please go to contact page.")));
}