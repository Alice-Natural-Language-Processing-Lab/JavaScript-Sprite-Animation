class Animation
{
   constructor(sy, width, height, frameCount, id)
   {
      this.sy = sy;
      this.width = width;
      this.height = height;
      this.frameCount = frameCount;
      this.frame = 0;
      this.id = id;
   }

   nextFrame()
   {
      this.frame = (this.frame + 1) % this.frameCount;
   }

   drawFrame(context, objImg, x, y)
   {
      context.drawImage(objImg, this.frame*this.width, this.sy, this.width, this.height, x, y, this.width, this.height);
   }
}
