// main 글씨 생성 삭제 함수
(function() {
    const spanel1= document.querySelector("main h2 span");
const txtarr= ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Desiger', 'Back-End Developer'];
let index= 0;
let currenttxt= txtarr[index].split("");

function writetxt() {
    spanel1.textContent += currenttxt.shift();
    if(currenttxt.length !== 0) {
        setTimeout(writetxt, Math.floor(Math.random()*100));
    }else {
        currenttxt= spanel1.textContent.split("");
        setTimeout(deletetxt, 3000);

    }
}

function deletetxt() {
    currenttxt.pop();
    spanel1.textContent= currenttxt.join("");
    if(currenttxt.length !== 0) {
        setTimeout(deletetxt,Math.floor(Math.random()* 100));
    }else {
        index= (index +1) % txtarr.length;
        currenttxt= txtarr[index].split("");
        writetxt();
    }
}
writetxt();
})();

// header active 클래스 추가 및 삭제
(function() {
    const headerel= document.querySelector("header");
window.addEventListener("scroll",function() {
    requestAnimationFrame(scrollcheck);
});

function scrollcheck() {
    const browserscolly= window.scrollY ? window.scrollY: window.pageYOffset
    if(browserscolly > 0) {
        headerel.classList.add('active');
    }else {
        headerel.classList.remove('active');
    }
    console.log('scroll')
}
})();

// header btn 이동 이벤트
(function() {
    const animationmove= function(selector) {
        const target= document.querySelector(selector);
        const browserScrollY= window.pageYOffset;
        const targetscrolly= target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({top: targetscrolly, behavior:'smooth'});
    }
    
    const scrollmoveel= document.querySelectorAll("[data-animation-scroll= 'true']");
    console.log(scrollmoveel);
    for(let i= 0; i< scrollmoveel.length; i++) {
        scrollmoveel[i].addEventListener("click", function(e) {
            animationmove(this.dataset.target);
        });
    }
})();