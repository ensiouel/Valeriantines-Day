let mousePosition = {x: 0, y: 0}

function moveButton() {
    let position = getRandPosition()
    let button = document.getElementById("suggestion-no")
    button.style.position = 'absolute';
    button.style.left = position.x + 'px';
    button.style.top = position.y + 'px';
}

function getRandPosition() {
    let range = 400
    let randomX = Math.floor((window.innerWidth / 2) + Math.random() * range - (range / 2))
    let randomY = Math.floor((window.innerHeight / 2) + Math.random() * range - (range / 2))

    let distance = Math.sqrt(Math.pow(mousePosition.x - randomX, 2) + Math.pow(mousePosition.y - randomY, 2));
    if (distance < 300) {
        return getRandPosition()
    }

    return {x: randomX, y: randomY}
}

document.addEventListener("mousemove", function (event) {
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
});

const body = document.querySelector("body");

const list = ['❤️', '💖', '💌', '😘', '❤️‍🔥', '💘'];

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fa-heart";
    heart.textContent = list[Math.floor(Math.random() * list.length)];
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}

function startHeartRain() {
    setInterval(createHeart,100);
    setInterval(function name(params) {
        let heartArr = document.querySelectorAll(".fa-heart")
        if (heartArr.length > 200) {
            heartArr[0].remove()
        }
    },100)
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("suggestion-yes");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    startHeartRain();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}