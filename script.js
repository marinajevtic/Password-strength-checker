const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const strengthBar = document.getElementById("strength-level");
const submitButton = document.querySelector("button");

password.addEventListener("input", function(){
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = '';
    let barWidth = 0;
    let barColor = 'red';

    if(passwordLength === 0){
        strengthValue = '';
        barWidth = 0;
    }else{
        const hasLetters = /[a-zA-Z]/.test(passwordValue);
        const hasNumbers = /\d/.test(passwordValue);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

        if(passwordLength<6){
            strengthValue = 'Weak';
            barWidth = 33;
        }else if(passwordLength<10){
            strengthValue = hasLetters && hasNumbers ? 'Medium' : 'Weak';
            barWidth = 66;
            barColor = hasLetters && hasNumbers ? 'orange' : 'red';
        }else{
            strengthValue = hasLetters && hasNumbers && hasSpecial ? 'Strong' : 'Medium';
            barWidth = hasLetters && hasNumbers && hasSpecial ? 100 : 66;
            barColor = hasLetters && hasNumbers && hasSpecial ? 'green' : 'orange';
        }
    }
    

    strength.textContent = strengthValue;
    strengthBar.style.width = `${barWidth}%`;
    strengthBar.style.backgroundColor = barColor;
    message.style.display = "block";
});

submitButton.addEventListener("click", function(){
    const passwordType = password.getAttribute('type');
    if(passwordType === 'password'){
        password.setAttribute('type', 'text');
    }else{
        password.setAttribute('type', 'password');
    }
});
