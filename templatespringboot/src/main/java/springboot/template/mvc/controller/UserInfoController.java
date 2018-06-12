package springboot.template.mvc.controller;

import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import springboot.template.global.result.RetResponse;
import springboot.template.global.result.RetResult;
import springboot.template.mvc.entity.UserInfo;
import springboot.template.mvc.service.UserInfoService;

import javax.annotation.Resource;

/**
 * @Auther HUGH
 * @Date 2018/6/9
 * @Description UserInfoController
 */
@Controller
@RequestMapping(value = "/", method = RequestMethod.GET)
@Api(tags = {"用户操作接口"}, description = "userInfoControler")
public class UserInfoController {
    @Resource
    private UserInfoService userInfoService;

    @RequestMapping("list")
    @ResponseBody
    public PageInfo<UserInfo> list(UserInfo userInfo) {
        System.out.println("JSONArray.fromObject(userInfo) = " + JSONArray.fromObject(userInfo));
        return userInfoService.list(userInfo);
    }

    @RequestMapping("find")
    @ResponseBody
    @ApiOperation(value = "查询用户", notes = "根据用户ID查询用户")
    @ApiImplicitParams({@ApiImplicitParam(name = "id", value = "用户ID", required = true, dataType = "String", paramType = "query")})
    public RetResult<UserInfo> find(@RequestParam String id) {
        return RetResponse.makeOKRsp(userInfoService.find(id));
    }
}
