function calculateWindChill(temp, windSpeed) {
    return (
        35.74 + 
        0.6215 * temp - 
        35.75 * Math.pow(windSpeed, 0.16) + 
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

function displayWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return `${calculateWindChill(temp, windSpeed)} ℉`;
    }
    return "N/A";
}

const temperature = 78;
const windSpeed = 4;

document.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.querySelector(".wind-chill");
    if (windChillElement) {
        windChillElement.textContent = displayWindChill(temperature, windSpeed);
    }
});