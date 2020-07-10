function getobj(ids) {
    return document.getElementById(ids);
}
function checkemail(email) {

    var reg = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if (email.length == 0) {
        getobj("Mail").innerHTML = "邮箱不能为空!";
        return false;
    }
    else {
        if (!reg.test(email)) {
            getobj("Mail").innerHTML = "邮箱格式不正确!";
            return false;
        }
        else {
            getobj("Mail").innerHTML = "<img src='img/yes.png'/>";
        }
    }
}

function checktel(tel) {



    var reg = /^\d{n}$/;
    if (tel.length != 0) {
        if (!reg.test(tel)) {
            getobj("Tel").innerHTML = "电话格式不正确!如:0797-35826983";
            return false;
        }
        else {
            getobj("Tel").innerHTML = "<img src='img/yes.png'/>";
        }
    }



}
function checkmobile(mobile) {



    var reg = /^\d{n}$/;
    if (mobile.length == 0) {
    getobj("Mobile").innerHTML = "手机不能为空!";
    return false;
    }
    else{

        if (!reg.test(mobile)) {
            getobj("Mobile").innerHTML = "手机格式不正确!";
            return false;
        }
        else {
            getobj("Mobile").innerHTML = "<img src='img/yes.png'/>";
        }
        
    }



}
function checkuser(value) {
    getobj("UserName").style.color = "#FF0000";
    if (value.length == 0) {
        getobj("UserName").innerHTML = "用户名不能为空!";
        return false;
    }
    else {
        if (value.length < 6) {
            getobj("UserName").innerHTML = "长度不得小于6位!";
            return false;
        }
        else {
            getobj("UserName").innerHTML = "<img src='img/yes.png'/>";
        }
    }
}

var pwd = "";

function checkpwd(password) {
    var patrn = /^[a-zA-Z0-9]{6,16}$/;
    getobj("Password").style.color = "#FF0000";
    if (password.length == 0) {
        getobj("Password").innerHTML = "密码不能为空!";
        return false;
    }
    else{
    if (!patrn.exec(password)) 
    {
       getobj("Password").innerHTML = "密码只能由数字、字母组成,长度为6-16位!";
        return false;
    }
    else
    {
        getobj("Password").innerHTML = "<img src='img/yes.png'/>";
        var q;
        if (password.length == 6) {
            q = 1;
        }
        else if (password.length > 6 && password.length <= 10) {
            q = 2;
        }
        else if (password.length > 10) {
            q = 3;
        }
        else {
            q = 0;
        }
       
       pwdlength(q);
    }
   
        
    }

}

function checkqpwd(qpwd) {
    if (qpwd.length == 0) {
        getobj("QPwd").innerHTML = "确认不能为空!";
        return false;
    }
    else {
        if (qpwd != getobj("pwd").value) {
            getobj("QPwd").innerHTML = "两次输入密码不一致!!";
            return false;
        }
        else {
            getobj("QPwd").innerHTML = "";
        }
    }
}

function pwdlength(len){
    for (i = 1; i <= 3; i++) {
        getobj("q" + i).style.backgroundColor = "";
        getobj("q" + i).style.color = "";
    }
    if (len != 0) {
        getobj("q" + len).style.backgroundColor = "#FF0000";
        getobj("q" + len).style.color = "#FFF";
    }
}

function checkqq(qq) {
    if (qq.length != 0) {
        if (isNaN(qq)) {
            getobj("QQ").innerHTML = "QQ只能为数字";
        }
        else {
            getobj("QQ").innerHTML = "<img src='img/yes.png'/>";
        }
    }

}

function checkform(obj) {
//    if (checkuser(obj.UserName.value) == false) {
//        return false;
//    }
    if (checkemail(obj.Mail.value) == false) {
        return false;
    }
    if (checkpwd(obj.Password.value) == false) {
        return false;
    }
    if (checkqpwd(obj.QPassword.value) == false) {
        return false;
    }
    if (obj.QQ.value != "") {
        if (checkqq(obj.QQ.value)==false) {
            return false;
        }
    }
    if (obj.Tel.value != "") {
        if (checktel(obj.Tel.value) == false) {
            return false;
        }
    }
    if (checkmobile(obj.Mobile.value) == false) {
        return false;
    }
    if (obj.identify.value == "") {
        alert("验证码不能为空!");
        return false;
    }
    if (obj.check.checked == false) {
        alert("您没有阅读用户协议!");
        return false;
    }
}

function checkfullname(obj) {
    var regm = /^\d{n}$/;
    var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,8}$/;
    var phoneRegWithArea2 = /^[0][1-9]{2,3}[0-9]{5,8}$/;
    var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/; 
 
 if (obj.FullName.value == "") {
     alert("姓名不能为空!");
     return false;
 }

 if (obj.Address.value == "") {
     alert("地址不能为空!");
     return false;
 }
    if (obj.PostCode.value != "") {
        if (isNaN(obj.PostCode.value)) {
            alert("对不邮政编码必须为数字!");
            return false;
        }
        }
        
        
        
        
//        if (obj.Mobile.value != "") {
//            if (!regm.test(obj.Mobile.value)) {
//                alert("手机格式不正确!");
//                return false;
//            }
//        }


//        if (obj.Tel.value != "") {
//            if (obj.Tel.value.length > 9) {
//                if (!phoneRegWithArea.test(obj.Tel.value) && !phoneRegWithArea2.test(obj.Tel.value)) {
//                    alert("电话格式不正确!");
//                    return false;
//                }

//            }
//            else {
//                if (!phoneRegNoArea.test(obj.Tel.value)) {
//                    alert("电话格式不正确!");
//                    return false;
//                }
//            }
//        }
        
   

}
function checkName(str) 
{ 
var Letters = "1234567890~!@#$%^&*():|?><,./\][;'=-"; 
var i; 
var c; 
for(i = 0; i<Letters.length; i++ )     
{ 
c = Letters.charAt(i); 
if (str.indexOf(c)>=0)   
{ 
return false; 
} 
} 

return true; 
} 

function checkaddress(obj) {
    var regm = /^[0-9]*$/;
    var phoneRegWithArea = /^[0-9]*$/;
    var phoneRegWithArea2 = /^[0-9]*$/;
    var phoneRegNoArea = /^[0-9]*$/;  

    if (obj.FullName.value == "") {
        alert("收货人不能为空!");
        return false;
    }
	else if(!checkName(obj.FullName.value))
	{ 
		alert("收货人格式不正确!");
		return false;

	}
    if (obj.ProvinceName.value == "0") {
        alert("请选择省份!");
        return false;
    }

    if (obj.CityName.value == "" || obj.CityName.value=="0") {
        alert("请选择城市!");
        return false;
    }
    if (obj.Address.value == "") {
        alert("街道地址不能为空!");
        return false;
    }
   



    if (obj.Mobile.value == "") {
        alert("手机号不能为空!");
        return false;
    }
    else{
		if(obj.Mobile.value.length!=11)
		{
			alert("手机格式不正确！");
			return false;
		}
        if (!regm.test(obj.Mobile.value)) {
            alert("手机格式不正确!");
            return false;
        }
    }
    
    if (obj.Tel.value != "") { 
      if (!phoneRegNoArea.test(obj.Tel.value)) {
                alert("电话格式不正确!");
         return false; }
       
    }

    if (obj.PostCode.value == "") {
        alert("邮编不能为空!");
        return false;
    }
    else {
        if (isNaN(obj.PostCode.value)) {
            alert("对不邮政编码必须为数字!");
            return false;
        }
    }
}


function checkalterupdate(obj) {
    var regm = /^\d{11}$/; ;
    var phoneRegWithArea = /^[0-9]*$/;
    var phoneRegWithArea2 = /^[0-9]*$/;
    var phoneRegNoArea = /^[0-9]*$/;

    if (obj.FullName.value == "") {
        alert("收货人不能为空!");
        return false;
    }
    if (obj.ProvinceName.value == "0") {
        alert("请选择省份!");
        return false;
    }

    if (obj.CityName.value == "" || obj.CityName.value == "0") {
        alert("请选择城市!");
        return false;
    }
    if (obj.Address.value == "") {
        alert("街道地址不能为空!");
        return false;
    }




    if (obj.Mobile.value == "") {
        alert("手机号不能为空!");
        return false;
    }
    else {
        if (!regm.test(obj.Mobile.value)) {
            alert("请输入11位手机号!");
            return false;
        }
    }

    if (obj.Tel.value != "") {
        if (obj.Tel.value.length > 9) {
            if (!phoneRegWithArea.test(obj.Tel.value) && !phoneRegWithArea2.test(obj.Tel.value)) {
                alert("电话格式不正确!");
                return false;
            }

        }
        else {
            if (!phoneRegNoArea.test(obj.Tel.value)) {
                alert("电话格式不正确!");
                return false;
            }
        }
    }

    if (obj.PostCode.value == "") {
        alert("邮编不能为空!");
        return false;
    }
    else {
        if (isNaN(obj.PostCode.value)) {
            alert("对不邮政编码必须为数字!");
            return false;
        }
    }
}



function checkpwds(obj) {
    if (obj.OldPassword.value == "") {
        alert("原始密码不能为空!");
        return false;
    }
    if (obj.Password.value == "") {
        alert("密码不能为空!");
        return;
    }
    if (obj.QPassword.value == "") {
        alert("确认密码不能为空!");
        return false;
    }
    if (obj.Password.value != obj.QPassword.value) {
        alert("两次输入密码不一致!");
        return false;
    }
}