package springboot.template.mvc.mapper;

import org.springframework.stereotype.Component;
import springboot.template.mvc.entity.RoleDirectory;
@Component
public interface RoleDirectoryMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    int insert(RoleDirectory record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    int insertSelective(RoleDirectory record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    RoleDirectory selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(RoleDirectory record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table role_directory
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(RoleDirectory record);
}