学习笔记
# 盒
- content-box: width = content.width
- border-box: width = content.width + padding
# 排版： 就是盒和文字的排版
1. 正常流排版
2. flex排版
3. 基于 grid
4. css houdini js干预排版
## 正常流排版
1. 收集盒和文字进 行
2. 计算盒和文字在行里的排布
3. 计算 行 的排布
### 行级排布 IFC
- line-top
- text-top
- base-line： 行内盒基线根据行内文字变化
- text-bottom
- line-bottom
### 块级排布 BFC
- float: 不止影响自己所在这一行，根据其高度。
- clear: 找到干净空间执行浮动，影响某个方向的float。
- 两个盒子margin 堆叠， 会取最大的margin值（只在BFC里会出现）。
#### BFC 合并
- block container 里面有BFC
    - block
    - inline-block
    - table-cell
    - flex item
    - grid cell
    - table-caption
- block-level Box 外面有BFC
    - 各种display 的值
- block-box 里外都有 BFC
    - BFC合并（block-box && overflow:visible）
## Flex 排版
1. 收集盒和文字进 行
2. 计算盒和文字在主轴方向的排布
3. 计算盒和文字在交叉轴方向的排布
# CSS绘制与动画
- @keyframes 定义
- animation: 使用
    - animation-name 时间曲线
    - animation-duration 动画时长
    - animation-timing-function 动画的时间曲线
    - animation-delay 动画开始前的延迟
    - animation-iteration-count 动画播放次数
    - animation-direction 动画的方向
- transition
    - transition-property 要变换的属性
    - transition-duration 要变换的时长
    - transition-timing-function 时间曲线： 三次贝塞尔曲线
    - transition-delay 动画开始前的延迟
# CSS绘制
- 几何图形
    - border
    - box-shadow
    - border-radius
- 文字 
    - font
    - text-decoration
- 位图
    - background-image


