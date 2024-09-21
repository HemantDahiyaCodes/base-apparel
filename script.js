const getEmail = document.getElementById('email');
const checkBtn = document.querySelector('button');
const verifyText = document.querySelector('.verify');

const verifyUser = () => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(pattern.test(getEmail.value)) {
        verifyText.innerHTML = "Email has been verified &#10004;"
    }

    else {
        verifyText.innerHTML = "Please enter a valid email &#10060;"
    }
}

checkBtn.addEventListener('click', verifyUser)