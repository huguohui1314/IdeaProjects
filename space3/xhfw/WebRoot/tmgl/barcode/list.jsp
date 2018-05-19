<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="myjs.js" type="text/javascript"></script>

 
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
					条码名称：<input type="text" name="keywords" value="${param.keywords}" size="20" />
				</td>
			</tr>
		</table>
		<div class="subBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button>查询</button></div></div></li>
				
			</ul>
		</div>
	</div>
	</form>
</div>
<div class="pageContent">
	<div class="panelBar">
		<ul class="toolBar">
			<li><a class="edit" href="barcode/view/{sid_user}" target="navTab"><span>查看</span></a></li>
			<li><a class="add" href="barcode/add" target="navTab"><span>添加</span></a></li>
			<li><a class="delete" href="barcode/delete/{sid_user}" target="ajaxTodo" title="确定要删除吗?"><span>删除</span></a></li>
			<li><a class="edit" href="barcode/edit/{sid_user}" target="navTab"><span>修改</span></a></li>
			<li class="line">line</li>
			<li><a class="icon" href="barcode/export" target="dwzExport"   title="实要导出这些记录吗?"><span>导出EXCEL</span></a></li>
		<li><a class="add" href="barcode/confprint" target="navTab"><span>打印配置</span></a></li>
		</ul>
	</div>
	<table class="table" width="100%" layoutH="138">
		<thead>
			<tr><th style="width:20px;"/> 
				<th >编号</th>
				<th >工作号</th>
				<th >产品代号</th>
				<th >顺序码</th>
				<th >标注码</th>
				<th >产品序列号</th>
				<th >开始号</th>
				<th >结束号</th>
			</tr>
		</thead>
		<tbody><%boolean isEvenLine = false;%> 

			<c:forEach items="${page.list}" var="o">
			
			<tr target="sid_user" rel="${o.id}" ondblclick="view('role/view/${o.id}')" class="<%=(isEvenLine) ? "tr2" : "tr1"%>">
			
			<td>			
			<label><input type="checkbox" name="c1" value="2" checked="checked"></label></td>
			
				<td style="text-align:left;" style="width:10px;" >${o.id}</td>
				<td style="text-align:left;">${o.dm1}</td>
				<td style="text-align:left;">${o.dm2}</td>
				<td style="text-align:left;">${o.dm3}</td>
				<td style="text-align:left;">${o.dm4}</td>
				<td style="text-align:left;">${o.bh}</td>
				<td style="text-align:left;">${o.first}</td>
				<td style="text-align:left;">${o.end}</td>	
				</input>								
			</tr><%isEvenLine=!isEvenLine; %>
			</c:forEach>
		
		</tbody>
	</table>
	<td><label style="float:left"><input type="checkbox" class="checkboxCtrl" group="c1">全选/全不选  </label></td> 
	
	
	
	<div class="panelBar">
		<div class="pages">
			<span>显示</span>
			<select class="combox" name="numPerPage" onchange="navTabPageBreak({numPerPage:this.value})">
				<option value="${page.pageSize}" ></option><option value="20" ${page.pageSize==20?"selected":""}>20</option>
				<option value="50" ${page.pageSize==50?"selected":""}>50</option>
				<option value="100" ${page.pageSize==100?"selected":""}>100</option>
			</select>
			<span>条，共${page.totalPage}页 ${page.totalRow}条 </span>
		</div>
		
		<div class="pagination" targetType="navTab" totalCount="${page.totalRow }" numPerPage="${page.pageSize }" pageNumShown="${page.totalPage }" currentPage="${page.pageNumber }"></div>

	</div>
</div>
