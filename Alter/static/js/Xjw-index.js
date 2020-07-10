   //轮播
   $(function(){   
        /*  * interval为每个轮播项之间的切换时间 
            * wrap定义是否循环轮播*     
        * */ 
        $("#carouselMenu").carousel({            
            interval: 5000,   
            wrap: true        
        });
    })

    //渲染热卖商品
    getHeatGoods()

    //请求热卖商品
    function getHeatGoods(){

        $.ajax({
            url: api+'getHeatgoods',
            type: 'post',
            dataType: 'json',
            success: function(res){
                if(res.status == 200){
                    var html = ''
                    $.each(res.list,function(index,item){
                        html += `
                                <li class="clearfix">
                                    <a href="hjm-商品详情.html?id=${item.id}">
                                        <img src="${api+item.attr}"/>  
                                    </a>
                                    <div>
                                        <span>${index+1}</span>
                                        <p>
                                            <a href="hjm-商品详情.html?id=${item.id}">${item.name}</a>
                                        </p>
                                        <strong>￥${item.price}元</strong>
                                    </div>
                                </li>
                        `
                    })
                    //将获取的数据显示到页面
                    $('.hottop .hotu1').prepend(html)
                }else if(res.status == 500){
                    console.log('数据库连接出错')
                }
            }
        })        
    }

    //渲染新闻资讯
    getJournalism()
    //
    function getJournalism(){
       $.ajax({
            url: api+'getJournalism',
            type: 'get',
            dataType: 'json',
            success: function(res){
                 
                if(res.status == 200){
                    var html = ''
                        $.each(res.list,function(index,item){
                            var i=0
                            if(i<5){
                                html+= `
                                    <li>
                                        <span class="span-3">${item.createTime}</span>
                                        <a href="Newsdetails.html?id=${item.id}">${item.title}</a>
                                    </li>
                                    `
                                i++
                            }
                        })  
                    //将数据渲染到页面
                    $('.news .ul-1').prepend(html)  
                }
            }
       }) 
    }


    //渲染预约商品商品
    getAppointmentGoods()

    //请求预约商品
    function getAppointmentGoods(){
		console.log(123)
        var createTime = String(new Date().getTime())
        $.ajax({
            url: api+'goodsList2',
            type: 'post',
            data: {
                createTime
            },
            dataType: 'json',
            success: function(res){
                if(res.status == 200){
                    var html = ''
                    $.each(res.list,function(index,item){
                        html += `
                        <li class="lists border fl">
                            <a href="hjm-商品详情.html?id=${item.id}">
                                <img class="border-b-solid" src="${api+item.attr}">
                            </a>
                            <div class="center">
                                    <p><a href="hjm-商品详情.html?id=${item.id}">[${item.name}]</a></p>
                                    <p class="clr-ed1d">￥${item.price}</p>
                                    <p>库存：有库存</p>
                            </div>
                        </li>
                        `
                    })
                    //将获取的数据显示到页面
                    $('.show-divr .appointment').prepend(html)
                }else if(res.status == 500){
                    console.log('数据库连接出错')
                }
            }
        })        
    }

    //渲染现货商品
    getStockGoods()
    //请求现货商品
    function getStockGoods(){
		var createTime = String(new Date().getTime())
        $.ajax({
            url: api+'goodsList1',
            type: 'post',
			data: {
			    createTime
			},
            dataType: 'json',
            success: function(res){
                if(res.status == 200){
                    var html = ''
                    $.each(res.list,function(index,item){
                        html += `
                        <li class="lists border fl">
                            <a href='hjm-商品详情.html?id=${item.id}'>
                                <img class="border-b-solid" src="${api+item.attr}">
                            </a>
                            <div class="center">
                                    <p><a href="hjm-商品详情.html?id=${item.id}">[${item.name}]</a></p>
                                    <p class="clr-ed1d">￥${item.price}</p>
                                    <p>库存：有库存</p>
                            </div>
                        </li>
                        `
                    })
                    //将获取的数据显示到页面
                    $('.show-divr .stock').prepend(html)
                }else if(res.status == 500){
                    console.log('数据库连接出错')
                }
            }
        })                
    }
	
	$('.search').on('click','.search-btn',function(){
		var name = $('.search-val').val()
		window.location.href="Xjw-search.html?name="+name
		
	})
	