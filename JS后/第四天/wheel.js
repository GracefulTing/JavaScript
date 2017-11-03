//写一个函数,既可以添加事件,又能够根据上下移动进行自己的修改

function mouseWheel(obj,fun1,fun2){
	obj.onmousewheel = function(ev){
		var e = ev || window.event;
		judge(e,fun1,fun2);
	}
}

function judge(m,up,down){
	if(m.wheelDelta>0){
		if(up){
			up();
		}
	}else{
		if(down){
			down();
		}
	}
}