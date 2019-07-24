// pages/recharge/recharge.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerNavigator: app.globalData.footerNavigatorData, //底部导航数据
    checkedIndex: 0,
    rechargeData: [{
        money: 100,
        presentNum: 50,
        presentType: '元',
        type: 'card'
      },
      {
        money: 100,
        presentNum: 50,
        presentType: '元',
        type: 'card'
      },
      {
        money: 100,
        presentNum: 50,
        presentType: '元',
        type: 'card'
      },
      {
        money: 100,
        presentNum: 50,
        presentType: '元',
        type: 'card'
      },
      {
        money: 100,
        presentNum: 0,
        presentType: '张/门票',
        type: 'ticket'
      },
      {
        money: 100,
        presentNum: 0,
        presentType: '张/门票',
        type: 'ticket'
      },
      {
        money: 100,
        presentNum: 0,
        presentType: '张/门票',
        type: 'ticket'
      },
      {
        money: 100,
        presentNum: 0,
        presentType: '张/门票',
        type: 'ticket'
      },

    ],
    rechargeTicket: [

    ]
  },
  checked: function(e) {
    console.log(e.currentTarget.dataset.index)
    var ckeckedIndex = e.currentTarget.dataset.index
    this.setData({
      checkedIndex: ckeckedIndex
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