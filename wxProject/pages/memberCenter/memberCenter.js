// pages/memberCenter/memberCenter.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getVip: true, //领卡遮罩层
    showMaskVip: false, //领取会员卡的弹出框
  },
  //领取会员卡的弹出框显隐
  getVipCard: function(e) {
    var showMaskVip = Boolean(+e.currentTarget.dataset.show);
    console.log(showMaskVip)
    this.setData({
      showMaskVip
    })
  },
  // 获取领取会员卡弹出框的name
  realName: function(event) {
    console.log(event.detail)
    var realName = event.detail.value;
    this.setData({
      realName
    })
  },
  // 获取领取会员卡弹出框的phone
  realPhone: function(event) {
    var realPhone = event.detail.value;
    this.setData({
      realPhone
    })
  },
  //提交领取
  submitVipMsg: function() {
    console.log(this.data.realName)
    console.log(this.data.realPhone)
    var realName = this.data.realName;
    var realPhone = this.data.realPhone;
    if (realName && realName != '') {
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(realPhone)) {
        //成功后执行
        wx.showModal({
          content: '领取成功',
          showCancel: false,
          success: function() {
            this.setData({
              showMaskVip: false
            })
          }
        })
      } else {
        wx.showModal({
          content: '请输入正确的手机号！',
          showCancel: false
        })
      }
    } else {
      wx.showModal({
        content: '请输入您的真实姓名！',
        showCancel: false
      })
    }
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