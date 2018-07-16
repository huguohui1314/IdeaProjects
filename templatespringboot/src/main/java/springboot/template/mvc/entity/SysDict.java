package springboot.template.mvc.entity;

import springboot.template.mvc.entity.base.DateEntity;


/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table sys_dict
 *
 * @mbg.generated do_not_delete_during_merge
 */
public class SysDict extends DateEntity {
    private static final long serialVersionUID = -2523716500208390626L;
    public SysDict(){
      super();
    }

    public SysDict(String id) {
        super(id);
    }
    /** 字典名称*/
    private String name;

    /** 字典类型*/
    private String type;

    /** 字典码*/
    private String lable;

    /** 字典值*/
    private String value;

    /** 排序*/
    private Integer sort;

    /** 备注*/
    private String remark;


    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.name
     *
     * @return the value of sys_dict.name
     *
     * @mbg.generated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.name
     *
     * @param name the value for sys_dict.name
     *
     * @mbg.generated
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.type
     *
     * @return the value of sys_dict.type
     *
     * @mbg.generated
     */
    public String getType() {
        return type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.type
     *
     * @param type the value for sys_dict.type
     *
     * @mbg.generated
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.lable
     *
     * @return the value of sys_dict.lable
     *
     * @mbg.generated
     */
    public String getLable() {
        return lable;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.lable
     *
     * @param lable the value for sys_dict.lable
     *
     * @mbg.generated
     */
    public void setLable(String lable) {
        this.lable = lable;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.value
     *
     * @return the value of sys_dict.value
     *
     * @mbg.generated
     */
    public String getValue() {
        return value;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.value
     *
     * @param value the value for sys_dict.value
     *
     * @mbg.generated
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.sort
     *
     * @return the value of sys_dict.sort
     *
     * @mbg.generated
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.sort
     *
     * @param sort the value for sys_dict.sort
     *
     * @mbg.generated
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column sys_dict.remark
     *
     * @return the value of sys_dict.remark
     *
     * @mbg.generated
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column sys_dict.remark
     *
     * @param remark the value for sys_dict.remark
     *
     * @mbg.generated
     */
    public void setRemark(String remark) {
        this.remark = remark;
    }

}