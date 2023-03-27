
type ="text/javascript"

            var image = null;
            function init(){
                image = document.getElementById("pacmanAnimation");
                image.style.position="relative";
                image.style.left = "0px";
                image.style.top = "0px";
            }
            
            function getKeyAndMove(e){
                var key_code = e.which || e.keyCode;
                switch (key_code){
                    case 37:
                        rotateImageLeft();
                        moveLeft();
                        
                        break;
                    case 38:
                        rotateImageUp();
                        moveUp();
                        break;
                    case 39:
                        rotateImageRight();
                        moveRight();
                        break;
                    case 40:
                        rotateImageDown();
                        moveDown();
                        break;

                }
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
                do{
                    image.style.left =  parseInt(image.style.left) - 1 + "px";
                }
                while(parseInt(image.style.left)>=0);
                
            }
            }
            function moveUp(){
                    if(parseInt(image.style.top)>=-4){
                    
                        do{
                        image.style.top =  parseInt(image.style.top) - 1 + "px";
                        }
                        while(parseInt(image.style.top)>=-4);
                        
                        
                    }
                }
            function moveRight(){
                if(parseInt(image.style.left)<=143){
                do{
                    image.style.left =  parseInt(image.style.left) + 1 + "px";
                    
                    }
                while(parseInt(image.style.left)<=143);
                }
            }
            function moveDown(){
                if(parseInt(image.style.top)<=162){
                do{
                    image.style.top =  parseInt(image.style.top) + 1 + "px";
                    }
                while(parseInt(image.style.top)<=162);
                
                }  
            }
            window.onload = init;
