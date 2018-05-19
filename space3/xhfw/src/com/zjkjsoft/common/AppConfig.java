package com.zjkjsoft.common;


import com.zjkjsoft.controller.*;
import com.zjkjsoft.model.*;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;	
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.Const;
import com.jfinal.core.JFinal;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.activerecord.dialect.MysqlDialect;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;

/**
 * 鏉╂瑤閲滅猾缁樻ЦJfinal閻ㄥ嫰鍘ょ純顔捐閿涘苯瀵橀幏锟界拋鍓х枂閵嗕浇鐭鹃悽渚匡拷鐎瑰鍙忕粵锟�
 * @author 000 
 *
 */
public class AppConfig extends JFinalConfig {
	/**
	 * 闁板秶鐤嗙敮鎼佸櫤
	 */
	public void configConstant(Constants me) {
		me.setMaxPostSize(100*Const.DEFAULT_MAX_POST_SIZE);
		PropKit.use("config.txt");				// 閸旂姾娴囩亸鎴﹀櫤韫囧懓顩﹂柊宥囩枂閿涘矂娈㈤崥搴″讲閻⑩墥ropKit.get(...)閼惧嘲褰囬崐锟�
		me.setDevMode(PropKit.getBoolean("devMode", false));
		me.setViewType(ViewType.JSP); 							// 鐠佸墽鐤嗙憴鍡楁禈缁鐎锋稉绡攕p閿涘苯鎯侀崚娆撶帛鐠併倓璐烣reeMarker
	}
	
	/**
	 * 闁板秶鐤嗙捄顖滄暠
	 */
	public void configRoute(Routes me) {
		me.add("/xzj", XzjController.class);//小主机控制器
		me.add("/", IndexController.class);	// 缁楊兛绗佹稉顏勫棘閺侀璐熺拠顧塷ntroller閻ㄥ嫯顫嬮崶鎯х摠閺�鎹愮熅瀵帮拷
		me.add("/uploadfile", FileController.class);//娑撳﹣绱堕梽鍕

		//绯荤粺绠＄悊
		me.add("/sorg", SorgController.class);//鐞涘本鏂傞柈銊╂，
		me.add("/sfucn", SfucnController.class);//缁崵绮洪懣婊冨礋
		me.add("/srole", SroleController.class);// 缁崵绮虹憴鎺曞
		me.add("/srcd", SrcdController.class);// 鐟欐帟澹婇懣婊冨礋	
		me.add("/srcs", SrcsController.class);// 鐟欐帟澹婇懣婊冨礋	
		me.add("/suser", SuserController.class);// 缁崵绮洪悽銊﹀煕
		me.add("/srp", SrpController.class);// 缁崵绮洪悽銊﹀煕
		
		me.add("/syslog", SyslogController.class);//鐞涘本鏂傞柈銊╂，
		me.add("/scode", ScodeController.class);//閺佺増宓佺�涙鍚�

		me.add("/sfiles", SfilesController.class);//
		//2017-10-25
		me.add("/barcodbind", BarcodbindController.class);//
		me.add("/barcodbind1", Barcodbind1Controller.class);//
		me.add("/barcodbind2", Barcodbind2Controller.class);//
		me.add("/barcode", BarcodeController.class);//
		me.add("/barcodezj", BarcodeZJController.class);//
		me.add("/barcodefw", BarcodeFWController.class);//
		me.add("/barcodefwlist", BarcodeFWListController.class);//

		me.add("/barcode2", Barcode2Controller.class);//
		me.add("/client", ClientController.class);//
		me.add("/delivery", DeliveryController.class);//
		me.add("/employee", EmployeeController.class);//
		me.add("/indent", IndentController.class);//
		me.add("/material", MaterialController.class);//
		me.add("/materialin", MaterialinController.class);//
		me.add("/materialout", MaterialoutController.class);//
		me.add("/product", ProductController.class);//
		me.add("/productkey", ProductkeyController.class);//
		me.add("/productGX", ProductGXController.class);//
		me.add("/productPZ", ProductPZController.class);//
		me.add("/relaymsg", RelaymsgController.class);//
		me.add("/secrecord", SecrecordController.class);//
		me.add("/supplier", SupplierController.class);//
		me.add("/testboard", TestboardController.class);//
		me.add("/bom", BomController.class);//
		me.add("/sendlist", SendListController.class);//
		me.add("/components", ComponentsController.class);//
		me.add("/jcxxmaterial", JcxxMaterialController.class);//
		me.add("/jcxxbom", JcxxBomController.class);//
		me.add("/jcxxindent", JcxxIndentController.class);//
		me.add("/jcxxcomponents", ComponentsbindController.class);//
		me.add("/barcodeconf", BarcodeConfController.class);//
		me.add("/barcodezxsm", BarcodeZXSMController.class);//
		me.add("/barcodeprint", BarcodeprintController.class);//
		me.add("/binding", BindingController.class);//
		me.add("/componentsbind", ComponentsbindController.class);//
			me.add("/barcodelist", BarcodeListController.class);//
		me.add("/barcodereceive", BarcodeReceiveController.class);//
		me.add("/fangbind", FangbindController.class);//
		me.add("/barcodezjlist", BarcodeZJListController.class);//
		me.add("/barcodezjreceive", BarcodeZJReceiveController.class);//
		me.add("/barcodedreceive", BarcodeDReceiveController.class);//
		
		//CX
		me.add("/barcodeCX", BarcodeCXController.class);//
		me.add("/barcode2CX", Barcode2CXController.class);//
		me.add("/indentCX", IndentCXController.class);//
		me.add("/componentsCX", ComponentsCXController.class);//
		me.add("/productCX", ProductCXController.class);//
		me.add("/productkeyCX", ProductkeyCXController.class);//
		//产品检测
		me.add("/cpjc", CpjcController.class);//
		me.add("/cpjcgx", CpjcgxController.class);//
		me.add("/cpjcjd", CpjcjdController.class);//
		me.add("/cpjcjl", CpjcjlController.class);//
		me.add("/cpjcjlxm", CpjcjlxmController.class);//
		me.add("/cpjcxm", CpjcxmController.class);//
		//产品测试
		me.add("/cpcssz", CpcsszController.class);//
		me.add("/cpcsjl", CpcsjlController.class);//
		//产品加工
		me.add("/cpjgjl", CpjgjlController.class);//
		//产品工序配置
		me.add("/cpgx1", Cpgx1Controller.class);//加工
		me.add("/cpgx2", Cpgx2Controller.class);//测试
		me.add("/cpgx3", Cpgx3Controller.class);//检测
		me.add("/cpgx4", Cpgx4Controller.class);//绑定
		me.add("/cpgx5", Cpgx5Controller.class);//包装
		//产品工序配置
		me.add("/cpgx1jl", Cpgx1jlController.class);//加工
		me.add("/cpgx2jl", Cpgx2jlController.class);//测试
		me.add("/cpgx3jl", Cpgx3jlController.class);//检测
		me.add("/cpgx4jl", Cpgx4jlController.class);//绑定
		me.add("/cpgx5jl", Cpgx5jlController.class);//包装
		//产品工序
		me.add("/cpgx", CpgxController.class);//工序
		me.add("/cpgxpz", CpgxpzController.class);//工序配置
		me.add("/srgx", SrgxController.class);//角色工序
		//综合查询 
		me.add("/zhcxddzj", ZhcxDdzjController.class);//订单组件
	}
	
	/**
	 * 闁板秶鐤嗛幓鎺嶆
	 */
	public void configPlugin(Plugins me) {
		// 闁板秶鐤咰3p0閺佺増宓佹惔鎾圭箾閹恒儲鐫滈幓鎺嶆
		//C3p0Plugin c3p0Plugin = new C3p0Plugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password").trim(),PropKit.get("driver"));
		C3p0Plugin c3p0Plugin = new C3p0Plugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password").trim());
		me.add(c3p0Plugin);
		
		// 闁板秶鐤咥ctiveRecord閹绘帊娆�
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		arp.setDialect(new MysqlDialect());
		me.add(arp);

		arp.addMapping("syslog", Syslog.class);
		arp.addMapping("suser", Suser.class);
		arp.addMapping("sorg", Sorg.class);
		arp.addMapping("sfucn", Sfucn.class);
		arp.addMapping("srole", Srole.class);
		arp.addMapping("srcd", Srcd.class);	// 角色功能
		arp.addMapping("srcs", Srcs.class);	// 角色参数
		arp.addMapping("srp", Srp.class);	// 角色参数
		arp.addMapping("srgx", Srgx.class);	// 角色工序
	

		arp.addMapping("scode", Scode.class);//閺佺増宓佺�涙鍚�
		arp.addMapping("scatlog", Scatlog.class);//閺佺増宓佺�涙鍚�
		
		//2017-10-25
		arp.addMapping("barcodbind", Barcodbind.class);
		arp.addMapping("barcode", Barcode.class);
		arp.addMapping("barcodeconf", BarcodeConf.class);
		arp.addMapping("barcodeprint", Barcodeprint.class);
		arp.addMapping("barcode2", Barcode2.class);
		arp.addMapping("indbind", Indbind.class);
		arp.addMapping("barcodelist", BarcodeList.class);
		arp.addMapping("fcpjc", Fcpjc.class);
		
		
		arp.addMapping("barcodeReceive", BarcodeReceive.class);
		arp.addMapping("client", Client.class);
		arp.addMapping("delivery", Delivery.class);
		arp.addMapping("employee", Employee.class);
		arp.addMapping("indent", Indent.class);
		arp.addMapping("material", Material.class);
		arp.addMapping("materialin", Materialin.class);
		arp.addMapping("materialout", Materialout.class);
		arp.addMapping("probbh", ProBbh.class);//产品版本
		arp.addMapping("product", Product.class);
		arp.addMapping("productkey", Productkey.class);
		arp.addMapping("relaymsg", Relaymsg.class);
		arp.addMapping("secrecord", Secrecord.class);
		arp.addMapping("supplier", Supplier.class);
		arp.addMapping("testboard", Testboard.class);
		arp.addMapping("bom", Bom.class);
		arp.addMapping("sendlist", SendList.class);
		arp.addMapping("components", Components.class);
		arp.addMapping("jcxxmaterial", JcxxMaterial.class);
		arp.addMapping("jcxxbom", JcxxBom.class);
		arp.addMapping("jcxxindent", JcxxIndent.class);
		arp.addMapping("jcxxcomponents", JcxxComponents.class);
			 
		//产品检测
		arp.addMapping("cpjc", Cpjc.class);
		arp.addMapping("cpjcgx", Cpjcgx.class);
		arp.addMapping("cpjcjd", Cpjcjd.class);
		arp.addMapping("cpjcjl", Cpjcjl.class);
		arp.addMapping("cpjcjlxm", Cpjcjlxm.class);
		arp.addMapping("cpjcxm", Cpjcxm.class);
		//产品测试
		arp.addMapping("cpcssz", Cpcssz.class);
		arp.addMapping("cpcsjl", Cpcsjl.class);
		//产品加工
		arp.addMapping("cpjgjl", Cpjgjl.class);
	}
	
	/**
	 * 闁板秶鐤嗛崗銊ョ湰閹凤附鍩呴崳锟�
	 */
	public void configInterceptor(Interceptors me) {
		
	}
	
	/**
	 * 闁板秶鐤嗘径鍕倞閸ｏ拷
	 */
	public void configHandler(Handlers me) {
		
	}
	

}
