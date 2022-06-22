import router from '@system.router';

export default {
    data: {
        letters:"",   //从键盘页获得的拼音
        words:"",     //从词典中查找到的候选词
        inputWords:"",//键盘页获得的已经输入到编辑框的文本
        sindex:0,     //从键盘页转跳时swiper的index
        wordsPageIndex: 0, //候选词的页号
        pinyinFromPage:"", //键盘页的Frompage
        pinyinFromPageData:null,
        pinyindict:",a:阿啊呵,e:额阿俄恶鹅遏鄂厄饿峨扼娥哦蛾讹,ai:爱埃艾碍癌哀挨矮隘蔼唉皑哎,ei:诶,xi:系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀硒熄汐铣嘻矽檄鳃,yi:一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑绎彝裔姨矣屹颐倚诣胰翌疙蛾壹臆铱揖肄,an:安案按岸暗鞍氨俺胺厂广,han:厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼憨捍酣悍,ang:昂仰盎肮,ao:奥澳傲熬凹敖袄翱懊,wa:瓦挖娃洼袜蛙凹哇,yu:于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭隅芋迂盂,niu:牛纽扭钮,o:哦噢喔,ba:把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙捌,pa:怕帕爬扒趴琶啪耙,pi:被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈屁琵痞霹砒,bi:比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌庇痹毙鄙陛敝蓖毖,bai:百白败摆伯拜柏佰稗,bo:波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊菠箔铂钵帛,bei:北被备倍背杯勃贝辈悲碑臂卑惫钡狈焙,ban:办版半班般板颁伴搬斑扮拌扳瓣绊,pan:判盘番潘攀盼畔胖叛拌磐,bin:份宾频滨斌彬濒摈,bang:帮邦彭旁榜棒膀镑绑傍磅蚌谤梆,pang:旁庞乓磅耪,beng:泵崩蚌蹦迸绷甭,bao:报保包宝暴胞薄爆炮饱抱堡剥鲍曝瀑豹刨褒雹苞,bu:不部步布补捕堡埔卜埠簿哺怖,pu:普暴铺浦朴堡葡谱埔扑仆蒲曝瀑莆圃菩,mian:面棉免绵缅勉眠冕娩,po:破繁坡迫颇朴泊婆泼魄粕,fan:反范犯繁饭泛翻凡返番贩烦帆樊藩矾钒,fu:府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧敷俯拂俘咐腑孵涪釜脯讣,ben:本体奔苯笨夯,feng:风丰封峰奉凤锋冯逢缝蜂枫疯讽烽,bian:变便边编遍辩鞭辨贬扁卞辫,pian:便片篇偏骗扁,zhen:镇真针振震珍阵诊填侦臻贞枕帧甄斟疹砧,biao:表标彪膘,piao:票朴漂飘瓢,huo:和活或货获火伙惑霍祸豁,bie:别鳖憋瘪,min:民敏闽皿悯抿,fen:分份纷奋粉氛芬愤粪坟汾焚酚吩忿,bing:并病兵冰屏饼炳秉丙柄,geng:更耕颈庚耿梗埂羹,fang:方放房防访纺芳仿坊妨肪,xian:现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺舷馅铣涎锨,fou:不否缶,ca:拆擦嚓礤,cha:查察差茶插叉刹茬岔诧碴喳搽,cai:才采财材菜彩裁蔡猜踩睬,can:参残餐灿惨蚕掺惭,shen:信深参身神什审申甚沈伸慎渗肾绅呻婶娠砷,cen:参岑涔,san:三参散伞叁,cang:藏仓苍沧舱,zang:藏脏葬赃,chen:称陈沈沉晨臣尘辰衬趁忱郴,cao:草操曹槽糙,ce:策测册侧厕栅,ze:责则泽择侧咋,zhai:债择齐宅寨侧摘窄斋祭翟,dao:到道导岛倒刀盗稻蹈悼捣祷,ceng:层曾蹭噌,zha:查扎炸诈闸渣咋乍榨札栅眨柞喳铡,chai:差拆柴豺,ci:次此差词辞刺瓷磁兹慈茨赐伺雌疵,zi:资自子字齐咨滋仔姿紫兹孜淄籽渍吱滓,cuo:措错磋挫搓撮,chan:产单阐崭缠掺颤铲蝉搀馋谗,shan:山单善陕闪衫擅汕扇掺珊删膳缮赡栅煽苫掸,zhan:展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸,xin:新心信辛欣薪芯锌忻衅,lian:联连练廉炼脸莲恋链帘怜涟敛镰,chang:场长厂常偿昌唱畅倡尝肠敞倘猖淌裳,zhang:长张章障涨掌帐胀彰丈仗漳樟账杖瘴,chao:超朝潮炒钞抄巢吵剿绰嘲,zhao:着照招找召朝赵兆昭肇罩沼嘲爪,zhou:调州周洲舟骤轴昼宙粥皱肘咒帚诌,che:车彻撤尺扯澈掣,ju:车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀沮疽狙,cheng:成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞,rong:容荣融绒溶蓉熔戎茸冗,sheng:生声升胜盛乘圣剩牲甸省绳甥,deng:等登邓灯澄凳瞪蹬,zhi:制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚掷峙炙侄窒吱趾痔蜘,zheng:政正证争整征郑丁症挣蒸睁拯怔狰,tang:堂唐糖汤塘躺趟倘棠烫淌膛搪,chi:持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛,shi:是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃虱,qi:企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄漆戚岂稽栖缉泣乞砌祁崎祈凄脐伎畦沏讫柒,chuai:揣,tuo:托脱拓拖妥驼陀鸵驮唾椭,duo:多度夺朵躲隋堕舵垛惰哆跺掇剁,xue:学血雪削薛穴靴,chong:重种充冲涌崇虫宠,chou:筹抽绸酬愁丑臭仇畴稠瞅踌,qiu:求球秋丘邱仇酋龟囚泅,xiu:修秀休宿袖绣臭朽锈羞嗅,chu:出处础初助除储畜触楚厨雏矗橱锄滁躇搐,tuan:团揣湍,zhui:追坠缀揣椎锥赘,chuan:传川船穿串喘椽,zhuan:专转传赚砖撰篆,yuan:元员院原源远愿园援圆缘袁怨渊苑宛冤猿垣鸳辕,cuan:窜攒篡蹿,chuang:创床窗闯幢疮,zhuang:装状庄壮撞妆幢桩,chui:吹垂锤炊椎捶,chun:春纯醇淳唇椿蠢,zhun:准屯淳谆,cu:促趋趣粗簇醋卒,dun:吨顿盾敦蹲墩囤钝遁,qu:区去取曲趋渠趣驱屈躯娶龋蛆,xu:需许续须序徐休蓄畜虚吁绪叙旭邪恤墟絮婿戌嘘酗,chuo:绰戳淖,zu:组族足祖租阻卒诅,ji:济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀寂脊肌稽忌饥祭缉棘汲畸姬藉妓讥蓟悸嫉伎箕,cong:从丛匆聪葱囱,zong:总从综宗纵踪棕鬃,cou:凑辏腠楱,cui:衰催崔脆翠粹摧瘁淬,wei:为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏喂巍萎蔚纬潍尉渭惟苇桅,cun:村存寸,zuo:作做座左坐昨佐琢撮柞,zuan:钻纂,da:大达打答搭瘩惮,dai:大代带待贷毒戴袋歹呆隶逮傣怠殆,tai:大台太态泰抬胎汰苔酞,ta:他它她拓塔踏塌獭挞蹋,dan:但单石担丹胆旦弹蛋淡诞氮郸耽惮掸,lu:路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅卤潞虏戮掳,tan:谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍,ren:人任认仁忍韧刃纫妊壬,jie:家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉芥疥,yan:研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉蜒奄谚阉,dang:当党档荡挡,tao:套讨跳陶涛逃桃萄淘掏滔绦,tiao:条调挑跳迢眺,te:特,de:的地得德底,dei:得,di:的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟笛狄嫡,ti:体提题弟替梯踢惕剔蹄啼屉剃涕锑嚏,tui:推退弟腿褪颓蜕,you:有由又优游油友右邮尤忧幼犹诱悠幽佑釉铀酉,dian:电点店典奠甸碘淀殿垫颠滇惦掂佃靛,tian:天田添填甜甸恬腆佃舔,zhu:主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛蛛拄蛀诛,nian:年念酿辗碾捻撵拈蔫,diao:调掉雕吊钓刁凋碉叼,yao:要么约药邀摇耀腰遥姚窑瑶咬尧钥谣侥疟妖舀,die:跌叠蝶迭碟爹谍,she:设社摄涉射折舍蛇拾舌奢慑赦赊,ye:业也夜叶射野液冶喝页爷耶邪咽椰掖拽曳腋噎,xie:些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟蝎楔,zhe:这者着著浙折哲蔗遮辙锗蛰,ding:定订顶丁鼎盯钉锭叮,diu:丢铥,ting:听庭停厅廷亭艇汀烃,dong:动东董冬洞懂冻栋侗恫,tong:同通统童痛铜桶桐筒彤侗捅酮瞳,zhong:中重种众终钟忠仲衷肿盅,dou:都斗读豆抖兜陡逗痘,du:度都独督读毒渡杜堵赌睹肚镀犊妒,duan:断段短端锻缎,dui:对队追敦兑堆,rui:瑞兑锐蕊,yue:月说约越乐跃兑阅岳粤悦曰钥,tun:吞屯囤褪臀,hui:会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃讳诲堕晦烩蛔,wu:务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨捂戊,ya:亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦衙丫蚜,he:和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏褐涸阂貉,wo:我握窝沃卧挝涡斡蜗,en:恩摁蒽,n:嗯唔,er:而二尔儿耳饵洱贰,fa:发法罚乏伐阀筏珐,quan:全权券泉圈拳劝犬痊醛颧,fei:费非飞肥废菲肺啡沸匪诽吠,pei:配培坏赔佩陪沛裴胚呸,ping:平评凭瓶冯屏萍苹乒坪,fo:佛,hu:和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚唬,ga:夹咖嘎噶,ge:个合各革格歌哥盖隔割阁戈葛鸽搁胳疙铬蛤咯,ha:哈蛤铪,xia:下夏峡厦辖霞夹虾狭吓侠暇瞎匣唬,gai:改该盖概溉钙芥,hai:海还害孩亥咳骸骇氦,gan:干感赶敢甘肝杆赣乾柑竿秆,gang:港钢刚岗纲冈杠缸扛肛,jiang:将强江港奖讲降疆蒋姜浆匠酱僵桨,hang:行航杭巷夯吭,gong:工公共供功红贡攻宫巩龚恭拱躬弓汞,hong:红宏洪轰虹鸿弘哄烘,guang:广光逛,qiong:穷琼,gao:高告搞稿膏糕镐皋羔篙,hao:好号毫豪耗浩郝皋壕嚎貉,li:理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸篱鲤吏俐砾痢,jia:家加价假佳架甲嘉贾驾嫁夹稼钾挟颊枷荚,luo:落罗络洛逻螺锣骆萝裸烙骡咯箩,ke:可科克客刻课颗渴壳柯棵呵坷苛咳磕,qia:卡洽掐,gei:给,gen:根跟,hen:很狠恨痕,gou:构购够句沟狗钩拘勾苟垢,kou:口扣寇抠,gu:股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕箍蛊,pai:牌排派拍迫徘湃,gua:括挂瓜刮寡褂剐,tou:投头透偷愉,guai:怪拐乖,kuai:会快块筷侩,guan:关管观馆官贯冠惯灌罐纶棺斡,wan:万完晚湾玩碗顽挽弯蔓丸皖宛婉腕惋烷豌,ne:呢哪呐,gui:规贵归轨桂柜圭鬼硅瑰跪龟闺诡癸刽傀,jun:军均俊君峻菌竣钧骏龟浚郡,jiong:窘炯,jue:决绝角觉掘诀抉爵嚼倔攫撅,gun:滚棍辊,hun:婚混魂浑昏棍荤,guo:国过果郭锅裹涡,hei:黑嘿嗨,kan:看刊勘堪坎砍嵌槛,heng:衡横恒亨哼,mo:万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹嘿貉,peng:鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼砰,hou:后候厚侯猴喉吼,hua:化华划话花画滑哗豁猾,huai:怀坏淮徊槐,huan:还环换欢患缓唤焕幻痪桓涣宦豢,xun:讯训迅孙寻询循旬巡汛勋逊熏浚殉驯,huang:黄荒煌皇凰慌晃谎惶簧恍幌蝗磺,nai:能乃奶耐奈氖,luan:乱卵滦峦挛孪,qie:切且契窃茄砌怯,jian:建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺饯缄,nan:南难男,qian:前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌钳堑钎扦仟,qiang:强抢疆墙枪腔呛羌蔷,xiang:向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶,jiao:教交较校角觉叫脚缴胶轿郊焦骄浇椒礁蕉娇矫搅绞酵剿嚼饺窖侥狡铰,zhuo:着著缴桌卓捉琢灼浊酌拙茁淖啄,qiao:桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬鞘橇,xiao:小效销消校晓笑肖削孝萧俏硝宵啸嚣霄淆哮,si:司四思斯食私死似丝饲寺肆撕伺嗣嘶巳,kai:开凯慨岂楷揩,jin:进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳烬,qin:亲勤侵秦钦琴禽芹沁寝擒,jing:经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖鲸茎粳痉,ying:应营影英景迎映硬盈赢颖婴鹰荧莹樱蝇缨萤,jiu:就究九酒久救旧纠舅灸疚揪咎韭玖臼厩,zui:最罪嘴醉咀,juan:卷捐圈眷娟倦绢鹃,suan:算酸蒜狻,yun:员运云允孕蕴韵酝耘晕匀陨郧,qun:群裙逡麇,ka:卡喀咖咯,kang:康抗扛慷炕亢糠,keng:坑铿吭,kao:考靠烤拷,ken:肯垦恳啃,yin:因引银印音饮阴隐姻殷淫尹荫吟寅茵,kong:空控孔恐,ku:苦库哭酷裤枯窟挎,kua:跨夸垮挎胯,kui:亏奎愧魁馈溃葵窥盔岿傀,kuan:款宽髋,kuang:况矿框狂旷眶匡筐,que:确却缺雀鹊瘸榷炔,kun:困昆坤捆,kuo:扩括阔廓,la:拉落垃腊啦辣蜡喇,lai:来莱赖,lan:兰览蓝篮栏烂滥缆揽澜拦懒婪阑谰,lin:林临邻赁琳磷淋霖鳞凛拎吝,lang:浪朗郎廊狼琅榔,liang:量两粮良辆亮梁凉谅粱晾,lao:老劳落络牢捞涝烙姥佬酪潦,mu:目模木亩幕母牧莫穆姆墓慕牟牡募睦暮拇姥,le:了乐勒肋,lei:类累雷勒泪蕾垒磊擂镭肋儡,sui:随岁虽碎尿隧遂髓穗绥隋祟,lie:列烈劣裂猎,leng:冷棱楞,ling:领令另零灵龄陵岭凌玲铃菱棱伶羚,lia:俩,liao:了料疗辽廖聊寥僚燎撂撩潦镣,liu:流刘六留柳瘤硫溜碌榴琉馏,lun:论轮伦仑纶沦抡,lv:率律旅绿虑履吕铝屡氯缕滤侣驴,lou:楼露漏陋娄搂篓,mao:贸毛矛冒貌茂茅帽猫锚卯铆,long:龙隆弄垄笼拢聋陇窿咙,nong:农浓弄脓,shuang:双爽霜,shu:术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰赎庶漱黍,shuai:率衰帅摔甩,lve:略掠锊,ma:么马吗摩麻码妈玛嘛骂抹蚂,me:么麽,mai:买卖麦迈脉埋,man:满慢曼漫埋蔓瞒蛮馒谩,mi:米密秘迷弥蜜谜觅靡泌眯糜醚幂,men:们门闷瞒,mang:忙盲茫芒氓莽,meng:蒙盟梦猛孟萌氓锰檬,miao:苗秒妙描庙瞄渺藐,mou:某谋牟,miu:缪谬,mei:美没每煤梅媒枚妹眉霉昧媚玫酶镁寐糜,wen:文问闻稳温纹吻蚊紊瘟,mie:灭蔑,ming:明名命鸣铭螟,na:内南那纳拿哪娜钠呐,nei:内那哪馁,nuo:难诺挪娜糯懦,ruo:若弱偌箬,nang:囊,nao:脑闹恼挠淖,ni:你尼呢泥疑拟逆倪妮腻匿霓溺,nen:嫩恁,neng:能,nin:您恁,niao:鸟尿溺,nie:摄聂捏涅镍孽捻啮镊,niang:娘酿,ning:宁凝拧泞柠狞,nu:努怒奴,nv:女钕衄恧,ru:入如女乳儒辱汝茹褥孺蠕,nuan:暖,nve:虐疟,re:热若惹喏,ou:区欧偶殴呕藕鸥沤,pao:跑炮泡抛刨袍咆,pou:剖掊裒,pen:喷盆湓,pie:瞥撇,pin:品贫聘频拼,se:色塞瑟涩,qing:情青清请亲轻庆倾顷卿晴氢擎氰,zan:赞暂攒堑,shao:少绍召烧稍邵哨韶捎勺梢鞘芍,sao:扫骚嫂梢搔,sha:沙厦杀纱砂啥莎刹杉傻煞,xuan:县选宣券旋悬轩喧玄绚癣眩,ran:然染燃冉,rang:让壤攘嚷瓤,rao:绕扰饶,reng:仍扔,ri:日,rou:肉柔揉,ruan:软阮朊,run:润闰,sa:萨洒撒,suo:所些索缩锁莎梭琐唆蓑,sai:思赛塞腮鳃,shui:说水税谁睡,sang:桑丧嗓,sen:森,seng:僧,shai:筛晒,shang:上商尚伤赏汤裳墒晌,xing:行省星腥猩惺兴刑型形邢醒幸杏性姓,shou:收手受首售授守寿瘦兽,shuo:说数硕烁朔,su:速素苏诉缩塑肃俗宿粟溯酥僳,shua:刷耍唰,shuan:栓拴涮闩,shun:顺瞬舜吮,song:送松宋讼颂耸诵怂,sou:艘搜擞嗽,sun:损孙笋,teng:腾疼藤誊,tie:铁贴帖,tu:土突图途徒涂吐屠兔秃凸,wai:外歪崴,wang:王望往网忘亡旺汪枉妄,weng:翁嗡瓮,zhua:抓挝爪,yang:样养央阳洋扬杨羊详氧仰秧痒漾疡殃鸯佯,xiong:雄兄熊胸凶匈汹,yo:哟唷,yong:用永拥勇涌泳庸踊佣咏雍臃蛹恿痈,za:杂扎咱砸咋匝,zai:在再灾载栽仔宰哉,zao:造早遭枣噪灶燥糟凿躁藻皂澡蚤,zei:贼,zen:怎谮,zeng:增曾综赠憎,zhei:这,zou:走邹奏揍,zhuai:转拽,zun:尊遵,dia:嗲,nou:耨,",

    },
    onInit(){
        var that=this;
        console.log(that.letters);
        var pinyinIndex = that.pinyindict.indexOf(","+that.letters.toLowerCase()+":");
        console.log(pinyinIndex)
        if(pinyinIndex==-1){
            that.words="无候选字";
        }else{
            var nextPointIndex = that.pinyindict.indexOf(",",pinyinIndex+1);
            console.log(nextPointIndex)
            that.words = that.pinyindict.substring(pinyinIndex+this.letters.length+2,nextPointIndex)
        }
    },
    wordsPageForward() {
        var that = this;
        if(that.wordsPageIndex+5<=that.words.length){
            that.wordsPageIndex+=5;
        }
    },
    wordsPageBack() {
        var that = this;
        if (that.wordsPageIndex <= 5) {
            that.wordsPageIndex = 0;
        } else {
            that.wordsPageIndex -= 5;
        }
    },
    selectInput(symbol){
        var that =this;
        that.inputWords+=symbol;
        var twords = that.inputWords.substring(that.inputWords.length - 8)
        router.replace({
            uri: 'pages/pinyin/pinyin',
            params: {
                fromPage: that.pinyinFromPage,
                fromPageData:that.pinyinFromPageData,
                inputWords:that.inputWords,
                letters:"",
                sindex:0,
                words:twords,
            },
        });
    },
    backToPinyin(){
        var that =this;
        var twords = that.inputWords.substring(that.inputWords.length - 8);
        router.replace({
            uri: 'pages/pinyin/pinyin',
            params: {
                fromPage: that.pinyinFromPage,
                fromPageData:that.pinyinFromPageData,
                inputWords:that.inputWords,
                letters:that.letters,
                sindex:that.sindex,
                words:twords,
            },
        });
    },
    touchMove(e) { // swipe处理事件
        if (e.direction == "right") { // 右滑退出
            this.backToPinyin()
        }
    }
}
