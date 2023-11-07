<script>
    changeStatus(index,status){
        let item = this.itemList.list[index];
        console.log(item);
        item.showBtn = status
        if(item.showBtn == 1) {
            console.log("play")
            this.videoContext.play()
        }else {
            console.log("pause");
            this.videoContext.pause(()=>{
                console.log("已触发暂停");
            })
        }
        this.$forceUpdate();//刷新数据
    }
</script>