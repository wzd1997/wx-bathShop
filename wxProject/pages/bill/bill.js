// pages/redEnvelopes/redEnvelopes.js
import utils  from '../../utils/util.js' 


Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    swiperHeight: null,
    scrollY: true,
    date: null,
    multiArray: [['2018年', '2019年'], ['1月', '2月', '3月', '4月', '5月']],
    multiIndex: [0, 0],
  },
  // 选择日期结束 进行查询
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var multiIndex = e.detail.value;
    var date = this.data.multiArray[0][multiIndex[0]] + this.data.multiArray[1][multiIndex[1]];
    console.log(date)
    this.setData({
      date
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //根据页面确定红包列表的高度
    var pageHeight = wx.getSystemInfoSync().windowHeight;
    var topHeight
    var top = wx.createSelectorQuery();
    top.select('.headPart').boundingClientRect();
    top.selectViewport().scrollOffset();
    top.exec((res) => {
      topHeight = res[0].height;
      that.setData({
        swiperHeight: (pageHeight - topHeight) * 2
      })
    });
    var dateArr = utils.formatTime(new Date()).ymd.split('-');
    var date = dateArr[0] + '年' + dateArr[1] + '月';
    that.setData({date})
  
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