package eurekaribbon.com.controller;

import eurekaribbon.com.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Auther HUGH
 * @Date 2018/9/25
 * @Description HelloController
 */
@Controller
@ResponseBody
@RequestMapping("/")
public class HelloController {

    @Autowired
    private HelloService helloService;

    @RequestMapping("helloworld/{name}")
    public String helloWorldName(@PathVariable("name") String name) {
        return helloService.hello(name);
    }
}