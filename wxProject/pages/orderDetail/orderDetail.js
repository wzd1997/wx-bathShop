// pages/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderName:'超值综合套票仅售69元',
    rId: 0,
    chooseRebate: "hiddenMask",
    price: 10,
    count: 1,
    allPrice: 10,
    originPrice: 100,
    pay: 10,
    off: 0,
    rebateList: [
      {
        id:1,
        value: 10,
        name: "团购消费优惠券",
        type: '优惠',
        limit: '此卷仅限团购消费时使用'
      },
      {
        id: 2,
        value: 20,
        name: "无限",
        type: '优惠',
        limit: '此卷仅限9999时使用'
      }
    ],
    rebateName: '选择红包'
  },
  // 开始选择红包
  chooseRebate:function(){
    this.setData({
      chooseRebate:"showMask"
    })
  },
  // 关闭红包选择
  closeMask: function() {
    this.setData({
      chooseRebate: "hiddenMask"
    })
  },
  // 选中红包
  chooseThisRebate:function(e){
    console.log(e.currentTarget.dataset.thisRebate)
    var that = this;
    var thisReabte = e.currentTarget.dataset.thisRebate;
    var pay = that.data.allPrice - thisReabte.value;
    if(pay <= 0) {
      pay = 1;
    }
    this.setData({
      rId: thisReabte.id,
      off: thisReabte.value,
      pay,
      rebateName: thisReabte.name,
      chooseRebate: "hiddenMask"
    })
  },
  payOrder:function(e) {
    console.log(e.currentTarget.dataset)
    var orderValue = e.currentTarget.dataset.orderMsg.split(',')[0];
    var orderName = e.currentTarget.dataset.orderMsg.split(',')[1];
    wx.navigateTo({
      url: '/pages/pay/pay?orderValue=' + orderValue +'&orderName=' + orderName,
    })
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