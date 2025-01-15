let points = 0;
function clicked(el) {
    el.classList.toggle('hide');
    document.querySelector(".points").textContent = ++points;
}

const moles = document.querySelectorAll(".mole");
console.log(moles);

function spawnMoles() {
    points = 0;
    timer();
    document.querySelector(".points").textContent = 0;
    let t = setInterval(() => {
        let rand = Math.floor(Math.random() * 6)
        moles[rand].classList.toggle("hide");
    }, 250);
    setInterval(() => {
        let rand = Math.floor(Math.random() * 6)
        moles[rand].classList.add("hide");
    }, 250);
    setInterval(() => {
        let rand = Math.floor(Math.random() * 6)
        moles[rand].classList.add("hide");
    }, 250);
    setTimeout(() => {
        clearInterval(t);
        document.querySelector(".score").classList.remove('hide')
        document.querySelector(".score").textContent = "Your Score:" + points;

    }, 25000);

}
function timer() {
    let sec = 24;
    let timer = setInterval(function () {
        document.querySelector('.timer').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
