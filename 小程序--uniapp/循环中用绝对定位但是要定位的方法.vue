<!-- 众所周知，在循环中用relative可以在每一个item中定位，但是有时候会影响到flex布局而不得不使用absolute定位
但是用absolute定位后，如果设置top，left就会导致循环中每个item的定位元素都在屏幕的同一位置
那么我们可以用margin-top，margin-left定位 -->
position: absolute;
margin-top: -198rpx;
margin-left: -15rpx;