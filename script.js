const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numbersOfEnemys = 10;
const enemysArr = [];
function enemy1() {

    let gameFrame = 0;

    class Enemy {
        constructor() {
            this.Image = new Image();
            this.Image.src = 'Daco_5031880.png'


            //this.speed = Math.random() * 4 - 2;
            this.spriteWidth = 123;
            this.spriteHeight = 123;
            this.width = this.spriteWidth / 1.5;
            this.height = this.spriteHeight / 1.5;
            this.x = Math.random() * (canvas.width - this.width);
            this.y = Math.random() * (canvas.height - this.height);
            this.frame = 0;
            this.flapSpeed = Math.floor(Math.random() * 55 + 1)
        }
        update() {
            this.x += Math.random() * 1 - 0.5;
            this.y += Math.random() * 1 - 0.5;
            if (gameFrame % this.flapSpeed === 0) {
                this.frame > 1 ? this.frame = 0 : this.frame++
            }

        }
        draw() {
            ctx.drawImage(this.Image, this.frame * this.spriteWidth, 0, this.spriteHeight, this.spriteWidth, this.x, this.y, this.width, this.height,);
        }
    };

    for (let i = 0; i < numbersOfEnemys; i++) {
        enemysArr.push(new Enemy());
    }
    const enemy1 = new Enemy();
    const enemy2 = new Enemy();

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        enemysArr.forEach(enemy => {
            enemy.draw()
            enemy.update()
        })
        gameFrame++
        requestAnimationFrame(animate);
    }
    animate();
}
//enemy1();


function enemy2() {

    let gameFrame = 0;

    class Enemy {
        constructor() {
            this.Image = new Image();
            this.Image.src = 'newgh/skeleton-animation_00.png'
            this.speed = Math.random() * 1.5 + 1;
            this.spriteWidth = 1000;
            this.spriteHeight = 1000;
            this.width = 200;
            this.height = 200;
            this.x = Math.random() * (canvas.width - this.width);
            this.y = Math.random() * (canvas.height - this.height);
            this.frame = 0;
            this.flapSpeed = Math.floor(Math.random() * 55 + 1)
        }
        update() {
            this.x -=this.speed;
            this.y += Math.random() * 1 - 0.5;
           

        }
        draw() {
            ctx.drawImage(this.Image, this.frame * this.spriteWidth, 0, this.spriteHeight, this.spriteWidth, this.x, this.y, this.width, this.height,);
        }
    };

    for (let i = 0; i < numbersOfEnemys; i++) {
        enemysArr.push(new Enemy());
    }
    const enemy1 = new Enemy();
    const enemy2 = new Enemy();

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        enemysArr.forEach(enemy => {
            enemy.draw()
            enemy.update()
        })
        gameFrame++
        requestAnimationFrame(animate);
    }
    animate();
}
enemy2()