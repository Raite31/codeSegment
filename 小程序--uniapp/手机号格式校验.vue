mobile: [
  { required: true, trigger: "blur", message: "请输入手机号" },
  {
    pattern: /^1[3-9]\d{9}$/,
    trigger: "blur",
    message: "手机号格式错误",
  },
];