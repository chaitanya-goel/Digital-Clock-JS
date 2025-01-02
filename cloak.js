const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const dayName = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear();
    const dateString = `${dayName}, ${month}/${date}/${year}`;

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}


setInterval(updateClock, 1000);
updateClock(); 
