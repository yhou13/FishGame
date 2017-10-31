var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;//上一帧被执行时间
var deltaTime;//2帧之间的时间差

var bgPic =new Image();
var ane;
var fruit;
var mom;
var baby;
var mx;
var my;
var babyTail =[];
var babyEye=[];
var babyBody=[];
var bigEye=[];
var bigTail=[];
var bigBodyOra=[];
var bigBodyBlue=[];
var dust;
var dustPic =[];
var data;
var wave;
var halo;
//body加载完调用game函数
document.body.onload =game;
function game(){
	init();
	lastTime =Date.now();
	deltaTime =0;
	gameloop();
}
function init(){
	//获得canse context
	can1=document.getElementById("canvas1");//fishs,dust,UI,circle
	ctx1 =can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background,ane,fruits
	ctx2 =can2.getContext("2d");
	
	can1.addEventListener('mousemove',onMousemove,true);
	bgPic.src="./img/background.jpg"

	canWidth=can1.width;
	canHeight=can2.height;
	
	ane =new aneObj();
	ane.init();
	fruit =new fruitObj();
	fruit.init();
	mom =new momObj();
	mom.init();	
	baby =new babyObj();
	baby.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;
	ctx1.font="20px Verdana";
	ctx1.textAlign="center";
	for(var i=0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src="./img/bigTail"+i+".png";
		bigTail[i] =new Image();
		bigTail[i].src="./img/bigTail"+i+".png";
	}
   for(var i=0;i<2;i++){
   	   babyEye[i]=new Image();
   	   babyEye[i].src="./img/babyEye"+i+".png";
   	   bigEye[i]=new Image();
   	   bigEye[i].src="./img/bigEye"+i+".png";
   }
   for(var i=0;i<7;i++){
   	dustPic[i]=new Image();
   	dustPic[i].src="./img/dust"+i+".png";
   }
   for(var i=0;i<20;i++){
   	babyBody[i]=new Image();
   	babyBody[i].src="./img/babyFade"+i+".png";
   }
   dust =new dustObj();
   dust.init();
   data=new dataObj();
   for(var i=0;i<8;i++){
   	bigBodyOra[i]=new Image();
   	bigBodyBlue[i]=new Image();
   	bigBodyOra[i].src="./img/bigSwim"+i+".png";
   	bigBodyBlue[i].src="./img/bigSwimBlue"+i+".png";
   }
   wave=new waveObj();
   wave.init();
   halo=new haloObj();
   halo.init();
}
function gameloop(){
window.requestAnimFrame(gameloop);//setInterval（静态间隔时间）,setTimeout（静态间隔时间）,frame per second 循环调用函数（动态的间隔时间）
 ctx2.clearRect(0,0,canWidth,canHeight);
   var now =Date.now();
   deltaTime =now - lastTime;
   lastTime =now;
   if(deltaTime>40) deltaTime=40;
   drawBackground();
   ane.draw();
   fruit.draw();
   fruitMonitor();
  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
  baby.draw();
 momFruitsCollision();
 momBabyCollision();
  data.draw();
  dust.draw();
  wave.draw();
  halo.draw();
}
function onMousemove(e){
	if(!data.gameOver){
		if(e.offsetX||e.layerX){
			mx=e.offsetX ==undefined?e.layerX:e.offsetX;
			my=e.offsetY ==undefined?e.layerY:e.offsetY;
		
		}
	}
}
