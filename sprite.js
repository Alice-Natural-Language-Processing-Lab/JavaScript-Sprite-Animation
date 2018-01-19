class Sprite
{
   constructor(image, width, height, frameCount, x, y)
   {
      this.image = image;
      this.x = x;
      this.y = y;
      this.frame = 0;
      this.frameCount = frameCount;
      this.width = width;
      this.height = height;
      this.left = false;
      this.right = false;


      this.objImg = new Image();
      this.objImg.onload = function(){
         console.log("Image " + this.image + " loaded");
      }
      this.objImg.src = this.image;
   }

   moveRight(condition)
   {
      this.right = condition;
   }

   moveLeft(condition)
   {
      this.left = condition;
   }

   nextFrame()
   {
      this.frame = (this.frame + 1) % this.frameCount;
   }

   stop()
   {
      this.frame = 0;
   }

   update()
   {
      if(this.right)
      {
         this.nextFrame();
      }

      else if(this.left)
      {
         /*decrease frame*/
      }

      else
      {
         this.stop();
      }
   }

   draw(context)
   {
      context.drawImage(this.objImg, this.frame*256, 0, this.width, this.height, 0, 0, this.width, this.height);
   }
}
