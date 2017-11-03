// function move(curpos,endpos,m,perTime){
// 	var curpos = m.offsetLeft;
// 	var perVal = curpos > endpos ? -1 : 1;
// 	var timer = setInterval(function(){
// 		curpos += perVal;
// 		m.style.left = curpos + "px";
// 		if(perVal > 0){
// 			if(curpos >= endpos){
// 				clearInterval(timer);
// 			}
// 		}else{
// 			if(curpos <= endpos){
// 				clearInterval(timer);
// 			}
// 		}
// 	},perTime)
// }

function move(obj,change){
	var value = obj.offsetLeft;
	var timer = setInterval(function(){
		value++;
		obj.style.left = value + "px";
		if(value >= 300){
			if(change){
				change();
			}
			clearInterval(timer);
		}
	},50)
}