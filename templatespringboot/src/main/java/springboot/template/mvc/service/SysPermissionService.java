package springboot.template.mvc.service;

import springboot.template.mvc.entity.SysPermission;

import java.util.List;

/**
 * @Auther HUGH
 * @Date 2018/7/14
 * @Description SysPermissionService
 */
public interface SysPermissionService extends BaseService<SysPermission> {
    /**
     *根据userId获取用户去重以后的权限列表
     * @param id
     * @return
     */
   public List<SysPermission> getUserPermissions(String id);
}
