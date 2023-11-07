// 在vue.config.js中

devServer: {
    proxy: {
        "/front/api": {
            // 这个别名也很重要
            target: "http://127.0.0.1:3000/", //实际请求地址
                changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/front\/api/, ""), // 改良过的，这样写才不会非一级页面时发请求出错
      },
    },
},