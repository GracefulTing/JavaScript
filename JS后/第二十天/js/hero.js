var canvas = $('#canvas');

//创建飞机,子弹
function HeroFly(obj){
	this.ctx = obj.canvas[0].getContext('2d');
	this.heroImg = obj.img;
	this.imgWidth = this.heroImg.width / obj.num;     //图片宽度
	this.imgHeight = this.heroImg.height;       //图片高度
	this.sx = 0;   //裁剪图片的起始点
	this.sy = 0;	
	this.cx = obj.cx; //图片放置的起始点
	this.cy = obj.cy;
	this.vx = 0;
	this.vy = obj.vy ? obj.vy : 0;

	//绘制飞机,子弹
	this.drawFly = function(){
		this.ctx.beginPath();
		this.cx += this.vx;
		this.cy += this.vy;
		this.ctx.drawImage(this.heroImg,this.sx,this.sy,this.imgWidth,this.imgHeight,this.cx,this.cy,this.imgWidth,this.imgHeight);
		this.ctx.closePath();
	}
}