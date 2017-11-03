// var type = (/Firefox/.test(navigator.userAgent))?"DOMMouseScroll": "mousewheel";
var type = window.navigator.userAgent.indexOf("Firefox");
if(type != -1){
	type = "DOMMouseScroll";
}else{
	type = "mousewheel";
}

function mouse(ev,down,up){
	var e = ev || window.event;

	if(e.detail){      //火狐
		if(e.detail > 0){
		//	console.log("火狐向下");
			if(down){
				down();
			}
		}else{
		//	console.log("火狐向上");
			if(up){
				up();
			}
		}
	}
	else if(e.wheelDelta){         //谷歌
		if(e.wheelDelta < 0){
		//	console.log("谷歌向下");
			if(down){
				down();
			}
		}else{
		//	console.log("谷歌向上");
			if(up){
				up();
			}
		}
	}
}


function add(obj){
	if(obj.attachEvent){          //IE        
		obj.attachEvent("on"+type,function(e){
			mouse(e,function(){
				console.log('向下');
			},function(){
				console.log('向上');
			});
		});
	}else{                   //非IE
		obj.addEventListener(type,function(e){
			mouse(e,function(){
				console.log('向下');
			},function(){
				console.log('向上');
			});
		});
	}
}