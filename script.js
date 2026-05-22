// ======================
// BUKA SURAT
// ======================

document
.getElementById("openLetterBtn")
.addEventListener("click", () => {

    document
    .getElementById("cover")
    .style.display = "none";

    document
    .getElementById("page1")
    .classList.remove("hidden");

});

// ======================
// PINDAH HALAMAN
// ======================

function nextPage(page){

    document
    .querySelectorAll(".page")
    .forEach(section => {

        section.classList.add("hidden");

    });

    document
    .getElementById("page"+page)
    .classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ======================
// HALAMAN KUE
// ======================

function showCake(){

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.add("hidden");

    });

    document
    .getElementById("cakePage")
    .classList.remove("hidden");

}

// ======================
// MATIKAN LILIN
// ======================

window.addEventListener("DOMContentLoaded", () => {

    const flame = document.getElementById("flame");

    if(!flame) return;

    flame.addEventListener("click", blowCandle);

});

function blowCandle(){

    const flame =
    document.getElementById("flame");

    flame.classList.add("out");

    createCelebration();

    setTimeout(()=>{

        document
        .getElementById("birthdayMessage")
        .classList.add("show");

    },500);

    setTimeout(()=>{

        document
        .getElementById("nextAfterCake")
        .style.display="inline-block";

    },2000);

}

// ======================
// EFEK BINTANG
// ======================

function createCelebration(){

    for(let i=0;i<50;i++){

        const star =
        document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";

        star.style.left =
        Math.random()*100+"vw";

        star.style.top = "-20px";

        star.style.fontSize =
        (Math.random()*20+15)+"px";

        star.style.zIndex = "9999";

        document.body.appendChild(star);

        star.animate(

        [
            {
                transform:"translateY(0)"
            },

            {
                transform:"translateY(110vh)"
            }

        ],

        {
            duration:
            Math.random()*3000+2000
        }

        );

        setTimeout(()=>{

            star.remove();

        },5000);

    }

}