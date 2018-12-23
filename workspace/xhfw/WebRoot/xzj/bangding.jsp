<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>产品条码绑定</title>
<script type="text/javascript" src="../jquery/jquery.min.js"></script>
<script type="text/javascript">
$(function () {
	if ($("#txm").val()=="") {
		$("#txm").focus();
	}else if ($("#czm").val()=="") {
		$("#czm").focus();
	}
	
	var msg='${msg}'
	if (msg!="") {
		alert(msg);
	}
});
</script>
</head>
<body>
<h6 align="right">
<c:if test='${ username==""}'><a  href="login.jsp">登录</a></c:if>
${username }  
<c:if test='${ username!=null}'><a  href="login.jsp">注销</a></c:if>  
</h6>
<h3>
产品条码绑定    
</h3>
<form action="bangding">
<hr>

产品条码：<input  type="text" name="txm" id="txm" size="30" value="${cpjc.txm}"> <input type="submit" value="查询" >
关键件条码：<input  type="text" name="czm" id="czm" value=""> <input type="submit" value="保存" >

<hr>
<h4>
产品信息
</h4>
<input  type="hidden" name="cpjc.id" readonly="readonly" value="${cpjc.id}" /> 
<input  type="hidden" name="cpjcjl.fid" readonly="readonly" value="${cpjc.fid}" /> 
<input  type="hidden" name="cpjcjl.lx" readonly="readonly" value="${cpjc.lx}" /> 
<input  type="hidden" name="cpjcjl.xh" readonly="readonly" value="${cpjc.xh}" /> 
<input  type="hidden" name="cpjcjl.txm" readonly="readonly" value="${cpjc.txm}" /> 
<input  type="hidden" name="cpjcjl.dd" readonly="readonly" value="${cpjc.dd}" /> 
物料：<input  type="text" name="cpjcjl.wlh" readonly="readonly" value="${cpjc.wlh}" /> 
物料描述：<input  type="text" readonly="readonly" size="80" value="${cpjc.wlm }" >
<hr>

</form>
<h4>
绑定记录
</h4>
<hr>
<table border="1" width="100%">
<tr>
<th width="5%">序号</th><th width="15%">订单</th><th width="15%">条码</th><th width="15%">物料</th><th width="10%">绑定条码</th><th width="20%">关键件</th><th>时间</th>
</tr>
<c:forEach items="${list}" var="o" varStatus="s" >
<tr>
<td>${s.index+1}</td><td>${o.dd}</td><td>${o.txm}</td><td>${o.wlh}</td><td>${o.mc}<td>${o.ms}</td>
<td><fmt:formatDate value="${o.jcrq}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
</tr>
</c:forEach>
</table>

</body>
</html>