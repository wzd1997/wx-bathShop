// pages/memberExplain/memberExplain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLook: '',
    isShow: '',
    shopId: 0,
    memberExplainList:[
      {
        id:1,
        title: '会员卡使用说明',
        content: '11111111111',
        url: '../../image/illustrate1.png'
      },
      {
        id: 2,
        title: '积分商城与积分的使用规则',
        content: '222222222',
        url: '../../image/illustrate2.png'

      },
      {
        id: 3,
        title: '能量获取与特权兑换规则',
        content: '3333333333333',
        url: '../../image/illustrate3.png'

      },
      {
        id: 4,
        title: '关于红包的使用说明',
        content: '44444444444',
        url: '../../image/illustrate4.png'
      }
    ]
  },
  seeDetail: function(e) {
    console.log(e)
    var data = e.currentTarget.dataset.data;
    wx.navigateTo({
      url: '/pages/useRules/useRules?content='+ data.content + '&title=' + data.title,

    })
  },
  goBack:function() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})