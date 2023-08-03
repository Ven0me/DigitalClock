let showItem = () => {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = `PM`;

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h -= 12;
        session = `AM`;
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    var time = `${h}:${m}:${s} ${session}`;

    document.getElementById(`myClock`).innerHTML = time;

    var alarm = `12:38:10 PM`;
    var audio = new Audio(`audio.mp3`);

    if (time == alarm) {
        audio.play();
    }

}

let repeat = setInterval(showItem, 1000);

var btn = document.getElementById(`stop`);

btn.addEventListener(`click`, () => {
    clearInterval(repeat);
});