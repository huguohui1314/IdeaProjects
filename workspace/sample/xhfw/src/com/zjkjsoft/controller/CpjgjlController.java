package com.zjkjsoft.controller;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.render.excel.PoiRender;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.zjkjsoft.interceptor.ManagerPowerInterceptor;
import com.zjkjsoft.model.Scode;
import com.zjkjsoft.model.Sorg;
import com.zjkjsoft.model.Cpjgjl;
import com.zjkjsoft.validator.RoleValidator;

/**
 * 产品加工记录
 */

@Before(ManagerPowerInterceptor.class)
public class CpjgjlController extends BaseController {
	private static String path="/scxx/cpjgjl/";//jsp路径
	//navTabId
	private static String navTabId="cpjgjl";
	private static String key="mc";//查询关键字字段名
	
	@Override
	public String action() {
                      return  "角色管理";
 }
	/**
	 * 角色管理首页
	 * <br/>页面：/xtgl/role/list.jsp
	 */
	@Override
	public void index() {
		String keywords=getPara("keywords");
		String sql="from cpjgjl  order by id desc";
		if(keywords!=null&&!"".equals(keywords))
			sql="from cpjgjl where "+key+" like '%"+keywords+"%' order by id desc";	
		setAttr("page", Cpjgjl.dao.paginate(getParaToInt("pageNum", 1),
				getParaToInt("numPerPage", 20), " select * ", sql));
		render(path+"list.jsp");
	}
	/**
	 * 模糊查询
	 */
	public void list() {
		setAttr("page", getPageData());
		render(path+"list.jsp");
	}
	
	private Page<Cpjgjl> getPageData()
	{
		String keywords=getPara("keywords");
		String sql="from cpjgjl  order by id desc";
		if(keywords!=null&&!"".equals(keywords))
			sql="from cpjgjl where "+key+" like '%"+keywords+"%' order by id desc";	
		return Cpjgjl.dao.paginate(getParaToInt("pageNum", 1),
				getParaToInt("numPerPage", 20), " select * ", sql);
	}
	/**
	 * 查看
	 * <br/>页面：/xtgl/role/view.jsp
	 */
	public void view() {
		setAttr("cpjgjl", Cpjgjl.dao.findById(getParaToInt()));
		render(path+"view.jsp");
	}

	/**
	 * 添加角色
	 * <br/>页面：/xtgl/role/add.jsp
	 */
	public void add() {
		redirect(path+"add.jsp");
	}
	
	
	/**
	 * 保存数据到数据库
	 */
	public void save() {

		try{
			Cpjgjl m=getModel(Cpjgjl.class);
			m.set("csry", this.getSessionAttr("username"));
			m.set("csrq", sfs.format(new Date()));
			
			if(m.get("id")!=null){
				m.update();
toDwzJson(200,"修改操作成功",navTabId,"","closeCurrent");
			}else{
				//m.set("id", "js_seq.nextval");

				m.save();
toDwzJson(200,"新增操作成功",navTabId,"","closeCurrent");
			}
			//toDwzJson(200,"操作成功",navTabId,"","closeCurrent");
		}catch(Exception e){
			toDwzJson( 300, "保存异常！",navTabId);
		}
	}
	
	/**
	 * 角色的修改 编辑
	 * <br/>页面：/xtgl/role/add.jsp
	 */
	public void edit() {
		setAttr("cpjgjl", Cpjgjl.dao.findById(getParaToInt()));
		render(path+"add.jsp");
	}
	
	/**
	 * 删除
	 */
	public void delete() {
		Cpjgjl.dao.deleteById(getParaToInt());
		toDwzJson( 200, "删除成功！", navTabId);
	}
	
	
	/**
	 * 导出Excel
	 * @throws UnsupportedEncodingException 
	 */
	public void export() throws UnsupportedEncodingException {
		List<Cpjgjl> data=getPageData().getList();
		String[] columns = {"mc","ms"};
		String[] heades = {"名称","描述"};
		String filename = new String("角色管理.xls".getBytes("UTF-8"), "ISO8859-1");
		render(PoiRender.me(data).fileName(filename).sheetName("所有").columns(columns).headers(heades).cellWidth(5000).headerRow(1));
	}

}


