<script>
    //音频进度更新事件
    this.audio.onTimeUpdate(() => {
        console.log('音频进度条发生更新')
        this.current = this.audio.currentTime;
        if (!this.duration) {
            this.duration = this.audio.duration;
        }
        if (this.duration > 0) {
            if (this.current === this.duration) {
                this.slideWidth = 100;
                return;
            }
            // this.slideWidth = parseInt(((parseInt(value) / parseInt(this.duration)) * 100).toFixed(2))
            // 计算百分数，也就是进度条的长度
            this.slideWidth = Number(((this.current / this.duration) * 100).toFixed(4));
        }
    });
</script>
