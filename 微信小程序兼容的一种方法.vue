<view
    class="header-box"
    :class="iphonexup ? 'phonexup' : ' '"
>
</view>

//====================== script
data(){
    return{
        // 处理兼容
        iphonexup: false,
        iphone14: false
    }
},

onReady() {
    const deviceModel = wx.getSystemInfoSync().model;
    console.log("型号： ",deviceModel)
        
    if (deviceModel.includes('iPhone X') || deviceModel.includes('iPhone 11') || deviceModel.includes('iPhone 12') || deviceModel.includes('iPhone 13') || deviceModel.includes('iPhone 14')) {
        console.log(1111111111)
        this.iphonexup = true
        
    }
},

//====================== style
.phonexup{
	padding-top: 50rpx;
}