var momObj =function(){
	this.x;
	this.y;
	
	this.bigTailTimer=0;
	this.bigTailCount=0;
	
	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=1000;//当前图片持续多长时间
	
	this.momBodyCount=0;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	
	
}
momObj.prototype.draw=function(){
	this.x=lerpDistance(mx,this.x,0.98);
	this.y=lerpDistance(my,this.y,0.98);
   /*	this.x=mx;
   		this.y=my;*/
	var deltaY =this.y-my;
	var deltaX =this.x-mx;
	var beta =Math.atan2(deltaY,deltaX)//-IP,PI
	

	this.angle=lerpAngle(beta,this.angle,0.6);
	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer>50){
		this.bigTailCount =(this.bigTailCount +1)%8;
		this.bigTailTimer%=50;
	}
	this.bigEyeTimer +=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
		if(this.bigEyeCount==0){
			this.bigEyeInterval=Math.random()*1500+2000;
		}else{
			this.bigEyeInterval=200;
		}
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var bigTailCount =this.bigTailCount;
	ctx1.drawImage(bigTail[bigTailCount],-bigTail[bigTailCount].width*0.5+30,-bigTail[bigTailCount].height*0.5);
	var momBodyCount =this.momBodyCount;
	if(data.Double==1){//ora
		ctx1.drawImage(bigBodyOra[momBodyCount],-bigBodyOra[momBodyCount].width*0.5,-bigBodyOra[momBodyCount].height*0.5);
	}else{
	ctx1.drawImage(bigBodyBlue[momBodyCount],-bigBodyBlue[momBodyCount].width*0.5,-bigBodyBlue[momBodyCount].height*0.5);
	}
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,-bigEye[bigEyeCount].height*0.5);
	
	ctx1.restore();
}
