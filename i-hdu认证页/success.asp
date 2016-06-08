<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0037)http://192.168.2.162/portal/logon.cgi -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">

<title>无线上网认证系统</title>
<style type="text/css">
body{font:normal normal normal 13px/166.6% helvetica,arial,sans-serif;-webkit-text-size-adjust:none}
body,ul,ol,p{margin:0;padding:0}
em{font-style:normal}
a{color:#005590}
body{background:#D3EAF7 url(body.jpg) repeat-x;}
.mod-logo-i{text-align:center;height:87px;}
.mod-logo-i img{display:block;margin:auto;padding:8px}
.mod-login-i{min-height:180px;width:288px;margin:auto}
.mod-login-i .submit{text-align:center;margin:20px}
.mod-login-i .reg{text-align:center}
.mod-footer-i{text-align:center;color:#777777;}
.mod-footer-i p{margin:5px 0}
.mod-footer-i strong,
.mod-footer-i a,
.mod-footer-i .copy{margin:0 5px}
.mod-footer-i .copyright{color:#999}


	
.loginpage_center_text{
	font-size:14px;
	color:#666;
	font-weight:bold;
	width:100%;
	line-height:20px;
	height:20px;
	float:left;
	text-align:left;
                margin:5px 0 0 16px;
	}	
.loginpage_center_row{
	float:left;
	width:100%;
	height:28px;
	line-height:28px;
	margin:13px 0 0 0;
	}
.loginpage_center_font{
	display:block;
	float:left;
	width:58px;
	text-align:right;
	color:#666;
	font-size:14px;
	}
.loginpage_center_input{
	float:left;
	width:210px;
	height:26px;
	border:#999 solid 1px;
	line-height:26px;
	padding:0 3px;
	font-size:14px;
	color:#666;
	}	
.loginpage_center_inputs{
	float:left;
	width:58px;
	height:26px;
	border:#999 solid 1px;
	line-height:26px;
	padding:0 3px;
	font-size:14px;
	color:#666;
	}
.loginpage_center_check{
	float:left;
	margin:8px 6px 8px 58px;
	width:13px;
	height:13px;
	}	
.loginpage_center_checkfont{
	float:left;
	color:#666;
	font-size:12px;
	}	
.loginpage_center_chrow{
	float:left;
	width:100%;
	height:28px;
	line-height:28px;
	margin:8px 0 0 0;
	}
.loginpage_center_btn{
	float:left;
	background:#AAAAAA;
	color:#FFF;
	font-size:12px;
	margin:0 10px 0 20px;
	width:66px;
	height:28px;
	cursor:pointer;
	}
	.loginpage_center_btn1{
	float:center;
	background:#AAAAAA;
	color:#FFF;
	font-size:12px;
	margin:0 10px 0 80px;
	width:80px;
	height:28px;
	cursor:pointer;
	}
</style>
   <script type="text/javascript" language="javascript" src="/pt_private.js">
   </script>
</head>
<body onunload="pt_unload();">
   <form action="/index.asp" method="post">
      <script language="JavaScript"> 
			function is_pc(){ 
				var os = new Array("Android","iPhone","Windows Phone","iPod","BlackBerry","MeeGo","SymbianOS");  // 其他类型的移动操作系统类型，自行添加 
				var info = navigator.userAgent; 
				var len = os.length; 
				for (var i = 0; i < len; i++) { 
					if (info.indexOf(os[i]) > 0){ 
						return os[i];  
					} 
				} 
				return "PC"; 
			} 

		if (is_pc()=="PC")
		{document.write("<br><br><br><br>");}
	</script><br><br><br><br>

	<div class="page">
        <div class="mod mod-logo-i">
            <img src="/logo.png" alt="hdu logo">
        </div>
        <div class="mod mod-login-i">

					<div class="loginpage_center_row"><br>
						<span class="loginpage_center_text">
							欢迎使用杭州电子科技大学无线网络
						</span>
			        </div>
					<div class="loginpage_center_row"><br>
						<span class="loginpage_center_text">

							您已经成功通过无线网络身份认证
						</span>
			        </div>
					<div class="loginpage_center_row"><br>
						<input type="submit" value="注销" onclick="this.value=&quot;logoff&quot;;" name="PtButton" class="loginpage_center_btn1">
			        </div>
        </div>
    </div>
    <div class="mod mod-footer-i">
        <p><span class="copyright">　<a href="http://www.hdu.edu.cn/">杭州电子科技大学</a>  &#169; Copyright 2013 HDUNIC.</span></p>
    </div>
  </form>

</body></html>