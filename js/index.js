let btn = document.getElementById('blue-button');
let fn = document.getElementById('name');
let em = document.getElementById('email');
let msg = document.getElementById ('message');

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function validateForm(event) {
    event.preventDefault();

    let ui = {};
    let errors = [];

    fn.value = fn.value.trim();
    em.value = em.value.trim();
    msg.value = msg.value.trim();


    if (em.value) {
        if (pattern.test(em.value)) {
            ui.user_email = em.value;
        } else {
            errors.push('Opps, your email address is incorrect!');
        }
    } else {
        errors.push('Please kindly input your email address!')
    }

    if (fn.value) {
            ui.user_name = fn.value;
    } else {
            errors.push('Please kindly enter your full name!');
    }

    if (msg.value) {
        errors.push('Please kindly leave your message!');
    }
   
    if (errors.length === 0) {
        console.log('User Input:', ui);

    fn.value = '';
    em.value = '';
    msg.value = '';
    } else {
        console.error('Errors:', errors);
    }
}

btn.addEventListener ('click', validateForm);