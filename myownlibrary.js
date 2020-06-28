function colision(moverect,fixrect){
    if (moverect.y-fixrect.y < moverect.height/2+fixrect.height/2 &&
      moverect.y-fixrect.y < moverect.height/2+fixrect.height/2  ){
      moverect.velocityY=moverect.velocityY*(0);
      fixrect.velocityY=fixrect.velocityY*(0);
      }
      if (moverect1.x-fixrect1.x < moverect1.height/2+fixrect1.height/2 &&
        moverect1.x-fixrect1.x < moverect1.height/2+fixrect1.height/2  ){
        moverect1.velocityX=moverect1.velocityX*(0);
        fixrect1.velocityX=fixrect1.velocityX*(0);
      }
    }

  function bounce1(moverect1,fiyrect1){
    if (moverect1.y-fiyrect1.y < moverect1.height/2+fiyrect1.height/2 &&
      moverect1.y-fiyrect1.y < moverect1.height/2+fiyrect1.height/2  ){
      moverect1.velocityY=moverect1.velocityY*(-1);
      fiyrect1.velocityY=fiyrect1.velocityY*(-1);
    }
   
  }
  function bounceoff(moverect2,fiyrect2){
    if (moverect2.y-fiyrect2.y < moverect2.height/2+fiyrect2.height/2 &&
      moverect2.y-fiyrect2.y < moverect2.height/2+fiyrect2.height/2  ){
      moverect2.velocityY=moverect2.velocityY*(-1);
      fiyrect2.velocityY=moverect2.velocityY;
      fiyrect2.velocityY=fiyrect2.velocityY*(-1);
    }
   
  }

  function istouching(moverect3,fixrect3){
 if (moverect3.y-fixrect3.y < moverect3.height/2+fixrect3.height/2 &&
        moverect3.y-fixrect3.y < moverect3.height/2+fixrect3.height/2  ){
    return true;
    }
    else{
        return false;
    }
}