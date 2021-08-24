function getPin (){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 number pin.and return the function', pin);
        return getPin();
    }
};

function genaratePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-Pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typed= document.getElementById('typed-numbers').value;
    const errorMessege = document.getElementById('pin-matched');
    const successMessege = document.getElementById('wrong-pin');
    if(pin == typed){
        errorMessege.style.display = 'block';
        successMessege.style.display = 'none';
    }
    else{
        successMessege.style.display = 'block';
        errorMessege.style.display = 'none';
    }
};