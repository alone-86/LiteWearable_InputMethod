import router from '@system.router';

export default {
    data: {
        fromPage: "",       //转跳输入法前的页面的Uri
        fromPageData:null,  //转跳输入法前的页面的要保存的数据（转跳页面时传过来一个对象，输入完成后传回去）
        letters: "",        //键盘页输入的拼音
        words: "　　　　",    //键盘页中，提供编辑框后8个字符的预览
        inputWords: "",     //编辑框中的文字，点确定即带上此数据转跳回原页面
        sindex: 0,          //键盘滑动位置，实现从候选页返回时可以返回到原页面
        mode: "cn",         //输入模式标记，中文cn，英文en，符号数字标记
        caps: -1,           //大小写标记
        keyboardLetters: "QWERTYUIOPASDFGHJKLZXCVBNM", //键盘页各按键符号集
    },
    //键盘页切换时记录index
    changeSwiper(e) {
        var that = this;
        that.sindex = e.index;
    },
    changeToSymbol() {
        var that = this;
        that.keyboardLetters = "1234567890,.;:\"'!@#$%&*()";
        that.mode = "sy";
        that.letters = "无候选"
        that.words = that.inputWords.substring(that.inputWords.length - 8)
    },
    changeToEn() {
        var that = this;
        that.letters = "无候选"
        if (that.caps == 1) {
            that.keyboardLetters = "qwertyuiopasdfghjklzxcvbnm";
        } else {
            that.keyboardLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        }
        that.mode = "en";
        that.caps *= -1;
        that.words = that.inputWords.substring(that.inputWords.length - 8)
    },
    changeToCn() {
        var that = this;
        that.keyboardLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
        that.mode = "cn";
        that.letters = ""
        that.words = that.inputWords.substring(that.inputWords.length - 8)
    },
    input(symbol) {
        var that = this;
        console.log(symbol);
        if (this.mode == "cn") {
            that.letters += symbol;
            console.log(that.letters);
        } else {
            that.inputWords += symbol;
        }
        that.words = that.inputWords.substring(that.inputWords.length - 8)
    },
    directInput(symbol) {
        var that = this;
        that.inputWords += symbol;
        that.letters = "";
        that.words = that.inputWords.substring(that.inputWords.length - 8)
    },
    backspace() {
        var that = this;
        if (this.mode == "cn") {
            if(that.letters.length==0){
                this.wordsBackspace();
                that.words = that.inputWords.substring(that.inputWords.length - 8)
            }else if (that.letters.length <= 1) {
                that.letters = "";
            } else {
                that.letters = that.letters.substring(0, that.letters.length - 1);
                console.log(that.letters);
            }
        }else{
            this.wordsBackspace();
            that.words = that.inputWords.substring(that.inputWords.length - 8)
        }
    },
    wordsBackspace() {
        var that = this;
        if (that.inputWords.length <= 1) {
            that.inputWords = "";
        } else {
            that.inputWords = that.inputWords.substring(0, that.inputWords.length - 1);
        }
    },
    jumpToCandidate() {
        console.log(this.letters);
        var that = this;
        router.replace({
            uri: 'pages/pinyincandidate/pinyincandidate',
            params: {
                pinyinFromPage: that.fromPage,
                inputWords: that.inputWords,
                sindex: that.sindex,
                letters: that.letters,
            },
        });
    },
    finishInput(){
        var that = this;
        router.replace({
            uri: that.fromPage,
            params: {
                fromPageData:that.fromPageData,
                inputWords:that.inputWords,
            },
        });
    },
    cancelInput(){
        var that = this;
        router.replace({
            uri: that.fromPage,
            params: {
                fromPageData:that.fromPageData,
            },
        });
    },
    touchMove(e) { // swipe处理事件
        if (e.direction == "right") { // 右滑退出
            this.cancel_input()
        }
    }
}
