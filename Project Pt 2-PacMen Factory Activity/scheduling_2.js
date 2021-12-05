//setInterval(function, deltaTime)

let counter = 10;

function countDown() {
    if(counter > 0) {
        console.log(counter);
        counter = counter - 1;
    }
}

setInterval(countDown, 3000);