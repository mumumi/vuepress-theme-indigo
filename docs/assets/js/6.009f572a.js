(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),s("p",[t._v("在输入编辑的业务场景中，可能会需要在光标当前的位置或附近显示提示选项。比如社交评论中的"),s("code",[t._v("@user")]),t._v("功能，要确保提示的用户列表总是出现在"),s("code",[t._v("@")]),t._v("字符右下方，又或者是在自定义编辑器中 autocomplete 语法提示，都需要获取光标当前的位置作为参照点。")]),s("h2",{attrs:{id:"两种位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 两种位置")]),s("p",[t._v("对于 WEB 开发来讲，当我们提到某某元素的位置，通常是指这个元素相对于父级或文档的像素单位坐标。而对于输入框中光标，就有了额外的区分。")]),s("h3",{attrs:{id:"相对于内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对于内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 相对于内容")]),s("p",[t._v("相对于内容，光标位于第几个字符之后，姑且称之为"),s("strong",[t._v("字符位置")]),t._v("吧。")]),s("h3",{attrs:{id:"相对于-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对于-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" 相对于 UI")]),s("p",[t._v("相对于 UI，也就是跟普通页面元素一样的"),s("strong",[t._v("像素位置")]),t._v("了。")]),s("h2",{attrs:{id:"插入或替换内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入或替换内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入或替换内容")]),s("p",[t._v("在前言提到的场景中，也有在光标位置处插入内容的需求，比如对选取文字加粗"),s("code",[t._v("text => <strong>text</strong>")]),t._v("等。")]),s("h3",{attrs:{id:"textarea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textarea","aria-hidden":"true"}},[t._v("#")]),t._v(" textarea")]),s("p",[s("code",[t._v("textarea")]),t._v("元素可以很容易获取到选择的一段文字的起止位置。如果当前没有选择文字，则两个位置值都为光标右侧字符的索引，从 0 开始。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 开始位置")]),t._v("\ntextarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionStart\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 结束位置")]),t._v("\ntextarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionEnd\n")])]),s("p",[t._v("对于加粗功能，有了起止位置，就能获取到选择的文字内容，然后对内容进行替换。由于"),s("code",[t._v("textarea")]),t._v("不能包含子元素，只有纯文本，所以基于"),s("code",[t._v("textarea")]),t._v("实现加粗只能像用 Markdown 标记语法实现。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" selectedText "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("substring")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionStart"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionEnd"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntextarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setRangeText")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'**'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" selectedText "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'**'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("blockquote",[s("p",[s("code",[t._v("textarea.setRangeText(text: String)")]),t._v(" 把选中的文字替换为其他内容。")])]),s("h3",{attrs:{id:"contenteditable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenteditable","aria-hidden":"true"}},[t._v("#")]),t._v(" contenteditable")]),s("p",[t._v("也可能我们会使用"),s("code",[t._v("contenteditable")]),t._v("属性把一个元素变为可编辑元素。而上面所用的属性和函数都是普通元素所没有的，所以要换一种姿势实现。")]),s("p",[t._v("还是以加粗功能为例。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 获取文档中选中区域")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getRangeAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" strongNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'strong'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 选中区域文本")]),t._v("\nstrongNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" range"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 删除选中区")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("deleteContents")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 在光标处插入新节点")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("insertNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strongNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("基于"),s("code",[t._v("contenteditable")]),t._v("的可编辑元素，其中的内容均为子元素，文本为"),s("code",[t._v("textNode")]),t._v("，加粗使用 HTML 元素，插入或替换是对元素的操作。")]),s("p",[t._v("如果想使用操作内容的思路实现会比较麻烦，因为可以获取到的起止位置是基于子元素的。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("contenteditable")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("你好"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("big")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("w"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("big")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("orld"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("假如选中的文字是"),s("code",[t._v("你好wor")]),t._v("，调用相关 API 的输出如下。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 当前在文档中选择的文本，document 和 window 都有这个函数")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// var selection = document.getSelection()")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" selection "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchorNode "),s("span",{attrs:{class:"token comment"}},[t._v("// 你好")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anchorOffset "),s("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusNode "),s("span",{attrs:{class:"token comment"}},[t._v("// orld")]),t._v("\nselection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusOffset "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 或者使用 Range")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" selection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getRangeAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startContainer "),s("span",{attrs:{class:"token comment"}},[t._v("// 你好")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startOffset "),s("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endContainer "),s("span",{attrs:{class:"token comment"}},[t._v("// orld")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endOffset "),s("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),s("p",[t._v("最终可以获取到起止元素以及选中区域在开始元素内容中的字符位置和在结束元素内容中的字符位置。其中的起止元素均为"),s("code",[t._v("textNode")]),t._v("类型，通过"),s("code",[t._v("parentNode")]),t._v("获取到包裹元素。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("range"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startContainer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode "),s("span",{attrs:{class:"token comment"}},[t._v("// <strong>你好</strong>")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endContainer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode "),s("span",{attrs:{class:"token comment"}},[t._v("// <div contenteditable>...</div>")]),t._v("\n")])]),s("blockquote",[s("p",[t._v("需要注意的是通过"),s("code",[t._v("Selection")]),t._v("和"),s("code",[t._v("Rang")]),t._v("获取到起止位置是有方向之分的，从左向右选择和从右向左选择得到的值是正好相反的。")])]),s("h2",{attrs:{id:"基于光标像素位置创建内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于光标像素位置创建内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于光标像素位置创建内容")]),s("p",[t._v("这里就要开始用像素位置，同样分为两种实现来讲。")]),s("h3",{attrs:{id:"contenteditable-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenteditable-2","aria-hidden":"true"}},[t._v("#")]),t._v(" contenteditable")]),s("p",[t._v("可编辑元素获取光标像素位置就像"),s("code",[t._v("textarea")]),t._v("获取光标的字符位置一样简单。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getRangeAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// { width, height, top, right, bottom, right }")]),t._v("\n")])]),s("p",[t._v("这么具体的尺寸值，实现自动完成真是 So easy!")]),s("h3",{attrs:{id:"textarea-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textarea-2","aria-hidden":"true"}},[t._v("#")]),t._v(" textarea")]),s("p",[s("code",[t._v("textarea")]),t._v("其中的内容都是纯文本，在 DOM 中不存在相关的对象，对于像素位置就得另作他想了。")]),s("h4",{attrs:{id:"基于行高和字体大小计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于行高和字体大小计算","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于行高和字体大小计算")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 1.获取光标结束位置")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" end "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionEnd\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 2.通过匹配光标之前文本中的换行符计算所在行")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" row "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("substring")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("match")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token regex"}},[t._v("/\\r\\n|\\r|\\n/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 3.计算 top，行高 * 行数 + 上填充 + 边框宽度")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" top "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lineHeight "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" paddingTop "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" borderWidth\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 4.获取光标左侧的文本")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" leftText "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("split")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token regex"}},[t._v("/\\r\\n|\\r|\\n/")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 5.影响一段文字所占宽度的因素太多，除字体大小、中英文、符号、字符间距等，还有字体、浏览器、系统等客观因素")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// var left = ...")]),t._v("\n")])]),s("p",[t._v("这个方案的思路是没问题的，但是考虑所有问题的成本太高。虽然可以创建测试元素去计算文本宽度，但这个方案本身是从严谨的角度出发的。与其混在一块，直接用取巧的办法更简单。")]),s("blockquote",[s("p",[s("s",[t._v("这个方案的潜台词是：明明可以靠脸吃饭，却偏偏要靠才华！")]),t._v(" 🙄")])]),s("h4",{attrs:{id:"镜像元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 镜像元素")]),s("p",[t._v("文本不支持定位？那我创建 DOM 好了。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 光标位置")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" end "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionEnd\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 光标前的内容")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" beforeText "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("slice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 光标后的内容")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" afterText "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("slice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 对影响 UI 的特殊元素编码")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{attrs:{class:"token function-variable function"}},[t._v("escape")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("replace")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token regex"}},[t._v('/<|>|`|"|&/g')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'?'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("replace")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token regex"}},[t._v("/\\r\\n|\\r|\\n/g")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'<br>'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 创建镜像内容，复制样式")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mirror "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'<div class=\"'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" textarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'\">'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("escape")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beforeText"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'<span id=\"cursor\">|</span>'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("escape")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("afterText"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'</div>'")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 添加到 textarea 同级，注意设置定位及 zIndex，使两个元素重合")]),t._v("\ntextarea"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("insertAdjacentHTML")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'afterend'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mirror"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 通过镜像元素中的假光标占位元素获取像素位置")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cursor "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'cursor'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncursor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// { width, height, top, right, bottom, right }")]),t._v("\n")])]),s("h2",{attrs:{id:"end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end","aria-hidden":"true"}},[t._v("#")]),t._v(" End")]),s("p",[t._v("最后悄悄说一句，以上内容不兼容低版本 IE，但是 IE 毕竟主场运行，有些 API 反而是其他浏览器所没有的。就上面提到的案例来说，低版本 IE 也有对应的 API 可用。真是不想在 IE 上去浪费精力了，索性不提。")])])}],!1,null,null,null);a.default=e.exports}}]);