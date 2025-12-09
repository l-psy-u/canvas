console.log('superpippo!!')
const mycanvas = document.getElementById('my-canvas');
const ctx = mycanvas.getContext('2d'); // '2d' è il contesto più comune
ctx.fillStyle = 'red';
console.log('canvas', mycanvas.width, mycanvas.height);

// Disegna un rettangolo (x=30, y=30, larghezza=50, altezza=50)
ctx.fillRect(0, 300, 300, 50, 50, 50);
ctx.fillStyle = 'white';
ctx.fillRect(200, 300, 50, 50);
ctx.fillStyle = 'orange';
ctx.fillRect(100, 400, 50, 50);

function getRandomHexColor() {
    // Genera un numero casuale tra 0 e 16777215 (FF in esadecimale)
    let color = Math.round(Math.random() * 16777215);
    // Converte il numero in esadecimale e aggiunge '#'
    return '#' + color.toString(16).padStart(6, '0');
}

// for (let i = 0; i <40; i++){
//     const red = Math.round(Math.random()*255);
//     const blue = Math.round(Math.random()*255);
//     const green = Math.round(Math.random()*255);
//     const alpha = Math.random();

//     ctx.fillStyle = 'rgba('+red+', '+green+', '+blue+', '+alpha+')';

//     const ramdomX = Math.random()*800;
//     const ramdomY = Math.random()*800;
//     const ramdomW = Math.random()*200;
//     const ramdomH = Math.random()*200;

//     // ctx.fillStyle = getRandomHexColor();


//     ctx.fillRect(ramdomX,ramdomY,ramdomW,ramdomH);    
// }

// setInterval(() => {

//     // ctx.clearRect(0,0,800,800);
//     ctx.fillStyle ='rgba(255,255,255,0.02)';
//     ctx.fillRect(0,0,800,800);
//     const red = Math.round(Math.random()*255);
//     const blue = Math.round(Math.random()*255);
//     const green = Math.round(Math.random()*255);
//     const alpha = Math.random();

//     ctx.fillStyle = 'rgba('+red+', '+green+', '+blue+', '+alpha+')';

//     const ramdomW = Math.random()*200;
//     const ramdomH = Math.random()*200;
//     const ramdomX = Math.random()*(800-ramdomW);
//     const ramdomY = Math.random()*(800-ramdomH);

//     // ctx.fillStyle = getRandomHexColor();


//     ctx.fillRect(ramdomX,ramdomY,ramdomW,ramdomH); 

// }, 1000);// un secondo

const retangolo = {
    x: 400,
    y: 400,
    width: 10,
    height: 10
}


// setInterval(() => {
//     ctx.clearRect(0,0,800,800);
//     retangolo.x+=1;
//     retangolo.y+=2;

//     ctx.fillRect(retangolo.x, retangolo.y, retangolo.width, retangolo.height);

// }, 100);
const rectangles = [];


function setup() {
    for (let i = 0; i < 200; i++) {
        const red = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const alpha = Math.random();

        const width = 2;
        const height = 2;

        // ctx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';



        const ramdomX = Math.random() * (800 - width);
        const ramdomY = Math.random() * (800 - height);
        const ranvX = (Math.random() * 4) - 2;
        const ranvY = (Math.random() * 4) - 2;


        const rect = {
            x: 400,
            y: ramdomY,
            width: 10,
            height: 10,
            color: 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')',
            vX: ranvX,
            vY: ranvY,
        }
        rectangles.push(rect);
    }

}

setup();
console.log(rectangles);

function update() {
    for (const rect of rectangles) {


        rect.x += rect.vX;
        rect.y += rect.vY;
        if (rect.x + rect.width > 800 || rect.x < 0) {
            rect.vX = rect.vX * (-1);
        }

        if (rect.y + rect.height > 800 || rect.y < 0) {
            rect.vY = rect.vY * (-1);
        }

        const diceX = Math.random();
        if (diceX > 0.9) {
            rect.vX += Math.random()*3;
        }
        if (diceX < 0.1) {
            rect.vX -= Math.random()*3;
        }
        const diceY = Math.random();
        if (diceY > 0.9) {
            rect.vY += Math.random()*3;
        }
        if (diceY < 0.1) {
            rect.vY -= Math.random()*3;
        }


        if (rect.vX > 3) {
            rect.vX = 3;
        }
        if (rect.vX < -3) {
            rect.vX = -3;
        }
        if (rect.vY > 3) {
            rect.vY = 3;
        }
        if (rect.vY < -3) {
            rect.vY = -3;
        }
    }
}

function draw() {
     ctx.clearRect(0, 0, 800, 800);
//     // ctx.clearRect(0,0,800,800);
//     ctx.fillStyle ='rgba(255,255,255,0.02)';
    for (const rect of rectangles) {

        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    }

}
setInterval(() => {
    update();

    draw();
}, 18);

