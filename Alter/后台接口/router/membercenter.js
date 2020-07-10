
var query =require('../mysql/promise1')
var multiparty = require('multiparty')
// 修改个人信息
var personal = function(req,res){
// 获取当前登录的用户名
let form = new multiparty.Form()
form.parse(req,function(err,fields){
    let data = [fields.real1,fields.address,fields.postcode,fields.phone,fields.qq,fields.account]
    let sql=`
    UPDATE USER SET real1=?,address=?, postcode=?, phone=?, qq=? WHERE account=?
    `
    query(sql,data).then(function(result){
        res.json({
            status:202,
            message:'修改个人信息成功'
        })
    }).catch(function(err){
        console.log(789)
    })

})
}

// 修改送货地址
let delivery = function(req,res){
    let form = new multiparty.Form()
    form.parse(req,function(err,fields){
        if(fields.tel==''){
             fields.tel= null
        }
        let data = [fields.consignee,fields.region,fields.address,fields.phone,fields.tel,fields.postcode,fields.acquiescent,fields.account,]
        let sql='update user set consignee=?, region=?, address=?, phone=?, tel=?, postcode=?, acquiescent=?  where account=?'
       
        query(sql,data).then(function(result){
            res.json({
                status:204,
                message:'修改地址成功'
            })
        }).catch(function(err){
            res.json({
                status:504,
                message:'修改地址失败'
            })
            console.log('修改地址失败')
        })
    })
   
}

//获取送货地址接口
var getdelivery=function(req,res){
    let form = new multiparty.Form()
    form.parse(req,function(err,fields){
    let data=[fields.account]
    var sql='SELECT * FROM user where account=?'
    query(sql,data).then(function(result){
            res.json({
                status:209,
                list:result[0],
            })
    }).catch(function(err){
        res.json({
            status:500,
            message:'服务器错误'
        })
    })
})
}

//删除送货地址接口
var deletadelivery=function(req,res){
    let form = new multiparty.Form()
    form.parse(req,function(err,fields){
    var account=fields.account
    var sql=`
    update user set consignee=null, region=null, address=null, phone=null, tel=null, postcode=null, acquiescent=null where account=?`
    query(sql,account).then(function(result){
            res.json({
                status:200,
                list:result,
            })
    }).catch(function(err){
        res.json({
            status:500,
            message:'服务器错误'
        })
    })
})
}


// 修改密码
let password = function(req,res){
    let account = req.body.account
    let password = req.body.newpassword
    let sql = 'select * from user where account = ?'
    let newsql = 'update user set password=? where account = ?'
    let data = [password,account]
    query(sql,account).then(function(result){
        let password = req.body.password
        // 判断原密码是否正确
        if(password != result[0].password){
            res.json({
                status:509,
                message:'原密码不正确'
            })
        }else{

            query(newsql,data).then(function(result){
        res.json({
            status:203,
            message:'修改密码成功'
        })
    }).catch(function(err){
        console.log(456)
    })
            

        }
    })
}


module.exports={
    personal,
    delivery,
    password,
    getdelivery,
    deletadelivery
}