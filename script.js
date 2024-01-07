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




function calculateAge_actual_time(birthDate) {
    const now = new Date();
    let age = now - birthDate;

    const years = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    age -= years * (1000 * 60 * 60 * 24 * 365.25);

    const days = Math.floor(age / (1000 * 60 * 60 * 24));
    age -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(age / (1000 * 60 * 60));
    age -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(age / (1000 * 60));
    age -= minutes * (1000 * 60);

    const seconds = Math.floor(age / 1000);

    return { years, days, hours, minutes, seconds };
}

function displayAge_actual_time() {
    // const birthDate = new Date('YYYY-MM-DD'); // Replace with your birth date
    const birthDate = new Date('2000-03-13'); // Replace with your birth date
    const age = calculateAge_actual_time(birthDate);
    document.getElementById('age-counter').innerText = 
        `${age.years} years, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, ${age.seconds} seconds`;
}

// setInterval(displayAge_actual_time, 1000); // Update age every second
