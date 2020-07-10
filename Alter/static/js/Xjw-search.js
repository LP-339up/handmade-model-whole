//渲染搜索页面
//请求搜索商品

function searchbtn() {
	$('.search-btn').click(function() {
			if($('.search-val').val()!==''){
				var name = $('.search-val').val()
			}
			var status=1
			//console.log(localStorage.getItem('serdata'))
			searchbtn1()
		})
	}
	
function searchbtn1() {
	function GetUrlByParamName(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var URL = decodeURI(window.location.search);
		var r = URL.substr(1).match(reg);
		if (r != null) {
			//decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码 
			return decodeURI(r[2]);
		};
		return null;
	};
		//使用GetUrlByParamName()方法获取url中参数名为name的参数内容        
		var name = GetUrlByParamName('name');
	// var name = getQueryString('name')
	if($('.search-val').val()!=='请输入关键字'){
		var name = $('.search-val').val()
		console.log(name)
	}
	console.log($('.search-val').val())
			$.ajax({
				url: api + 'goodsList',
				type: 'post',
				dataType: 'json',
				data: {
					name,
					status,
					current
				},
				success: function(res) {
					if (res.status == 200) {
						$('.page-index').remove()
										//翻页渲染
										total=Math.ceil(res.total/pageSize)
										var pageHtml=''
										for(var i=0;i<total;i++){
											pageHtml=`<li data-page="${i+1}" class="page-index ${current == (i+1) ? 'active' : ''} page1"><a>${i+1}</a></li>`
											$('.page-btn.next').before(pageHtml)
										}
						var html = ''
						$.each(res.list, function(index, item) {
							html +=
								`
					<li ><a  href="hjm-商品详情.html?id=${item.id}"> <img src="${api+item.attr}" style="width:1.62rem;height:1.62rem;"></a>
					    <div>
					        <p>[<a  href="hjm-商品详情.html?id=${item.id}">${item.name}</a>]</p>
					        <strong>￥${item.price}</strong>
					        <P>库存:有库存</P>
					    </div>
					</li>
			        `
						})
						//将获取的数据显示到页面
						$('.ul_2').html(html)
					} else if (res.status == 500) {
						console.log('数据库连接出错')
					}
				}
			})
			}