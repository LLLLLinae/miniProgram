// app.js
// getApp() 可以获取App()函数产生的示例对象
App({
  onLaunch: function (options) {
   //获取用户信息
   //1.getUserInfo
   wx.getUserInfo({
    success:function(res){
      // console.log(res)
    }
  })
  },
  // 全局数据
  globalData:{
    name:'lili'
  }
});
