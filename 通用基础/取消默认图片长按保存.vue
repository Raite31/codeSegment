<!-- 情况一 给全局图片作这个处理 -->
<!-- App.vue -->
<style lang="scss">
image {
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}
</style>

<!-- 页面 -->
<style lang="scss">
    // 给一些大背景加上这个
    .contain{
        -webkit-touch-callout: none;
    }
</style>


<!-- 情况二 全局作了处理后，但是有些图片是有点击事件的，就会受到影响，无法点击-->
<view>
    <image @touchstart.prevent="cancelTouchStart($event)" @touchend="cancelVoice"></image>
</view>
<script>
    export default{
        data(){
            return{
                cancelTouchStart(e){
                    e.preventDefault();
                },
                cancelVoice(){
                    console.log('原本的点击事件');
                }
            }
        }
    }
</script>
<style lang="scss">
    image{
        pointer-events: all;
    }
</style>