<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="pageHeader">
	<form id="pagerForm" method="post" onsubmit="return navTabSearch(this);">
		<input type="hidden" name="status" value="${param.status}"> <input type="hidden" name="pageNum"
			value="${page.pageNumber }" /> <input type="hidden" name="numPerPage" value="${page.pageSize }" /> <input
			type="hidden" name="orderField" value="${param.orderField}" />
		<div class="searchBar">
			<table class="searchContent">
				<tr>
					<td>订单：<input type="text" name="dd" value="${param.dd}" size="20" />
					</td>
					<td>物料描述：<input type="text" name="wlms" value="${param.wlm}" size="20" />
					</td>
					<td>MRP控制者：<input type="text" name="mrpkzz" value="${param.mrpkzz}" size="20" />
					</td>
					<td>订单完成状态：</td>
					<td><select class="combox" name="status1">
							<option value="">完成状态</option>
							<option value="已完成">已完成</option>
							<option value="未完成">未完成</option>
					</select></td>
				</tr>
			</table>
			<div class="subBar">
				<ul>
					<li><div class="buttonActive">
							<div class="buttonContent">
								<button>查询</button>
							</div>
						</div></li>
				</ul>
			</div>
		</div>
	</form>
</div>
<div class="pageContent">
	<div class="panelBar">
		<ul class="toolBar">
			<!-- <li><a class="edit" href="barcodezj/{sid_user}" rel="jcxxcomponents" target="navTab"><span>订单组件</span></a></li> -->
			<li><a class="edit" href="jcxxindent/view/{sid_user}" target="navTab"><span>查看</span></a></li>
			<li><a class="edit" href="barcodefwlist/{sid_user}" target="navTab"><span>条码查看</span></a></li>
			<li><a class=icon href="barcodefw/confprint/{sid_user}" target="navTab"><span>生成条码</span></a></li>
			<li><a class=edit href="barcodefwreceive/{sid_user}" target="navTab"><span>领取人</span></a></li>
		</ul>
	</div>
	<table class="table" width="100%" layoutH="138">
		<thead>
			<tr>
				<th>订单</th>
				<th>物料</th>
				<th>订单类型</th>
				<th>订单数量</th>
				<th>基本开始日期</th>
				<th>基本完成日期</th>
				<th>系统状态</th>
				<th>物料描述</th>
				<th>订单完成状态</th>
			</tr>
		</thead>
		<tbody>
			<%
				boolean isEvenLine = false;
			%>
			<c:forEach items="${page.list}" var="o">
				<tr target="sid_user" rel="${o.id}" ondblclick="view('jcxxindent/view/${o.id}')"
					class="<%=(isEvenLine) ? "tr2" : "tr1"%>">
					<td style="text-align: left;">${o.dd}</td>
					<td style="text-align: left;">${o.wl}</td>
					<td style="text-align: left;">${o.ddlx}</td>
					<td style="text-align: left;">${o.ddsl}</td>
					<td style="text-align: left;">${o.jbksrq}</td>
					<td style="text-align: left;">${o.jbwcrq}</td>
					<td style="text-align: left;">${o.xtzt}</td>
					<td style="text-align: left;">${o.wlms}</td>
					<td style="text-align: left;">${o.status}</td>
				</tr>
				<%
					isEvenLine = !isEvenLine;
				%>
			</c:forEach>
		</tbody>
	</table>
	<div class="panelBar">
		<div class="pages">
			<span>显示</span> <select class="combox" name="numPerPage" onchange="navTabPageBreak({numPerPage:this.value})">
				<option value="${page.pageSize}"></option>
				<option value="20" ${page.pageSize==20?"selected":""}>20</option>
				<option value="50" ${page.pageSize==50?"selected":""}>50</option>
				<option value="100" ${page.pageSize==100?"selected":""}>100</option>
			</select> <span>条，共${page.totalPage}页 ${page.totalRow}条 </span>
		</div>
		<div class="pagination" targetType="navTab" totalCount="${page.totalRow }" numPerPage="${page.pageSize }"
			pageNumShown="${page.totalPage }" currentPage="${page.pageNumber }"></div>
	</div>
</div>
<script type="text/javascript">
	var msg = '${msg}';
	if (msg != '') {
		alertMsg.info(msg);
		setTimeout(function() {
			navTab.closeCurrentTab();
		}, 100);
	}
	/* <c:if test="${msg!=null}"> 
		alertMsg.info('${msg}');
		setTimeout(function(){navTab.closeCurrentTab();}, 100);
	</c:if> */
</script>
