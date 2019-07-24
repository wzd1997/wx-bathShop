// pages/groupOrder/groupOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 69,
    count: 1,
    allPrice: null
  },

  /**
   * 生命周期函数--监听页面加载
   */

  // 跳转到个人中心
  gomy: function() {
    wx.switchTab({
      url: '/pages/my/my',
    })
  },

  // 减数量
  reduce: function(e) {
    var count = --e.currentTarget.dataset.count;
    var allPrice = count * this.data.price;
    if (count > 0) {
      this.setData({
        count,
        allPrice
      })
    }
  },
  // 加数量
  add: function(e) {
    var count = ++e.currentTarget.dataset.count;
    var allPrice = count * this.data.price
    this.setData({
      count,
      allPrice
    })
  },

  // 获取姓名
  getname: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  // 获取电话
  getphone: function(e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  // 提交订单
  submitOrder: function() {
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    if (userName || userPhone) {
      wx.navigateTo({
        url: '/pages/orderDetail/orderDetail',
      })
    }else {
      wx.showModal({
        title: '提示',
        content: '请将信息填写完整',
      })
    }
  },
  onLoad: function(options) {
    var allPrice = this.data.price * this.data.count;
    this.setData({
      allPrice
    })
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