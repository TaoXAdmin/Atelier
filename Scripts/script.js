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
document.addEventListener("DOMContentLoaded", function() {
    const elementsToType = [
        { id: "tel", text: "06 62 15 07 67" },
        { id: "email", text: "david.sidelsky@gmail.com" },
        { id: "D", text: "D" },
        { id: "avid", text: "avid" },
        { id: "S", text: "S" },
        { id: "idelsky", text: "idelsky" },
        { id: "adresse", text: "11 rue Paul Eluard" },
		{ id: "adresse2", text: "94220 Charenton-le-Pont" }
    ];
    
    let speed = 40;
    let elementIndex = 0;
    let textPos = 0;
    let typing = false;

    function typeWriter() {
        if (elementIndex < elementsToType.length) {
            const element = document.getElementById(elementsToType[elementIndex].id);
            const text = elementsToType[elementIndex].text;
            const cursor = "<span class='cursor'>_</span>";
            if (textPos < text.length) {
                element.innerHTML = text.substring(0, textPos) + cursor;
                textPos++;
                setTimeout(typeWriter, speed);
            } else {
                element.innerHTML = text; // Remove cursor from element
                textPos = 0;
                elementIndex++;
                setTimeout(typeWriter, 500); // Pause before starting next element
            }
        } else {
            typing = false;
        }
    }

    function resetTypewriter() {
        elementsToType.forEach(item => {
            document.getElementById(item.id).innerHTML = "";
        });
        elementIndex = 0;
        textPos = 0;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!typing) {
                    typing = true;
                    typeWriter();
                }
            } else {
                if (typing) {
                    typing = false;
                    resetTypewriter();
                }
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to change the visibility threshold
    });

    elementsToType.forEach(item => {
        observer.observe(document.getElementById(item.id));
    });
});
