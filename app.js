const newYear = "1 JAN 2022";

const d = document.querySelector("#days");
const h = document.querySelector("#hours");
const m = document.querySelector("#minutes");
const s = document.querySelector("#seconds");

function formatDate(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const diff = newYearDate - currentDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    d.textContent = days;
    h.textContent = formatDate(hours);
    m.textContent = formatDate(minutes);
    s.textContent = formatDate(seconds);
    // console.log(seconds);
}

setInterval(countdown, 1000);
