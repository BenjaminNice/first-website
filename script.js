// Grab references to the switch button and filament
const switchButton = document.getElementById('switch');
const filament = document.getElementById('filament');

// State variable to track if the bulb is on
let isOn = false;

// Function to toggle the switch
function toggleSwitch() {
  isOn = !isOn; // Toggle the state

  if (isOn) {
    switchButton.textContent = 'Switch: ON';
    switchButton.classList.remove('off');
    filament.style.background = '#ffd700'; // Glow like a filament
  } else {
    switchButton.textContent = 'Switch: OFF';
    switchButton.classList.add('off');
    filament.style.background = 'transparent';
  }
}

// Add event listener to the switch button
switchButton.addEventListener('click', toggleSwitch);

