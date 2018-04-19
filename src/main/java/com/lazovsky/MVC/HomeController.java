package com.lazovsky.MVC;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {
    @RequestMapping("/hello")
    public String showHelloWorld(){
//        String world = "Hello world";
        return "hello";
    }
}
