const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
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
    if (
        $('#inputEmail4')[0].value.length &&
        $('#inputName')[0].value.length &&
        $('#inputSurname')[0].value.length &&
        $('#inputSubject2')[0].value.length &&
        $('#inputCountry')[0].value.length &&
        $('#inputZip')[0].value.length &&
        $('#message')[0].value.length &&
        $('#gridCheck').is(':checked')
    ) {
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
        $.post(URLPOST, mensaje[0], function (req, res, state) {
            if (state.status === 201) {
                sessionStorage.setItem(
                    `mensaje${$('#inputName')[0].value}`,
                    JSON.stringify(req)
                );
                $(
                    `<div id="thankMessageDiv" style="display:none"><p class="thankMessage">¡Gracias por tu mensaje, ${
                        $('#inputName')[0].value
                    }!</p><p class="thankMessage">Nos contactaremos al email ${
                        $('#inputEmail4')[0].value
                    }.</p></div>`
                ).insertBefore('#formContact');
                $('#thankMessageDiv').slideDown('slow');
            } else {
                $(
                    `<div id="thankMessageDiv" style="display:none"><p class="thankMessage">Lo sentimos, en este momento no podemos procesar la información.</p>
                    <p class="thankMessage">Por favor inténtelo de nuevo más tarde.</p></div>`
                ).insertBefore('#formContact');
                $('#thankMessageDiv').slideDown('slow');
                return;
            }
        });
        $(this).off(e);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que te faltan campos por rellenar!',
        });
    }
});
