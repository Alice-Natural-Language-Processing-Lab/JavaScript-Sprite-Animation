window.onload = main;

let context;
let width;
let height;
let girl;

let now, elapsed, then, startTime;
let fps = 15;
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
      then = now - (elapsed % interval);

      context.clearRect(0, 0, width, height);
      girl.draw(context);
   }
}


function loadAssets()
{
   girl = new Sprite("spritestrip.png", 256, 256, 6, 0, 0);
}

function keyDownHandler(event){
   switch (event.key) {
      case 'd':
         girl.moveRight(true);
         break;
      case 'a':
         break;
      default:
         break;
   }
}

function keyUpHandler(event){
   switch (event.key) {
      case 'd':
         girl.moveRight(false);
         break;
      case 'a':
         break;
      default:
         break;

   }
}
