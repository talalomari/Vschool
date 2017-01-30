
var readlineSync= require("readline-sync")
var arrayOfNumber=[];
var number1 = readlineSync.question("Please enter first number:");
var number2 = readlineSync.question("Please enter second number:");
var number3 = readlineSync.question("Please enter third number:");


if (number1<number2 && number1<number3)  
{  
        if (number2<number3)  
        {  
            console.log(number1 + ", " + number2 + ", " +number3);  
        }  
        else  
        {  
            console.log(number1 + ", " + number3 + ", " +number2);  
        }  
}  
else if (number2<number1 && number2 <number3)  
{  
        if (number1<number3)  
        {  
             console.log(number2 + ", " + number1 + ", " +number3);  
        }  
        else  
        {  
             console.log(number2 + ", " + number3 + ", " +number1);  
        }  
}  
else if (number3<number1 && number3<number2)  
{  
        if (number1<number2)  
        {  
            console.log(number3 + ", " + number1 + ", " +number2);  
        }  
        else  
        {  
            console.log(number3 + ", " + number2 + ", " +number1);  
        }  
}  
        
 
