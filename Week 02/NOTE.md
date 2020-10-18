学习笔记
## 练习：地图编辑器的实现
1. ES6新增api fill: 填充数组 array.fill(value, start, end) 注意: IE 11 及更早版本不支持 fill() 方法。  
2. dom.classList.add() / dom.classList.remove() JS提供的className的增加删除。  
3. MapDom.appendChild(document.createElement('br'))：createElement创建元素；appendChild挂载到某个dom节点。  
4. localStorage的值类型限定为string类型.  
5. document.addEventListener("contextmenu",function)右键菜单事件。  

## 练习：广度优先搜索
1. 所有算法的区别在于，其实在于集合的数据结构的区别。   
2. push将新项添加到数组的末尾,并返回新的长度。pop 用于删除并返回数组的最后一个元素。  
3. unshift方法可向数组的开头添加一个或更多元素,并返回新的长度。 shift用于把数组的第一个元素从其中删除,并返回第一个元素的值。  
4. 利用js的数组，及push/pop, shift/unshift 可以使其变成天然的stack(先进后出)/queue(先进先出)。  

## 练习：路径的选择
1. slice(start,end) 方法可从已有的数组中返回选定的元素。
2. splice 删除元素，后面元素会前移导致 O(n)的复杂度，对无序数组来说可能可以避免。
3. 启发式搜索A*：只要路径的每个点都是离终点最近的点，那该路径就是最佳路径。