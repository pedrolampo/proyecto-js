let mensaje = [];

class ContactMessage {
    constructor(email, name, surname, subject, country, zip, message) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.subject = subject;
        this.country = country;
        this.zip = zip;
        this.message = message;
    }
}

$('#submitButton').on('click', function (e) {
    e.preventDefault();
    mensaje.push(
        new ContactMessage(
            $('#inputEmail4')[0].value,
            $('#inputName')[0].value,
            $('#inputSurname')[0].value,
            $('#inputSubject2')[0].value,
            $('#inputCountry')[0].value,
            $('#inputZip')[0].value,
            $('#message')[0].value
        )
    );
    $(
        `<div id="thankMessageDiv" style="display:none"><p class="thankMessage">¡Gracias por tu mensaje, ${
            $('#inputName')[0].value
        }!</p><p class="thankMessage">Nos contactaremos al email proporcionado.</p></div>`
    ).insertBefore('#formContact');
    $('#thankMessageDiv').slideDown('slow');
    sessionStorage.setItem(
        `mensaje${$('#inputName')[0].value}`,
        JSON.stringify(mensaje)
    );
    $(this).off(e);
});
