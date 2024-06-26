document.addEventListener("DOMContentLoaded", function() {
    const textLines = [
        "« Découvrez la magie comme vous ne l'avez jamais vue avec des tours faits sur mesure pour une clientèle d'élite. »",
        "David SY"
    ];
    
    const textContainer = document.getElementById("text-container");
    const authorContainer = document.getElementById("author");
    const cursor = "<span class='cursor'>_</span>";

    let speed = 50;
    let index = 0;
    let textPos = 0;
    let arrLength = textLines[0].length;

    function typeWriter() {
        if (index < textLines.length) {
            if (index === 0) {
                textContainer.innerHTML = textLines[index].substring(0, textPos) + cursor;
            } else {
                authorContainer.innerHTML = textLines[index].substring(0, textPos) + cursor;
            }
            if (textPos++ == arrLength) {
                textPos = 0;
                index++;
                if (index < textLines.length) {
                    arrLength = textLines[index].length;
                    setTimeout(typeWriter, 500);
                } else {
                    textContainer.innerHTML = textLines[0]; // Remove cursor from textContainer
                }
            } else {
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
});
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const lang = document.querySelector('.lang');
    const navItems = document.querySelectorAll('.nav-links li a');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        navLinks.classList.toggle('active');
        lang.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('toggle');
            navLinks.classList.remove('active');
            lang.classList.remove('active');
        });
    });
});
