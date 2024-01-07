const birthDate_getTime = new Date('2000-03-13').getTime(); // Replace with your birth date
const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;

function calculateAge(birthDate_getTime) {
    const now = new Date();
    const diff = now.getTime() - birthDate_getTime;
    const age = diff / millisecondsPerYear;
    return age;
}

function displayAge() {
    const age = calculateAge(birthDate_getTime);
    document.getElementById('age-counter').textContent = age.toFixed(11); // Adjust the precision as needed
    requestAnimationFrame(displayAge);
}

displayAge();




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
