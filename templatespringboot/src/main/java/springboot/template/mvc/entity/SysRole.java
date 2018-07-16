package springboot.template.mvc.entity;

import springboot.template.mvc.entity.base.DateEntity;

import java.util.Date;

/**
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table sys_role
 *
 * @mbg.generated do_not_delete_during_merge
 */
public class SysRole extends DateEntity {
    private static final long serialVersionUID = -658917899770511509L;

    public SysRole() {
        super();
    }

    public SysRole(String id) {
        super(id);
        isDisable = 0;
    }

    /**
     * 角色名称，用于显示
     */
    private String roleName;
    /**
     * 角色值，用于权限判断
     */
    private String roleValue;
    /**
     * 父角色id
     */
    private String fatherId;
    /**
     * 部门id
     */
    private String departmentId;
    /**
     * 排序
     */
    private Integer sort;
    /**
     * 备注
     */
    private String remarks;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.role_name
     *
     * @return the value of sys_role.role_name
     * @mbg.generated
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.role_name
     *
     * @param roleName the value for sys_role.role_name
     * @mbg.generated
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.role_value
     *
     * @return the value of sys_role.role_value
     * @mbg.generated
     */
    public String getRoleValue() {
        return roleValue;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.role_value
     *
     * @param roleValue the value for sys_role.role_value
     * @mbg.generated
     */
    public void setRoleValue(String roleValue) {
        this.roleValue = roleValue;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.father_id
     *
     * @return the value of sys_role.father_id
     * @mbg.generated
     */
    public String getFatherId() {
        return fatherId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.father_id
     *
     * @param fatherId the value for sys_role.father_id
     * @mbg.generated
     */
    public void setFatherId(String fatherId) {
        this.fatherId = fatherId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.department_id
     *
     * @return the value of sys_role.department_id
     * @mbg.generated
     */
    public String getDepartmentId() {
        return departmentId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.department_id
     *
     * @param departmentId the value for sys_role.department_id
     * @mbg.generated
     */
    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.sort
     *
     * @return the value of sys_role.sort
     * @mbg.generated
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.sort
     *
     * @param sort the value for sys_role.sort
     * @mbg.generated
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_role.remarks
     *
     * @return the value of sys_role.remarks
     * @mbg.generated
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_role.remarks
     *
     * @param remarks the value for sys_role.remarks
     * @mbg.generated
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}