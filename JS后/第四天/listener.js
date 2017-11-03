function addhandle(obj,type,fun){
	if(obj.addEventListener){
		obj.addEventListener(type,fun,false);
	}else{
		obj.attachEvent("on"+type,fun);
	}
}

function removehandle(obj,type,fun){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fun,false);
	}else{
		obj.detachEvent("on"+type,fun);
	}
}