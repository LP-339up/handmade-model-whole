var query =require('../mysql/promise1')
var multiparty = require('multiparty')

function getTime(time){
    var datetime=new Date(Number(time));
    var year =datetime.getFullYear();
    var month=datetime.getMonth()+1;
    var day=datetime.getDate();
    var hours=datetime.getHours();
    var monutes=datetime.getMinutes();
    var seconds=datetime.getSeconds();
    return year +'-'+month+'-'+day+' '+hours+':'+monutes+':'+seconds
}

function getTime1(time){
    var datetime=new Date(Number(time));
    var year =datetime.getFullYear();
    var month=datetime.getMonth()+1;
    var day=datetime.getDate();
    var hours=datetime.getHours();
    var monutes=datetime.getMinutes();
    var seconds=datetime.getSeconds();
    return seconds+monutes+hours+day+month+year+''
}
// 上传订单参数
var addOrder_management=function(req,res){
    var body=req.body
    let form = new multiparty.Form()
    form.parse(req,function(err,fields){
        var time = getTime(fields.createTime)
        var time1 = getTime1(fields.createTime)
        //订单号
        var order_id= fields.account+time1+fields.id+fields.quantity
        if(fields.tel==''){
             fields.tel= null
        }
        if(fields.leave_word==''){
            fields.leave_word= null
       }
        let data = [fields.account,fields.id,fields.quantity,time,fields.status1,order_id,fields.consignee,fields.region,fields.address,fields.phone,fields.tel,fields.leave_word,fields.freight,fields.postcode]
    //将数据填充到数据库 status=0未付款，1付款
    console.log(data)
    // var data=[body.account,body.id,body.quantity,time,body.status1,order_id,body.consignee,body.region,body.address,body.phone,body.tel,body.leave_word,body.freight,body.postcode]
    var sql='INSERT INTO order_management(account,id,quantity,time,status1,order_id,consignee,region,address,phone,tel,leave_word,freight,postcode) values(?)'
    //操作数据库
    query(sql,[data]).then(function(result){
        res.json({
            status:200,
            message:'订单添加成功'
        })
        var id=fields.id
        var sql1='update commodity_details set heat=heat+1 where id=?'
        query(sql1,id).then(function(result){
        res.json({
            status:200,
            message:'热度添加成功'
            })
        }).catch(function(err){
            console.log(err)
            console.log(456)
        })
    }).catch(function(err){
        console.log(err)
        console.log(123)
    })
})
}

//获取订单列表
var getOrder_management=function(req,res){
    //多表查询  分页limit   排序order by
    var account =req.query.account||req.body.account
    var id =req.query.id||req.body.id
    var quantity =req.query.quantity||req.body.quantity

    //需要前端传入的数据 currentPage 当前在多少页 pageSize 每一个页面放的数据长度
    var currentPage=req.query.current || req.body.current || 1
    var pageSize=req.query.pageSize || req.body.pageSize || 4

    //limit 从第几条数据开始 ，长度  limit (currentPage-1)*pageSize,pageSize
    var sql=`SELECT g.id id,g.name NAME, g.price price, g.goodsImg goodsImg,g.attr attr,s.quantity quantity , s.status1 status1 ,s.time time,s.account account,s.order_id order_id,
    s.consignee consignee, s.region region,s.address address,s.phone phone,s.tel tel,s.leave_word leave_word,s.freight freight,s.postcode postcode
    FROM commodity_details g RIGHT JOIN order_management s ON g.id = s.id   
             `
             if(account){
                 sql+='where account like"%'+account+'%"'
            }
                 sql+=
             `
             order by time desc limit ?,?`
    var data=[(currentPage-1)*pageSize,Number(pageSize)]
     
    query(sql,data).then(function(result){
        var sql1=`SELECT g.id id,g.name NAME, g.price price, g.goodsImg goodsImg,s.quantity quantity, s.status1 status1 ,s.account account,s.order_id order_id,
        s.consignee consignee, s.region region,s.address address,s.phone phone,s.tel tel,s.leave_word leave_word,s.freight freight,s.postcode postcode
        FROM commodity_details g RIGHT JOIN order_management s ON g.id = s.id 
        `
        if(account){
            sql1+='where account like"%'+account+'%"'
       }
    
        query(sql1).then(function(resl){
            res.json({
                status:200,
                list:result,
                total:resl.length
            })
    }).catch(function(err){
        console.log(err)
        console.log(222)
    })
}).catch(function(err){
        console.log(err)
        console.log(333)
})
}

//获取订单列表
var getOrder_management1=function(req,res){
    //多表查询  分页limit   排序order by
    var account =req.query.account||req.body.account
    var id =req.query.id||req.body.id
    var quantity =req.query.quantity||req.body.quantity
    var status1 =req.query.status1||req.body.status1

    //需要前端传入的数据 currentPage 当前在多少页 pageSize 每一个页面放的数据长度
    var currentPage=req.query.current || req.body.current || 1
    var pageSize=req.query.pageSize || req.body.pageSize || 4

    //limit 从第几条数据开始 ，长度  limit (currentPage-1)*pageSize,pageSize
    var sql=`SELECT g.id id,g.name NAME, g.price price, g.goodsImg goodsImg,g.attr attr,s.quantity quantity , s.status1 status1 ,s.time time,s.account account,s.order_id order_id,
    s.consignee consignee, s.region region,s.address address,s.phone phone,s.tel tel,s.leave_word leave_word,s.freight freight,s.postcode postcode
    FROM commodity_details g RIGHT JOIN order_management s ON g.id = s.id   
             `
             if(account&&status1){
                sql+='where status1 = "'+status1+'" and account like "%'+account+'%"'
            }
                 sql+=
             `
             order by time desc limit ?,?`
    var data=[(currentPage-1)*pageSize,Number(pageSize)]
    query(sql,data).then(function(result){
        var sql1=`SELECT g.id id,g.name NAME, g.price price, g.goodsImg goodsImg,g.attr attr,s.quantity quantity, s.status1 status1 ,s.account account,s.order_id order_id,
        s.consignee consignee, s.region region,s.address address,s.phone phone,s.tel tel,s.leave_word leave_word,s.freight freight,s.postcode postcode
        FROM commodity_details g RIGHT JOIN order_management s ON g.id = s.id 
        `
        if(account&&status1){
            sql1+='where status1 = "'+status1+'" and account like "%'+account+'%"'
       }
    
        query(sql1).then(function(resl){
            res.json({
                status:200,
                list:result,
                total:resl.length
            })
    }).catch(function(err){
        console.log(err)
        console.log(265)
    })
}).catch(function(err){
        console.log(err)
        console.log(4447)
})
}

//删除订单
var deletaOrder_management=function(req,res){
    //获取用户名和商品id  并且将数据从后台删除
    var id=req.body.id||req.query.id
    var account=req.body.account||req.query.account
    data=[id,account]
    query('delete from order_management where id =? and account=?',data).then(function(result){
        res.json({
            status:200,
            message:'删除成功'
        })
    }).catch(function(err){
        console.log(err)
        res.json({
            status:500,
            message:'删除失败'
        })
    })
}


//修改订单
var EditOrder_management=function(req,res){
    var body=req.body
    //操作数据库
    var data=[body.quantity,body.account]
    var sql='update order_management set status1=? where account=? and id=?'
    //操作数据库
    query(sql,quantity).then(function(result){
        res.json({
            status:200,
            message:'修改订单'
        })
    }).catch(function(err){
        console.log(err)
    })
}

module.exports={
    addOrder_management,
    getOrder_management,
    deletaOrder_management,
    EditOrder_management,
    getOrder_management1
}


