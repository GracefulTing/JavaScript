//计算比例
function scale(a,b,m,n){
	var ch = a.offsetHeight - b.offsetHeight;
	var rh = m.offsetHeight - n.offsetHeight;
	var ra = ch / rh;
	return ra;
}

function mo(a,b,m,n){
	n.onmousedown = function(ev){
		var e = ev || window.event;
		var curY = e.clientY;
		var offY = this.offsetTop;
		document.onmousemove = function(ev){
			var e = ev || window.event;
			n.style.top = e.clientY - curY + offY + "px";

			if(n.offsetTop < 0){
				n.style.top = 0;
			}
			if(n.offsetTop > m.offsetHeight - n.offsetHeight){
				n.style.top = m.offsetHeight - n.offsetHeight + "px";
			}

			var r = scale(a,b,m,n);
			var val = r * n.offsetTop;
			a.style.top =  -val + "px";
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
}

