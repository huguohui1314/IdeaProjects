package springboot.template.mvc.entity.base;

import org.apache.commons.lang.StringUtils;

import java.io.Serializable;

/**
 * @Auther HUGH
 * @Date 2018/7/1
 * @Description BaseEntity
 */
public class BaseEntity implements Serializable {
    private static final long serialVersionUID = -7202325628651053055L;
    /**
     * 是否初建
     */
    protected Boolean isNewCreate;
    /**
     * 实体唯一id
     */
    protected String id;
    /**
     * 是否禁用 0否 1是 2 待审核
     */
    protected Integer isDisable;

    public BaseEntity() {
        this(null);
    }

    public BaseEntity(String id) {
        super();
        this.id = id;
        isNewCreate = true;
        isDisable = 0;
    }

    public Boolean getNewCreate() {
        return isNewCreate && StringUtils.isEmpty(this.getId());
    }

    public void setNewCreate(Boolean newCreate) {
        isNewCreate = newCreate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getIsDisable() {
        return isDisable;
    }

    public void setIsDisable(Integer isDisable) {
        this.isDisable = isDisable;
    }
}
