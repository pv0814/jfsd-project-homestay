package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.AdminService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Admin")
public class AdminController
{
	@GetMapping("/adminlogin")
	 public ModelAndView adminlogin() {
    	ModelAndView mv=new ModelAndView();
    	
    	mv.setViewName("adminlogin");
        return mv;
    }
	
	@Autowired
	private AdminService service;
	
	
    

}
