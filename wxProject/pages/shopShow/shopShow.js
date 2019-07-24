// pages/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    swiperHeight: null//上下滑块的距离
  },
  //获取当前滑块的index
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
  // 预览图片
  seePicture: function(e) {
    console.log(e.currentTarget.dataset.type)
    // 根据类型显示 展示图片
    wx.previewImage({
      current: '../../image/11.jpg', // 当前显示图片的http链接
      urls: ['../../image/11.jpg','../../image/11.jpg'] // 需要预览的图片http链接列表
    })
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
    top.select('.topTabSwiper').boundingClientRect();
    top.selectViewport().scrollOffset();
    top.exec((res) => {
      topHeight = res[0].height;
        that.setData({
          swiperHeight: (pageHeight - topHeight -10) * 2
        })
    });
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