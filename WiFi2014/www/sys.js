var reg_mobile = /^(1[3458]\d{9})$/;
var seconds = 60;
var iMaxPhone = 1; 
//0 免费上网模版 1 短信验证模版 2 优惠券模版
var iType = 0;

 

function cookie(name){    

   var cookieArray=document.cookie.split("; "); 

   var cookie=new Object();    

   for (var i=0;i<cookieArray.length;i++){    

      var arr=cookieArray[i].split("=");       

      if(arr[0]==name)return unescape(arr[1]);   

   } 

   return ""; 

} 

 

function delCookie(name)

{

   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();

}

 

function getCookie(objName){

    var arrStr = document.cookie.split("; ");

    for(var i = 0;i < arrStr.length;i ++){

        var temp = arrStr[i].split("=");

        if(temp[0] == objName) return unescape(temp[1]);

   } 

}

 

function addCookie(objName,objValue,objHours){      

    var str = objName + "=" + escape(objValue);

    if(objHours > 0){                               

        var date = new Date();

        var ms = objHours*3600*1000;

        date.setTime(date.getTime() + ms);

        str += "; expires=" + date.toGMTString();

   }

   document.cookie = str;

}

 

function SetCookie(name,value)

{

    var Days = 1; 

    var exp = new Date();    

    exp.setTime(exp.getTime() + Days*10*60*60*1000);

    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

}

function getCookie(name)

{

    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));

     if(arr != null) return unescape(arr[2]); return null;

 

}

function delCookie(name)

{

    var exp = new Date();

    exp.setTime(exp.getTime() - 1);

    var cval=getCookie(name);

    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();

}

function isiphone()  
{
   if(navigator.userAgent.indexOf("iphone")>0 || navigator.userAgent.indexOf("iPhone")>0) {  
        return 1;  
   }    
   return 0; 
}
function show_djs() {  
   var djs = document.getElementById("TxtPhoneValid");
   if(seconds > 0)
   {
	   seconds--;
	   djs.innerHTML = '<input type="button" name="codebtn" style="height:30px;width:142px;font-size:16px;" disabled="disabled" value=' + seconds +'秒后重新获取>';
	   setTimeout("show_djs()", 1000); 
   }
   else
   {
	   seconds = 60;
	   djs.innerHTML = '<input type="button" style="background-image:url(images/login_09.png);height:35px; width:142px;font-size: 16px;" name="codebtn" value="获取短信验证码" onclick="OnclickGetCode()">';
   } 
   if(seconds == 53)
   {
	    if(SpecialTurn())
		  {
			  return;
		  }
   }         
} 

/* 创建 XMLHttpRequest 对象 */
var xmlHttp;
function GetXmlHttpObject(){
    if (window.XMLHttpRequest){
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
function getOkGet(){
    if(xmlHttp.readyState==1||xmlHttp.readyState==2||xmlHttp.readyState==3){
        // 本地提示：加载中
        document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">短信发送中...</font></label>';                
    }
    if (xmlHttp.readyState==4 && (xmlHttp.status==200)){
        var d= xmlHttp.responseText;
        // 处理返回结果
		//if(d == "0"){
		document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">短信发送成功。请注意查收。</font></label>';//}
		/*else if(d == "4"){
		document.getElementById("TxtDescri").innerHTML = '<label>短信余额不足。请联系商家。</label>';}
		else{
		document.getElementById("TxtDescri").innerHTML = '<label>短信网关不存在。请联系商家。</label>';}*/
                          
    }
}
function OnclickGetCode()
{
  if(getCookie("valiadnum") > 3)
  {
	  alert("亲，很抱歉，您验证错误的次数太多。");
	  document.getElementById("tbValid").innerHTML = "";
	  SetCookie("valiad","false");
	  hidLogin();
	  return;
  }  
  else
  {
	  document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">还有'+ (3 - iMaxPhone) +'次机会得到验证码。</font></label>' ;	  
  }	
	  
  show_djs();  
  xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null){
        alert('您的浏览器不支持！请尝试其他浏览器！');
        return;
  }
  var phone = document.getElementById("txtPhone").value;
  var title = document.title;
  var url = "wifidayGET.htm?phone=" + phone + "&code=" + getRegCode();
  //alert((url));
  xmlHttp.open("GET",url,true);
  xmlHttp.onreadystatechange=getOkGet;//发送事件后，收到信息了调用函数
  xmlHttp.send(); 
  iMaxPhone++;
  SetCookie("valiadnum",iMaxPhone);
  document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">短信发送成功。请注意查收。</font></label>';

}
function getRegCode()
{
  var phone = document.getElementById("txtPhone").value;
  var iCode = 0;
  for(var i = 0; i < phone.length;i++)
  {
	  if(!isNaN(parseInt(phone.slice(i,i+1))))
	  {
		  iCode += parseInt(phone.slice(i,i+1));
	  }
  }
  
  var todayDate = new Date();
  var Day = todayDate.getDate();
  var Month = todayDate.getMonth() + 1;
  var Year = todayDate.getFullYear();
  iCode = parseInt(Year) * iCode + parseInt(Month);
  
  return iCode;
}
function GetJumpUrl()
{
	var jump = document.getElementById("LOGINTYPE").getAttribute("jump");
	if(jump == "" || jump == null)
	{
		jump = "index.html";
	}
	return jump;
}
function SpecialTurn()
{
	var jump = GetJumpUrl();
	var dx = document.getElementById("LOGINTYPE").getAttribute("duanxin");
	var flag = 0;
	if(dx == "" || dx == null || dx == "0")
	{
		flag = 0;
		return 0;
	}
	else
	{
		flag = 1;
	}
	
	if(flag == 1)
	{
		var phone = document.getElementById("txtPhone").value;
		SetCookie("phone",phone); 
	  	SetCookie("valiad","true");
		allowNet(null,null);
	  if(iType == 2)
	  {
	  var todayDate = new Date();
 	  var Day = todayDate.getDate();
  	var Month = todayDate.getMonth() + 1;
 	  var Year = todayDate.getFullYear();
	  SetCookie("phone",phone); 
	  SetCookie("valiad","true");
	  var date = Year + "-" + Month + "-" + Day;
		var strName = GetQueryString("store");
		SetCookie("youhui",date);
		window.location.href='wifidayyh.html?descri=' + strName;		
	  	//document.getElementById("TxtDescri").innerHTML = "验证成功，即将为你跳转！";
		alert("亲，受工信部政策影响，短信可能延迟或失败！如果没收到，我们会在一分钟内为您开通网络，祝您上网愉快！");
	  }
	  else if(iType == 1)
	  {
	  	  //document.getElementById("tbValid").innerHTML = "验证成功，请尽情上网吧！";
		  window.location.href = jump;
		  alert("亲，受工信部政策影响，短信可能延迟或失败！如果没收到，我们会在一分钟内为您开通网络，祝您上网愉快！");
	  }
	  return 1;
	}
}
function OnclickValid()
{
  var phone = document.getElementById("txtPhone").value;
  var regcode = document.getElementById("txtRegCode").value;
  var iCode = getRegCode();

  if(iCode != parseInt(regcode))
  {
	  if(getCookie("valiadnum") > 6)
	  {
		  alert("亲，很抱歉，您验证错误的次数太多。");
		  document.getElementById("tbValid").innerHTML = "";
		  SetCookie("valiad","false");
		  hidLogin();
	  }
	  else
	  {
		  document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">还可输入'+ (6 - iMaxPhone) +'次验证码。</font></label>' ;	  
	  }	  
	  iMaxPhone++;
	  SetCookie("valiadnum",iMaxPhone);
  }
  else
  {
	  var todayDate = new Date();
 	  var Day = todayDate.getDate();
  	  var Month = todayDate.getMonth() + 1;
 	  var Year = todayDate.getFullYear();
	  SetCookie("phone",phone); 
	  SetCookie("valiad","true");
	  var date = Year + "-" + Month + "-" + Day;
	  allowNet(phone,getRegCode());
	  if(iType == 2)
	  {
		var strName = GetQueryString("store");
		SetCookie("youhui",date);
		window.location.href='wifidayyh.html?descri=' + strName;		
	  	//document.getElementById("TxtDescri").innerHTML = "验证成功，即将为你跳转！";
	  }
	  else if(iType == 1)
	  {
	  	  //document.getElementById("tbValid").innerHTML = "验证成功，请尽情上网吧！";
		  window.location.href = GetJumpUrl();
		  alert("亲，现在你可以自由上网啦！");
	  }
  }
  
}
function PhoneChanged()
{
	var phone = document.getElementById("txtPhone").value;
	if(!reg_mobile.test(phone)){
		document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">请输入正确的手机号码。</font></label>';
	}else{
		document.getElementById("TxtPhoneValid").innerHTML = '<input type="button" name="codebtn" value="获取短信验证码" style="background-image:url(images/login_09.png);height:30px; width:142px;font-size: 15px;" onclick="OnclickGetCode()">';
		document.getElementById("TxtDescri").innerHTML = '<label><font style = "FONT-SIZE: 15px" color="#FFFFFF">请点击获取短信验证码。</font></label>';
	}
}
function allowNet(phone,code)
{
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
		  alert('您的浏览器不支持！请尝试其他浏览器！');
		  return;
	}
	var url;
	if(iType == 0 || phone == null)
	{
		url = "wifidayok.html"
		
		xmlHttp.open("GET",url,true);
		xmlHttp.onreadystatechange=CallBack;
		xmlHttp.send();
		xmlHttp.open("GET",url,true);
		xmlHttp.onreadystatechange=CallBack;
		xmlHttp.send();
		xmlHttp.open("GET",url,true);
		xmlHttp.onreadystatechange=CallBack;
		xmlHttp.send();
		xmlHttp.open("GET",url,true);
		xmlHttp.onreadystatechange=CallBack;
		xmlHttp.send();
		xmlHttp.open("GET",url,true);
		xmlHttp.onreadystatechange=CallBack;
		xmlHttp.send();
	}
	else
	{
		url = "wifidayallow.htm?phone=" + phone;
	}
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;//发送事件后，收到信息了调用函数
	xmlHttp.send();
	
	window.location.href = GetJumpUrl();
}
/*function allowWeixin()
{
	var realpwd = document.getElementById("wxpwd").getAttribute("psw");
	var pwd = document.getElementById("wxinput").value
	if(pwd == realpwd)
	{
		xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
		  alert('您的浏览器不支持！请尝试其他浏览器！');
		  return;
	}
	var url = "wifidayok.html"
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=getOkGet;//发送事件后，收到信息了调用函数
	xmlHttp.send();
	window.location.href = GetJumpUrl();
	alert("亲，现在你可以自由上网啦！");
	}
	else
	{
		alert("亲，请在关注公众帐号以后得到正确的上网密码哟！");
	}
}*/
function Init()
{
	var phone = getCookie("phone");
	if(reg_mobile.test(phone))
	{
		SetCookie("phone",phone,24);
		allowNet(phone,getRegCode());
		if(iType == 2)
		{
			//document.getElementById("tbValid").innerHTML = "感谢您再次光临，即将为你跳转!";
			var strName = GetQueryString("store");
			window.location.href='wifidayyh.html?descri=' + strName;
		}
		
		if(iType == 1)
		{
			alert("亲，现在你可以自由上网啦！");
			window.location.href = GetJumpUrl();
		}
		

	}
	var Err = getCookie("valiad");
	if(Err == "false")
	{
		 alert("亲，很抱歉，您验证错误的次数太多。");
		 hidLogin();
	}

	
}
function showLoginYH() {
	var loginDiv = document.getElementById("loginDiv");
	var zhezhao = document.getElementById("zhezhao");
	var clientx = document.body.scrollWidth;//document.documentElement.clientWidth;
	var clienty = document.documentElement.clientHeight;
	var scrolly = document.body.scrollTop;
	var l_margin = (clientx - parseInt(loginDiv.style.width)) / 2;
	var t_margin = scrolly + document.getElementById("title").clientHeight + 10;//(clienty - parseInt(loginDiv.style.height)) / 2 + scrolly - 20 ;
	loginDiv.style.left = l_margin + "px";
	loginDiv.style.top = t_margin +"px";
	loginDiv.style.display = "block";
	zhezhao.style.left = l_margin + "px";
	zhezhao.style.top = t_margin +"px";
	zhezhao.style.display = "block";
	zhezhao.style.width = 320;
	zhezhao.style.height = document.documentElement.scrollHeight - 32 - 96;
	iType = 2;
	Init();
}

function showLoginMF() {
	/*var loginDiv = document.getElementById("loginDiv");
	var zhezhao = document.getElementById("zhezhao");
	var clientx = document.documentElement.clientWidth;
	var clienty = document.documentElement.clientHeight;
	var scrolly = document.documentElement.scrollTop;
	var scrolly = document.body.scrollTop;
	var l_margin = (clientx - parseInt(loginDiv.style.width)) / 2;
	var t_margin = (clienty - parseInt(loginDiv.style.height)) / 2 + scrolly - 20;
	loginDiv.style.left = l_margin + "px";
	loginDiv.style.top = t_margin +"px";
	loginDiv.style.display = "block";
	zhezhao.style.display = "block";
	zhezhao.style.width = 320;
	zhezhao.style.height = document.documentElement.scrollHeight - 32 - 96;*/
	iType = 0;
	allowNet(null,null);
	alert("亲，现在你可以自由上网啦！");
}

function showLoginDX() {
	var loginDiv = document.getElementById("loginDiv");
	var zhezhao = document.getElementById("zhezhao");
	var clientx = document.body.scrollWidth;//document.documentElement.clientWidth;
	var clienty = document.documentElement.clientHeight;
	var scrolly = document.body.scrollTop;
	var l_margin = (clientx - parseInt(loginDiv.style.width)) / 2;
	var t_margin = scrolly + document.getElementById("title").clientHeight + 10;//(clienty - parseInt(loginDiv.style.height)) / 2 + scrolly - 20 ;
	loginDiv.style.left = l_margin + "px";
	loginDiv.style.top = t_margin +"px";
	loginDiv.style.display = "block";
	zhezhao.style.left = l_margin + "px";
	zhezhao.style.top = t_margin +"px";
	zhezhao.style.display = "block";
	zhezhao.style.width = 320;
	zhezhao.style.height = document.documentElement.scrollHeight - 32 - 96;
	iType = 1;
	Init();
}

function showLoginWX() {
	location.href="/wifiweixin.html"
}

function showLoginWX1() {
	var xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
		  alert('您的浏览器不支持！请尝试其他浏览器！');
		  return;
	}
	var url = "wifiweixin.html"
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	if(isiphone() == 1)
	{
		location.href="index.html?wifiweixin=token0"
	}
	else
	{
		alert("请打开微信关注公众账号后，在自动回复的消息中，点击开通上网。");
	}
}

function showLoginWX2() {
	var xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
		  alert('您的浏览器不支持！请尝试其他浏览器！');
		  return;
	}
	var url = "wifiweixin.html"
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;//发送事件后，收到信息了调用函数
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	if(isiphone() == 1)
	{
		location.href="index.html?wifiweixin=token2"
	}
	else
	{
		alert("请打开微信扫描二维码，关注后上网");
	}
}
function CallBack()
{
	
}
function showLoginWX3() {
	var xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null){
		  alert('您的浏览器不支持！请尝试其他浏览器！');
		  return;
	}
	var url = "wifiweixin.html"
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	xmlHttp.open("GET",url,true);
	xmlHttp.onreadystatechange=CallBack;
	xmlHttp.send();
	if(isiphone() == 1)
	{
		location.href="index.html?wifiweixin=token3"
	}
	else
	{
		alert("请打开微信扫一扫店内二维码，一键关注后上网。");
	}
}

function showLoginAlipay()
{
	var jumpURL = GetJumpUrl()
	allowNet(null,null);
	location.href="index.html?wifiweixin=token10";
}

function hidLogin() {
	var loginDiv = document.getElementById("loginDiv");
	var zhezhao = document.getElementById("zhezhao");
	loginDiv.style.display = "none";
	zhezhao.style.display = "none";
}
function titleMove() {
	var moveable = true;
	var loginDiv = document.getElementById("loginDiv");

	var clientX = window.event.clientX;
	var clientY = window.event.clientY;
	var moveTop = parseInt(loginDiv.style.top);
	var moveLeft = parseInt(loginDiv.style.left);
	document.onmousemove = function MouseMove() {
		if (moveable) {
			var y = moveTop + window.event.clientY - clientY;
			var x = moveLeft + window.event.clientX - clientX;
			if (x > 0 && y > 0) {
				loginDiv.style.top = y + "px";
				loginDiv.style.left = x + "px";
			}
		}
	}
	document.onmouseup = function Mouseup() {
		moveable = false;
	}
}

function GetQueryString(name)
{
	var search = document.location.search;
    var pattern = new RegExp("[?&]"+name+"\=([^&]+)", "g");
    var matcher = pattern.exec(search);
    var items = null;
    if(null != matcher){
       try{
              items = decodeURIComponent(decodeURIComponent(matcher[1]));
       }catch(e){
       try{
			  items = decodeURIComponent(matcher[1]);
        }catch(e){
			  items = matcher[1];			
		}
       }
     }
     return items;
}
function urlEncode(str)
{
    var ret = "";
    var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
    var tt = "";
    for(var i = 0; i < str.length; i++)
    {
        var chr = str.charAt(i);
        var c = str2asc(chr);
        tt += chr + ":" + c + "n";
        if (parseInt("0x" + c) > 0x7f)
        {
            ret += "%" + c.slice(0,2) + "%" + c.slice(-2);
        }
        else
        {
            if (chr == " ")
                ret += "+";
            else if (strSpecial.indexOf(chr) != -1)
                ret += "%" + c.toString(16);
            else
                ret += chr;
        }
    }
   
    return ret;
}
 
/*function urlDecode(str)
{
    var ret = "";
    for (var i = 0; i < str.length; i++)
    {
        var chr = str.charAt(i);
        if (chr == "+")
        {
            ret += " ";
        }
        else if (chr == "%")
        {
            var asc = str.substring(i+1, i+3);
            if (parseInt("0x"+asc) > 0x7f)
            {
                ret += asc2str(parseInt("0x" + asc+str.substring(i+4, i+6)));
                i += 5;
            }
            else
            {
                ret += asc2str(parseInt("0x"+asc));
                i += 2;
            }
        }
        else
        {
            ret += chr;
        }
    }
   
    return ret;
}*/
function urlDecode(zipStr){  
    var uzipStr="";  
    for(var i=0;i<zipStr.length;i++){  
        var chr = zipStr.charAt(i);  
        if(chr == "+"){  
            uzipStr+=" ";  
        }else if(chr=="%"){  
            var asc = zipStr.substring(i+1,i+3);  
            if(parseInt("0x"+asc)>0x7f){  
                uzipStr+=decodeURI("%"+asc.toString()+zipStr.substring(i+3,i+9).toString());  
                i+=8;  
            }else{  
                uzipStr+=AsciiToString(parseInt("0x"+asc));  
                i+=2;  
            }  
        }else{  
            uzipStr+= chr;  
        }  
    }  
  
    return uzipStr;  
}  
  
function StringToAscii(str){  
    return str.charCodeAt(0).toString(16);  
}  
function AsciiToString(asccode){  
    return String.fromCharCode(asccode);  
}

function mobileAcceptIpt() {
	var checked = document.getElementById("mobileAcceptIpt").checked;
	if(checked == false)
	{
		document.getElementById("mobileAcceptIpt").checked = "";
		document.getElementById("loginbutton").disabled = "disabled";
	}
	else
	{
		document.getElementById("mobileAcceptIpt").checked = "checked";
		document.getElementById("loginbutton").disabled = "";
	}
}
function SucessServer(message,openweixin){
    if(xmlHttp.readyState==1||xmlHttp.readyState==2||xmlHttp.readyState==3){                
    }
    if (xmlHttp.readyState==4 && (xmlHttp.status==200)){
		alert(message); 
		if(openweixin == "yes")
		{
			location.href = "weixin://";
		}
    }
}
function bodyCheck(){
	var tan = GetQueryString("wifiweixin");
	if(tan != null)
	{
		if(tan.indexOf("token") >= 0)
		{
			var i = parseInt(tan.slice("token".length));
			if(i == null || i == 0)
			{
					if(isiphone() == 1)
					{
						setTimeout(function(){alert("请打开微信关注公众账号后，在自动回复的消息中，点击开通上网。");location.href = "weixin://"}, 200);
					}
					else
					{
						alert("请打开微信关注公众账号后，在自动回复的消息中，点击开通上网。");
					}
			}
			else if(i == 2)
			{
					if(isiphone() == 1)
					{
						setTimeout(function(){alert("请打开微信扫描二维码，关注后上网。");location.href = "weixin://"}, 200);
					}
					else
					{
						alert("请打开微信扫描二维码，关注后上网。");
					}
			}
			else if(i == 3)
			{
					if(isiphone() == 1)
					{
						setTimeout(function(){setTimeout(function(){alert("请打开微信扫一扫店内二维码，一键关注后上网。");},1000);location.href = "weixin://";}, 1000);
					}
					else
					{
						alert("请打开微信扫一扫店内二维码，一键关注后上网。");
					}
			}
			else if(i == 10)
			{
				location.href = GetJumpUrl();
			}
			else if(i == 10000)
			{
				location.href = GetJumpUrl();
			}
		}
	}
		
	if(window.name == "ONEKEY_IFRAME")
	{
		var SUPPORTINFO = document.getElementById('SUPPORTINFO');
		if(null != SUPPORTINFO)
		{
			SUPPORTINFO.innerHTML="<IFRAME name = \"IFRAME_AGENT\" id=IFRAME_AGENT src=\"\" frameBorder=0 width=0px height=0px>";
		}
		var LOGINTYPE = document.getElementById('LOGINTYPE');
		if(null != LOGINTYPE)
		{
			LOGINTYPE.innerHTML="";	
		}
		var IFRAME_AGENT = document.getElementById('IFRAME_AGENT');
		if(IFRAME_AGENT != null)
		{
			hashH = document.documentElement.scrollHeight; 
	    urlC = "http://weixin.qq.com/weixin_wifiday"; 
	    var jump = GetJumpUrl()
	    IFRAME_AGENT.src="http://weixin.qq.com/weixin_yjgz.html?height="+hashH+"&jump="+jump;
	    IFRAME_AGENT.style.display = "none";
		}
		var jumpnow = GetQueryString("jumpnow");
		if(jumpnow == "1")
		{
			var jump = GetJumpUrl();
			location.href = jump;
		}
	}	
}
function ShowAD()
{
	setTimeout("CheckJumpUserAD()", 1000);
}

var iADTime = 0; 
function CheckJumpUserAD()
{
	iADTime = iADTime + 1;
	var time = 5 - iADTime;
	document.getElementById("ad_close").innerText = "正在努力加载商家页面" + time;
	if(iADTime == 4)
	{
		JumpUserAD();
	}
	else
	{	
		setTimeout("CheckJumpUserAD()", 1000);
	}
}
function JumpUserAD()
{
	location.href = "/index.html";
}