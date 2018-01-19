window.onload = main;

let context;
let width;
let height;
let girl;
let link;

let now, elapsed, then, startTime;
let fps = 12;
let interval = 1000/fps;

function main()
{
   let canvas = document.getElementById("canvas");
   context = canvas.getContext("2d");
   width = canvas.width;
   height = canvas.height;

   document.addEventListener('keydown', keyDownHandler);
   document.addEventListener('keyup', keyUpHandler);

   loadAssets();
   startTimer();
   render();
}

function startTimer()
{
   then = Date.now();
   startTime = then;
}

function render()
{
   requestAnimationFrame(render);

   now = Date.now();
   elapsed = now - then;

   if(elapsed > interval)
   {
      girl.update();
      link.update();
      then = now - (elapsed % interval);

      context.clearRect(0, 0, width, height);
      girl.draw(context);
      link.draw(context);
   }
}


function loadAssets()
{
   /*Girl asset loading*/
   let standing = new Animation(0, 256, 256, 1, "standing");
   let runningLeft = new Animation(0, 256, 256, 6, "right");
   girl = new Sprite("spritestrip.png", 0, 0);
   girl.addAnimation(runningLeft);
   girl.addAnimation(standing);
   girl.setAnimation("standing");

   /*Link asset loading*/
   standing = new Animation(0, 102.4, 110.875, 3, "standing");
   runningLeft = new Animation(555, 102.857, 109, 10, "left");
   let runningRight = new Animation(776.125, 102.4, 110.875, 10, "right");
   link = new Sprite("link.png", 256, 100);
   link.addAnimation(runningLeft);
   link.addAnimation(runningRight);
   link.addAnimation(standing);
   link.setAnimation("standing");
}

function keyDownHandler(event){
   switch (event.key) {
      case 'd':
         girl.moveRight(true);
         link.moveRight(true);
         break;
      case 'a':
         link.moveLeft(true);
         break;
      default:
         break;
   }
}

function keyUpHandler(event){
   switch (event.key) {
      case 'd':
         girl.moveRight(false);
         link.moveRight(false);
         break;
      case 'a':
         link.moveLeft(false);
         break;
      default:
         break;

   }
}
