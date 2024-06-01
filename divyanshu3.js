const clock = document.querySelector('#clock');
const dateElement = document.querySelector('#date');

setInterval(function() {
    let time  = new Date()
    clock.innerHTML=time.toLocaleTimeString()
},1000);

setInterval(function() {
    let currentDate = new Date();
    dateElement.innerHTML = currentDate.toLocaleDateString();
}, 1000);
