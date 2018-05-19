package com.zjkjsoft.model;

import java.io.IOException;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Model;

/**
 * 产品检测
 */
@SuppressWarnings("serial")
public class Cpjc extends Model<Cpjc> {
	public static final Cpjc dao = new Cpjc();
	
	public Integer state(String ids ) {
		String sql="update cpjc set state=1 where txm in("+ids+")";
		System.out.println("sql "+sql);
		return Db.update(sql);
	}
	public Integer stateid(String ids ) {
		String sql="update cpjc set state=1 where id in("+ids+")";
		System.out.println("sql "+sql);
		return Db.update(sql);
	}

	public boolean findBarcode(String txm) {
		return Db.queryLong("select count(1) from cpjc where txm=?", txm) > 0;
	}
	
	/**
	 * 
	 * @param dd
	 * @param wlh
	 * @return
	 */
	public boolean findDd(String dd, String wlh) {
		if (dd != null) {
			return Db.queryLong("select count(1) from cpjc where dd='" + dd + "'  and wlh='" + wlh + "'") > 0;
		} else {
			return Db.queryLong("select count(1) from cpjc where  dd is null and wlh='" + wlh + "'") > 0;
		}
	}
	/**
	 * 保存条码信息
	 * @param txm
	 * @param id
	 * @param fs
	 * @param fid
	 * @throws IOException
	 */
	public void toSave(String txm, String dd,String wl, String fs, Integer fid,String date) throws IOException {
		Cpjc cpjc = new Cpjc();
		cpjc.set("txm", txm);// 条码信息
		cpjc.set("wlh", wl);// 物料号
		cpjc.set("fs", fs); // 条码方式
		cpjc.set("fid", fid);// 版本id
		cpjc.set("dd", dd);// 订单号
		JcxxMaterial mat = JcxxMaterial.dao.findFirst("select * from jcxxmaterial where wlh=?",wl);
		cpjc.set("cpxh", mat.getStr("ggxh"));// 规格型号
		cpjc.set("with", mat.getStr("wlth"));// 图号
		cpjc.set("wlm", mat.getStr("wlms")); // 物料述
		cpjc.set("state", "0"); // 条码状态
		cpjc.set("scrq", date); // 条码状态
		cpjc.save();
	}
}
