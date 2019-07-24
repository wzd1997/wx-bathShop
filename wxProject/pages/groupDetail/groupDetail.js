// pages/groupDetail/groupDetail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/11.jpg',
      '../../image/gg_g.png',
      '../../image/11.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    currentData: 0,
    commentData: app.globalData.commentData,
    commentNum: '',
    commentType: app.globalData.commentType
  },
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  // 立即抢购
  goGroupOrder:function(){
    wx.navigateTo({
      url: '/pages/groupOrder/groupOrder'
    })
  },
  // 加载更多评论
  getMoreComment:function() {
    console.log('到底了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //根据页面确定列表的高度
    var pageHeight = wx.getSystemInfoSync().windowHeight;
    var topHeight;
    var top = wx.createSelectorQuery();
    top.select('.groupDetail').boundingClientRect();
    top.selectViewport().scrollOffset();
    top.exec((res) => {
      topHeight = res[0].height;
      that.setData({
        swiperHeight: (pageHeight - topHeight ) * 2
      })
    });
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