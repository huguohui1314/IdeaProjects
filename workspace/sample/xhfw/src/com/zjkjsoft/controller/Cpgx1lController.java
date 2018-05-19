package com.zjkjsoft.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.jfinal.aop.Before;

import com.jfinal.ext.render.excel.PoiRender;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.zjkjsoft.interceptor.ManagerPowerInterceptor;
import com.zjkjsoft.model.Cpjcjl;
import com.zjkjsoft.model.Cpjcjlxm;
import com.zjkjsoft.model.Cpjcxm;
import com.zjkjsoft.model.Cpcssz;
import com.zjkjsoft.validator.RoleValidator;

/**
 * 产品检测
 */

@Before(ManagerPowerInterceptor.class)
public class Cpgx1lController extends BaseController {
	private static String path="/scxx/cpjc/";//jsp路径
	//navTabId
	private static String navTabId="cpjcjl";
	private static String key="mc";//查询关键字字段名
	
	@Override
	public String action() {
                      return  "产品测试记录";
 }
	/**
	 * 产品测试记录首页
	 * <br/>页面：/scxx/cpcs/list.jsp
	 */
	@Override
	public void index() {
		String keywords=getPara("keywords");
		String sql="from cpjcjl  order by id desc";
		if(keywords!=null&&!"".equals(keywords))
			sql="from cpjcjl where "+key+" like '%"+keywords+"%' order by id desc";	
		setAttr("page", Cpjcjl.dao.paginate(getParaToInt("pageNum", 1),
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
	
	private Page<Cpjcjl> getPageData()
	{
		String keywords=getPara("keywords");
		String sql="from cpjcjl  order by id desc";
		if(keywords!=null&&!"".equals(keywords))
			sql="from cpjcjl where "+key+" like '%"+keywords+"%' order by id desc";	
		return Cpjcjl.dao.paginate(getParaToInt("pageNum", 1),
				getParaToInt("numPerPage", 20), " select * ", sql);
	}
	/**
	 * 查看
	 * <br/>页面：/xtgl/role/view.jsp
	 */
	public void view() {
		setAttr("cpjcjl", Cpjcjl.dao.findById(getParaToInt()));
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
	 * 角色的修改 编辑
	 * <br/>页面：/xtgl/role/add.jsp
	 */
	public void addlx() {
		Cpjcjl m=getModel(Cpjcjl.class);
		
		String txm=m.get("txm");
		// 测试  1000031185
		//long  c=Db.queryLong("select count(1) from cpjcjl  where txm=?",txm);
		Cpjcjl  jl= Cpjcjl.dao.findFirst("select * from cpjcjl  where state=1 and txm=?",txm);
		if(jl!=null) {
		//根据条形码查找物料记录到那个检测点
		//根据检测项目节点及检测项目
			setAttr("cpjcjl", jl);
			List<Cpjcxm> xmL= Cpjcxm.dao.find("select * from cpjcxm  where "
					+ "fid=(select id from cpjcjd  where fid=? and xh=?)",jl.getInt("fid"),jl.getInt("xh"));
			setAttr("xmL", xmL);
		}else {
		//no 根据条形码找物料码
			String wlh="1000031185";
		//根据物料码找检测工序			
		//检测工序序号为1的节点
		//序号为1的节点及检测项目
			
			List<Cpjcxm> xmL= Cpjcxm.dao.find("select a.* ,c.id   xid  from cpjcxm a,cpjcjd b , cpjcgx c " + 
					"where a. fid=b.id and b.fid=c.id  and b.xh=1  and  c.wlh=?",wlh);
			setAttr("xmL", xmL);
			m.set("fid", xmL.get(0).getInt("xid")).set("xh", 1);
			setAttr("cpjcjl", m);
		}	
		
			render(path+"addLR.jsp");		
	}
	
	/**
	 * 保存数据到数据库
	 */
	@Before(RoleValidator.class)
	public void save() {

		try{
			Cpjcjl m=getModel(Cpjcjl.class);
			m.set("jcry", this.getSessionAttr("username"));
			m.set("jcrq", sfs.format(new Date()));			
			if(m.get("id")!=null){
				m.update();
toDwzJson(200,"修改操作成功",navTabId,"","closeCurrent");
			}else{
				//m.set("id", "js_seq.nextval");
				m.set("state", "1");
				m.save();
toDwzJson(200,"新增操作成功",navTabId,"","closeCurrent");
			}
			String[] xids=this.getParaValues("xid");
			String[] sz=this.getParaValues("sz");
			int i=0;
			//先删后加  db.
			//Db.update(sql)
			for(String c:xids) {
				Cpjcjlxm xm= new Cpjcjlxm();
				xm.set("fid", m.getInt("fid")).set("xid", c).set("sz", sz[i++]).save();
			}

			toDwzJson(200,"操作成功",navTabId,"","closeCurrent");
		}catch(Exception e){
			toDwzJson( 300, "保存异常！",navTabId);
		}
	}
	
	/**
	 * 角色的修改 编辑
	 * <br/>页面：/xtgl/role/add.jsp
	 */
	public void edit() {
		setAttr("cpjcjl", Cpjcjl.dao.findById(getParaToInt()));
		render(path+"add.jsp");
	}
	
	/**
	 * 删除
	 */
	public void delete() {
		Cpjcjl.dao.deleteById(getParaToInt());
		toDwzJson( 200, "删除成功！", navTabId);
	}
	
	
	/**
	 * 导出Excel
	 * @throws UnsupportedEncodingException 
	 */
	public void export() throws UnsupportedEncodingException {
		List<Cpjcjl> data=getPageData().getList();
		String[] columns = {"mc","ms"};
		String[] heades = {"名称","描述"};
		String filename = new String("角色管理.xls".getBytes("UTF-8"), "ISO8859-1");
		render(PoiRender.me(data).fileName(filename).sheetName("所有").columns(columns).headers(heades).cellWidth(5000).headerRow(1));
	}

}


