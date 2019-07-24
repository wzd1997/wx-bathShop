// pages/personalData/personalData.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //提交的数据获取
  submitPersonalData: function(e) {
    var dataList = e.detail.value;
    var nickname = dataList.nickname,
      userName = dataList.userName,
      userPhone = dataList.userPhone,
      userIdCard = dataList.userIdCard,
      userAddress = dataList.userAddress;

    //成功后
    wx.showModal({
      content: '提交成功',
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          wx.switchTab({
            url: '/pages/my/my'
          })
        }
      }
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