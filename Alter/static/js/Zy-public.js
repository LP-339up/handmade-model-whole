  

// 设置页面字体
function setRootFontSize(){
	var width = document.documentElement.clientWidth;
	if(width > 750) width = 750;
	var fontSize = width / 7.5;
	document.getElementsByTagName("html")[0].style['font-size'] = fontSize + 'px';
}
window.addEventListener('resize', function(){
	setRootFontSize();
}, false);

setRootFontSize();


// 返回顶部
    $(function() {
     $('.backtop').on("click", function() {
      $('body,html').animate({
       scrollTop: 0
      }, 10);
      return false;
     });
    });
   
   // 客服移入显示
   
   $(function(){
	   $('.kefu-mian').mouseenter(function(){
	       $('.kefu-none').css("display","block");
	   });
	   $('.kefu-none').mouseleave(function(){
	       $('.kefu-none').css("display","none");
	   });
   })
   
   
   // 后台所有页面登陆  以及验证登陆
  
  //判断 token 是否存在
  var token = window.localStorage.getItem('token')
  if(!token){
      // window.location.href='Xjw-index.html'
  }
  var token = window.localStorage.getItem('token')
    if(!token){
  	  
  	  $('.weidenglu').css('display','inline')
  	  $('.yidenglu').css('display','none')
    }else{
  	  $('.weidenglu').css('display','none')
  	  $('.yidenglu').css('display','inline')
    }

  
  var userinfo = window.localStorage.getItem('info')
  userinfo= JSON.parse(userinfo)
  // 登陆显示
  // 需要在前端页面登陆的地方添加username类名
  $('.username').html(userinfo.account)
  
  // 点击退出
  $('.login-out').click(function(){
  
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('info')
      window.location.href='login.html'
  
  })
  
  // 弹出框
  	function tanchukuang3(data){
  		$('.point .pop .mid-content').html(data)
  		$('.point').addClass('yincang')
  		$('.point .pop .top-title .gbtb').click(function(){
  			$('.point').removeClass('yincang')
  		})
  		$('.point .pop .bottom-btn .queren').click(function(){
  			$('.point').removeClass('yincang')
  		})
  	}
  