package springboot.template.mvc.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import springboot.template.mvc.entity.base.DateEntity;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

public class UserInfo extends DateEntity {
    private static final long serialVersionUID = -8715672633099090133L;

    public UserInfo() {
        super();
    }

    public UserInfo(String id) {
        super(id);
    }

    /**
     * 登录名
     */
    @NotBlank(message = "name not null")
    @Column
    private String userName;
    /**
     * 密码
     */
    @JsonIgnore
    private String userPassword;
    /**
     * 部门id
     */
    private String departmentId;
    /**
     * 电话
     */
    private String phone;
    /**
     * 地址
     */
    private String adress;
    /**
     * 邮箱
     */
    private String email;
    /**
     * 出生日期
     */
    private Date born;
    /**
     * 性别(1 男 2 女 0未知)
     */
    private Integer sex;
    /**
     * 头像
     */
    private String img;
    /**
     * 备注
     */
    private String remarks;
    /**
     * 本次登录ip
     */
    private String thisLoginIp;
    /**
     * 本次登录时间
     */
    private Date thisLoginTime;
    /**
     * 上次登录ip
     */
    private String lastLoginIp;
    /**
     * 上次登录时间
     */
    private Date lastLoginTime;
    private Set<String> roles;
    private Set<String> permissions;

    /**
     * 
     *  user_info.user_name
     *
     * @return the value of user_info.user_name
     * @mbg.generated
     */
    public String getUserName() {
        return userName;
    }

    /**
     * 
     *  user_info.user_name
     *
     * @param userName the value for user_info.user_name
     * @mbg.generated
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 
     *  user_info.user_password
     *
     * @return the value of user_info.user_password
     * @mbg.generated
     */
    public String getUserPassword() {
        return userPassword;
    }

    /**
     * 
     *  user_info.user_password
     *
     * @param userPassword the value for user_info.user_password
     * @mbg.generated
     */
    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    /**
     * 
     *  user_info.department_id
     *
     * @return the value of user_info.department_id
     * @mbg.generated
     */
    public String getDepartmentId() {
        return departmentId;
    }

    /**
     * 
     *  user_info.department_id
     *
     * @param departmentId the value for user_info.department_id
     * @mbg.generated
     */
    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    /**
     * 
     *  user_info.phone
     *
     * @return the value of user_info.phone
     * @mbg.generated
     */
    public String getPhone() {
        return phone;
    }

    /**
     * 
     *  user_info.phone
     *
     * @param phone the value for user_info.phone
     * @mbg.generated
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * 
     *  user_info.adress
     *
     * @return the value of user_info.adress
     * @mbg.generated
     */
    public String getAdress() {
        return adress;
    }

    /**
     * 
     *  user_info.adress
     *
     * @param adress the value for user_info.adress
     * @mbg.generated
     */
    public void setAdress(String adress) {
        this.adress = adress;
    }

    /**
     * 
     *  user_info.email
     *
     * @return the value of user_info.email
     * @mbg.generated
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     *  user_info.email
     *
     * @param email the value for user_info.email
     * @mbg.generated
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     *  user_info.born
     *
     * @return the value of user_info.born
     * @mbg.generated
     */
    public Date getBorn() {
        return born;
    }

    /**
     * 
     *  user_info.born
     *
     * @param born the value for user_info.born
     * @mbg.generated
     */
    public void setBorn(Date born) {
        this.born = born;
    }

    /**
     * 
     *  user_info.sex
     *
     * @return the value of user_info.sex
     * @mbg.generated
     */
    public Integer getSex() {
        return sex;
    }

    /**
     * 
     *  user_info.sex
     *
     * @param sex the value for user_info.sex
     * @mbg.generated
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * 
     *  user_info.img
     *
     * @return the value of user_info.img
     * @mbg.generated
     */
    public String getImg() {
        return img;
    }

    /**
     * 
     *  user_info.img
     *
     * @param img the value for user_info.img
     * @mbg.generated
     */
    public void setImg(String img) {
        this.img = img;
    }

    /**
     * 
     *  user_info.remarks
     *
     * @return the value of user_info.remarks
     * @mbg.generated
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     *  user_info.remarks
     *
     * @param remarks the value for user_info.remarks
     * @mbg.generated
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * 
     *  user_info.this_login_ip
     *
     * @return the value of user_info.this_login_ip
     * @mbg.generated
     */
    public String getThisLoginIp() {
        return thisLoginIp;
    }

    /**
     * 
     *  user_info.this_login_ip
     *
     * @param thisLoginIp the value for user_info.this_login_ip
     * @mbg.generated
     */
    public void setThisLoginIp(String thisLoginIp) {
        this.thisLoginIp = thisLoginIp;
    }

    /**
     * 
     *  user_info.this_login_time
     *
     * @return the value of user_info.this_login_time
     * @mbg.generated
     */
    public Date getThisLoginTime() {
        return thisLoginTime;
    }

    /**
     * 
     *  user_info.this_login_time
     *
     * @param thisLoginTime the value for user_info.this_login_time
     * @mbg.generated
     */
    public void setThisLoginTime(Date thisLoginTime) {
        this.thisLoginTime = thisLoginTime;
    }

    /**
     * 
     *  user_info.last_login_ip
     *
     * @return the value of user_info.last_login_ip
     * @mbg.generated
     */
    public String getLastLoginIp() {
        return lastLoginIp;
    }

    /**
     * 
     *  user_info.last_login_ip
     *
     * @param lastLoginIp the value for user_info.last_login_ip
     * @mbg.generated
     */
    public void setLastLoginIp(String lastLoginIp) {
        this.lastLoginIp = lastLoginIp;
    }

    /**
     * 
     *  user_info.last_login_time
     *
     * @return the value of user_info.last_login_time
     * @mbg.generated
     */
    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    /**
     * 
     *  user_info.last_login_time
     *
     * @param lastLoginTime the value for user_info.last_login_time
     * @mbg.generated
     */
    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public Set<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(Set<String> permissions) {
        this.permissions = permissions;
    }

    @Override
    @JsonIgnore
    public String toString() {
        return "UserInfo{" +
                "userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", departmentId='" + departmentId + '\'' +
                ", phone='" + phone + '\'' +
                ", adress='" + adress + '\'' +
                ", email='" + email + '\'' +
                ", born=" + born +
                ", sex=" + sex +
                ", img='" + img + '\'' +
                ", remarks='" + remarks + '\'' +
                ", thisLoginIp='" + thisLoginIp + '\'' +
                ", thisLoginTime=" + thisLoginTime +
                ", lastLoginIp='" + lastLoginIp + '\'' +
                ", lastLoginTime=" + lastLoginTime +
                ", createTime=" + createTime +
                ", createUserId='" + createUserId + '\'' +
                ", updateTime=" + updateTime +
                ", updateUserId='" + updateUserId + '\'' +
                ", isDisable=" + isDisable +
                ", roles=" + roles +
                ", permissions=" + permissions +
                ", id='" + id + '\'' +
                '}';
    }
}