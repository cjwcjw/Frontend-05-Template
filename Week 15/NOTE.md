学习笔记
# 动画与时间线
- window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
- 程序里一般都是改变属性来形成动画，因此需要设置起始属性。
-三次贝塞尔曲线 - 牛顿积分实现
# 手势
- 点击
    - start -end-> tap 类似click；
- 移动
    - start -移动10px-> pan start : 触点移动开始 手势允许最大误差经验值 10px
    - pan start -move-> pan -> pan end（移动结束） or flick(轻扫) 移动速度确定是哪种状态
- 按压
    - start -o.5s-> press start



