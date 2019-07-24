// pages/roomOrder/roomOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取姓名
  getname: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  // 获取电话
  getphone: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  // 获取身份证号
  getIdcard: function (e) {
    this.setData({
      userIdcard: e.detail.value
    })
  },
  // 提交订单
  submitOrder: function () {
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    var userIdcard = this.data.userIdcard;
    console.log(userName, userPhone, userIdcard)
    // 需要传参
    if (userName || userPhone || userIdcard) {
      wx.navigateTo({
        url: '/pages/orderDetail/orderDetail',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请将信息填写完整',
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