changeBack();
//背景图片移动函数
function changeBack(){
	$('.back').css({
		backgroundPositionY:"0"
	})
	$('.back').animate({
		backgroundPositionY:"568px"
	},3000,"linear",function(){
		window.requestAnimationFrame(changeBack);
	})
}

