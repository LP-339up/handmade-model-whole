// 专门用来计算字体
// 只需要计算手机端最大屏以下的字体  750 375  100px
// 根据屏幕宽度成比例计算其他屏幕大小

setRootFontSize()

function setRootFontSize(){
	var width=document.documentElement.clientWidth||document.body.clientWidth
	
	// 计算屏幕宽度最大值为750
	width=width>750?750:width;
	
	var fontsize=width*100/750
	
	document.getElementsByTagName('html')[0].style['font-size']=fontsize+'px'
}

// 当屏幕大小改变的时候也需要调用此方法
// window.onresize=function(){
// 	setRootFontSize()
// }

window.addEventListener('resize',function(){
	setRootFontSize()
})