let currentTime = 14;
let isPedestrianWaiting = false;
let isEmergencyVehicleApproaching = true;
let trafficDensity = 'high';
let lightColor;

//Implementing Conditional Logic
//For emergencies vechicles only

if (isEmergencyVehicleApproaching === true){
    lightColor = 'green';
    console.log('EMERGENCY OVERRIDE: ALL LIGHTS GREEN FOR EMERGENCY VECHICLE! ' + lightColor);

} else if (isEmergencyVehicleApproaching === false){
    lightColor = 'red';
}

//Padestrain Request
if (isPedestrianWaiting === true && trafficDensity === 'low'){
    lightColor = 'red';
    console.log('Pedestrians crossing activated. Red light for vechiles');
}else if (isPedestrianWaiting === true && trafficDensity === 'high'){
    lightColor = 'green';
    console.log('WAIT UNTIL TRAFFIC DENSITY IS LOW');
}else if (isPedestrianWaiting === false && trafficDensity === 'high'){
    lightColor = 'green';
    console.log(`Traffic is ${trafficDensity}, TRAFFIC CAN PROCEED!`);
}else if (isPedestrianWaiting === false && trafficDensity === 'medium'){
    lightColor = 'green';
    console.log(`Traffic is ${trafficDensity}, TRAFFIC CAN PROCEED!`);
}else if (isPedestrianWaiting === false && trafficDensity === 'low'){
    lightColor = 'green';
    console.log(`Traffic is ${trafficDensity}, TRAFFIC CAN PROCEED!`);
}
    switch (trafficDensity) {
  case 'high':
    lightColor = 'green';
    console.log(lightColor + ' Rush hour - prioritizing vehicle flow');
    break; // Important: Exits the switch statement
  case 'low':
    lightColor = 'yellow';
    console.log(lightColor);
    break; // Important: Exits the switch statement
  case 'medium':
    lightColor = 'yellow'; // Or 'orange', 'red', based on what 'medium' implies for you
    console.log(lightColor);
    break; // Important: Exits the switch statement
  default: // This case handles any value of trafficDensity that doesn't match 'high', 'low', or 'medium'
    lightColor = 'red'; // A default, safe color for unknown states
    console.log(lightColor + ' - Unknown traffic density. Defaulting to red.');
    break; // Important: Exits the switch statement
}
console.log('Final light color set to: ' + lightColor);
