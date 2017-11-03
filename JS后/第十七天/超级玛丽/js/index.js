//判断两个标签其中一个是否超出范围
function judgeBorder(son,father){
	if(son.offsetLeft <= 0){
		son.style.left = 0;
	}
	if(son.offsetLeft >= 500){
		son.style.left = 500 + "px";
		changeBackPosition(father);
	}
}

//改变背景图位置
function changeBackPosition(element){
	var a = getValue(element,"backgroundPosition");
	var value = a.replace(/px/g,"");
	var arr = value.split(" ");
	var v_x = Number(arr[0]);
	v_x -= 5;
	element.style.backgroundPosition = v_x +"px -95px";
}

function getValue(element,cssname){
	if(element.currentStyle){
		return element.currentStyle[cssname];
	}else{
		return getComputedStyle(element,null)[cssname];
	}
}
