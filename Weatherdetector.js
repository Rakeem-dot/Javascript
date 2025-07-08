//Declaring variables
let currentTemperature;
let isRaining = true;
let timeOfDay = 'morning';
let userPreference = 'eco';
let motionDetected = false;
let name = 'Rakeem Broomes'.toLowerCase();


//calcualtions
const kelvin = 400;
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5);

currentTemperature = Math.floor(fahrenheit);

//Implementing Coditional Logic
console.log(`Welcome ${name}`);
if (currentTemperature > 78){
    if (userPreference === 'cool'){
        console.log("Turning on AC. It's hot!");
    }else if (userPreference === 'eco'){
        console.log("Consider opening windows, it's warm but trying to save energy.");
    } else{
        console.log("It's warm, but respecting your preference.")
    }
}else if (currentTemperature < 40){
    console.log(`Outside is cold, it is currently ${currentTemperature} degrees.`);
}

if (isRaining === true && timeOfDay === 'morning'){
    console.log("Good morning! Don't forget your umbrella");
}else if (isRaining === true || timeOfDay === 'afternoon' || 'evening'){
    console.log("It's raing. Drive Safely!");
}

(motionDetected === true) ? console.log('Alert! Motion dected near the entrance') : 
console.log('No Motion detected');

switch (timeOfDay){
    case 'morning':
        console.log('Time for your morning routine');
    break;

    case 'afternoon':
        console.log('Enjoy your afternoon!');
    break;

    case 'evening':
        console.log('Winding down for the evening');
    break;

    default:
        console.log('Unrecognized time of day.');
    break;
}
