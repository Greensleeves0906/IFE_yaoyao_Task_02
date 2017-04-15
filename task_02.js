//检验名称
function checkName(){
	var oName = document.getElementById('name').value;
	var oNameResult = document.getElementById("nameResult");
	if(!oName){	
		oNameResult.innerHTML="姓名不能为空";
		oNameResult.style.color = "red";
		return false;
	}
	if(oName){
		var numL = 0;
		var numC = 0;
		var letter = oName.match(/[a-zA-Z_0-9]/g);
		if(letter!=null){
			numL = letter.length;
		}
		var chinese = oName.match(/[^x00-xff]/g);//匹配所有双字节字符的表达式
		if(chinese!=null){
			numC = chinese.length;
		}
		if((numL+numC*2)>16||(numL+numC*2)<4){
			oNameResult.innerHTML="姓名格式不正确，4~16个字符";
			oNameResult.style.color = "red";
			return false;
		}
		else{
			oNameResult.innerHTML="姓名格式正确";
			oNameResult.style.color = "green";
			return true;
		}
	}
}
//检验密码
function checkPassword(){
	var oPassword = document.getElementById('password').value;
	var oPasswordResult = document.getElementById("passwordResult");
	var passwordReg = /^[a-zA-Z_0-9]{6,16}$/;
	if(!oPassword){
		oPasswordResult.innerHTML="密码不能为空";
		oPasswordResult.style.color = "red";
		return false;
	}else if(!passwordReg.test(oPassword)){
		oPasswordResult.innerHTML="密码应为6~16位字符";
		oPasswordResult.style.color = "red";
		return false;
	}else{
		oPasswordResult.innerHTML="密码格式正确";
		oPasswordResult.style.color = "green";
		return true;
	}
}
//检验密码确认
function recheckPassword(){
	var oPasswordCheck = document.getElementById('passwordCheck').value;
	var oPasswordCheckResult = document.getElementById("passwordCheckResult");
	var oPassword = document.getElementById('password').value;
	if(!oPasswordCheck){
		oPasswordCheckResult.innerHTML="确认密码不能为空";
		oPasswordCheckResult.style.color = "red";
		return false;
	}else if(oPasswordCheck!=oPassword){
		oPasswordCheckResult.innerHTML="两次输入密码不同，请重新输入";
		oPasswordCheckResult.style.color = "red";
		return false;
	}else{
		oPasswordCheckResult.innerHTML="确认密码正确";
		oPasswordCheckResult.style.color = "green";
		return true;
	}
}
//验证邮箱
function checkEmail(){
	var oEmail = document.getElementById('email').value;
	var oEmailResult = document.getElementById("emailResult");
	var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	if(!oEmail){
		oEmailResult.innerHTML="邮箱不能为空";
		oEmailResult.style.color = "red";
		return false;
	}else if(!emailReg.test(oEmail)){
		oEmailResult.innerHTML="邮箱格式有误";
		oEmailResult.style.color = "red";
		return false;
	}else{
		oEmailResult.innerHTML="邮箱格式正确";
		oEmailResult.style.color = "green";
		return true;
	}
}
//检验手机号码
function checkPhoneNumber(){
	var oPhoneNumber = document.getElementById('phoneNumber').value;
	var oPhoneNumberResult = document.getElementById("phoneNumberResult");
	var phoneNumberReg = /[0-9]{11}/;
	if(!oPhoneNumber){
		oPhoneNumberResult.innerHTML="手机号码不能为空";
		oPhoneNumberResult.style.color = "red";
		return false;
	}else if(!phoneNumberReg.test(oPhoneNumber)){
		oPhoneNumberResult.innerHTML="手机号码格式有误";
		oPhoneNumberResult.style.color = "red";
		return false;
	}else{
		oPhoneNumberResult.innerHTML="手机号码格式正确";
		oPhoneNumberResult.style.color = "green";
		return true;
	}
}
function init(){
	var oName = document.getElementById('name');
	var oPassword = document.getElementById('password');
	var oPasswordCheck = document.getElementById('passwordCheck');
	var oEmail = document.getElementById('email');
	var oPhoneNumber = document.getElementById('phoneNumber');
	var oNameResult = document.getElementById("nameResult");
	var oPasswordResult = document.getElementById("passwordResult");
	var oPasswordCheckResult = document.getElementById("passwordCheckResult");
	var oEmailResult = document.getElementById('emailResult');
	var oPhoneNumberResult = document.getElementById('phoneNumberResult');
	oName.onfocus = function(){
		oNameResult.innerHTML = "必填，长度为4~16个字符";
		oNameResult.style.color= "#CCCCCC";
	}
	oName.onblur = function(){
		checkName();
	}
	oPassword.onfocus = function(){
		oPasswordResult.innerHTML = "必填，长度为6~16个字符";
		oPasswordResult.style.color =　"#CCCCCC";
	}
	oPassword.onblur = function(){
		checkPassword();
	}
	oPasswordCheck.onfocus = function(){
		oPasswordCheckResult.innerHTML = "必填，长度为6~16个字符";
		oPasswordCheckResult.style.color =　"#CCCCCC";
	}
	oPasswordCheck.onblur = function(){
		recheckPassword();
	}
	oEmail.onfocus = function(){
		oEmailResult.innerHTML = "必填";
		oEmailResult.style.color =　"#CCCCCC";
	}
	oEmail.onblur = function(){
		checkEmail();
	}
	oPhoneNumber.onfocus = function(){
		oPhoneNumberResult.innerHTML = "必填";
		oPhoneNumberResult.style.color =　"#CCCCCC";
	}
	oPhoneNumber.onblur = function(){
		checkPhoneNumber();
	}
	checkAll.onclick = function(){
		checkName();
		checkPassword();
		recheckPassword();
		checkEmail();
		checkPhoneNumber();
		if(checkName()&&checkPassword()&&checkEmail()&&checkPhoneNumber()){
			alert("验证成功！");
		}else{
			alert("输入有误，提交失败！");
		}
	}
}
init();