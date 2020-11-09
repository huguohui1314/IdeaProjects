package com.springboot.security.config;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

/**
 * 自定义token处理过滤器
 */
public class MyOncePerRequestFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token1 = request.getHeader("token");
        if (token1==null){

        }

        ArrayList<GrantedAuthority> list = new ArrayList<>();
        GrantedAuthority grantedAuthority = new GrantedAuthority() { 
            private static final long serialVersionUID = 4660735246670129714L;

            @Override
            public String getAuthority() {
                return "test";
            }
        };
        list.add(grantedAuthority);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken("test","test",list);
        SecurityContextHolder.getContext().setAuthentication(token);
        filterChain.doFilter(request, response);
    }
}
