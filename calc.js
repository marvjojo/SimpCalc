const num1 = parseInt( prompt('Enter No1: '));
const num2 = parseInt( prompt('Enter No2: '));
const operator = ( prompt('Enter operator(+, -, *,  /) '));

let result;

if(isNaN(num1)  || isNaN(num2)){
    alert('Incorrect  Input. Refresh and try again')
}
else{


    if(operator === '+'){
        result = num1 + num2;
    }
    else if(operator === '-'){
        result = num1 - num2;
    }
    else if(operator== '*'){
        result = num1 * num2;
    }
    else if(operator == '/'){
        result = num1 / num2;
    }
    alert(num1 + operator + num2 +' =' + result)
    
}