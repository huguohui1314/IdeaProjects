<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

 <div class="pageHeader">
	<form  id="pagerForm" method="post"  onsubmit="return navTabSearch(this);"  >
		<input type="hidden" name="status" value="${param.status}">	
		<input type="hidden" name="pageNum" value="${page.pageNumber }" />
		<input type="hidden" name="numPerPage" value="${page.pageSize }" />
		<input type="hidden" name="orderField" value="${param.orderField}" />
	<div class="searchBar">
		<table class="searchContent">
			<tr>
				<td>
					物料号：<input type="text" name="wlh" value="${param.wlh}" size="20" />
				</td>
			</tr>
		</table>
		<div class="subBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent" onclick="validate()"><button>查询</button></div></div></li>
			</ul>
		</div>
	</div>
	</form>
</div>  
<div class="pageContent">
	<div class="panelBar">
		<ul class="toolBar">
			<li><a class="edit" href="barcodezxsm/view/{sid_user}" target="navTab"><span>查看</span></a></li>
			<li><a class="add" href="barcodezxsm/add" target="navTab"><span>添加</span></a></li>
			<!-- <li><a class="edit" href="barcodeconf/edit/{sid_user}" target="navTab"><span>修改</span></a></li> -->
			<li><a class="delete" href="barcodezxsm/delete/{sid_user}"target="ajaxTodo" title="确定要删除吗?"><span>删除</span></a></li>
		</ul>
	</div>
	<table class="table" width="100%" layoutH="138">
		<thead>
			<tr>
				<th>物料号</th>
				<th>条码1</th>
				<th>条码2</th>
				<th>条码3</th>
				<th>条码4</th>
				<th>条码5</th>
				<th>操作人</th>
				<th>操作时间</th>
				<th>功能</th>
			</tr>
		</thead>
		<tbody>
			<%boolean isEvenLine = false;%>
			<c:forEach items="${page.list}" var="o">
				<tr target="sid_user" rel="${o.id}" ondblclick="view('barcodezxsm/view/${o.id}')"class="<%=(isEvenLine) ? "tr2" : "tr1"%>">
					<td style="text-align: left;">${o.wlh}</td>
					<td style="text-align: left;">${o.tm1}</td>
					<td style="text-align: left;">${o.tm2}</td>
					<td style="text-align: left;">${o.tm3}</td>
					<td style="text-align: left;">${o.tm4}</td>
					<td style="text-align: left;">${o.tm5}</td>
					<td style="text-align: left;">${o.czr}</td>
					<td style="text-align: left;">${o.date}</td>
					<td><a  href="barcodezxsm/print1/${o.id}" target="navTab">打印</a></td>
				</tr>
				<%isEvenLine = !isEvenLine;%>
			</c:forEach>
		</tbody>
	</table>
	<div class="panelBar">
		<div class="pages">
			<span>显示</span> <select class="combox" name="numPerPage"
				onchange="navTabPageBreak({numPerPage:this.value})">
				<option value="${page.pageSize}"></option>
				<option value="20" ${page.pageSize==20?"selected":""}>20</option>
				<option value="50" ${page.pageSize==50?"selected":""}>50</option>
				<option value="100" ${page.pageSize==100?"selected":""}>100</option>
			</select> <span>条，共${page.totalPage}页 ${page.totalRow}条 </span>
		</div>
		<div class="pagination" targetType="navTab"
			totalCount="${page.totalRow }" numPerPage="${page.pageSize }"
			pageNumShown="${page.totalPage }" currentPage="${page.pageNumber }"></div>
	</div>
</div>
