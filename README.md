# LiteWearable_InputMethod

实现了一个在华为LiteWearable设备上的输入法页面，可以实现常用3500个汉字，英文数字和部分符号的输入。

## 使用方法

两个页面pinyin和pinyincandidate添加到LiteWearable项目的pages文件夹下，在使用输入法时带参数跳转到输入法页面，在输入法页面输入完成后，点击确定将会跳转回原页面，输入的文本在参数inputWords中保存

## 使用样例

#### index页面

hml文件：

```html
<!-- index.hml -->
<div class="container" onswipe="touchMove">
<!-- 关联index.css中的#title样式代码块 -->
    <text id="title"> {{ inputWords }} </text>
    <input type="button" value="输入文本" class="button" onclick="JumpToPinyin"></input>
</div>
```

css文件：

```css
/* index.css */
/* 类选择器，所有组件中class="container" 的组件都会使用该样式。*/
.container {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    width: 454px;
    height: 454px;
}

#title {
    font-size: 38px;
    text-align: center;
    width: 454px;
    height: 112px;
    color: white;
}

.button{
    width : 200px;
    height : 60px;
    margin-top : 15px;
    background-color: royalblue ;
}
```



```javascript
//index.js
import router from '@system.router'
export default {
    data: {
        inputWords: '无文本',
        fromPageData: {
            data1: "mydata1",
            data2: "mydata2",
        },
    },
    JumpToPinyin() {
        router.replace({
            uri: 'pages/pinyin/pinyin',
            params: {
                fromPage: 'pages/index/index',
                fromPageData: this.fromPageData,
            },
        });
    }
}
```

## 界面截图

![img](G:%5CASUS%5CDocuments%5CTencentFlies%5C530825293%5CImage%5CC2C%5CImage3%5CFE2F7D2CBE4ABB13DDF8D6818C563605.jpg)
![img](G:%5CASUS%5CDocuments%5CTencentFlies%5C530825293%5CImage%5CC2C%5CImage3%5C0319423235F8CBF484076BBB3442D635.jpg)
![img](G:%5CASUS%5CDocuments%5CTencentFlies%5C530825293%5CImage%5CC2C%5CImage3%5CB0EE207643BEC9D7535154B3A407A010.jpg)
