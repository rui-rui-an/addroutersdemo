const Mock = require('mockjs');

// 2、获取 mock.Random 对象
// const random = Mock.Random;
// console.log(random); // 简单使用就不操作了，需要操作的可以去看文档
import loginInfo from './token'
import userRouter from './userRouter'
import userInfo from './userInfo'


// 3、基本用法 Mock.mock(url, type, data) // 参数文档 https://github.com/nuysoft/Mock/wiki
Mock.mock('/user/login', 'get', {
  code: 200,
  message: '成功',
  data:loginInfo
});

Mock.mock('/user/userRouter', 'get', {
  code: 200,
  message: '成功',
  data:userRouter
});

Mock.mock('/user/userInfo', 'get', {
  code: 200,
  message: '成功',
  data:userInfo
});