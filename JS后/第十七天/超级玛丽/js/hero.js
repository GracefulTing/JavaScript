// 目的:创建一个马里奥的构造函数,在这个函数里面拥有所有马里奥的功能
//------------------------------------------------------------
//Hero属性说明:
//element:标签   
//timer:左右移动计时器    
//direction:移动方向,默认向右  
//move:左右移动计时器函数开始   
//stop:停止左右移动计时器
//maxTop:跳动的最大高度(距离现在英雄的高度)
//jump:上下跳动函数
//jumpTimer:上下跳动计时器
//tapCapCount:点击空格的次数
//------------------------------------------------------------
//形参说明:
// selector:英雄选择器  required
// moveFn:移动监听函数  optional
//maxTop:跳动的最大高度(距离现在英雄的高度)
function Hero(obj){
	this.element = document.querySelector(obj.selector);
	this.timer = null;
	this.direction = "right";  //left:向左,right:向右
	this.maxTop  = obj.maxTop ? obj.maxTop : 100;
	this.currentTop = this.element.offsetTop;          //最初位置
	this.tapCapCount = 0;  //点击空格的次数
	this.move = function(){
		this.stop();
		var offValue = this.direction == 'right' ? 5 : -5;
		var temp = this;
		this.timer = setInterval(function(){
			var offLeft = temp.element.offsetLeft;
			temp.element.style.left = offLeft + offValue + "px";
			if(obj.moveFn){
				//obj.moveFn(temp);
				obj.moveFn.call(temp);
			}
		},10)
	}
	this.stop = function(){
		clearInterval(this.timer);
	}
	this.jump = function(){
		this.tapCapCount++;
		if(this.tapCapCount > 2){
			return ;
		}
		clearInterval(this.jumpTimer);
		var currentTop = this.element.offsetTop;   //按键后的起跳位置
		var temp = this;
		var value = -1;
		this.jumpTimer = setInterval(function(){ 
			var nowTop = temp.element.offsetTop;     //实时位置
			temp.element.style.top = nowTop + value + "px";
			if(Math.abs(temp.element.offsetTop - currentTop)>=temp.maxTop){
				value = 1;
			}
			if(temp.element.offsetTop == temp.currentTop && value>0){
				temp.tapCapCount = 0;
				clearInterval(temp.jumpTimer);
			}
		},10)
	}
}

