学习笔记
## 字符串分析算法｜总论
1. 字典数：大量高重复字符串的存储与分析。  
2. kmp: 长字符串是否包含某个短字符。
3. wildcard: 带通配符`*`,`?`匹配。
4. 正则：字符串较通用的匹配模式，一般会有回溯。  
5. 状态机： 类似正则，但是比正则强大，可内嵌代码，使用成本高，需要一定设计。
6. LL LR算法： 用于简单数据匹配需要一定层级结构的数据。
## 字符串分析算法｜字典树
1. 主要逻辑把字符串单个字符拆出存入有层级的hash表中，方便得能对大量数量进行存储及数量上的统计。
## 字符串分析算法｜KMP模式匹配字符
1. 关注字符串的自身重复情况。逐位截取比较。
2. 关于`j = table[j]`的理解：我理解的j值是需要对 `pattern` 中比较的索引位置 `pattern[i] === pattern[j]`,
如果 `pattern[i] !== pattern[j]` ，则i值不再递增，而是找 `pattern[j]` 的上次比较值，然后让 `pattern[i]` 再次与
`pattern[j]` 的上次比较值去对比 `pattern[i] === pattern[table[j]]` ，如果需要对比的索引等于0,则i值增加，进行下一位的比较。
## 字符串分析算法｜wildcard
1. *匹配任意多个字符，？匹配任意一个字符。
2. 多*匹配时，我们前面几个*应该做到尽量少的匹配，最后一个*多匹配。
3. 只看*搜索，与kmp算法很类似,最后处理方式是把匹配字符串按`*`通配符分割为多个匹配kmp算法，通配符 `?`的处理用正则去处理了。