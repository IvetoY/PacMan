
type ="text/javascript"
            var image = null;
            let timeoutId = 0;
            let movingDirectionKeyCode = 0;
            const pacmanSpeed = 30;
            function init(){
                image = document.getElementById("pacmanAnimation");
                image.style.position="relative";
                image.style.left = "0px";
                image.style.top = "0px";
            }
            
            function getKeyAndMove(e){
                var key_code = e.which || e.keyCode;
                if(isTheSameDirection(key_code)) return;
                switch (key_code){
                    case 37:
                        rotateImageLeft();
                        clearInterval(timeoutId);
                        timeoutId = setInterval(moveLeft,pacmanSpeed);
                        break;
                    case 38:
                        rotateImageUp();
                        clearInterval(timeoutId);
                        timeoutId = setInterval(moveUp,pacmanSpeed);
                        break;
                    case 39:
                        rotateImageRight();
                        clearInterval(timeoutId);
                        timeoutId = setInterval(moveRight,pacmanSpeed);
                        break;
                    case 40:
                        rotateImageDown();
                        clearInterval(timeoutId);
                        timeoutId = setInterval(moveDown,pacmanSpeed);
                        break;

                }
            }
            function isTheSameDirection(keyCode){
                if(movingDirectionKeyCode !== keyCode){
                    movingDirectionKeyCode = keyCode;
                    return false;
                }
                return true;
            }
             function rotateImageDown() {
                image.style.transform = 'rotate(90deg)';
              }
            function rotateImageUp(){
                image.style.transform = 'rotate(-90deg)';
            }
            function rotateImageLeft() { 
                image.style.transform = 'rotate(180deg)';
              }
            function rotateImageRight(){ 
                image.style.transform = 'rotate(0deg)';
            }
            function moveLeft(){
                if(parseInt(image.style.left)>=0){
                    image.style.left =  parseInt(image.style.left) - 1 + "px";
            }
            }
            
            function moveUp(){
            if(parseInt(image.style.top)>=-4){
                image.style.top =  parseInt(image.style.top) - 1 + "px";
            }
                }
            function moveRight(){
                if(parseInt(image.style.left)<=143){
                    image.style.left =  parseInt(image.style.left) + 1 + "px";
                }
            }
            function moveDown(){
                if(parseInt(image.style.top)<=162){
                    image.style.top =  parseInt(image.style.top) + 1 + "px";
                }  
            }
            window.onload = init;
