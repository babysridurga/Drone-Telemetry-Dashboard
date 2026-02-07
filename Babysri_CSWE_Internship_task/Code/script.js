let t = 0;
let altitude = 12;
let speed = 2;
let battery = 100;
let lat = 12.9716;
let lon = 77.5946;

const timer = setInterval(() => {
    t++;

    altitude += Math.random() * 1.5;
    speed += (Math.random() - 0.3);
    battery -= Math.random();
    lat += (Math.random() - 0.5) * 0.0001;
    lon += (Math.random() - 0.5) * 0.0001;

    document.getElementById("time").innerText = t;
    document.getElementById("alt").innerText = altitude.toFixed(2);
    document.getElementById("spd").innerText = speed.toFixed(2);
    document.getElementById("bat").innerText = battery.toFixed(1);
    document.getElementById("gps").innerText =
        lat.toFixed(6) + ", " + lon.toFixed(6);

    if (t === 30) clearInterval(timer);
}, 1000);
