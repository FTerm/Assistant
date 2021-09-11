// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [{
        "icon": "github",
        "nav": "collect",
        "name": "我的收藏"
      },
      {
        "icon": "github",
        "nav": "plan",
        "name": "我的计划"
      },
      {
        "icon": "github",
        "nav": "feedback",
        "name": "意见反馈"
      },
      {
        "icon": "github",
        "nav": "set",
        "name": "系统设置"
      },
      {
        "icon": "github",
        "nav": "about",
        "name": "关于我们"
      }
    ]

  },

  login: function () {
    if (this.data.status == 0 || !this.data.status) {
      wx.showModal({
        content: '请登录...',
        showCancel: false,
        confirmText: '知道啦～',
        confirmColor: '#fee45c'
      })

    } else {
      wx.navigateTo({
        url: '../user/profile/profile',
      })
    }
  },

  navigator: function (options) {
    const name = options.currentTarget.id;
    console.log(name)
    const admin = wx.getStorageSync("admin") || false
    if ((name == 'information' || name == 'set') && admin == false) {
      wx.showModal({
        content: '这个功能只有授予权限的用户，开发者可以使用，感谢支持',
        showCancel: false,
        confirmColor: '#fee45c'
      })
    } else {
      wx.navigateTo({
        url: '../user/' + name + '/' + name
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})