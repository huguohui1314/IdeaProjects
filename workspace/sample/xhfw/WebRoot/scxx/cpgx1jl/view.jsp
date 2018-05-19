<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div class="pageContent">
	<form method="post" action="role/view" class="pageForm required-validate" onsubmit="return validateCallback(this, navTabAjaxDone);">
		<div class="pageFormContent" layoutH="56">
		
		<fieldset>
			<legend>产品加工基本信息</legend>
			<dl>
				<dt>条码：</dt>
				<dd>
				<input name="cpjcjl.txm" type="text" size="30"  value="${cpjcjl.txm}" readonly="readonly"/>
				</dd>
			</dl>
			<dl>
				<dt>工序节点：</dt>
				<dd>
				<input name="cpjcjl.mc" class="required" type="text" size="30" value="${cpjcjl.mc}" readonly="readonly"/>
				</dd>
			</dl>
			<dl>
				<dt>操作人：</dt>
				<dd>
				<input name="cpjcjl.jcry" class="required" type="text" size="30" value="${cpjcjl.jcry}" readonly="readonly"/>
				</dd>
			</dl>
			<dl>
				<dt>操作时间：</dt>
				<dd>
				<input name="cpjcjl.jcrq" class="required" type="text" size="30" value="${cpjcjl.jcrq}" readonly="readonly"/>
				</dd>
			</dl>
			</fieldset>

		</div>
		<div class="formBar">
			<ul>
				<li>
					<div class="button"><div class="buttonContent"><button type="button" class="close">取消</button></div></div>
				</li>
			</ul>
		</div>
	</form>
</div>