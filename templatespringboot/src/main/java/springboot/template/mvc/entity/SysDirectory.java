package springboot.template.mvc.entity;

import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table sys_directory
 *
 * @mbg.generated do_not_delete_during_merge
 */
public class SysDirectory {
    /** */
    private String id;

    /** 程序对应url地址*/
    private String url;

    /** 名称*/
    private String urlName;

    /** 图标*/
    private String urlImg;

    /** 类型 0 url 1 按钮*/
    private Integer type;

    /** 父id*/
    private String fatherId;

    /** */
    private String fatherIds;

    /** 排序*/
    private Integer sort;

    /** 权限 标识*/
    private String permission;

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

    /** 是否禁用 0 否 1是*/
    private Integer isDisable;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.id
     *
     * @return the value of sys_directory.id
     *
     * @mbg.generated
     */
    public String getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.id
     *
     * @param id the value for sys_directory.id
     *
     * @mbg.generated
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.url
     *
     * @return the value of sys_directory.url
     *
     * @mbg.generated
     */
    public String getUrl() {
        return url;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.url
     *
     * @param url the value for sys_directory.url
     *
     * @mbg.generated
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.url_name
     *
     * @return the value of sys_directory.url_name
     *
     * @mbg.generated
     */
    public String getUrlName() {
        return urlName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.url_name
     *
     * @param urlName the value for sys_directory.url_name
     *
     * @mbg.generated
     */
    public void setUrlName(String urlName) {
        this.urlName = urlName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.url_img
     *
     * @return the value of sys_directory.url_img
     *
     * @mbg.generated
     */
    public String getUrlImg() {
        return urlImg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.url_img
     *
     * @param urlImg the value for sys_directory.url_img
     *
     * @mbg.generated
     */
    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.type
     *
     * @return the value of sys_directory.type
     *
     * @mbg.generated
     */
    public Integer getType() {
        return type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.type
     *
     * @param type the value for sys_directory.type
     *
     * @mbg.generated
     */
    public void setType(Integer type) {
        this.type = type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.father_id
     *
     * @return the value of sys_directory.father_id
     *
     * @mbg.generated
     */
    public String getFatherId() {
        return fatherId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.father_id
     *
     * @param fatherId the value for sys_directory.father_id
     *
     * @mbg.generated
     */
    public void setFatherId(String fatherId) {
        this.fatherId = fatherId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.father_ids
     *
     * @return the value of sys_directory.father_ids
     *
     * @mbg.generated
     */
    public String getFatherIds() {
        return fatherIds;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.father_ids
     *
     * @param fatherIds the value for sys_directory.father_ids
     *
     * @mbg.generated
     */
    public void setFatherIds(String fatherIds) {
        this.fatherIds = fatherIds;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.sort
     *
     * @return the value of sys_directory.sort
     *
     * @mbg.generated
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.sort
     *
     * @param sort the value for sys_directory.sort
     *
     * @mbg.generated
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.permission
     *
     * @return the value of sys_directory.permission
     *
     * @mbg.generated
     */
    public String getPermission() {
        return permission;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.permission
     *
     * @param permission the value for sys_directory.permission
     *
     * @mbg.generated
     */
    public void setPermission(String permission) {
        this.permission = permission;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.remarks
     *
     * @return the value of sys_directory.remarks
     *
     * @mbg.generated
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.remarks
     *
     * @param remarks the value for sys_directory.remarks
     *
     * @mbg.generated
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.create_time
     *
     * @return the value of sys_directory.create_time
     *
     * @mbg.generated
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.create_time
     *
     * @param createTime the value for sys_directory.create_time
     *
     * @mbg.generated
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.create_user_id
     *
     * @return the value of sys_directory.create_user_id
     *
     * @mbg.generated
     */
    public String getCreateUserId() {
        return createUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.create_user_id
     *
     * @param createUserId the value for sys_directory.create_user_id
     *
     * @mbg.generated
     */
    public void setCreateUserId(String createUserId) {
        this.createUserId = createUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.update_time
     *
     * @return the value of sys_directory.update_time
     *
     * @mbg.generated
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.update_time
     *
     * @param updateTime the value for sys_directory.update_time
     *
     * @mbg.generated
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.update_user_id
     *
     * @return the value of sys_directory.update_user_id
     *
     * @mbg.generated
     */
    public String getUpdateUserId() {
        return updateUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.update_user_id
     *
     * @param updateUserId the value for sys_directory.update_user_id
     *
     * @mbg.generated
     */
    public void setUpdateUserId(String updateUserId) {
        this.updateUserId = updateUserId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_directory.is_disable
     *
     * @return the value of sys_directory.is_disable
     *
     * @mbg.generated
     */
    public Integer getIsDisable() {
        return isDisable;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_directory.is_disable
     *
     * @param isDisable the value for sys_directory.is_disable
     *
     * @mbg.generated
     */
    public void setIsDisable(Integer isDisable) {
        this.isDisable = isDisable;
    }
}