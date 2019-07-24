// pages/group/group.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerNavigator: app.globalData.footerNavigatorData,//底部导航数据
    headerHotelData: app.globalData.headerHotelData,
    group_title_imgUrl: '../../image/mall.png',
    groupData: app.globalData.groupData,
    commentData: app.globalData.commentData,
    commentNum:'',
    commentType: app.globalData.commentType
  },
  map:app.map,
  call:app.call,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      commentNum: this.data.commentData.length
    })
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
    console.log(2222)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1111)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})