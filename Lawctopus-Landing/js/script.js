// ======================================
// INITIALIZE AOS
// ======================================

AOS.init({
    duration: 1000,
    once: true
});

// ======================================
// STICKY NAVBAR
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ======================================
// ACTIVE NAVIGATION LINK
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounter() {

    if(counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if(!statsSection) return;

    const sectionTop = statsSection.offsetTop - window.innerHeight + 100;

    if(window.scrollY > sectionTop){

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.innerText);

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);

// ======================================
// BACK TO TOP BUTTON
// ======================================

const backBtn = document.createElement("button");

backBtn.id = "backToTop";

backBtn.innerHTML = "↑";

document.body.appendChild(backBtn);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        backBtn.style.display = "block";

    }else{

        backBtn.style.display = "none";

    }

});

backBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// HERO BUTTON RIPPLE EFFECT
// ======================================

document.querySelectorAll(".btn-main").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        const radius=diameter/2;

        circle.style.width=circle.style.height=`${diameter}px`;

        circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

        circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// ======================================
// PARALLAX HERO
// ======================================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=window.pageYOffset*0.4+"px";

    }

});

// ======================================
// REVEAL CARDS
// ======================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".feature-card,.timeline-item,.testimonial-card").forEach(card=>{

    observer.observe(card);

});

// ======================================
// LOADER
// ======================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("%cLawctopus Landing Page","color:#4f46e5;font-size:24px;font-weight:bold;");
console.log("%cDesigned by Priyanka Roy","color:#10b981;font-size:16px;");