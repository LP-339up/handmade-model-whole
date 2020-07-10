// 地址居中
var height=$('.jiesuan-all .xhr-dz').css('height')
$('.jiesuan-all .xhr-dz .dz-left').css('line-height',height)
$('.jiesuan-all .xhr-dz .dz-left').css('text-align','right')

// 检查电话号码
function checkPhone(){ 
    var phone = $('#phone').value;
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){ 
        tanchukuang3("手机号码有误，请重填");  
        return false; 
    } 
}
// 检查非空
// function checknull(idid){
// 	var shurus=$(idid)
// 	if(shurus[0].value==''){
// 		// var inner=$("#"+idid).on('')
// 		var inner=$(idid).closest('.hang')
// 		var inneri=inner[0].querySelector('.aaa')
		
// 		tanchukuang3(inneri.innerText+"不能为空!")
// 	}
// }

// 点击去结算按钮,验证邮寄信息
function jiesuan(){
$('body').on('click','.shopye .anniu .a-2',function(){
	var shurus=$('#shuru0')
	if(shurus[0].value!==''){
		var shurus2=$('#shuru2')
		if(shurus2[0].value!==''){
			var shurus3=$('#shuru3')
			if(shurus3[0].value!==''){
				var phone = $('#phone')
				if(phone[0].value!==''){
					var phone1 = $('#phone')
					if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone1.value))){
						var check=$('.chose .chose-2 .chose9')
						if(!check.checked){
							var check2=$('.chose .chose-2 .chose10')
							if(!check2.checked){
								// let account = 'weijun'
								let account = $('.username').html()
								var id=$('.html8').html()
								var quantity=$('.html9').html()
								console.log(id)
								console.log(quantity)
								var createTime=String(new Date().getTime())
								let form = document.querySelector('[name=information]')
								let formdata = new FormData(form)
								formdata.append('account',account)
								formdata.append('createTime',createTime)
								formdata.append('id',id)
								formdata.append('quantity',quantity)
								formdata.append('status1',0)
								formdata.append('freight',0)
								console.log(formdata)
								$.ajax({
								        type:'post',
								        url: api +'addOrder_management',
										data:formdata,
								        processData:false,
								        contentType:false,
								        success:function(res){
								            if(res.status == 200){
												console.log('订单上传成功')
												window.location.href='success.html'
								        }
										}
								    })
								
							}else{
								tanchukuang3('请选择支付方式')
							}
						}else{
							tanchukuang3('请选择邮寄方式')
						}
						
					}else{
						tanchukuang3('请输入正确的手机号码!')
					}
				}else{
					var inner=$('#phone').closest('.hang')
					var inneri=inner[0].querySelector('.aaa')
					tanchukuang3(inneri.innerText+"不能为空!")
				}
			}else{
				var inner=$('#shuru3').closest('.hang')
				var inneri=inner[0].querySelector('.aaa')
				tanchukuang3(inneri.innerText+"不能为空!")
			}
		}else{
			var inner=$('#shuru2').closest('.hang')
			var inneri=inner[0].querySelector('.aaa')
			tanchukuang3(inneri.innerText+"不能为空!")
		}
	}else{
		var inner=$('#shuru0').closest('.hang')
		var inneri=inner[0].querySelector('.aaa')
		tanchukuang3(inneri.innerText+"不能为空!")
	}
})
	
}
