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

document.getElementById('key-Pad').addEventListener('click', function(){
    
});