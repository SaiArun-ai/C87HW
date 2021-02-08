var canvas = new fabric.Canvas('myCanvas');
biw = 30;
bih = 30;
px = 10;
py = 10;
po = '';
bo = '';
function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
    po = Img;
    po.scaleToWidth("100");
    po.scaleToHeight("120");
    po.set({
        top:py,
        left:px
        });
        
    });
    canvas.add(po);
}
function block_Update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    bo = Img;
    bo.scaleToWidth(biw);
    bo.scaleToHeight(bih);
    bo.set({
        top:py + 12,
        left:px + 12
        });
        
    });
    canvas.add(bo);
}
var legs = ["ironman_legs.png","spiderman_legs.png","hulk_legs.png"];
var LH = ["hulk_left_hand.png","ironman_left_hand.png","spiderman_left_hand.png","thor_left_hand.png","captain_america_left_hand.png"];
var RH = ["hulk_right_hand.png","ironman_right_hand.png","spiderman_right_hand.png","ThorRightHand.png"];
var body = ["ironman_body.png","spiderman_body.png","hulkd_body.png"];
var face = ["ironman_face.png","hulk_face.png","spiderman_face.png","thor_face.png"];
var FL  = Math.floor(Math.random()*3);
var FF  = Math.floor(Math.random()*4);

window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    var keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == "80"){
        biw = biw + 10;
        bih = bih +  10;
        document.getElementById("CW").innerHTML = biw ;
        document.getElementById("CH").innerHTML = bih ;
    }
    if(e.shiftKey == true && keypressed == "77"){
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("CW").innerHTML = biw ;
        document.getElementById("CH").innerHTML = bih ;
    }
    if(keypressed == '70'){
        FF  = Math.floor(Math.random()*4);
        block_Update("ironman_face.png");
        FL  = Math.floor(Math.random()*3);
        
    }
    if(keypressed == '66'){
        block_Update("spiderman_body.png");
        FL  = Math.floor(Math.random()*3);
        FF  = Math.floor(Math.random()*4);
    }
    if(keypressed == '76'){
        FL  = Math.floor(Math.random()*3);
        block_Update(legs[FL]);
        FF  = Math.floor(Math.random()*4);
    }
    if(keypressed == '82'){
        block_Update("ThorRightHand.png");
        FF  = Math.floor(Math.random()*4);
    }
    if(keypressed == '72'){
        block_Update("captain_america_left_hand.png");
        FF  = Math.floor(Math.random()*4);
    }
    if(keypressed == '38'){
        up();
    }
    if(keypressed == '40'){
        down();
    }
    if(keypressed == '37'){
        left();
    }
    if(keypressed == '39'){
        right();
    }
}