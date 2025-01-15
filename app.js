function clicked(el) {
    el.classList.toggle('hide');
    document.querySelector(".points").textContent = "1";
}

const moles = document.querySelectorAll(".mole");
console.log(moles);

function spawnMoles() {

        let t =setInterval(() => {
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
        }, 20000);
    
}
