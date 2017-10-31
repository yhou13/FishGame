var dataObj= function(){
	this.fruitNum=0;
	this.Double=1;//吃到蓝色果实，分值加倍
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}

dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	ctx1.save();
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	ctx1.fillStyle="white";
	ctx1.fillText("Score:"+this.score,w*0.5,h-80);
	
	if(this.gameOver){
		this.alpha+=deltaTime*0.001;
		if(this.alpha>1){
			this.alpha=1;
		}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("你的娃已经被你饿死了[○･｀Д´･ ○]",w*0.5,h*0.5)
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.Double;
	this.fruitNum=0;
	this.Double=1;
}
