const birthDate = moment('2000-03-13');
const ageCounter = document.getElementById('age-counter');

function calculateAge(birthDate) {
    const now = moment();
    return moment.duration(now.diff(birthDate));
}

function displayAge() {
    const age = calculateAge(birthDate);
    const years = age.years().toString().padStart(2, '0');
    const months = age.months().toString().padStart(2, '0');
    const days = age.days().toString().padStart(2, '0');
    const hours = age.hours().toString().padStart(2, '0');
    const minutes = age.minutes().toString().padStart(2, '0');
    const seconds = age.seconds().toString().padStart(2, '0');
    const milliseconds = age.milliseconds().toString().padStart(3, '0');

    const ageString = `${years}-${months}-${days} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    ageCounter.textContent = ageString;
}

// Call displayAge initially to show the age
displayAge();

// Call displayAge every second to continuously update the age display
setInterval(displayAge, 50);


