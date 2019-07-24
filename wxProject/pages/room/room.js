// pages/room/room.js
const app = getApp();
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerHotelData: app.globalData.headerHotelData,
    roomData: app.globalData.roomData,
    commentData: app.globalData.commentData,
    commentNum: '',
    commentType: app.globalData.commentType,
    today: util.formatTime(new Date()).ymd,
    startDate: '',
    endDate: '',
    currentData: 0,
    checkInDayNum: 1,
    hoursTypeList: ['3小时', '6小时', '12小时'],
    hoursTypeIndex: 0,
    typeList: ['全部','全日房','钟点房'],
    typeIndex: 0,
    roomTypeList: ['全部','标准房','情侣房','麻将房','豪华套房'],
    roomTypeIndex: 0,
    bedTypeList: ['全部','1.5m×2.0m 2张床', '1.8m×2.0m 2张床','2.0m×2.0m 1张床'],
    bedTypeIndex: 0,
    key:true,
    roomMaskShow: false
  },
  map: app.map,
  call: app.call,
  // 入住时间选择
  startDateChange: function (e) {
    var startTime = new Date(e.detail.value.replace(/-/g, "/"));
    var endTime = new Date(this.data.endDate.replace(/-/g, "/"));
    var endDateMs = startTime.getTime() + this.data.checkInDayNum*24*60*60*1000;
    var unixTimestamp = new Date(endDateMs)  
    var commonTime = util.formatTime(new Date(endDateMs)).ymd
    this.setData({
      startDate: e.detail.value,
      endDate: commonTime
    })
  },
  // 离店时间选择
  endDateChange: function (e) {
    var startTime = new Date(this.data.startDate.replace(/-/g, "/"));
    var endTime = new Date(e.detail.value.replace(/-/g, "/"));
    // 入住天数
    var checkInDayNum = (endTime.getTime() - startTime.getTime())/(1000*60*60*24);
    this.setData({
      endDate: e.detail.value,
      checkInDayNum: checkInDayNum
    })
  },
  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      hoursTypeIndex: e.detail.value
    })
  },
  typeChange: function(e){
    this.setData({
      typeIndex: e.detail.value
    })
  },
  roomTypeChange: function (e) {
    this.setData({
      roomTypeIndex: e.detail.value
    })
  },
  bedTypeChange: function (e) {
    this.setData({
      bedTypeIndex: e.detail.value
    })
  },
  todayChange: function(e) {
    this.setData({
      today: e.detail.value
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
  // 抢购预约
  showRoomMask: function(){
    this.setData({
      roomMaskShow: true
    })
  },
  //关闭抢购预约
  closeRoomMask: function () {
    this.setData({
      roomMaskShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var curDate = new Date();
    var nextDate = new Date(curDate.getTime() + 24 * 60 * 60 * 1000); //后一天
    var today = util.formatTime(curDate).ymd;
    var tomorrow = util.formatTime(nextDate).ymd;
    this.setData({
      commentNum: this.data.commentData.length,
      startDate: today,
      endDate: tomorrow
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