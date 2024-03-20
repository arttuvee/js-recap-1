const tempF = prompt('Enter the temperature in Fahrenheit: ');
const tempC = ((tempF - 32) * 5) / 9;

document.querySelector('#temp').innerHTML =
  tempF + '°F in celsius: ' + tempC + '°C';
