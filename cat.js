canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
c1_height=90;
c1_width=100;

c1_xposition=10;
c1_yposition=10;

c1_image="car1.png";
b_image="Race_Track.jpeg";

c2_height=90;
c2_width=100;

c2_xposition=10;
c2_yposition=100;

c2_image="car2.png";

function add(){
    bg = new Image();
    bg.onload = uploadBackground;
    bg.src = b_image;

    c1 = new Image();
    c1.onload = uploadc1;
    c1.src = c1_image;
        
    c2 = new Image();
    c2.onload = uploadc2;
    c2.src = c2_image;
    
}

function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadc1(){
    ctx.drawImage(c1, c1_xposition, c1_yposition, c1_width, c1_height);
}

function uploadc2(){
    ctx.drawImage(c2, c2_xposition, c2_yposition, c2_width, c2_height);
}

window.addEventListener("keydown", my_keydown); 
    function my_keydown(e){
        keyPressed = e.keyCode;
        if (keyPressed == '87'){
            console.log("w");
            c1up();
        }

        else if (keyPressed == '65'){
            console.log("a");
            c1left(); 
        }

        else if (keyPressed == '83'){
            console.log("s");
            c1down(); 
        }

        else if (keyPressed == '68'){
            console.log("d");
            c1right(); 
        }

    }
    


    
    window.addEventListener("keydown", my_keydown); 
    function my_keydown(e){
        keyPressed = e.keyCode;
        if (keyPressed == '38'){
            console.log("up");
            c2up();
        }

        else if (keyPressed == '37'){
            console.log("left");
            c2left(); 
        }

        else if (keyPressed == '40'){
            console.log("down");
            c2down(); 
        }

        else if (keyPressed == '39'){
            console.log("right");
            c2right(); 
        }

    }
    