package com.tongji.weshare.service;

import com.tongji.weshare.entity.User;
import com.tongji.weshare.entity.UserExample;
import com.tongji.weshare.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public List<User> getUsers(UserExample example) {
        return userMapper.selectByExample(example);
    }

    public long countUsers(UserExample example) {
        return userMapper.countByExample(example);
    }

    public int newUser(User user) {
        return userMapper.insertSelective(user);
    }

    public int updateUser(User user) {
        return userMapper.updateByPrimaryKeySelective(user);
    }
}
