
function updateTime() {
    document.getElementById('currentTimeUTC').innerText = new Date().toISOString();
}
updateTime();
setInterval(updateTime, 1000);

