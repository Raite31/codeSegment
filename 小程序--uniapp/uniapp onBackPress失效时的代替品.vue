// uniapp的onBackPress特性：当前页面栈 大于 1 才生效。如第一次就打开 用户中心 页面，然后从 用户中心 redirectTo 跳转到登录页，这时在登录页 的 onBackPress 是不会触发的

onUnload() {  
    // #ifdef MP-WEIXIN  
        //监听返回的逻辑  
    if (this.isEditTemplate) {  
        this.$refs.alertDialog.open();  
    }  
    // #endif  
},
