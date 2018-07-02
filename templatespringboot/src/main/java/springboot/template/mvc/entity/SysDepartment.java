package springboot.template.mvc.entity;

import springboot.template.mvc.entity.base.BaseEntity;

import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table sys_department
 *
 * @mbg.generated do_not_delete_during_merge
 */
public class SysDepartment extends BaseEntity {
    private static final long serialVersionUID = 2736218314075263744L;

    /** 部门名称*/
    private String departmentName;

    /** */
    private Integer sort;

    /** */
    private String remarks;

    /** */
    private Date createTime;

    /** */
    private String createUserId;

    /** */
    private Date updateTime;

    /** */
    private String updateUserId;

    /** 是否禁用 0 否 1 是*/
    private Integer isDisable;

    public SysDepartment() {
    }

    public SysDepartment(String id, String departmentName, Integer sort, String remarks, Date createTime, String createUserId, Date updateTime, String updateUserId, Integer isDisable) {
        super(id);
        this.departmentName = departmentName;
        this.sort = sort;
        this.remarks = remarks;
        this.createTime = createTime;
        this.createUserId = createUserId;
        this.updateTime = updateTime;
        this.updateUserId = updateUserId;
        this.isDisable = isDisable;
    }


    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.department_name
     *
     * @return the value of sys_department.department_name
     *
     * @mbg.generated
     */
    public String getDepartmentName() {
        return departmentName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.department_name
     *
     * @param departmentName the value for sys_department.department_name
     *
     * @mbg.generated
     */
    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.sort
     *
     * @return the value of sys_department.sort
     *
     * @mbg.generated
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.sort
     *
     * @param sort the value for sys_department.sort
     *
     * @mbg.generated
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.remarks
     *
     * @return the value of sys_department.remarks
     *
     * @mbg.generated
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.remarks
     *
     * @param remarks the value for sys_department.remarks
     *
     * @mbg.generated
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.create_time
     *
     * @return the value of sys_department.create_time
     *
     * @mbg.generated
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.create_time
     *
     * @param createTime the value for sys_department.create_time
     *
     * @mbg.generated
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.create_user_id
     *
     * @return the value of sys_department.create_user_id
     *
     * @mbg.generated
     */
    public String getCreateUserId() {
        return createUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.create_user_id
     *
     * @param createUserId the value for sys_department.create_user_id
     *
     * @mbg.generated
     */
    public void setCreateUserId(String createUserId) {
        this.createUserId = createUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.update_time
     *
     * @return the value of sys_department.update_time
     *
     * @mbg.generated
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.update_time
     *
     * @param updateTime the value for sys_department.update_time
     *
     * @mbg.generated
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.update_user_id
     *
     * @return the value of sys_department.update_user_id
     *
     * @mbg.generated
     */
    public String getUpdateUserId() {
        return updateUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.update_user_id
     *
     * @param updateUserId the value for sys_department.update_user_id
     *
     * @mbg.generated
     */
    public void setUpdateUserId(String updateUserId) {
        this.updateUserId = updateUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_department.is_disable
     *
     * @return the value of sys_department.is_disable
     *
     * @mbg.generated
     */
    public Integer getIsDisable() {
        return isDisable;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_department.is_disable
     *
     * @param isDisable the value for sys_department.is_disable
     *
     * @mbg.generated
     */
    public void setIsDisable(Integer isDisable) {
        this.isDisable = isDisable;
    }
}