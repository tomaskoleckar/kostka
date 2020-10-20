let hody = [];
let hodyCel = [];
let hody2 = [];
let hodyCel2 = [];
let coins = 100;
let sazka = 0;
document.getElementById("inputButton").addEventListener("click", function(){
    zadatSazku();
})
    

document.getElementById("coins").innerText = coins;
document.getElementById('hra').addEventListener('click',
    function () {
        let vysledekHrac;
        let vysledekBot;
        let konec;
        let interval;
        if(coins<sazka){
            document.getElementById("vyhra").style.color = "darkOrange";
            document.getElementById("vyhra").innerHTML = "TOLIK ŽETONŮ NEMÁTE !";  
            sazka = 0;
        }
        else{
        coins -= sazka;
        document.getElementById("coins").innerText = coins;
        document.getElementById("vyhra").innerHTML = "";
        interval = window.setInterval(function () {
            vysledekHrac = hod();
            hod2(vysledekHrac);
            console.log(hody);
            vysledekBot = hod3();
            hod4(vysledekBot);
            console.log(hody2);
            konec = hody.length / 2;
            if (konec >= 10) {
                clearInterval(interval);
                vyhra();
                hody = [];
                hody2 = [];
                hodyCel = [];
                hodyCel2 = [];
            }
        }, 1000);
        }
    }
);
function zadatSazku(){
    sazka = document.getElementById("sazka").value;
}

function vyhra(){
    if(suma(hody)>suma(hody2)){
        document.getElementById("vyhra").style.color = "green";
        document.getElementById("vyhra").innerHTML += "VYHRÁL JSTE " + sazka*2 + " ŽETONŮ";
        coins += sazka*2;
        document.getElementById("coins").innerText = coins;
        sazka = 0;
    }
    else{
        document.getElementById("vyhra").style.color = "red";
        document.getElementById("vyhra").innerHTML += "PROHRÁL JSTE " + sazka + " ŽETONŮ";
        sazka = 0;
    }
}
function suma(cisla) {
    let sum = 0;
    cisla.forEach(function (value, index) {
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    let max = 1;
    cisla.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    let min = 6;
    cisla.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    let h = Math.ceil(Math.random() * 6);
    document.getElementById('kostka').src = 'img/kostka' + h + '.png';
    hody.push(h);
    return h;
}
function hod2(hod1) {
    let h = Math.ceil(Math.random() * 6);
    let celek = h + hod1;
    hody.push(h);
    hodyCel.push(celek);
    document.getElementById('kostka2').src = 'img/kostka' + h + '.png';
    document.getElementById('vysledek').innerHTML = '<p>Hod: ' + celek + '</p>';
    document.getElementById('vysledek').innerHTML +=
        '<p>Počet hodů: ' + hody.length / 2 + '</p>';
    document.getElementById('vysledek').style.color = "orange";  
    document.getElementById('vysledek').innerHTML +=
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('vysledek').style.color = "blue";  
    document.getElementById('vysledek').innerHTML +=
        '<p>Průměr hodů: ' + average(suma(hody), hody.length / 2) + '</p>';
    document.getElementById('vysledek').innerHTML +=
        '<p>Nejvyšší hod: ' + maximum(hodyCel) + '</p>';
    document.getElementById('vysledek').innerHTML +=
        '<p>Nejnižší hod: ' + minimum(hodyCel) + '</p>';
    document.getElementById('vysledek').innerHTML +=
        '<p class="vyrazne">Součet hodů: ' + suma(hody) + '</p>';    
    return celek;
}
function hod3() {
    let h2 = Math.ceil(Math.random() * 6);
    document.getElementById('kostka3').src = 'img/kostka' + h2 + '.png';
    hody2.push(h2);
    return h2;
}
function hod4(hod3k) {
    let h2 = Math.ceil(Math.random() * 6);
    let celek2 = h2 + hod3k;
    hody2.push(h2);
    hodyCel2.push(celek2);
    document.getElementById('kostka4').src = 'img/kostka' + h2 + '.png';
    document.getElementById('vysledek2').innerHTML = '<p>Hod: ' + celek2 + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p>Počet hodů: ' + hody2.length / 2 + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p>Součet hodů: ' + suma(hody2) + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p>Průměr hodů: ' + average(suma(hody2), hody2.length / 2) + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p>Nejvyšší hod: ' + maximum(hodyCel2) + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p>Nejnižší hod: ' + minimum(hodyCel2) + '</p>';
    document.getElementById('vysledek2').innerHTML +=
        '<p class="vyrazne">Součet hodů: ' + suma(hody2) + '</p>';
    return celek2;
}