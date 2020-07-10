

var query =require('../mysql/promise1')
var jsonwebtoken = require('jsonwebtoken')


var login =function(req,res){

// 获取用户名和密码
var password = req.body.password;
var account = req.body.account;
console.log(account)

// 判断用户名和密码是否存在
if(!account){
    // 返回报错信息
    res.json({
        status:502,
        message:'用户名不能为空'
    })
}

if(!password){
    res.json({
        status:503,
        message:'密码不能为空'
    })
}

// 从数据库中查找用户名和密码是否正确
query('select * from user where account = ?',account).then(function(result){
    if(result.length > 0) {
        // 用户存在 判断密码是否正确
        if(password != result[0].password){
            res.json({
                status:505,
                message:'密码不正确'
            })
        } else{
            // 密码和用户名都正确  给已登录的一个状态值
            // 使用jsonwebtoken加密登陆信息
            var token = jsonwebtoken.sign({
                account:account
            },'abcd')

            res.json({
                status:200,
                data:{
                    token,
                    info: {
                        id:result[0].id,
                        account:result[0].account
                    }
                }
            })

        }
        
    }else{
        res.json({
            status:504,
            message:'用户不存在'
        })
    }
})
}


// 注册

var register=function(req,res){
    //获取用户名密码和邮箱
    var password = req.body.password;
    var account = req.body.account;
    var Email = req.body.Email;
    var data = [req.body.account,req.body.password,req.body.Email]
    var sql = 'INSERT INTO user(account,password,Email) values(?)';
    
   query('select * from user where account = ?',account).then(function(result){

    if(result.length > 0){
        res.json({
            status:508,
            message:'用户名已存在'
        })
    }else{
        
         //注册的信息添加到数据库中
    query(sql,[data]).then(function(result){

        
        res.json({
            status:201,
            message:'注册成功'
        })
        


    }).catch(function(err){
        console.log(err)
       
    })



    }


   })




   




}

module.exports={
    login,
    register
}