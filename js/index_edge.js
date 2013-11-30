/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['cursive, cursive']='<script type=\"text/javascript\">  (function() {    var config = {      kitId: \'sky3ani\',      scriptTimeout: 3000    };    var h=document.getElementsByTagName(\"html\")[0];h.className+=\" wf-loading\";var t=setTimeout(function(){h.className=h.className.replace(/(s|^)wf-loading(s|$)/g,\" \");h.className+=\" wf-inactive\"},config.scriptTimeout);var tk=document.createElement(\"script\"),d=false;tk.src=\'//use.typekit.net/\'+config.kitId+\'.js\';tk.type=\"text/javascript\";tk.async=\"true\";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!=\"complete\"&&a!=\"loaded\")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(tk,s)  })();</script>';
   fonts['\'Good Kitty\'']='<script type=\"text/javascript\" src=\"//use.typekit.net/sky3ani.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';
   fonts['"good-kitty", cursive']='<script type=\"text/javascript\" src=\"//use.typekit.net/sky3ani.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';
   fonts['\'Annie Use Your Telescope\', cursive']='<link href=\'http://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope\' rel=\'stylesheet\' type=\'text/css\'>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'skyBG',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'page5',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'endBtn',
            type:'image',
            rect:['801px','506px','212px','96px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"endBtn.png",'0px','0px']
         },
         {
            id:'page4',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'pg4Cat2',
            type:'image',
            rect:['-4px','265px','340px','349px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"pg4Cat.svg",'0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'pg4CatAngry',
            type:'image',
            rect:['102px','374px','99px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg4CatAngry.svg",'0px','0px']
         },
         {
            id:'pg4CatAngryCopy',
            type:'image',
            rect:['102px','374px','99px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg4CatAngry.svg",'0px','0px']
         },
         {
            id:'page3',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'pg3Stroke',
            type:'image',
            rect:['0px','255px','1024px','12px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg3Stroke.svg",'0px','0px']
         },
         {
            id:'pg3Animals',
            type:'rect',
            rect:['351','-40','auto','auto','auto','auto']
         },
         {
            id:'pg3Rat2',
            type:'rect',
            rect:['1051','58','auto','auto','auto','auto']
         },
         {
            id:'animals',
            type:'group',
            rect:['92px','-25px','1166','602','auto','auto'],
            opacity:1,
            c:[
            {
               id:'TigerBox',
               type:'rect',
               rect:['-60px','208px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'RabbitBox',
               type:'rect',
               rect:['38px','208px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'DragonBox',
               type:'rect',
               rect:['138px','206px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'SnakeBox',
               type:'rect',
               rect:['237px','206px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'HorseBox',
               type:'rect',
               rect:['336px','205px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'GoatBox',
               type:'rect',
               rect:['433px','204px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'MonkeyBox',
               type:'rect',
               rect:['530px','203px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'RoosterBox',
               type:'rect',
               rect:['629px','203px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'DogBox',
               type:'rect',
               rect:['728px','203px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'PigBox',
               type:'rect',
               rect:['829px','203px','137px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'OxBox',
               type:'rect',
               rect:['-112px','208px','136px','161px','auto','auto'],
               fill:["rgba(192,192,192,0.02)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['0.7','0.7']]
            },
            {
               id:'defaultRabbit',
               type:'rect',
               rect:['101px','417px','152px','118px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultDragon',
               type:'rect',
               rect:['211px','33px','150px','106px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultSnake',
               type:'rect',
               rect:['317px','223px','164px','92px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultHorse',
               type:'rect',
               rect:['321px','365px','192px','110px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultGoat',
               type:'rect',
               rect:['447px','145px','124px','92px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultRooster',
               type:'rect',
               rect:['597px','267px','148px','86px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultDog',
               type:'rect',
               rect:['765px','375px','104px','78px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultPig',
               type:'rect',
               rect:['823px','193px','136px','78px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultTiger',
               type:'rect',
               rect:['79px','164px','140px','87px','auto','auto'],
               fill:["rgba(0,0,0,0)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'defaultOx',
               type:'rect',
               rect:['0px','283px','140px','96px','auto','auto'],
               fill:["rgba(0,0,0,0.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'pg3Ox',
               type:'image',
               rect:['-33px','220px','239px','220px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Ox.svg",'0px','0px']
            },
            {
               id:'pg3Tiger',
               type:'image',
               rect:['40px','123px','239px','217px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Tiger.svg",'0px','0px']
            },
            {
               id:'pg3Rabbit',
               type:'image',
               rect:['59px','368px','239px','234px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Rabbit.svg",'0px','0px']
            },
            {
               id:'pg3Dragon',
               type:'image',
               rect:['184px','-19px','259px','239px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Dragon.svg",'0px','0px']
            },
            {
               id:'pg3Snake',
               type:'image',
               rect:['262px','182px','279px','225px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Snake.svg",'0px','0px']
            },
            {
               id:'pg3Horse',
               type:'image',
               rect:['298px','317px','270px','225px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Horse.svg",'0px','0px']
            },
            {
               id:'pg3Goat',
               type:'image',
               rect:['410px','104px','239px','213px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Goat.svg",'0px','0px']
            },
            {
               id:'pg3Monkey',
               type:'image',
               rect:['516px','39px','239px','213px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Monkey.svg",'0px','0px']
            },
            {
               id:'pg3Rooster',
               type:'image',
               rect:['577px','211px','239px','228px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Rooster.svg",'0px','0px']
            },
            {
               id:'pg3Dog',
               type:'image',
               rect:['745px','331px','179px','193px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Dog.svg",'0px','0px']
            },
            {
               id:'pg3Pig',
               type:'image',
               rect:['787px','168px','192px','172px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               fill:["rgba(0,0,0,0)",im+"pg3Pig.svg",'0px','0px']
            }]
         },
         {
            id:'pg3BigRocks',
            type:'image',
            rect:['548px','422px','557px','189px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg3BigRocks.svg",'0px','0px']
         },
         {
            id:'pg3Rat',
            type:'image',
            rect:['590px','282px','230px','279px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg3Rat.svg",'0px','0px']
         },
         {
            id:'box2',
            type:'image',
            rect:['-503px','222px','2467px','546px','auto','auto'],
            opacity:0.734375,
            fill:["rgba(0,0,0,0)",im+"box.png",'0px','0px'],
            transform:[[],[],[],['0.231','0.39']]
         },
         {
            id:'Text3',
            type:'text',
            rect:['491px','422px','506px','189px','auto','auto'],
            text:"The Rat is a poor swimmer, but he need to cross the river in order to win. Drag the animals in one line to help the Rat cross the river, following the sequence of Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog and Pig.",
            align:"left",
            font:['Annie Use Your Telescope, cursive',24,"rgba(0,0,0,1)","900","none","normal"]
         },
         {
            id:'page2B',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'pg2doorOpen22',
            type:'image',
            rect:['100px','57px','226px','222px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg2doorOpen2.svg",'0px','0px']
         },
         {
            id:'pg2doorOpen1',
            type:'image',
            rect:['100px','68px','226px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg2doorOpen1.svg",'0px','0px']
         },
         {
            id:'pg2doorClose2',
            type:'image',
            rect:['96px','76px','226px','194px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"pg2doorClose.svg",'0px','0px']
         },
         {
            id:'pg2Rat2',
            type:'image',
            rect:['-24px','151px','247px','196px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pg2Rat2.svg",'0px','0px']
         },
         {
            id:'page2',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'pg2RatThinking',
            type:'image',
            rect:['124px','-157px','1130px','583px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"pg2RatThinking.svg",'0px','0px']
         },
         {
            id:'page1',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'buddhaShine',
            type:'rect',
            rect:['30','22','auto','auto','auto','auto']
         },
         {
            id:'pg1Buddha',
            type:'image',
            rect:['34px','20px','316px','228px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"pg1Buddha.svg",'0px','0px']
         },
         {
            id:'clouds',
            type:'rect',
            rect:['146px','31px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'clouds_1',
            type:'rect',
            rect:['52px','46px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'clouds_2',
            type:'rect',
            rect:['124px','108px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'clouds_3',
            type:'rect',
            rect:['224px','139px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'clouds_4',
            type:'rect',
            rect:['-144px','163','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'clouds_5',
            type:'rect',
            rect:['122px','163px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'coverPage',
            type:'rect',
            rect:['-392','-249','auto','auto','auto','auto']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['392px','176px','272px','430px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'playBTNshadow',
               type:'image',
               rect:['27px','295px','212px','96px','auto','auto'],
               opacity:0.8671875,
               fill:["rgba(0,0,0,0)",im+"playbtn.png",'0px','0px']
            },
            {
               id:'playbtn',
               type:'image',
               rect:['27px','295px','212px','96px','auto','auto'],
               cursor:['pointer'],
               opacity:0.8671875,
               fill:["rgba(0,0,0,0)",im+"playbtn.png",'0px','0px']
            },
            {
               id:'playbtnCopy',
               type:'image',
               rect:['27px','295px','212px','96px','auto','auto'],
               cursor:['pointer'],
               opacity:0.8671875,
               fill:["rgba(0,0,0,0)",im+"playbtn.png",'0px','0px']
            }]
         },
         {
            id:'TouchPig',
            type:'rect',
            rect:['358px','274px','71px','141px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchRooster',
            type:'rect',
            rect:['358px','274px','48px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchDog',
            type:'rect',
            rect:['358px','274px','74px','132px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchMonkey',
            type:'rect',
            rect:['358px','274px','61px','148px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchGoat',
            type:'rect',
            rect:['358px','274px','61px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchHorse',
            type:'rect',
            rect:['358px','274px','53px','171px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchSnake',
            type:'rect',
            rect:['358px','274px','53px','141px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchDragon',
            type:'rect',
            rect:['358px','274px','53px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchRabbit',
            type:'rect',
            rect:['358px','274px','53px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchOx',
            type:'rect',
            rect:['422px','283px','48px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchTiger',
            type:'rect',
            rect:['589px','275px','48px','158px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'TouchRat',
            type:'rect',
            rect:['491px','234px','61px','203px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(255,255,255,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'page1',
            symbolName:'page1'
         },
         {
            id:'skyBG',
            symbolName:'skyBG'
         },
         {
            id:'page2',
            symbolName:'page2'
         },
         {
            id:'clouds_3',
            symbolName:'clouds_3'
         },
         {
            id:'buddhaShine',
            symbolName:'buddhaShine'
         },
         {
            id:'clouds',
            symbolName:'clouds'
         },
         {
            id:'coverPage',
            symbolName:'coverPage'
         },
         {
            id:'clouds_5',
            symbolName:'clouds_5'
         },
         {
            id:'clouds_4',
            symbolName:'clouds_4'
         },
         {
            id:'pg3Animals',
            symbolName:'pg3Animals'
         },
         {
            id:'clouds_2',
            symbolName:'clouds_2'
         },
         {
            id:'clouds_1',
            symbolName:'clouds_1'
         },
         {
            id:'page2B',
            symbolName:'page2B'
         },
         {
            id:'page4',
            symbolName:'page4'
         },
         {
            id:'pg3Rat2',
            symbolName:'pg3Rat2'
         },
         {
            id:'page3',
            symbolName:'page3'
         },
         {
            id:'page5',
            symbolName:'page5'
         }
         ]
      },
   states: {
      "Base State": {
         "${_pg3Snake}": [
            ["style", "top", '182.18px'],
            ["style", "opacity", '1'],
            ["style", "left", '262px'],
            ["style", "cursor", 'pointer']
         ],
         "${_SnakeBox}": [
            ["style", "top", '205.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '236.6px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_box2}": [
            ["style", "top", '174.28px'],
            ["transform", "scaleY", '0.39'],
            ["transform", "scaleX", '0.2311'],
            ["style", "height", '615.41841947115px'],
            ["style", "opacity", '0'],
            ["style", "left", '90.57px'],
            ["style", "width", '2531.3500976563px']
         ],
         "${_playBTNshadow}": [
            ["transform", "rotateZ", '-360deg'],
            ["transform", "scaleX", '1.5'],
            ["style", "opacity", '0'],
            ["style", "left", '30px'],
            ["style", "width", '212px'],
            ["style", "top", '428px'],
            ["transform", "scaleY", '-0.465'],
            ["style", "height", '96.189646056204px'],
            ["style", "clip", [0,212,96.183334350586,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_RoosterBox}": [
            ["style", "top", '202.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '629.35px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_HorseBox}": [
            ["style", "top", '205.17px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '335.6px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_PigBox}": [
            ["style", "top", '202.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '829.4px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_pg3Animals}": [
            ["style", "top", '-19px'],
            ["style", "opacity", '0'],
            ["style", "left", '351px']
         ],
         "${_pg3Ox}": [
            ["style", "top", '220.1px'],
            ["style", "opacity", '1'],
            ["style", "left", '-33.1px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TigerBox}": [
            ["style", "top", '207.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '-59.77px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_pg3Dragon}": [
            ["style", "top", '-18.8px'],
            ["style", "opacity", '1'],
            ["style", "left", '184px'],
            ["style", "cursor", 'pointer']
         ],
         "${_playbtn}": [
            ["style", "top", '-103.17px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '30.5px'],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '96.189646056204px'],
            ["style", "opacity", '0.8671875'],
            ["style", "clip", [0,212,96.18333435058594,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '212px']
         ],
         "${_coverPage}": [
            ["style", "top", '-249px'],
            ["style", "opacity", '0'],
            ["style", "left", '-394px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pg2Rat2}": [
            ["style", "top", '287px'],
            ["transform", "scaleY", '1.96'],
            ["transform", "scaleX", '1.96'],
            ["style", "opacity", '1'],
            ["style", "left", '-365.56px'],
            ["style", "clip", [0,277,196,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Text3}": [
            ["style", "top", '381px'],
            ["style", "font-size", '26px'],
            ["style", "font-family", 'Annie Use Your Telescope, cursive'],
            ["style", "height", '189px'],
            ["style", "opacity", '0'],
            ["style", "left", '1085px'],
            ["style", "width", '524px']
         ],
         "${_DragonBox}": [
            ["style", "top", '206.15px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '137.65px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_pg3Rabbit}": [
            ["style", "top", '368.2px'],
            ["style", "opacity", '1'],
            ["style", "left", '59px'],
            ["style", "cursor", 'pointer']
         ],
         "${_OxBox}": [
            ["style", "top", '207.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '-112.08px'],
            ["style", "width", '79.991629464286px']
         ],
         "${_TouchRooster}": [
            ["style", "top", '274.02px'],
            ["style", "height", '157.98333740234px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '178.77px'],
            ["style", "width", '47.966667175293px']
         ],
         "${_pg3Monkey}": [
            ["style", "top", '39.2px'],
            ["style", "opacity", '1'],
            ["style", "left", '516px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg2doorOpen22}": [
            ["style", "top", '57px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px']
         ],
         "${_page5}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_buddhaShine}": [
            ["style", "top", '21'],
            ["style", "opacity", '0'],
            ["style", "left", '38px']
         ],
         "${_TouchRabbit}": [
            ["style", "top", '274px'],
            ["style", "left", '358.18px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52.805290222168px']
         ],
         "${_defaultTiger}": [
            ["style", "left", '79.4px'],
            ["style", "top", '164.1px']
         ],
         "${_clouds_1}": [
            ["style", "top", '31px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RabbitBox}": [
            ["style", "top", '207.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '38.4px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_pg3Rat2}": [
            ["style", "left", '1051px'],
            ["style", "top", '58px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "opacity", '1'],
            ["style", "top", '176px'],
            ["style", "overflow", 'hidden']
         ],
         "${_pg3Dog}": [
            ["style", "top", '331.2px'],
            ["style", "opacity", '1'],
            ["style", "left", '745px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg4CatAngry}": [
            ["style", "top", '385px'],
            ["transform", "scaleY", '1.69'],
            ["transform", "scaleX", '1.69'],
            ["style", "opacity", '0'],
            ["style", "left", '-188px']
         ],
         "${_page4}": [
            ["style", "left", '0px'],
            ["style", "opacity", '0']
         ],
         "${_pg4CatAngryCopy}": [
            ["style", "top", '424.17px'],
            ["transform", "scaleY", '1.34'],
            ["transform", "rotateZ", '25deg'],
            ["transform", "scaleX", '1.34'],
            ["style", "opacity", '0'],
            ["style", "left", '-256.02px']
         ],
         "${_animals}": [
            ["style", "top", '-21px'],
            ["style", "opacity", '0'],
            ["style", "left", '384px']
         ],
         "${_page3}": [
            ["style", "left", '0px'],
            ["style", "opacity", '0']
         ],
         "${_page2B}": [
            ["style", "left", '0px'],
            ["style", "opacity", '0']
         ],
         "${_pg3Pig}": [
            ["style", "top", '168.18px'],
            ["style", "opacity", '1'],
            ["style", "left", '787px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TouchHorse}": [
            ["style", "top", '261.02px'],
            ["style", "height", '170.9999593099px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '737.01px'],
            ["style", "width", '52.783332824707px']
         ],
         "${_playbtnCopy}": [
            ["style", "top", '-103.17px'],
            ["style", "left", '30.5px'],
            ["style", "clip", [0,212,96.183334350586,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '-360deg'],
            ["style", "height", '96.189646056204px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '212px']
         ],
         "${_pg1Buddha}": [
            ["style", "top", '20px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '34px']
         ],
         "${_TouchTiger}": [
            ["style", "top", '275px'],
            ["style", "height", '157.98340680522px'],
            ["style", "left", '589px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '47.966667175293px']
         ],
         "${_skyBG}": [
            ["style", "opacity", '0']
         ],
         "${_clouds_3}": [
            ["style", "top", '93px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '162px']
         ],
         "${_pg3BigRocks}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '548px'],
            ["style", "top", '422px']
         ],
         "${_pg3Rat}": [
            ["style", "top", '332px'],
            ["transform", "scaleX", '1.7'],
            ["transform", "scaleY", '1.7'],
            ["style", "left", '724px'],
            ["style", "height", '279px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto'],
            ["style", "width", '229px']
         ],
         "${_pg3Stroke}": [
            ["style", "top", '255px'],
            ["style", "clip", [0,-2,11.649999618530273,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '11.660455486542px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_TouchMonkey}": [
            ["style", "top", '284.02px'],
            ["style", "height", '147.98333740234px'],
            ["style", "left", '788.75px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '60.983333587646px']
         ],
         "${_endBtn}": [
            ["style", "top", '489px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '789.43px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TouchSnake}": [
            ["style", "top", '291px'],
            ["style", "height", '141.0000406901px'],
            ["style", "left", '280.01px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '52.799999237061px']
         ],
         "${_page1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_clouds_4}": [
            ["style", "top", '109px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '14px']
         ],
         "${_pg3Horse}": [
            ["style", "top", '317.2px'],
            ["style", "opacity", '1'],
            ["style", "left", '298px'],
            ["style", "cursor", 'pointer']
         ],
         "${_page2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_pg2doorOpen1}": [
            ["style", "top", '63px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px']
         ],
         "${_clouds}": [
            ["style", "top", '31px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '146px']
         ],
         "${_pg3Tiger}": [
            ["style", "top", '123.18px'],
            ["style", "opacity", '1'],
            ["style", "left", '40px'],
            ["style", "cursor", 'pointer']
         ],
         "${_defaultOx}": [
            ["style", "top", '283.22px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)']
         ],
         "${_TouchDog}": [
            ["style", "top", '300px'],
            ["style", "height", '132.00006103516px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '848.75px'],
            ["style", "width", '74.316829681396px']
         ],
         "${_pg3Goat}": [
            ["style", "top", '104.18px'],
            ["style", "opacity", '1'],
            ["style", "left", '410px'],
            ["style", "cursor", 'pointer']
         ],
         "${_clouds_2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '64px']
         ],
         "${_pg4Cat2}": [
            ["style", "top", '266px'],
            ["transform", "scaleX", '-1'],
            ["style", "opacity", '0'],
            ["style", "left", '-375px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg2RatThinking}": [
            ["style", "top", '-157px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '124px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pg3Rooster}": [
            ["style", "top", '211.18px'],
            ["style", "opacity", '1'],
            ["style", "left", '577px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TouchDragon}": [
            ["style", "top", '274px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '670px'],
            ["style", "width", '52.805290222168px']
         ],
         "${_TouchRat}": [
            ["style", "top", '234.01px'],
            ["style", "height", '203.08332824707px'],
            ["style", "left", '491.02px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '60.999921244959px']
         ],
         "${_clouds_5}": [
            ["style", "top", '139px'],
            ["transform", "scaleY", '0.24'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '108px']
         ],
         "${_GoatBox}": [
            ["style", "top", '203.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '433.35px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_MonkeyBox}": [
            ["style", "top", '203.23px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '530.1px'],
            ["style", "width", '136.55952889579px']
         ],
         "${_pg2doorClose2}": [
            ["style", "top", '76px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px'],
            ["style", "cursor", 'pointer']
         ],
         "${_TouchOx}": [
            ["style", "top", '283px'],
            ["style", "height", '157.98340680522px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '422.02px'],
            ["style", "width", '47.966667175293px']
         ],
         "${_TouchGoat}": [
            ["style", "top", '274.02px'],
            ["style", "height", '157.98333740234px'],
            ["style", "left", '221.77px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '60.983333587646px']
         ],
         "${_TouchPig}": [
            ["style", "top", '291px'],
            ["style", "height", '141.00006103516px'],
            ["style", "left", '106px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '70.716667175293px']
         ],
         "${_DogBox}": [
            ["style", "top", '202.95px'],
            ["transform", "scaleY", '0.7'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.7'],
            ["color", "background-color", 'rgba(192,192,192,0.02)'],
            ["style", "left", '728.4px'],
            ["style", "width", '136.55952889579px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 69500,
         autoPlay: true,
         labels: {
            "cover": 0,
            "Rat": 5000,
            "Ox": 5209,
            "Tiger": 5409,
            "Rabbit": 5602,
            "Dragon": 5805,
            "Snake": 6000,
            "Horse": 6204,
            "Goat": 6404,
            "Monkey": 6604,
            "Rooster": 6810,
            "Dog": 7000,
            "Pig": 7203,
            "page1": 8000,
            "cloud5Fade": 12250,
            "cloud4Fade": 13000,
            "cloud3Fade": 13750,
            "cloud2Fade": 14500,
            "cloud1Fade": 15251,
            "cloudFade": 16000,
            "page2": 16750,
            "page2B": 22250,
            "openDoor": 27000,
            "page4": 36500,
            "page5": 62250,
            "End": 68500
         },
         timeline: [
            { id: "eid2848", tween: [ "style", "${_TouchDog}", "top", '651px', { fromValue: '300px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1238", tween: [ "style", "${_pg3BigRocks}", "top", '602px', { fromValue: '422px'}], position: 44500, duration: 145, easing: "easeOutQuad" },
            { id: "eid2837", tween: [ "style", "${_TouchHorse}", "top", '651px', { fromValue: '261.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid628", tween: [ "style", "${_clouds_3}", "top", '-163.54px', { fromValue: '93px'}], position: 13750, duration: 434, easing: "easeInQuad" },
            { id: "eid610", tween: [ "transform", "${_clouds_3}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2194", tween: [ "transform", "${_clouds_3}", "scaleX", '1.29', { fromValue: '1'}], position: 13750, duration: 348, easing: "easeOutQuad" },
            { id: "eid176", tween: [ "style", "${_playBTNshadow}", "left", '30.26px', { fromValue: '30px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid1064", tween: [ "style", "${_box2}", "left", '-528.17px', { fromValue: '90.57px'}], position: 32846, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1100", tween: [ "style", "${_box2}", "left", '-505.44px', { fromValue: '-528.17px'}], position: 36500, duration: 500, easing: "easeInQuad" },
            { id: "eid1073", tween: [ "style", "${_pg2doorOpen1}", "top", '70px', { fromValue: '63px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid807", tween: [ "style", "${_page1}", "top", '638px', { fromValue: '0px'}], position: 18324, duration: 277, easing: "easeOutQuad" },
            { id: "eid328", tween: [ "style", "${_page1}", "opacity", '0', { fromValue: '0'}], position: 8611, duration: 0 },
            { id: "eid329", tween: [ "style", "${_page1}", "opacity", '1', { fromValue: '0'}], position: 8677, duration: 0 },
            { id: "eid598", tween: [ "style", "${_page1}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 824, easing: "easeOutQuad" },
            { id: "eid1128", tween: [ "style", "${_pg3Rat2}", "top", '44px', { fromValue: '58px'}], position: 38000, duration: 500, easing: "easeInQuad" },
            { id: "eid1130", tween: [ "style", "${_pg3Rat2}", "top", '34px', { fromValue: '44px'}], position: 39000, duration: 500, easing: "easeInQuad" },
            { id: "eid1132", tween: [ "style", "${_pg3Rat2}", "top", '45px', { fromValue: '34px'}], position: 40000, duration: 500, easing: "easeInQuad" },
            { id: "eid1134", tween: [ "style", "${_pg3Rat2}", "top", '42px', { fromValue: '45px'}], position: 41000, duration: 500, easing: "easeInQuad" },
            { id: "eid1136", tween: [ "style", "${_pg3Rat2}", "top", '39px', { fromValue: '42px'}], position: 42000, duration: 500, easing: "easeInQuad" },
            { id: "eid1138", tween: [ "style", "${_pg3Rat2}", "top", '51px', { fromValue: '39px'}], position: 43000, duration: 500, easing: "easeInQuad" },
            { id: "eid2416", tween: [ "style", "${_TouchRat}", "left", '486.85px', { fromValue: '491.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid886", tween: [ "style", "${_page2}", "top", '323.55px', { fromValue: '0px'}], position: 23500, duration: 250, easing: "easeInQuad" },
            { id: "eid635", tween: [ "style", "${_clouds_1}", "left", '-278.67px', { fromValue: '0px'}], position: 15260, duration: 490, easing: "easeOutElastic" },
            { id: "eid605", tween: [ "transform", "${_clouds_5}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutQuad" },
            { id: "eid2189", tween: [ "transform", "${_clouds_5}", "scaleY", '1.36', { fromValue: '1'}], position: 12250, duration: 380, easing: "easeOutQuad" },
            { id: "eid603", tween: [ "transform", "${_clouds_5}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2188", tween: [ "transform", "${_clouds_5}", "scaleX", '1.36', { fromValue: '1'}], position: 12250, duration: 380, easing: "easeOutQuad" },
            { id: "eid891", tween: [ "style", "${_pg2Rat2}", "left", '-24px', { fromValue: '-365.56px'}], position: 24500, duration: 1746, easing: "easeOutQuad" },
            { id: "eid902", tween: [ "style", "${_pg2Rat2}", "left", '132px', { fromValue: '-24px'}], position: 28250, duration: 1250, easing: "easeInQuad" },
            { id: "eid1069", tween: [ "style", "${_pg2Rat2}", "left", '136px', { fromValue: '132px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid1944", tween: [ "style", "${_pg4CatAngryCopy}", "opacity", '1', { fromValue: '0'}], position: 60576, duration: 424, easing: "easeInCubic" },
            { id: "eid1974", tween: [ "style", "${_pg4CatAngryCopy}", "opacity", '0', { fromValue: '1'}], position: 62250, duration: 500, easing: "easeInCubic" },
            { id: "eid648", tween: [ "style", "${_buddhaShine}", "top", '20px', { fromValue: '22px'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid2382", tween: [ "style", "${_playbtnCopy}", "top", '294.82px', { fromValue: '-103.17px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid2387", tween: [ "style", "${_playbtnCopy}", "top", '294.82px', { fromValue: '294.82px'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2386", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '294.82px'}], position: 5209, duration: 0, easing: "easeOutBack" },
            { id: "eid2388", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 5409, duration: 0, easing: "easeOutBack" },
            { id: "eid2389", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 5602, duration: 0, easing: "easeOutBack" },
            { id: "eid2824", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 5805, duration: 0, easing: "easeOutQuad" },
            { id: "eid2825", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2826", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 6204, duration: 0, easing: "easeOutQuad" },
            { id: "eid2827", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 6404, duration: 0, easing: "easeOutQuad" },
            { id: "eid2828", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 6604, duration: 0, easing: "easeOutQuad" },
            { id: "eid2829", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 6810, duration: 0, easing: "easeOutQuad" },
            { id: "eid2831", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2832", tween: [ "style", "${_playbtnCopy}", "top", '433px', { fromValue: '433px'}], position: 7203, duration: 0, easing: "easeOutQuad" },
            { id: "eid2165", tween: [ "transform", "${_page5}", "scaleY", '0.04', { fromValue: '1'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid2415", tween: [ "style", "${_TouchRat}", "top", '611px', { fromValue: '234.01px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2418", tween: [ "style", "${_TouchOx}", "left", '417.85px', { fromValue: '422.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1045", tween: [ "transform", "${_pg3Rat}", "scaleY", '1', { fromValue: '1.7'}], position: 32000, duration: 1096, easing: "easeOutQuad" },
            { id: "eid645", tween: [ "style", "${_pg1Buddha}", "top", '-44.46px', { fromValue: '20px'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid1942", tween: [ "transform", "${_pg4CatAngry}", "scaleY", '1', { fromValue: '1.69'}], position: 60326, duration: 424, easing: "easeInCubic" },
            { id: "eid2841", tween: [ "style", "${_TouchRooster}", "left", '354px', { fromValue: '178.77px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1060", tween: [ "style", "${_box2}", "opacity", '0.734375', { fromValue: '0'}], position: 32846, duration: 1000, easing: "easeOutQuad" },
            { id: "eid928", tween: [ "style", "${_page2B}", "left", '-1160px', { fromValue: '0px'}], position: 29250, duration: 750, easing: "easeOutQuad" },
            { id: "eid637", tween: [ "style", "${_clouds}", "left", '279px', { fromValue: '146px'}], position: 16000, duration: 500, easing: "easeOutElastic" },
            { id: "eid613", tween: [ "transform", "${_clouds_3}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2195", tween: [ "transform", "${_clouds_3}", "scaleY", '1.29', { fromValue: '1'}], position: 13750, duration: 348, easing: "easeOutQuad" },
            { id: "eid602", tween: [ "style", "${_pg1Buddha}", "opacity", '1', { fromValue: '0'}], position: 10539, duration: 572, easing: "easeOutQuad" },
            { id: "eid643", tween: [ "style", "${_pg1Buddha}", "opacity", '0', { fromValue: '1'}], position: 16750, duration: 667, easing: "easeInQuad" },
            { id: "eid209", tween: [ "transform", "${_playBTNshadow}", "scaleX", '1', { fromValue: '1.5'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid1056", tween: [ "transform", "${_pg3BigRocks}", "scaleY", '1', { fromValue: '0'}], position: 29860, duration: 1140, easing: "easeOutElastic" },
            { id: "eid604", tween: [ "style", "${_clouds_5}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2190", tween: [ "style", "${_clouds_5}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 380, easing: "easeOutQuad" },
            { id: "eid646", tween: [ "style", "${_page2}", "opacity", '1', { fromValue: '0'}], position: 18203, duration: 887, easing: "easeOutQuad" },
            { id: "eid793", tween: [ "style", "${_page2}", "opacity", '0', { fromValue: '1'}], position: 22577, duration: 423, easing: "easeInQuad" },
            { id: "eid1071", tween: [ "style", "${_pg2doorClose2}", "top", '78px', { fromValue: '76px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "transform", "${_playbtn}", "rotateZ", '0deg', { fromValue: '-360deg'}], position: 4250, duration: 508, easing: "easeOutQuad" },
            { id: "eid614", tween: [ "transform", "${_clouds_2}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2197", tween: [ "transform", "${_clouds_2}", "scaleX", '1.32', { fromValue: '1'}], position: 14500, duration: 348, easing: "easeOutQuad" },
            { id: "eid1963", tween: [ "style", "${_pg4CatAngry}", "top", '374px', { fromValue: '375.25px'}], position: 60182, duration: 144, easing: "easeInCubic" },
            { id: "eid1965", tween: [ "style", "${_pg4CatAngry}", "top", '711px', { fromValue: '374px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid2161", tween: [ "style", "${_endBtn}", "left", '1083.65px', { fromValue: '789.43px'}], position: 68500, duration: 750, easing: "easeOutBack" },
            { id: "eid148", tween: [ "style", "${_playbtn}", "left", '26.5px', { fromValue: '30.5px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid963", tween: [ "style", "${_page3}", "opacity", '1', { fromValue: '0'}], position: 29250, duration: 750, easing: "easeOutQuad" },
            { id: "eid1142", tween: [ "style", "${_page3}", "opacity", '0', { fromValue: '1'}], position: 43366, duration: 1134, easing: "easeOutQuad" },
            { id: "eid1099", tween: [ "style", "${_box2}", "top", '456.42px', { fromValue: '174.28px'}], position: 36500, duration: 500, easing: "easeInQuad" },
            { id: "eid413", tween: [ "style", "${_skyBG}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid213", tween: [ "style", "${_Rectangle2}", "top", '602px', { fromValue: '176px'}], position: 8000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2170", tween: [ "style", "${_page5}", "opacity", '1', { fromValue: '0'}], position: 62927, duration: 73, easing: "easeInQuad" },
            { id: "eid2166", tween: [ "style", "${_page5}", "opacity", '0', { fromValue: '1'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid2845", tween: [ "style", "${_TouchMonkey}", "left", '354px', { fromValue: '788.75px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2413", tween: [ "style", "${_TouchTiger}", "top", '652px', { fromValue: '275px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2169", tween: [ "transform", "${_page5}", "rotateZ", '356deg', { fromValue: '0deg'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid611", tween: [ "style", "${_clouds_3}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2196", tween: [ "style", "${_clouds_3}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 348, easing: "easeOutQuad" },
            { id: "eid177", tween: [ "transform", "${_playBTNshadow}", "rotateZ", '0deg', { fromValue: '-360deg'}], position: 4250, duration: 508, easing: "easeOutQuad" },
            { id: "eid644", tween: [ "style", "${_pg1Buddha}", "left", '968px', { fromValue: '34px'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid900", tween: [ "style", "${_pg2doorOpen22}", "opacity", '0', { fromValue: '0'}], position: 27750, duration: 0, easing: "easeInQuad" },
            { id: "eid2859", tween: [ "style", "${_pg2doorOpen22}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 0, easing: "easeInQuad" },
            { id: "eid914", tween: [ "style", "${_pg2doorOpen22}", "opacity", '0', { fromValue: '1'}], position: 29250, duration: 750, easing: "easeOutQuad" },
            { id: "eid1089", tween: [ "style", "${_animals}", "left", '92px', { fromValue: '384px'}], position: 30500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid1118", tween: [ "style", "${_animals}", "left", '-1258px', { fromValue: '92px'}], position: 37500, duration: 160, easing: "easeOutQuad" },
            { id: "eid625", tween: [ "style", "${_buddhaShine}", "opacity", '1', { fromValue: '0'}], position: 10539, duration: 572, easing: "easeOutQuad" },
            { id: "eid650", tween: [ "style", "${_buddhaShine}", "opacity", '0', { fromValue: '1'}], position: 16750, duration: 667, easing: "easeInQuad" },
            { id: "eid1957", tween: [ "style", "${_pg4CatAngryCopy}", "left", '34.84px', { fromValue: '-256.02px'}], position: 60182, duration: 144, easing: "easeInCubic" },
            { id: "eid1972", tween: [ "style", "${_pg4CatAngryCopy}", "left", '-190.72px', { fromValue: '34.84px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid2834", tween: [ "style", "${_TouchDragon}", "left", '354px', { fromValue: '670px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1072", tween: [ "style", "${_pg2doorClose2}", "left", '-258px', { fromValue: '96px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid1062", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 32846, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1940", tween: [ "transform", "${_pg4CatAngry}", "scaleX", '1', { fromValue: '1.69'}], position: 60326, duration: 424, easing: "easeInCubic" },
            { id: "eid2419", tween: [ "style", "${_TouchRabbit}", "top", '651px', { fromValue: '274px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1936", tween: [ "style", "${_pg4CatAngry}", "opacity", '1', { fromValue: '0'}], position: 60326, duration: 424, easing: "easeInCubic" },
            { id: "eid1968", tween: [ "style", "${_pg4CatAngry}", "opacity", '0', { fromValue: '1'}], position: 62250, duration: 564, easing: "easeInCubic" },
            { id: "eid888", tween: [ "style", "${_pg2Rat2}", "top", '151px', { fromValue: '287px'}], position: 24500, duration: 1746, easing: "easeOutQuad" },
            { id: "eid901", tween: [ "style", "${_pg2Rat2}", "top", '81.36px', { fromValue: '151px'}], position: 28250, duration: 1250, easing: "easeInQuad" },
            { id: "eid1070", tween: [ "style", "${_pg2Rat2}", "top", '-187.36px', { fromValue: '81.36px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid2838", tween: [ "style", "${_TouchHorse}", "left", '354px', { fromValue: '737.01px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1104", tween: [ "style", "${_pg3Rat}", "width", '316px', { fromValue: '230px'}], position: 37250, duration: 510, easing: "easeOutQuad" },
            { id: "eid930", tween: [ "transform", "${_pg2RatThinking}", "scaleY", '1', { fromValue: '0'}], position: 19750, duration: 1250, easing: "easeOutElastic" },
            { id: "eid1934", tween: [ "style", "${_pg4Cat2}", "top", '265px', { fromValue: '266px'}], position: 59500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1967", tween: [ "style", "${_pg4Cat2}", "top", '602px', { fromValue: '265px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid2840", tween: [ "style", "${_TouchGoat}", "top", '651px', { fromValue: '274.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1147", tween: [ "style", "${_pg3Animals}", "left", '-1228px', { fromValue: '351px'}], position: 44500, duration: 250, easing: "easeOutQuad" },
            { id: "eid2836", tween: [ "style", "${_TouchSnake}", "top", '651px', { fromValue: '291px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid1945", tween: [ "transform", "${_pg4CatAngryCopy}", "scaleY", '0.63', { fromValue: '1.34'}], position: 60576, duration: 424, easing: "easeInCubic" },
            { id: "eid912", tween: [ "style", "${_pg2Rat2}", "opacity", '0', { fromValue: '1'}], position: 28893, duration: 607 },
            { id: "eid609", tween: [ "transform", "${_clouds_4}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2192", tween: [ "transform", "${_clouds_4}", "scaleY", '1.23', { fromValue: '1'}], position: 13000, duration: 348, easing: "easeOutQuad" },
            { id: "eid1091", tween: [ "style", "${_animals}", "top", '-25.22px', { fromValue: '-21px'}], position: 30500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid1117", tween: [ "style", "${_animals}", "top", '-5.25px', { fromValue: '-25.22px'}], position: 37500, duration: 160, easing: "easeOutQuad" },
            { id: "eid641", tween: [ "transform", "${_pg1Buddha}", "scaleX", '0.61', { fromValue: '1'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid210", tween: [ "transform", "${_playBTNshadow}", "scaleY", '-0.49', { fromValue: '-0.465'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid1113", tween: [ "style", "${_pg3Animals}", "opacity", '1', { fromValue: '0'}], position: 36829, duration: 671, easing: "easeOutQuad" },
            { id: "eid1141", tween: [ "style", "${_pg3Animals}", "opacity", '0', { fromValue: '1'}], position: 43366, duration: 1134, easing: "easeOutQuad" },
            { id: "eid617", tween: [ "transform", "${_clouds_1}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2200", tween: [ "transform", "${_clouds_1}", "scaleX", '1.27', { fromValue: '1'}], position: 15251, duration: 348, easing: "easeOutElastic" },
            { id: "eid1039", tween: [ "style", "${_pg3Rat}", "left", '590px', { fromValue: '724px'}], position: 32000, duration: 1096, easing: "easeOutQuad" },
            { id: "eid1101", tween: [ "style", "${_pg3Rat}", "left", '784px', { fromValue: '590px'}], position: 37250, duration: 510, easing: "easeOutQuad" },
            { id: "eid1236", tween: [ "style", "${_pg3Rat}", "left", '1026px', { fromValue: '784px'}], position: 37760, duration: 164, easing: "easeOutQuad" },
            { id: "eid1932", tween: [ "style", "${_pg4Cat2}", "left", '-4px', { fromValue: '-375px'}], position: 59500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1966", tween: [ "style", "${_pg4Cat2}", "left", '-339px', { fromValue: '-4px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid1943", tween: [ "transform", "${_pg4CatAngryCopy}", "scaleX", '0.63', { fromValue: '1.34'}], position: 60576, duration: 424, easing: "easeInCubic" },
            { id: "eid1043", tween: [ "transform", "${_pg3Rat}", "scaleX", '1', { fromValue: '1.7'}], position: 32000, duration: 1096, easing: "easeOutQuad" },
            { id: "eid1930", tween: [ "style", "${_pg4Cat2}", "opacity", '1', { fromValue: '0'}], position: 59500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1969", tween: [ "style", "${_pg4Cat2}", "opacity", '0', { fromValue: '1'}], position: 62250, duration: 564, easing: "easeInCubic" },
            { id: "eid1096", tween: [ "style", "${_pg3Stroke}", "clip", [0,1024,11.64999961853,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-2,11.649999618530273,0]}], position: 33312, duration: 2000 },
            { id: "eid897", tween: [ "style", "${_pg2doorOpen1}", "opacity", '0', { fromValue: '0'}], position: 27000, duration: 0, easing: "easeOutQuad" },
            { id: "eid898", tween: [ "style", "${_pg2doorOpen1}", "opacity", '1', { fromValue: '0'}], position: 27750, duration: 0, easing: "easeOutQuad" },
            { id: "eid2858", tween: [ "style", "${_pg2doorOpen1}", "opacity", '0', { fromValue: '1'}], position: 28000, duration: 0, easing: "easeOutQuad" },
            { id: "eid1103", tween: [ "style", "${_pg3Rat}", "height", '383.34239485691px', { fromValue: '279px'}], position: 37250, duration: 510, easing: "easeOutQuad" },
            { id: "eid2384", tween: [ "transform", "${_playbtnCopy}", "rotateZ", '0deg', { fromValue: '-360deg'}], position: 4250, duration: 508, easing: "easeOutQuad" },
            { id: "eid1146", tween: [ "style", "${_pg3Stroke}", "left", '-1579px', { fromValue: '0px'}], position: 44500, duration: 250, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1000, easing: "easeInQuad" },
            { id: "eid2842", tween: [ "style", "${_TouchRooster}", "top", '651px', { fromValue: '274.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid791", tween: [ "transform", "${_page2}", "scaleX", '0.05', { fromValue: '1'}], position: 22577, duration: 923, easing: "easeInQuad" },
            { id: "eid146", tween: [ "style", "${_playbtn}", "top", '294.82px', { fromValue: '-103.17px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid642", tween: [ "transform", "${_pg1Buddha}", "scaleY", '0.61', { fromValue: '1'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid649", tween: [ "style", "${_buddhaShine}", "left", '1030px', { fromValue: '38px'}], position: 16750, duration: 899, easing: "easeInQuad" },
            { id: "eid651", tween: [ "style", "${_buddhaShine}", "left", '1026px', { fromValue: '1030px'}], position: 17649, duration: 1385, easing: "easeInQuad" },
            { id: "eid1047", tween: [ "style", "${_pg3Rat}", "opacity", '1', { fromValue: '0'}], position: 32000, duration: 1096, easing: "easeOutQuad" },
            { id: "eid1105", tween: [ "style", "${_pg3Rat}", "opacity", '0', { fromValue: '1'}], position: 37250, duration: 510, easing: "easeOutQuad" },
            { id: "eid1058", tween: [ "style", "${_pg3BigRocks}", "opacity", '1', { fromValue: '0'}], position: 29860, duration: 1140, easing: "easeOutElastic" },
            { id: "eid1143", tween: [ "style", "${_pg3BigRocks}", "opacity", '0', { fromValue: '1'}], position: 43366, duration: 1134, easing: "easeOutQuad" },
            { id: "eid1037", tween: [ "style", "${_pg3Rat}", "top", '282px', { fromValue: '332px'}], position: 32000, duration: 1096, easing: "easeOutQuad" },
            { id: "eid1102", tween: [ "style", "${_pg3Rat}", "top", '292px', { fromValue: '282px'}], position: 37250, duration: 510, easing: "easeOutQuad" },
            { id: "eid1237", tween: [ "style", "${_pg3Rat}", "top", '310px', { fromValue: '292px'}], position: 37760, duration: 164, easing: "easeOutQuad" },
            { id: "eid631", tween: [ "style", "${_clouds_2}", "top", '-158px', { fromValue: '0px'}], position: 14500, duration: 500, easing: "easeInQuad" },
            { id: "eid884", tween: [ "style", "${_page2B}", "opacity", '1', { fromValue: '0'}], position: 22327, duration: 77, easing: "easeInQuad" },
            { id: "eid913", tween: [ "style", "${_page2B}", "opacity", '0', { fromValue: '1'}], position: 29250, duration: 750, easing: "easeInQuad" },
            { id: "eid1235", tween: [ "style", "${_page4}", "opacity", '1', { fromValue: '0'}], position: 44906, duration: 94, easing: "easeOutQuad" },
            { id: "eid1971", tween: [ "style", "${_page4}", "opacity", '0', { fromValue: '1'}], position: 62814, duration: 936, easing: "easeOutQuad" },
            { id: "eid630", tween: [ "style", "${_clouds_2}", "left", '56px', { fromValue: '64px'}], position: 14500, duration: 500, easing: "easeInQuad" },
            { id: "eid2139", tween: [ "style", "${_endBtn}", "opacity", '0.90625', { fromValue: '0'}], position: 67000, duration: 750, easing: "easeOutBack" },
            { id: "eid2162", tween: [ "style", "${_endBtn}", "opacity", '0', { fromValue: '0.90625'}], position: 68500, duration: 750, easing: "easeOutBack" },
            { id: "eid1087", tween: [ "style", "${_animals}", "opacity", '1', { fromValue: '0'}], position: 30500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid1111", tween: [ "style", "${_animals}", "opacity", '0', { fromValue: '1'}], position: 36829, duration: 671, easing: "easeOutQuad" },
            { id: "eid1074", tween: [ "style", "${_pg2doorOpen1}", "left", '-254px', { fromValue: '96px'}], position: 29500, duration: 250, easing: "easeOutQuad" },
            { id: "eid633", tween: [ "style", "${_clouds_5}", "top", '299.02px', { fromValue: '139px'}], position: 12250, duration: 500, easing: "easeInQuad" },
            { id: "eid2839", tween: [ "style", "${_TouchGoat}", "left", '354px', { fromValue: '221.77px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2835", tween: [ "style", "${_TouchSnake}", "left", '354px', { fromValue: '280.01px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid890", tween: [ "transform", "${_pg2Rat2}", "scaleY", '1', { fromValue: '1.96'}], position: 24500, duration: 1746, easing: "easeOutQuad" },
            { id: "eid907", tween: [ "transform", "${_pg2Rat2}", "scaleY", '0.82', { fromValue: '1'}], position: 28250, duration: 1250, easing: "easeInQuad" },
            { id: "eid2843", tween: [ "style", "${_TouchPig}", "left", '354px', { fromValue: '106px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid622", tween: [ "style", "${_clouds}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2205", tween: [ "style", "${_clouds}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 348, easing: "easeOutQuad" },
            { id: "eid608", tween: [ "style", "${_clouds_4}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2193", tween: [ "style", "${_clouds_4}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 348, easing: "easeOutQuad" },
            { id: "eid623", tween: [ "transform", "${_clouds}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2204", tween: [ "transform", "${_clouds}", "scaleY", '1.34', { fromValue: '1'}], position: 16000, duration: 348, easing: "easeOutQuad" },
            { id: "eid616", tween: [ "transform", "${_clouds_2}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2198", tween: [ "transform", "${_clouds_2}", "scaleY", '1.32', { fromValue: '1'}], position: 14500, duration: 348, easing: "easeOutQuad" },
            { id: "eid1068", tween: [ "style", "${_Text3}", "left", '491px', { fromValue: '1085px'}], position: 32846, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1098", tween: [ "style", "${_Text3}", "left", '489px', { fromValue: '491px'}], position: 36500, duration: 500, easing: "easeInQuad" },
            { id: "eid2167", tween: [ "style", "${_page5}", "left", '1.48px', { fromValue: '0px'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid619", tween: [ "style", "${_clouds_1}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2202", tween: [ "style", "${_clouds_1}", "opacity", '0', { fromValue: '1'}], position: 15251, duration: 348, easing: "easeOutElastic" },
            { id: "eid885", tween: [ "style", "${_page2}", "left", '5.55px', { fromValue: '0px'}], position: 23500, duration: 250, easing: "easeInQuad" },
            { id: "eid620", tween: [ "transform", "${_clouds_1}", "scaleY", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2201", tween: [ "transform", "${_clouds_1}", "scaleY", '1.27', { fromValue: '1'}], position: 15251, duration: 348, easing: "easeOutElastic" },
            { id: "eid2164", tween: [ "transform", "${_page5}", "scaleX", '0.04', { fromValue: '1'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid1097", tween: [ "style", "${_Text3}", "top", '656px', { fromValue: '392px'}], position: 36500, duration: 500, easing: "easeInQuad" },
            { id: "eid629", tween: [ "style", "${_clouds_3}", "left", '166px', { fromValue: '162px'}], position: 13750, duration: 434, easing: "easeInQuad" },
            { id: "eid223", tween: [ "style", "${_coverPage}", "top", '-1343px', { fromValue: '-249px'}], position: 8000, duration: 1000, easing: "easeInQuad" },
            { id: "eid206", tween: [ "style", "${_playBTNshadow}", "top", '349.47px', { fromValue: '428px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid927", tween: [ "style", "${_pg2doorOpen22}", "left", '-1060px', { fromValue: '96px'}], position: 29250, duration: 750, easing: "easeOutQuad" },
            { id: "eid1144", tween: [ "style", "${_pg3Stroke}", "opacity", '0', { fromValue: '1'}], position: 43366, duration: 1134, easing: "easeOutQuad" },
            { id: "eid632", tween: [ "style", "${_clouds_5}", "left", '-351.85px', { fromValue: '108px'}], position: 12250, duration: 500, easing: "easeInQuad" },
            { id: "eid140", tween: [ "style", "${_coverPage}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000, easing: "easeOutQuad" },
            { id: "eid224", tween: [ "style", "${_coverPage}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 352, easing: "easeInQuad" },
            { id: "eid638", tween: [ "style", "${_clouds}", "top", '-167px', { fromValue: '31px'}], position: 16000, duration: 500, easing: "easeOutElastic" },
            { id: "eid2847", tween: [ "style", "${_TouchDog}", "left", '354px', { fromValue: '848.75px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2168", tween: [ "style", "${_page5}", "top", '-331px', { fromValue: '0px'}], position: 68570, duration: 930, easing: "easeInQuad" },
            { id: "eid2417", tween: [ "style", "${_TouchOx}", "top", '660px', { fromValue: '283px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid207", tween: [ "style", "${_playBTNshadow}", "opacity", '0.3984375', { fromValue: '0'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid1145", tween: [ "style", "${_page3}", "left", '-1579px', { fromValue: '0px'}], position: 44500, duration: 250, easing: "easeOutQuad" },
            { id: "eid2414", tween: [ "style", "${_TouchTiger}", "left", '584.83px', { fromValue: '589px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid777", tween: [ "style", "${_pg2RatThinking}", "top", '-592px', { fromValue: '-157px'}], position: 22250, duration: 768, easing: "easeInQuad" },
            { id: "eid2833", tween: [ "style", "${_TouchDragon}", "top", '651px', { fromValue: '274px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2160", tween: [ "transform", "${_endBtn}", "scaleY", '1', { fromValue: '0'}], position: 67000, duration: 750, easing: "easeOutBack" },
            { id: "eid2383", tween: [ "style", "${_playbtnCopy}", "left", '26.5px', { fromValue: '30.5px'}], position: 4250, duration: 508, easing: "easeOutBounce" },
            { id: "eid1961", tween: [ "style", "${_pg4CatAngry}", "left", '102px', { fromValue: '-188.85px'}], position: 60182, duration: 144, easing: "easeInCubic" },
            { id: "eid1964", tween: [ "style", "${_pg4CatAngry}", "left", '-233px', { fromValue: '102px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid889", tween: [ "transform", "${_pg2Rat2}", "scaleX", '1', { fromValue: '1.96'}], position: 24500, duration: 1746, easing: "easeOutQuad" },
            { id: "eid906", tween: [ "transform", "${_pg2Rat2}", "scaleX", '0.82', { fromValue: '1'}], position: 28250, duration: 1250, easing: "easeInQuad" },
            { id: "eid1970", tween: [ "style", "${_page4}", "left", '-1048px', { fromValue: '0px'}], position: 62814, duration: 936, easing: "easeOutQuad" },
            { id: "eid764", tween: [ "style", "${_pg2RatThinking}", "opacity", '1', { fromValue: '0'}], position: 19750, duration: 1250, easing: "easeOutElastic" },
            { id: "eid771", tween: [ "style", "${_pg2RatThinking}", "opacity", '0', { fromValue: '1'}], position: 22250, duration: 380, easing: "easeInQuad" },
            { id: "eid1127", tween: [ "style", "${_pg3Rat2}", "left", '835px', { fromValue: '1051px'}], position: 38000, duration: 500, easing: "easeInQuad" },
            { id: "eid1129", tween: [ "style", "${_pg3Rat2}", "left", '664px', { fromValue: '835px'}], position: 39000, duration: 500, easing: "easeInQuad" },
            { id: "eid1131", tween: [ "style", "${_pg3Rat2}", "left", '462px', { fromValue: '664px'}], position: 40000, duration: 500, easing: "easeInQuad" },
            { id: "eid1133", tween: [ "style", "${_pg3Rat2}", "left", '252px', { fromValue: '462px'}], position: 41000, duration: 500, easing: "easeInQuad" },
            { id: "eid1135", tween: [ "style", "${_pg3Rat2}", "left", '56px', { fromValue: '252px'}], position: 42000, duration: 500, easing: "easeInQuad" },
            { id: "eid1137", tween: [ "style", "${_pg3Rat2}", "left", '-169px', { fromValue: '56px'}], position: 43000, duration: 500, easing: "easeInQuad" },
            { id: "eid2844", tween: [ "style", "${_TouchPig}", "top", '651px', { fromValue: '291px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid894", tween: [ "style", "${_pg2doorClose2}", "opacity", '1', { fromValue: '0'}], position: 22327, duration: 77, easing: "easeOutQuad" },
            { id: "eid895", tween: [ "style", "${_pg2doorClose2}", "opacity", '1', { fromValue: '1'}], position: 27000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2857", tween: [ "style", "${_pg2doorClose2}", "opacity", '0', { fromValue: '1'}], position: 27750, duration: 0, easing: "easeOutQuad" },
            { id: "eid1959", tween: [ "style", "${_pg4CatAngryCopy}", "top", '422.92px', { fromValue: '424.17px'}], position: 60182, duration: 144, easing: "easeInCubic" },
            { id: "eid1973", tween: [ "style", "${_pg4CatAngryCopy}", "top", '617.77px', { fromValue: '422.92px'}], position: 62250, duration: 750, easing: "easeInCubic" },
            { id: "eid615", tween: [ "style", "${_clouds_2}", "opacity", '1', { fromValue: '0'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2199", tween: [ "style", "${_clouds_2}", "opacity", '0', { fromValue: '1'}], position: 14500, duration: 348, easing: "easeOutQuad" },
            { id: "eid909", tween: [ "style", "${_pg2Rat2}", "clip", [0,239.77322387695312,196,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,277,196,0]}], position: 28250, duration: 643 },
            { id: "eid910", tween: [ "style", "${_pg2Rat2}", "clip", [0,217.2440948486328,196,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,239.77322387695312,196,0]}], position: 28893, duration: 190 },
            { id: "eid911", tween: [ "style", "${_pg2Rat2}", "clip", [0,120.90243530273438,196,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,217.2440948486328,196,0]}], position: 29083, duration: 417 },
            { id: "eid636", tween: [ "style", "${_clouds_1}", "top", '-170.77px', { fromValue: '31px'}], position: 15260, duration: 490, easing: "easeOutElastic" },
            { id: "eid634", tween: [ "style", "${_clouds_4}", "left", '-143.93px', { fromValue: '14px'}], position: 13000, duration: 348, easing: "easeInQuad" },
            { id: "eid640", tween: [ "style", "${_clouds_4}", "left", '-312px', { fromValue: '-143.93px'}], position: 13348, duration: 152, easing: "easeOutQuad" },
            { id: "eid621", tween: [ "transform", "${_clouds}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2203", tween: [ "transform", "${_clouds}", "scaleX", '1.34', { fromValue: '1'}], position: 16000, duration: 348, easing: "easeOutQuad" },
            { id: "eid792", tween: [ "transform", "${_page2}", "scaleY", '0.05', { fromValue: '1'}], position: 22577, duration: 923, easing: "easeInQuad" },
            { id: "eid2420", tween: [ "style", "${_TouchRabbit}", "left", '354px', { fromValue: '358.18px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid607", tween: [ "transform", "${_clouds_4}", "scaleX", '1', { fromValue: '0.24'}], position: 10111, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2191", tween: [ "transform", "${_clouds_4}", "scaleX", '1.23', { fromValue: '1'}], position: 13000, duration: 348, easing: "easeOutQuad" },
            { id: "eid2846", tween: [ "style", "${_TouchMonkey}", "top", '651px', { fromValue: '284.02px'}], position: 7946, duration: 54, easing: "easeInQuad" },
            { id: "eid2179", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', [0] ], ""], position: 0 },
            { id: "eid2380", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Rat'] ], ""], position: 5000 },
            { id: "eid2381", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Ox'] ], ""], position: 5209 },
            { id: "eid2390", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Tiger'] ], ""], position: 5409 },
            { id: "eid2391", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Rabbit'] ], ""], position: 5602 },
            { id: "eid2849", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Dragon'] ], ""], position: 5805 },
            { id: "eid2850", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Snake'] ], ""], position: 6000 },
            { id: "eid2851", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Horse'] ], ""], position: 6204 },
            { id: "eid2852", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Goat'] ], ""], position: 6404 },
            { id: "eid2853", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Monkey'] ], ""], position: 6604 },
            { id: "eid2854", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Rooster'] ], ""], position: 6810 },
            { id: "eid2855", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Dog'] ], ""], position: 7000 },
            { id: "eid2856", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coverPage}', ['Pig'] ], ""], position: 7203 },
            { id: "eid330", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page1}', [] ], ""], position: 8677.17194536 },
            { id: "eid596", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page2}', [] ], ""], position: 18277.533444606 },
            { id: "eid887", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page2B}', [] ], ""], position: 22327 },
            { id: "eid964", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page3}', [27500] ], ""], position: 29500 },
            { id: "eid1149", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg3Rat2}', ['loopJump'] ], ""], position: 37924.306695279 },
            { id: "eid1231", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page4}', ['playPage4'] ], ""], position: 45000 },
            { id: "eid2047", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_page5}', ['Page5'] ], ""], position: 63000 }         ]
      }
   }
},
"coverPage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Cover',
      type: 'group',
      rect: ['0px','0px','1847','1083','auto','auto'],
      c: [
      {
         id: 'coverFloor',
         type: 'image',
         rect: ['393px','668px','1024px','182px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverFloor.svg','0px','0px']
      },
      {
         id: 'coverPigShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverPigShadow.png','0px','0px']
      },
      {
         id: 'coverDogShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverDogShadow.png','0px','0px']
      },
      {
         id: 'coverRoosterShadow',
         type: 'image',
         rect: ['413px','677','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverRoosterShadow.png','0px','0px']
      },
      {
         id: 'coverMonkeyShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverMonkeyShadow.png','0px','0px']
      },
      {
         id: 'coverSheepShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverSheepShadow.png','0px','0px']
      },
      {
         id: 'coverHorseShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverHorseShadow.png','0px','0px']
      },
      {
         id: 'coverSnakeShadow',
         type: 'image',
         rect: ['414px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverSnakeShadow.png','0px','0px']
      },
      {
         id: 'coverDragonShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverDragonShadow.png','0px','0px']
      },
      {
         id: 'coverRabbitShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverRabbitShadow.png','0px','0px']
      },
      {
         id: 'coverTigerShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverTigerShadow.png','0px','0px']
      },
      {
         id: 'coverOxShadow',
         type: 'image',
         rect: ['413px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverOxShadow.png','0px','0px']
      },
      {
         id: 'coverRatShadow',
         type: 'image',
         rect: ['415px','677px','946px','220px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverRatShadow.png','0px','0px']
      },
      {
         rect: ['698','471','226','217','auto','auto'],
         id: 'animals_Black',
         opacity: 0.4453125,
         transform: {},
         type: 'group',
         c: [
         {
            id: 'coverPigBlack',
            type: 'image',
            rect: ['-203px','64px','109px','150px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverPigBlack.png','0px','0px']
         },
         {
            id: 'coverDogBlack',
            type: 'image',
            rect: ['496px','74px','121px','144px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverDogBlack.png','0px','0px']
         },
         {
            id: 'coverRoosterBlack',
            type: 'image',
            rect: ['-155px','46px','115px','172px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverRoosterBlack.png','0px','0px']
         },
         {
            id: 'coverMonkeyBlack',
            type: 'image',
            rect: ['423px','58px','155px','161px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverMonkeyBlack.png','0px','0px']
         },
         {
            type: 'image',
            id: 'coverSheepBlack',
            opacity: 0,
            rect: ['-109px','32px','155px','190px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverSheepBlack.png','0px','0px']
         },
         {
            id: 'coverHorseBlack',
            type: 'image',
            rect: ['375px','38px','142px','179px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverHorseBlack.png','0px','0px']
         },
         {
            id: 'coverSnakeBlack',
            type: 'image',
            rect: ['-45px','40px','142px','179px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverSnakeBlack.png','0px','0px']
         },
         {
            id: 'coverDragonBlack',
            type: 'image',
            rect: ['303px','-1px','167px','210px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverDragonBlack.png','0px','0px']
         },
         {
            id: 'coverRabbittBlack',
            type: 'image',
            rect: ['-5px','0px','167px','217px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverRabbittBlack.png','0px','0px']
         },
         {
            id: 'coverTigerBlack',
            type: 'image',
            rect: ['219px','6px','167px','213px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverTigerBlack.png','0px','0px']
         },
         {
            id: 'coverOxBlack2',
            type: 'image',
            rect: ['67px','9px','159px','208px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverOxBlack.png','0px','0px']
         },
         {
            id: 'coverRatBlack',
            type: 'image',
            rect: ['120px','-23px','212px','238px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverRatBlack.png','0px','0px']
         }]
      },
      {
         id: 'coverPig',
         type: 'image',
         rect: ['495px','535px','109px','150px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverPig.svg','0px','0px']
      },
      {
         id: 'coverDog2',
         type: 'image',
         rect: ['1195px','543px','121px','144px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverDog.svg','0px','0px']
      },
      {
         id: 'coverRooster2',
         type: 'image',
         rect: ['543px','517px','115px','172px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverRooster.svg','0px','0px']
      },
      {
         id: 'coverMonkey',
         type: 'image',
         rect: ['1126px','529px','146px','161px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverMonkey.svg','0px','0px']
      },
      {
         id: 'coverSheep',
         type: 'image',
         rect: ['589px','503px','155px','190px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverSheep.svg','0px','0px']
      },
      {
         id: 'coverHorse2',
         type: 'image',
         rect: ['1073px','509px','142px','179px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverHorse.svg','0px','0px']
      },
      {
         id: 'coverSnake',
         type: 'image',
         rect: ['653px','511px','142px','179px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverSnake.svg','0px','0px']
      },
      {
         id: 'coverDragon',
         type: 'image',
         rect: ['984px','469px','193px','210px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverDragon.svg','0px','0px']
      },
      {
         id: 'coverRabbitt',
         type: 'image',
         rect: ['698','469px','167px','217px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverRabbitt.svg','0px','0px']
      },
      {
         id: 'coverOx',
         type: 'image',
         rect: ['751px','480px','159px','208px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverOx.svg','0px','0px']
      },
      {
         id: 'coverTiger',
         type: 'image',
         rect: ['919px','478px','167px','213px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/coverTiger.svg','0px','0px']
      },
      {
         id: 'Mouse',
         type: 'rect',
         rect: ['794','410','auto','auto','auto','auto'],
         boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.65)']
      },
      {
         id: 'title',
         type: 'group',
         rect: ['537','59','756','352','auto','auto'],
         c: [
         {
            id: 'coverTitleRope',
            type: 'image',
            rect: ['50px','0px','670px','219px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/coverTitleRope.svg','0px','0px']
         },
         {
            type: 'image',
            id: 'title-box',
            opacity: 0.859375,
            rect: ['0px','196px','756px','156px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/title-box.png','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'Mouse',
      symbolName: 'Mouse'
   }   ]
   },
   states: {
      "Base State": {
         "${_coverOxShadow}": [
            ["style", "top", '677px'],
            ["style", "height", '220px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px'],
            ["style", "width", '946px']
         ],
         "${_coverDragonBlack}": [
            ["style", "top", '-1px'],
            ["style", "opacity", '1'],
            ["style", "left", '303px']
         ],
         "${_coverDog2}": [
            ["style", "top", '543px'],
            ["style", "opacity", '0'],
            ["style", "left", '1195px']
         ],
         "${_coverTigerBlack}": [
            ["style", "top", '6px'],
            ["style", "opacity", '1'],
            ["style", "left", '218.8px']
         ],
         "${_title}": [
            ["style", "top", '-145px']
         ],
         "${_coverRatShadow}": [
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '413.72px'],
            ["style", "top", '677px']
         ],
         "${_coverTitleRope}": [
            ["style", "left", '50px'],
            ["style", "top", '0px']
         ],
         "${_coverPig}": [
            ["style", "top", '535px'],
            ["style", "opacity", '0'],
            ["style", "left", '495px']
         ],
         "${_coverMonkeyBlack}": [
            ["style", "top", '58px'],
            ["style", "opacity", '1'],
            ["style", "left", '422.75px']
         ],
         "${_coverTigerShadow}": [
            ["style", "top", '677px'],
            ["style", "height", '220px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px'],
            ["style", "width", '946px']
         ],
         "${_coverHorseBlack}": [
            ["style", "top", '38px'],
            ["style", "opacity", '1'],
            ["style", "left", '375.2px']
         ],
         "${_coverDragonShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverRatBlack}": [
            ["style", "left", '120px'],
            ["style", "opacity", '0']
         ],
         "${_coverTiger}": [
            ["style", "top", '478px'],
            ["style", "opacity", '0'],
            ["style", "left", '919px'],
            ["style", "cursor", 'auto']
         ],
         "${_coverPigBlack}": [
            ["style", "top", '64px'],
            ["style", "opacity", '1'],
            ["style", "left", '-203.17px']
         ],
         "${_coverOxBlack2}": [
            ["style", "top", '9.38px'],
            ["style", "opacity", '1'],
            ["style", "left", '66.8px']
         ],
         "${_coverHorseShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverRabbitShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverDragon}": [
            ["style", "top", '469px'],
            ["style", "opacity", '0'],
            ["style", "left", '983.82px']
         ],
         "${_coverSnakeShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverRabbittBlack}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '-5px']
         ],
         "${_Cover}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1329.5px'],
            ["style", "width", '2234.6166687012px']
         ],
         "${_coverDogShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverRabbitt}": [
            ["style", "top", '469px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'auto']
         ],
         "${_coverDogBlack}": [
            ["style", "top", '74px'],
            ["style", "opacity", '1'],
            ["style", "left", '496.2px']
         ],
         "${_coverSheepBlack}": [
            ["style", "top", '32px'],
            ["style", "opacity", '1'],
            ["style", "left", '-109.15px']
         ],
         "${_coverSnake}": [
            ["style", "top", '511px'],
            ["style", "opacity", '0'],
            ["style", "left", '653px']
         ],
         "${_coverRooster2}": [
            ["style", "top", '517px'],
            ["style", "opacity", '0'],
            ["style", "left", '543px']
         ],
         "${_title-box}": [
            ["style", "top", '196.22px'],
            ["style", "height", '155.78457157241px'],
            ["style", "opacity", '0.859375'],
            ["style", "left", '0px'],
            ["style", "width", '755.75px']
         ],
         "${_coverFloor}": [
            ["style", "top", '667.5px'],
            ["style", "opacity", '0'],
            ["style", "left", '392.67px'],
            ["style", "clip", [176,1024,182,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_animals_Black}": [
            ["style", "-webkit-transform-origin", [100.45,56.54], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100.45,56.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100.45,56.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100.45,56.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100.45,56.54],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0']
         ],
         "${_coverOx}": [
            ["style", "top", '480px'],
            ["style", "opacity", '0'],
            ["style", "left", '751.03px'],
            ["style", "cursor", 'auto']
         ],
         "${_coverRoosterBlack}": [
            ["style", "top", '46px'],
            ["style", "opacity", '1'],
            ["style", "left", '-155.18px']
         ],
         "${_Mouse}": [
            ["subproperty", "boxShadow.blur", '5px'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'auto'],
            ["style", "top", '98px'],
            ["transform", "scaleY", '0.1'],
            ["subproperty", "boxShadow.color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.spread", '1px'],
            ["style", "clip", [288,252,290,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.offsetV", '3px']
         ],
         "${_coverSheep}": [
            ["style", "top", '503px'],
            ["style", "opacity", '0'],
            ["style", "left", '589px']
         ],
         "${_coverSnakeBlack}": [
            ["style", "top", '40px'],
            ["style", "opacity", '1'],
            ["style", "left", '-45.4px']
         ],
         "${_coverSheepShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverMonkeyShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverPigShadow}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '413px']
         ],
         "${_coverHorse2}": [
            ["style", "top", '509px'],
            ["style", "opacity", '0'],
            ["style", "left", '1073px']
         ],
         "${_coverMonkey}": [
            ["style", "top", '529px'],
            ["style", "opacity", '0'],
            ["style", "left", '1126px']
         ],
         "${_coverRoosterShadow}": [
            ["style", "left", '413px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11750,
         autoPlay: true,
         labels: {
            "Rat": 6002,
            "Ox": 6500,
            "Tiger": 7000,
            "Rabbit": 7500,
            "Dragon": 8000,
            "Snake": 8500,
            "Horse": 9000,
            "Goat": 9500,
            "Monkey": 10000,
            "Rooster": 10500,
            "Dog": 11000,
            "Pig": 11500
         },
         timeline: [
            { id: "eid2435", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2436", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2410", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2406", tween: [ "style", "${_coverRabbitShadow}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2456", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2490", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2528", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2571", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2782", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2774", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2765", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2756", tween: [ "style", "${_coverRabbitShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2786", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2791", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2795", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2799", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2803", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2807", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2811", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2815", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2818", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2746", tween: [ "style", "${_coverRoosterShadow}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2749", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2752", tween: [ "style", "${_coverRoosterShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2521", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2522", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2523", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2524", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2520", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2519", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2512", tween: [ "style", "${_coverHorseBlack}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2559", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2622", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2635", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2647", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2659", tween: [ "style", "${_coverHorseBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2743", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2739", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2735", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2731", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2727", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2723", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2719", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2712", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2696", tween: [ "style", "${_coverMonkey}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2706", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2705", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2700", tween: [ "style", "${_coverMonkey}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2240", tween: [ "style", "${_coverRatBlack}", "opacity", '0', { fromValue: '0'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2243", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2244", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2258", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2450", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0 },
            { id: "eid2481", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2518", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2553", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2616", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2629", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2641", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2653", tween: [ "style", "${_coverRatBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2582", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2581", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2580", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2579", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2578", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2577", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2576", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2575", tween: [ "style", "${_coverSheepShadow}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2745", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2778", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2769", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2760", tween: [ "style", "${_coverSheepShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_Mouse}", "clip", [0,252,290,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [288,252,290,0]}], position: 2750, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2265", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 5750, duration: 0, easing: "easeOutQuad" },
            { id: "eid2257", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2229", tween: [ "style", "${_coverOxBlack2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2237", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2256", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2449", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0 },
            { id: "eid2480", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2517", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2554", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2617", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2630", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2642", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2654", tween: [ "style", "${_coverOxBlack2}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2442", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid2441", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0 },
            { id: "eid2440", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0 },
            { id: "eid2439", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0 },
            { id: "eid2438", tween: [ "style", "${_coverDragon}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid2466", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2501", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2541", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2669", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2677", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2685", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2693", tween: [ "style", "${_coverDragon}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2255", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 6002, duration: 0, easing: "easeOutBounce" },
            { id: "eid2254", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2253", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2252", tween: [ "style", "${_coverRabbittBlack}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2447", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid2478", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2515", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2556", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2619", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2632", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2644", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2656", tween: [ "style", "${_coverRabbittBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2537", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2536", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2535", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2534", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2533", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2532", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2525", tween: [ "style", "${_coverHorseShadow}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2574", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2785", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2777", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2768", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2759", tween: [ "style", "${_coverHorseShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2242", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2238", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2233", tween: [ "style", "${_coverTiger}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2250", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2445", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid2469", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2504", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2544", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2666", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2674", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2682", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2690", tween: [ "style", "${_coverTiger}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2455", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0 },
            { id: "eid2454", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0 },
            { id: "eid2453", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0 },
            { id: "eid2452", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0 },
            { id: "eid2451", tween: [ "style", "${_coverDragonBlack}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0 },
            { id: "eid2477", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2514", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2557", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2620", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2633", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2645", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2657", tween: [ "style", "${_coverDragonBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2241", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2235", tween: [ "style", "${_coverOx}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2236", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2249", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2444", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid2468", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2503", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2543", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2667", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2675", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2683", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2691", tween: [ "style", "${_coverOx}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2223", tween: [ "transform", "${_animals_Black}", "scaleX", '1', { fromValue: '0'}], position: 3532, duration: 2218, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_Mouse}", "top", '423px', { fromValue: '98px'}], position: 2750, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2475", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2474", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2473", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2472", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2471", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2465", tween: [ "style", "${_coverSnake}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2500", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2540", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2670", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2678", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2686", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2694", tween: [ "style", "${_coverSnake}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2225", tween: [ "style", "${_animals_Black}", "opacity", '0.4453125', { fromValue: '0'}], position: 3532, duration: 2218, easing: "easeOutQuad" },
            { id: "eid2584", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2588", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2592", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2596", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2600", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2604", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2608", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2612", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2625", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2638", tween: [ "style", "${_coverRoosterBlack}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2650", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2662", tween: [ "style", "${_coverRoosterBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2248", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2247", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2246", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2245", tween: [ "style", "${_coverRabbitt}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2443", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0 },
            { id: "eid2467", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2502", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2542", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2668", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2676", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2684", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2692", tween: [ "style", "${_coverRabbitt}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid104", tween: [ "style", "${_coverFloor}", "clip", [0,1024,182,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [176,1024,182,0]}], position: 2750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid2742", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2738", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2734", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2730", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2726", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2722", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2718", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2715", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2711", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2707", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2698", tween: [ "style", "${_coverDog2}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2702", tween: [ "style", "${_coverDog2}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2552", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2551", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2550", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2549", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2548", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2547", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2546", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2538", tween: [ "style", "${_coverSheep}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2664", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2672", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2680", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2688", tween: [ "style", "${_coverSheep}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2395", tween: [ "style", "${_coverRatShadow}", "opacity", '1', { fromValue: '0'}], position: 3532, duration: 2218, easing: "easeOutQuad" },
            { id: "eid2396", tween: [ "style", "${_coverRatShadow}", "opacity", '1', { fromValue: '1'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2398", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2401", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2409", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2460", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2487", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2531", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2568", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2779", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2771", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2762", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2753", tween: [ "style", "${_coverRatShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2740", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2736", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2732", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2728", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2724", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2720", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2716", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2713", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2709", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2697", tween: [ "style", "${_coverRooster2}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2704", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2701", tween: [ "style", "${_coverRooster2}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2393", tween: [ "transform", "${_coverRatShadow}", "scaleX", '1', { fromValue: '0'}], position: 3532, duration: 2218, easing: "easeOutQuad" },
            { id: "eid2586", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2590", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2594", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2598", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2602", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2606", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2610", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2614", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2627", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2628", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2640", tween: [ "style", "${_coverPigBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2652", tween: [ "style", "${_coverPigBlack}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2788", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2793", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2797", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2801", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2805", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2809", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2813", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2817", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2820", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2822", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2823", tween: [ "style", "${_coverPigShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2750", tween: [ "style", "${_coverPigShadow}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2266", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 5750, duration: 0, easing: "easeOutQuad" },
            { id: "eid2263", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 6002, duration: 0, easing: "easeOutBounce" },
            { id: "eid2262", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2259", tween: [ "style", "${_coverTigerBlack}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2261", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2448", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0 },
            { id: "eid2479", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2516", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2555", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2618", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2631", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2643", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2655", tween: [ "style", "${_coverTigerBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2497", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2496", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2495", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2494", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2493", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2492", tween: [ "style", "${_coverSnakeShadow}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2526", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2573", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2784", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2776", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2767", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2758", tween: [ "style", "${_coverSnakeShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2432", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2433", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2403", tween: [ "style", "${_coverTigerShadow}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2407", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2458", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2489", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2529", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2570", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2781", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2773", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2764", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2755", tween: [ "style", "${_coverTigerShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid102", tween: [ "style", "${_coverFloor}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid2464", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2463", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2462", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2461", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2457", tween: [ "style", "${_coverDragonShadow}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2491", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2527", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2572", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2783", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2775", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2766", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2757", tween: [ "style", "${_coverDragonShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2511", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2510", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2509", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2508", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2507", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2506", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2499", tween: [ "style", "${_coverHorse2}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2539", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2671", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2679", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2687", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2695", tween: [ "style", "${_coverHorse2}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2486", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2485", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2484", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2483", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2482", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2476", tween: [ "style", "${_coverSnakeBlack}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2513", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2558", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2621", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2634", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2646", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2658", tween: [ "style", "${_coverSnakeBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2430", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2437", tween: [ "style", "${_coverOxShadow}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2402", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2408", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2459", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2488", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2530", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2569", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2780", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2772", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2763", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2754", tween: [ "style", "${_coverOxShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2585", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2589", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2593", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2597", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2601", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2605", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2609", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2613", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2626", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2639", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2651", tween: [ "style", "${_coverDogBlack}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2663", tween: [ "style", "${_coverDogBlack}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2567", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2566", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2565", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2564", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2563", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2562", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2561", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2560", tween: [ "style", "${_coverSheepBlack}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2623", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2636", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2648", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2660", tween: [ "style", "${_coverSheepBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2787", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2792", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2796", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2800", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2804", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2808", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2812", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2816", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2819", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2821", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2748", tween: [ "style", "${_coverDogShadow}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2751", tween: [ "style", "${_coverDogShadow}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_Mouse}", "scaleY", '1', { fromValue: '0.1'}], position: 2750, duration: 1000, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "style", "${_title}", "top", '86px', { fromValue: '-145px'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid222", tween: [ "transform", "${_Mouse}", "scaleX", '0.1', { fromValue: '0.1'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid110", tween: [ "transform", "${_Mouse}", "scaleX", '1', { fromValue: '0.1'}], position: 2750, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2239", tween: [ "style", "${_Mouse}", "opacity", '1', { fromValue: '1'}], position: 6002, duration: 0, easing: "easeOutQuad" },
            { id: "eid2226", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2231", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2251", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2446", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid2470", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2505", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2545", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2665", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2673", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2681", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutBounce" },
            { id: "eid2689", tween: [ "style", "${_Mouse}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutBounce" },
            { id: "eid2789", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2790", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2794", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2798", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2802", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2806", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2810", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2814", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2744", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2747", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2770", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2761", tween: [ "style", "${_coverMonkeyShadow}", "opacity", '0', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2583", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2587", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2591", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2595", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2599", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2603", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2607", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2611", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2624", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2637", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2649", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2661", tween: [ "style", "${_coverMonkeyBlack}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2741", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2737", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 6500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2733", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2729", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2725", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2721", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2717", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2714", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2710", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2708", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid2703", tween: [ "style", "${_coverPig}", "opacity", '0', { fromValue: '0'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid2699", tween: [ "style", "${_coverPig}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"Mouse": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'coverMouseBlink2',
      type: 'image',
      rect: ['0','0','252px','290px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coverMouseBlink.svg','0px','0px']
   },
   {
      id: 'coverMouse',
      type: 'image',
      rect: ['0px','0px','252px','290px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coverMouse.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coverMouse}": [
            ["style", "top", '0.02px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '252px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 894,
         autoPlay: true,
         labels: {
            "loopBlink": 0
         },
         timeline: [
            { id: "eid1", tween: [ "style", "${_coverMouse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_coverMouse}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid4", tween: [ "style", "${_coverMouse}", "opacity", '0.000000', { fromValue: '1'}], position: 564, duration: 0 },
            { id: "eid6", tween: [ "style", "${_coverMouse}", "opacity", '1', { fromValue: '0.000000'}], position: 642, duration: 0 },
            { id: "eid7", tween: [ "style", "${_coverMouse}", "opacity", '1', { fromValue: '1'}], position: 750, duration: 0 },
            { id: "eid73", tween: [ "style", "${_coverMouse}", "opacity", '0.000000', { fromValue: '1'}], position: 833, duration: 0, easing: "easeOutBounce" },
            { id: "eid74", tween: [ "style", "${_coverMouse}", "opacity", '1', { fromValue: '0.000000'}], position: 894, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"page1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1LeftMountain',
      type: 'image',
      rect: ['0px','435px','359px','167px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1LeftMountain.svg','0px','0px']
   },
   {
      id: 'pg1RightMountain2',
      type: 'image',
      rect: ['857','0','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1RightMountain.png','0px','0px']
   },
   {
      id: 'pg1Sunshine',
      type: 'image',
      rect: ['0','0','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Sunshine.svg','0px','0px']
   },
   {
      id: 'Bird',
      type: 'rect',
      rect: ['293','20','auto','auto','auto','auto']
   },
   {
      id: 'pg1BigGrass',
      type: 'image',
      rect: ['694px','336px','372px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1BigGrass.svg','0px','0px']
   },
   {
      id: 'theAnimals',
      type: 'group',
      rect: ['24','75','973','560','auto','auto'],
      c: [
      {
         id: 'pg1Tiger',
         type: 'image',
         rect: ['730px','135px','109px','141px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Tiger.svg','0px','0px']
      },
      {
         id: 'pg1Bear',
         type: 'image',
         rect: ['658px','173px','99px','141px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Bear.svg','0px','0px']
      },
      {
         id: 'pg1Lion',
         type: 'image',
         rect: ['592px','75px','102px','176px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Lion.svg','0px','0px']
      },
      {
         id: 'pg1Monkey',
         type: 'image',
         rect: ['757px','17px','141px','137px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Monkey.svg','0px','0px']
      },
      {
         id: 'pg1Squirrel',
         type: 'image',
         rect: ['880px','0px','93px','126px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Squirrel.svg','0px','0px']
      },
      {
         id: 'pg1Elephant',
         type: 'image',
         rect: ['781px','205px','119px','141px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Elephant.svg','0px','0px']
      },
      {
         id: 'pg1Rooster',
         type: 'image',
         rect: ['724px','219px','92px','141px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Rooster.svg','0px','0px']
      },
      {
         id: 'pg1Ox',
         type: 'image',
         rect: ['622px','225px','108px','159px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Ox.svg','0px','0px']
      },
      {
         id: 'pg1Fox',
         type: 'image',
         rect: ['690px','315px','124px','153px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Fox.svg','0px','0px']
      },
      {
         id: 'pg1Snake',
         type: 'image',
         rect: ['779px','324px','161px','153px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Snake.svg','0px','0px']
      },
      {
         id: 'pg1Rabbit',
         type: 'image',
         rect: ['535px','228px','108px','153px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Rabbit.svg','0px','0px']
      },
      {
         id: 'pg1Horse',
         type: 'image',
         rect: ['582px','322px','148px','187px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Horse.svg','0px','0px']
      },
      {
         id: 'pg1Goat',
         type: 'image',
         rect: ['430px','294px','148px','180px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Goat.svg','0px','0px']
      },
      {
         id: 'pg1CatnRat',
         type: 'image',
         rect: ['238px','326px','266px','204px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1CatnRat.svg','0px','0px']
      },
      {
         id: 'pg1Dog2',
         type: 'image',
         rect: ['482px','401px','148px','159px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Dog.svg','0px','0px']
      },
      {
         id: 'pg1Dragon',
         type: 'image',
         rect: ['0px','276px','264px','268px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pg1Dragon.svg','0px','0px']
      }]
   },
   {
      id: 'text',
      type: 'group',
      rect: ['-8px','211px','523','280','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'box',
         opacity: 0.7734375,
         rect: ['0px','0px','523px','280px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/box.png','0px','0px']
      },
      {
         type: 'text',
         id: 'Text',
         text: 'Once upon a time, before the Buddha departure to the Earth, he decided to held a grand race by inviting all the animals. However, the Buddha is blocked by the clouds. Find the Buddha!',
         rect: ['42px','37px','438px','173px','auto','auto'],
         font: ['Annie Use Your Telescope, cursive',24,'rgba(16,0,0,1.00)','900','none','normal']
      }]
   }],
   symbolInstances: [
   {
      id: 'Bird',
      symbolName: 'Bird'
   }   ]
   },
   states: {
      "Base State": {
         "${_pg1RightMountain2}": [
            ["style", "left", '1027px']
         ],
         "${_pg1Tiger}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '730px'],
            ["style", "top", '135px']
         ],
         "${_pg1Bear}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '658px'],
            ["style", "top", '173px']
         ],
         "${_pg1CatnRat}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '238px'],
            ["style", "top", '326px']
         ],
         "${_pg1Squirrel}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.02'],
            ["style", "opacity", '0'],
            ["style", "left", '880px'],
            ["style", "top", '0px']
         ],
         "${_pg1Monkey}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '757px'],
            ["style", "top", '17px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1083px'],
            ["style", "width", '1847px']
         ],
         "${_box}": [
            ["style", "top", '0px'],
            ["style", "height", '280px'],
            ["style", "opacity", '0.7734375'],
            ["style", "left", '-0.02px'],
            ["style", "width", '523.31665039063px']
         ],
         "${_pg1Sunshine}": [
            ["style", "top", '-8px'],
            ["style", "left", '-1px'],
            ["style", "clip", [0,194,-10,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_pg1Dog2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '482px'],
            ["style", "top", '401px']
         ],
         "${_pg1Lion}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '592px'],
            ["style", "top", '75px']
         ],
         "${_pg1Horse}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '582px'],
            ["style", "top", '322px']
         ],
         "${_pg1Fox}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '690px'],
            ["style", "top", '315px']
         ],
         "${_pg1BigGrass}": [
            ["style", "top", '344px'],
            ["transform", "scaleY", '-0.04'],
            ["style", "left", '694px'],
            ["style", "-webkit-transform-origin", [52.02,98.87], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [52.02,98.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [52.02,98.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [52.02,98.87],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [52.02,98.87],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pg1Elephant}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '781px'],
            ["style", "top", '205px']
         ],
         "${_pg1Rooster}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '724px'],
            ["style", "top", '219px']
         ],
         "${_pg1Snake}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '779px'],
            ["style", "top", '324px']
         ],
         "${_pg1Dragon}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '276px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(16,0,0,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-447.57px'],
            ["style", "width", '437.5px'],
            ["style", "top", '37px'],
            ["style", "opacity", '1'],
            ["style", "height", '195px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Annie Use Your Telescope, cursive'],
            ["style", "clip", [0,437.5,195,-2], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-size", '26px']
         ],
         "${_pg1Ox}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '622px'],
            ["style", "top", '225px']
         ],
         "${_pg1LeftMountain}": [
            ["style", "left", '-357px'],
            ["style", "top", '435px']
         ],
         "${_text}": [
            ["style", "opacity", '0']
         ],
         "${_pg1Goat}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '430px'],
            ["style", "top", '294px']
         ],
         "${_pg1Rabbit}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '-0.01'],
            ["style", "opacity", '0'],
            ["style", "left", '535px'],
            ["style", "top", '228px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: true,
         timeline: [
            { id: "eid356", tween: [ "transform", "${_pg1Bear}", "scaleY", '1', { fromValue: '0'}], position: 3390, duration: 250, easing: "easeOutQuad" },
            { id: "eid404", tween: [ "style", "${_pg1CatnRat}", "opacity", '1', { fromValue: '0'}], position: 2140, duration: 250, easing: "easeOutQuad" },
            { id: "eid358", tween: [ "style", "${_pg1Monkey}", "opacity", '1', { fromValue: '0'}], position: 3640, duration: 250, easing: "easeOutQuad" },
            { id: "eid372", tween: [ "transform", "${_pg1Elephant}", "scaleY", '1', { fromValue: '-0.01'}], position: 3250, duration: 250, easing: "easeOutQuad" },
            { id: "eid382", tween: [ "transform", "${_pg1Horse}", "scaleY", '1', { fromValue: '-0.01'}], position: 2500, duration: 250, easing: "easeOutQuad" },
            { id: "eid398", tween: [ "style", "${_pg1Fox}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 250, easing: "easeOutQuad" },
            { id: "eid402", tween: [ "style", "${_pg1Horse}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutQuad" },
            { id: "eid360", tween: [ "style", "${_pg1Tiger}", "opacity", '1', { fromValue: '0'}], position: 3570, duration: 250, easing: "easeOutQuad" },
            { id: "eid380", tween: [ "transform", "${_pg1Rabbit}", "scaleY", '1', { fromValue: '-0.01'}], position: 2890, duration: 250, easing: "easeOutQuad" },
            { id: "eid376", tween: [ "transform", "${_pg1Snake}", "scaleY", '1', { fromValue: '-0.01'}], position: 2640, duration: 250, easing: "easeOutQuad" },
            { id: "eid392", tween: [ "style", "${_pg1Elephant}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 250, easing: "easeOutQuad" },
            { id: "eid346", tween: [ "style", "${_pg1Dragon}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutQuad" },
            { id: "eid354", tween: [ "transform", "${_pg1Lion}", "scaleY", '1', { fromValue: '0'}], position: 3500, duration: 250, easing: "easeOutQuad" },
            { id: "eid1239", tween: [ "style", "${_Text}", "font-size", '26px', { fromValue: '26px'}], position: 4500, duration: 0 },
            { id: "eid350", tween: [ "transform", "${_pg1Monkey}", "scaleY", '1', { fromValue: '0'}], position: 3640, duration: 250, easing: "easeOutQuad" },
            { id: "eid510", tween: [ "style", "${_Text}", "left", '41.93px', { fromValue: '-447.57px'}], position: 3500, duration: 1000 },
            { id: "eid378", tween: [ "transform", "${_pg1Fox}", "scaleY", '1', { fromValue: '-0.01'}], position: 2750, duration: 250, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "style", "${_pg1Bear}", "opacity", '1', { fromValue: '0'}], position: 3390, duration: 250, easing: "easeOutQuad" },
            { id: "eid370", tween: [ "transform", "${_pg1Ox}", "scaleY", '1', { fromValue: '-0.01'}], position: 3000, duration: 250, easing: "easeOutQuad" },
            { id: "eid342", tween: [ "transform", "${_pg1Dragon}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "transform", "${_pg1CatnRat}", "scaleY", '1', { fromValue: '-0.01'}], position: 2140, duration: 250, easing: "easeOutQuad" },
            { id: "eid366", tween: [ "transform", "${_pg1Goat}", "scaleY", '1', { fromValue: '-0.01'}], position: 2390, duration: 250, easing: "easeOutQuad" },
            { id: "eid396", tween: [ "style", "${_pg1Snake}", "opacity", '1', { fromValue: '0'}], position: 2640, duration: 250, easing: "easeOutQuad" },
            { id: "eid348", tween: [ "transform", "${_pg1Squirrel}", "scaleY", '1', { fromValue: '0.02'}], position: 3750, duration: 250, easing: "easeOutQuad" },
            { id: "eid390", tween: [ "style", "${_pg1Ox}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeOutQuad" },
            { id: "eid352", tween: [ "transform", "${_pg1Tiger}", "scaleY", '1', { fromValue: '0'}], position: 3570, duration: 250, easing: "easeOutQuad" },
            { id: "eid228", tween: [ "style", "${_pg1LeftMountain}", "left", '0px', { fromValue: '-357px'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid394", tween: [ "style", "${_pg1Dog2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "easeOutQuad" },
            { id: "eid344", tween: [ "style", "${_pg1Squirrel}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 250, easing: "easeOutQuad" },
            { id: "eid388", tween: [ "style", "${_pg1Rooster}", "opacity", '1', { fromValue: '0'}], position: 3140, duration: 250, easing: "easeOutQuad" },
            { id: "eid583", tween: [ "style", "${_pg1Sunshine}", "clip", [0,1024,600,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,194,-10,0]}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid409", tween: [ "style", "${_pg1RightMountain2}", "left", '0px', { fromValue: '1027px'}], position: 500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid400", tween: [ "style", "${_pg1Rabbit}", "opacity", '1', { fromValue: '0'}], position: 2890, duration: 250, easing: "easeOutQuad" },
            { id: "eid368", tween: [ "transform", "${_pg1Rooster}", "scaleY", '1', { fromValue: '-0.01'}], position: 3140, duration: 250, easing: "easeOutQuad" },
            { id: "eid340", tween: [ "transform", "${_pg1BigGrass}", "scaleY", '1', { fromValue: '-0.04'}], position: 1562, duration: 1086, easing: "easeOutElastic" },
            { id: "eid386", tween: [ "style", "${_pg1Goat}", "opacity", '1', { fromValue: '0'}], position: 2390, duration: 250, easing: "easeOutQuad" },
            { id: "eid374", tween: [ "transform", "${_pg1Dog2}", "scaleY", '1', { fromValue: '-0.01'}], position: 2250, duration: 250, easing: "easeOutQuad" },
            { id: "eid362", tween: [ "style", "${_pg1Lion}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250, easing: "easeOutQuad" },
            { id: "eid506", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 750 }         ]
      }
   }
},
"Bird": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Bird',
      type: 'image',
      rect: ['500px','-180px','132px','143px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Bird.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Bird}": [
            ["style", "top", '-180px'],
            ["style", "left", '500px'],
            ["transform", "rotateZ", '-31deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '143px'],
            ["style", "width", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         labels: {
            "loopBirdFly": 0
         },
         timeline: [
            { id: "eid233", tween: [ "style", "${_pg1Bird}", "top", '71px', { fromValue: '-180px'}], position: 1000, duration: 456 },
            { id: "eid239", tween: [ "style", "${_pg1Bird}", "top", '136px', { fromValue: '71px'}], position: 1456, duration: 271 },
            { id: "eid236", tween: [ "style", "${_pg1Bird}", "top", '192.03px', { fromValue: '136px'}], position: 1727, duration: 437 },
            { id: "eid242", tween: [ "style", "${_pg1Bird}", "top", '196px', { fromValue: '192.03px'}], position: 2164, duration: 290 },
            { id: "eid238", tween: [ "style", "${_pg1Bird}", "top", '181px', { fromValue: '196px'}], position: 2455, duration: 271 },
            { id: "eid243", tween: [ "style", "${_pg1Bird}", "top", '58px', { fromValue: '181px'}], position: 2725, duration: 275 },
            { id: "eid246", tween: [ "transform", "${_pg1Bird}", "rotateZ", '10deg', { fromValue: '-31deg'}], position: 1000, duration: 978, easing: "easeOutQuad" },
            { id: "eid245", tween: [ "transform", "${_pg1Bird}", "rotateZ", '62deg', { fromValue: '10deg'}], position: 1978, duration: 1022, easing: "easeOutQuad" },
            { id: "eid234", tween: [ "style", "${_pg1Bird}", "left", '305.22px', { fromValue: '500px'}], position: 1000, duration: 456 },
            { id: "eid240", tween: [ "style", "${_pg1Bird}", "left", '180px', { fromValue: '305.22px'}], position: 1456, duration: 271 },
            { id: "eid235", tween: [ "style", "${_pg1Bird}", "left", '105.92px', { fromValue: '180px'}], position: 1727, duration: 437 },
            { id: "eid241", tween: [ "style", "${_pg1Bird}", "left", '50px', { fromValue: '105.92px'}], position: 2164, duration: 290 },
            { id: "eid237", tween: [ "style", "${_pg1Bird}", "left", '-446px', { fromValue: '50px'}], position: 2455, duration: 545, easing: "easeOutQuad" }         ]
      }
   }
},
"skyBG": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'sky2',
      type: 'image',
      rect: ['0px','0px','6353px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sky.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sky2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '6353px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 90000,
         autoPlay: true,
         labels: {
            "loopBG": 0
         },
         timeline: [
            { id: "eid411", tween: [ "style", "${_sky2}", "left", '-5326px', { fromValue: '0px'}], position: 0, duration: 90000 }         ]
      }
   }
},
"clouds": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"clouds_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"clouds_2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"clouds_3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"clouds_4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"clouds_5": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1Cloud1',
      type: 'image',
      rect: ['0px','0px','279px','139px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1Cloud1.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1Cloud1}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '279px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"buddhaShine": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1BuddhaShine2',
      type: 'image',
      rect: ['0px','0px','316px','228px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg1BuddhaShine.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1BuddhaShine2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1.05'],
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '228px'],
            ["style", "width", '316px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "loopBuddhaShine": 0
         },
         timeline: [
            { id: "eid558", tween: [ "transform", "${_pg1BuddhaShine2}", "scaleX", '1', { fromValue: '1.05'}], position: 0, duration: 747, easing: "easeOutQuad" },
            { id: "eid566", tween: [ "transform", "${_pg1BuddhaShine2}", "scaleX", '1.05', { fromValue: '1'}], position: 747, duration: 753, easing: "easeOutQuad" },
            { id: "eid560", tween: [ "transform", "${_pg1BuddhaShine2}", "scaleY", '1', { fromValue: '1.05'}], position: 0, duration: 747, easing: "easeOutQuad" },
            { id: "eid567", tween: [ "transform", "${_pg1BuddhaShine2}", "scaleY", '1.05', { fromValue: '1'}], position: 747, duration: 753, easing: "easeOutQuad" },
            { id: "eid570", tween: [ "style", "${_pg1BuddhaShine2}", "opacity", '0', { fromValue: '0.9978809952735901'}], position: 0, duration: 746, easing: "easeOutQuad" },
            { id: "eid573", tween: [ "style", "${_pg1BuddhaShine2}", "opacity", '1', { fromValue: '0'}], position: 747, duration: 753, easing: "easeOutQuad" }         ]
      }
   }
},
"page2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg2BG',
      type: 'image',
      rect: ['0px','0px','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2BG.svg','0px','0px']
   },
   {
      id: 'Clock',
      type: 'rect',
      rect: ['-60','-8','auto','auto','auto','auto']
   },
   {
      id: 'pg2Rat',
      type: 'image',
      rect: ['334px','145px','808px','517px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2Rat.svg','0px','0px']
   },
   {
      id: 'questionMark',
      type: 'rect',
      rect: ['342','224','auto','auto','auto','auto']
   },
   {
      id: 'questionMark_1',
      type: 'rect',
      rect: ['502','196','auto','auto','auto','auto']
   },
   {
      transform: [{1:0,0:0},{},{},['0.3','0.3']],
      rect: ['-703px','0px','1973px','923px','auto','auto'],
      id: 'box2',
      opacity: 0.6640625,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/box.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['31px','371px','506px','181px','auto','auto'],
      id: 'Text2',
      text: 'The Rat has promised the Cat to wake him up in the morning so they can go to the race together. But the Rat couldn\'t remember. He tries to recall but he will soon be late to the race. Help the Rat to clear off his mind!',
      align: 'left',
      font: ['Annie Use Your Telescope, cursive',24,'rgba(0,0,0,1)','900','none','normal']
   }],
   symbolInstances: [
   {
      id: 'Clock',
      symbolName: 'Clock'
   },
   {
      id: 'questionMark',
      symbolName: 'questionMark'
   },
   {
      id: 'questionMark_1',
      symbolName: 'questionMark_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_questionMark_1}": [
            ["style", "top", '165.24px'],
            ["transform", "scaleY", '0.67'],
            ["transform", "rotateZ", '-6deg'],
            ["transform", "scaleX", '0.67'],
            ["style", "opacity", '0'],
            ["style", "left", '462.45px']
         ],
         "${_box2}": [
            ["style", "top", '-630.12px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "scaleX", '0.3'],
            ["style", "height", '923.28332519531px'],
            ["style", "opacity", '0'],
            ["style", "left", '-702.62px'],
            ["style", "width", '1973.2833251953px']
         ],
         "${_pg2BG}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pg2Rat}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '1032px'],
            ["style", "top", '148px']
         ],
         "${_questionMark}": [
            ["style", "top", '250.88px'],
            ["style", "opacity", '0'],
            ["style", "left", '348px'],
            ["transform", "rotateZ", '-49deg']
         ],
         "${_Text2}": [
            ["style", "top", '-259px'],
            ["style", "width", '506px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '900'],
            ["style", "font-family", 'Annie Use Your Telescope, cursive'],
            ["style", "left", '30.96px'],
            ["style", "font-size", '26px']
         ],
         "${symbolSelector}": [
            ["style", "height", '662px'],
            ["style", "width", '1142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: false,
         timeline: [
            { id: "eid795", tween: [ "style", "${_Text2}", "left", '31px', { fromValue: '30.96px'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid760", tween: [ "style", "${_questionMark}", "opacity", '1', { fromValue: '0'}], position: 1900, duration: 750, easing: "easeOutQuad" },
            { id: "eid694", tween: [ "style", "${_pg2Rat}", "left", '334px', { fromValue: '1032px'}], position: 515, duration: 985, easing: "easeOutQuad" },
            { id: "eid799", tween: [ "style", "${_box2}", "top", '-0.12px', { fromValue: '-630.12px'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid762", tween: [ "style", "${_questionMark_1}", "opacity", '1', { fromValue: '0'}], position: 1900, duration: 750, easing: "easeOutQuad" },
            { id: "eid797", tween: [ "style", "${_Text2}", "top", '371px', { fromValue: '-259px'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid803", tween: [ "style", "${_box2}", "opacity", '0.6640625', { fromValue: '0'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid692", tween: [ "style", "${_pg2Rat}", "top", '145px', { fromValue: '148px'}], position: 515, duration: 985, easing: "easeOutQuad" },
            { id: "eid696", tween: [ "style", "${_pg2Rat}", "opacity", '1', { fromValue: '0'}], position: 628, duration: 872, easing: "easeOutQuad" },
            { id: "eid801", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid725", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_questionMark}', [] ], ""], position: 1900 },
            { id: "eid726", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_questionMark_1}', [] ], ""], position: 1900 }         ]
      }
   }
},
"Clock": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg2Clock',
      type: 'image',
      rect: ['0px','0px','377px','491px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2Clock.svg','0px','0px']
   },
   {
      id: 'clockSecond',
      type: 'rect',
      rect: ['176','81','auto','auto','auto','auto']
   },
   {
      id: 'pg2ClockMinute',
      type: 'image',
      rect: ['168px','81px','31px','123px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2ClockMinute.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'clockSecond',
      symbolName: 'clockSecond'
   }   ]
   },
   states: {
      "Base State": {
         "${_pg2ClockMinute}": [
            ["style", "top", '81px'],
            ["style", "-webkit-transform-origin", [51.11,89.16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [51.11,89.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [51.11,89.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [51.11,89.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [51.11,89.16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '168px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_pg2Clock}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '491px'],
            ["style", "width", '377px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 180000,
         autoPlay: true,
         timeline: [
            { id: "eid653", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 58864, duration: 0, easing: "easeOutQuad" },
            { id: "eid654", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '11deg', { fromValue: '0deg'}], position: 60000, duration: 0, easing: "easeOutQuad" },
            { id: "eid656", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '11deg', { fromValue: '11deg'}], position: 118741, duration: 0, easing: "easeOutQuad" },
            { id: "eid657", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '22deg', { fromValue: '11deg'}], position: 120000, duration: 0, easing: "easeOutQuad" },
            { id: "eid659", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '22deg', { fromValue: '22deg'}], position: 178968, duration: 0, easing: "easeOutQuad" },
            { id: "eid660", tween: [ "transform", "${_pg2ClockMinute}", "rotateZ", '33deg', { fromValue: '22deg'}], position: 180000, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"clockSecond": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','16px','114px','auto','auto'],
      id: 'pg2ClockSecond',
      transform: [{1:0,0:0},['39deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg2ClockSecond.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '16px']
         ],
         "${_pg2ClockSecond}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [57.36,93.86], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [57.36,93.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [57.36,93.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [57.36,93.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [57.36,93.86],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 60000,
         autoPlay: true,
         labels: {
            "loopSecond": 0
         },
         timeline: [
            { id: "eid647", tween: [ "transform", "${_pg2ClockSecond}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 60000 }         ]
      }
   }
},
"questionMark": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','130px','256px','auto','auto'],
      id: 'pg2Question',
      transform: [{1:0,0:0},['0deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg2Question.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '256px'],
            ["style", "width", '130px']
         ],
         "${_pg2Question}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "loopQuestion": 0
         },
         timeline: [
            { id: "eid705", tween: [ "transform", "${_pg2Question}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid709", tween: [ "transform", "${_pg2Question}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 250, duration: 0, easing: "easeOutElastic" },
            { id: "eid710", tween: [ "transform", "${_pg2Question}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 500, duration: 0, easing: "easeOutElastic" }         ]
      }
   }
},
"questionMark_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','130px','256px','auto','auto'],
      id: 'pg2Question',
      transform: [{1:0,0:0},['0deg']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg2Question.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg2Question}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '256px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "loopQuestion": 0
         },
         timeline: [
            { id: "eid705", tween: [ "transform", "${_pg2Question}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeOutElastic" },
            { id: "eid709", tween: [ "transform", "${_pg2Question}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 250, duration: 0, easing: "easeOutElastic" },
            { id: "eid710", tween: [ "transform", "${_pg2Question}", "rotateZ", '0deg', { fromValue: '-20deg'}], position: 500, duration: 0, easing: "easeOutElastic" }         ]
      }
   }
},
"page2B": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg2BG2',
      type: 'image',
      rect: ['0px','0px','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2BG2.jpg','0px','0px']
   },
   {
      id: 'pg2Alarm',
      type: 'image',
      rect: ['478px','312px','227px','183px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2Alarm.svg','0px','0px']
   },
   {
      id: 'Clock',
      type: 'rect',
      rect: ['410','36','auto','auto','auto','auto']
   },
   {
      id: 'sleepingCat',
      type: 'rect',
      rect: ['592','144','auto','auto','auto','auto']
   },
   {
      id: 'Zzz',
      type: 'rect',
      rect: ['532','198','auto','auto','auto','auto']
   },
   {
      transform: [{1:0,0:0},{},{},['0.53','0.53']],
      rect: ['-201px','301px','880px','338px','auto','auto'],
      id: 'box',
      opacity: 0.640625,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/box.png','0px','0px']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'The Rat goes off without the Cat. Open the door for the Rat so the Rat can go out quietly.',
      rect: ['50px','412px','406px','147px','auto','auto'],
      font: ['Annie Use Your Telescope, cursive',24,'rgba(0,0,0,1)','900','none','']
   }],
   symbolInstances: [
   {
      id: 'Clock',
      symbolName: 'Clock'
   },
   {
      id: 'Zzz',
      symbolName: 'Zzz'
   },
   {
      id: 'sleepingCat',
      symbolName: 'sleepingCat'
   }   ]
   },
   states: {
      "Base State": {
         "${_Zzz}": [
            ["style", "left", '536px'],
            ["style", "top", '236px']
         ],
         "${_pg2BG2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "-webkit-transform-origin", [46.53,-21.78], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [46.53,-21.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [46.53,-21.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [46.53,-21.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [46.53,-21.78],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "font-weight", '900'],
            ["style", "left", '40px'],
            ["style", "width", '406px'],
            ["style", "top", '412px'],
            ["transform", "scaleY", '0'],
            ["style", "height", '147px'],
            ["style", "font-family", 'Annie Use Your Telescope, cursive'],
            ["style", "opacity", '0'],
            ["style", "font-size", '26px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '1096px']
         ],
         "${_Clock}": [
            ["transform", "scaleX", '0.27'],
            ["style", "top", '-161.52px'],
            ["style", "left", '308.6px'],
            ["transform", "scaleY", '0.27']
         ],
         "${_sleepingCat}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0']
         ],
         "${_pg2Alarm}": [
            ["style", "left", '1035px'],
            ["style", "top", '312px']
         ],
         "${_box}": [
            ["style", "top", '379.98px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "height", '337.76118440448px'],
            ["transform", "scaleX", '0.53'],
            ["style", "opacity", '0'],
            ["style", "left", '-200.94px'],
            ["style", "width", '879.70001220703px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16592,
         autoPlay: true,
         timeline: [
            { id: "eid853", tween: [ "style", "${_Zzz}", "left", '536px', { fromValue: '536px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid950", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid814", tween: [ "transform", "${_Clock}", "scaleX", '0.27', { fromValue: '0.27'}], position: 16592, duration: 0, easing: "easeOutQuad" },
            { id: "eid858", tween: [ "transform", "${_sleepingCat}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 1000, easing: "easeOutElastic" },
            { id: "eid864", tween: [ "style", "${_pg2Alarm}", "left", '478px', { fromValue: '1035px'}], position: 750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid815", tween: [ "transform", "${_Clock}", "scaleY", '0.27', { fromValue: '0.27'}], position: 16592, duration: 0, easing: "easeOutQuad" },
            { id: "eid942", tween: [ "style", "${_box}", "top", '379.99px', { fromValue: '379.98px'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid952", tween: [ "transform", "${_box}", "scaleY", '0.53', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid817", tween: [ "style", "${_Clock}", "top", '-161.52px', { fromValue: '-161.52px'}], position: 16592, duration: 0, easing: "easeOutQuad" },
            { id: "eid940", tween: [ "style", "${_box}", "left", '-194.97px', { fromValue: '-200.94px'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid956", tween: [ "style", "${_box}", "opacity", '0.640625', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid954", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutBack" },
            { id: "eid854", tween: [ "style", "${_Zzz}", "top", '236px', { fromValue: '236px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid816", tween: [ "style", "${_Clock}", "left", '308.6px', { fromValue: '308.6px'}], position: 16592, duration: 0, easing: "easeOutQuad" },
            { id: "eid881", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Zzz}', [] ], ""], position: 1000 }         ]
      }
   }
},
"sleepingCat": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg2Cat',
      type: 'image',
      rect: ['0px','0px','568px','415px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2Cat.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pg2SleepingBubble',
      opacity: 1,
      rect: ['50px','181px','63px','54px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg2SleepingBubble.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg2SleepingBubble}": [
            ["style", "top", '181px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '50px'],
            ["style", "-webkit-transform-origin", [99.23,86.42], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [99.23,86.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [99.23,86.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [99.23,86.42],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [99.23,86.42],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pg2Cat}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '415px'],
            ["style", "width", '568px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "loopSleepingBubbles": 0
         },
         timeline: [
            { id: "eid835", tween: [ "transform", "${_pg2SleepingBubble}", "scaleY", '1.39', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid840", tween: [ "transform", "${_pg2SleepingBubble}", "scaleY", '1.82', { fromValue: '1.39'}], position: 1000, duration: 135, easing: "easeOutQuad" },
            { id: "eid833", tween: [ "transform", "${_pg2SleepingBubble}", "scaleX", '1.39', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid839", tween: [ "transform", "${_pg2SleepingBubble}", "scaleX", '1.82', { fromValue: '1.39'}], position: 1000, duration: 135, easing: "easeOutQuad" },
            { id: "eid831", tween: [ "style", "${_pg2SleepingBubble}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid838", tween: [ "style", "${_pg2SleepingBubble}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 135, easing: "easeOutQuad" }         ]
      }
   }
},
"Zzz": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'pg2Zzz',
      rect: ['0px','0px','87px','102px','auto','auto'],
      transform: [{1:0,0:0},['-41deg']],
      fill: ['rgba(0,0,0,0)','images/pg2Zzz.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pg2ZzzCopy',
      rect: ['60px','-98px','87px','102px','auto','auto'],
      transform: [{1:0,0:0},['-1deg'],{},['0.72','0.72']],
      fill: ['rgba(0,0,0,0)','images/pg2Zzz.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pg2ZzzCopy2',
      rect: ['-24px','-156px','87px','102px','auto','auto'],
      transform: [{1:0,0:0},['-48deg'],{},['0.6','0.6']],
      fill: ['rgba(0,0,0,0)','images/pg2Zzz.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg2ZzzCopy}": [
            ["style", "top", '-98px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '-1deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '60.47px']
         ],
         "${_pg2Zzz}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-41deg']
         ],
         "${_pg2ZzzCopy2}": [
            ["style", "top", '-156px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "rotateZ", '-48deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "opacity", '0'],
            ["style", "left", '-24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '102px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "loopZzz": 0
         },
         timeline: [
            { id: "eid846", tween: [ "style", "${_pg2ZzzCopy2}", "opacity", '1', { fromValue: '0'}], position: 570, duration: 351, easing: "easeOutQuad" },
            { id: "eid851", tween: [ "style", "${_pg2ZzzCopy2}", "opacity", '0', { fromValue: '1'}], position: 921, duration: 94, easing: "easeOutQuad" },
            { id: "eid844", tween: [ "style", "${_pg2ZzzCopy}", "opacity", '1', { fromValue: '0'}], position: 288, duration: 350, easing: "easeOutQuad" },
            { id: "eid850", tween: [ "style", "${_pg2ZzzCopy}", "opacity", '0', { fromValue: '1'}], position: 639, duration: 376, easing: "easeOutQuad" },
            { id: "eid842", tween: [ "style", "${_pg2Zzz}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 351, easing: "easeOutQuad" },
            { id: "eid852", tween: [ "style", "${_pg2Zzz}", "opacity", '0', { fromValue: '1'}], position: 351, duration: 664, easing: "easeOutQuad" }         ]
      }
   }
},
"page3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg3',
      type: 'image',
      rect: ['0px','0px','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg3.png','0px','0px']
   },
   {
      id: 'Fishie_1',
      type: 'rect',
      rect: ['-48','64','auto','auto','auto','auto']
   },
   {
      id: 'Fishie',
      type: 'rect',
      rect: ['29','95','auto','auto','auto','auto']
   },
   {
      id: 'FishieCopy2',
      type: 'rect',
      rect: ['29','95','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'FishieCopy2',
      symbolName: 'Fishie'
   },
   {
      id: 'Fishie',
      symbolName: 'Fishie'
   },
   {
      id: 'Fishie_1',
      symbolName: 'Fishie_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_Fishie_1}": [
            ["style", "left", '-1100px'],
            ["style", "top", '74px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '1024px']
         ],
         "${_pg3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13500,
         autoPlay: true,
         timeline: [
            { id: "eid965", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_FishieCopy2}', [0] ], ""], position: 13500 }         ]
      }
   }
},
"Fishie": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['996px','0px','966px','505px','auto','auto'],
      id: 'pg3Fishes',
      opacity: 0.21875,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg3Fishes.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg3Fishes}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.21875'],
            ["style", "left", '996px']
         ],
         "${symbolSelector}": [
            ["style", "height", '505px'],
            ["style", "width", '966px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         labels: {
            "loopFishie": 0
         },
         timeline: [
            { id: "eid958", tween: [ "style", "${_pg3Fishes}", "left", '-996px', { fromValue: '996px'}], position: 0, duration: 30000, easing: "easeOutQuad" }         ]
      }
   }
},
"Fishie_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['996px','0px','966px','505px','auto','auto'],
      id: 'pg3Fishes',
      opacity: 0.21875,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg3Fishes.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg3Fishes}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.21875'],
            ["style", "left", '996px']
         ],
         "${symbolSelector}": [
            ["style", "height", '505px'],
            ["style", "width", '966px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         timeline: [
            { id: "eid958", tween: [ "style", "${_pg3Fishes}", "left", '-996px', { fromValue: '996px'}], position: 0, duration: 30000, easing: "easeOutQuad" }         ]
      }
   }
},
"pg3Animals": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['-378px','209px','239px','220px','auto','auto'],
      id: 'pg3OxCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Ox.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['-313px','200px','270px','245px','auto','auto'],
      id: 'pg3TigerCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Tiger.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['-219px','191px','239px','234px','auto','auto'],
      id: 'pg3RabbitCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Rabbit.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['-99px','182px','279px','257px','auto','auto'],
      id: 'pg3DragonCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Dragon.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['-11px','209px','279px','225px','auto','auto'],
      id: 'pg3SnakeCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Snake.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['99px','198px','270px','225px','auto','auto'],
      id: 'pg3HorseCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Horse.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['199px','205px','239px','213px','auto','auto'],
      id: 'pg3GoatCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Goat.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['260px','200px','320px','285px','auto','auto'],
      id: 'pg3MonkeyCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Monkey.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['410px','191px','239px','228px','auto','auto'],
      id: 'pg3RoosterCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Rooster.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['490px','200px','179px','193px','auto','auto'],
      id: 'pg3DogCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Dog.svg','0px','0px']
   },
   {
      type: 'image',
      rect: ['540px','216px','230px','206px','auto','auto'],
      id: 'pg3PigCopy',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg3Pig.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg3RabbitCopy}": [
            ["style", "top", '190.68px'],
            ["style", "opacity", '1'],
            ["style", "left", '-218.97px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg3OxCopy}": [
            ["style", "top", '208.97px'],
            ["style", "opacity", '1'],
            ["style", "left", '-377.97px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg3TigerCopy}": [
            ["style", "top", '200px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '245px'],
            ["style", "opacity", '1'],
            ["style", "left", '-312.92px'],
            ["style", "width", '269.83870967742px']
         ],
         "${_pg3HorseCopy}": [
            ["style", "top", '198px'],
            ["style", "opacity", '1'],
            ["style", "left", '99.07px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg3DogCopy}": [
            ["style", "top", '200px'],
            ["style", "opacity", '1'],
            ["style", "left", '490px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg3PigCopy}": [
            ["style", "top", '216px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '206px'],
            ["style", "opacity", '1'],
            ["style", "left", '540.07px'],
            ["style", "width", '229.95348837209px']
         ],
         "${_pg3GoatCopy}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '199.07px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '620.98334503174px'],
            ["style", "width", '1199.0833320618px']
         ],
         "${_pg3MonkeyCopy}": [
            ["style", "top", '200px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '285px'],
            ["style", "opacity", '1'],
            ["style", "left", '260.23px'],
            ["style", "width", '319.76999613444px']
         ],
         "${_pg3SnakeCopy}": [
            ["style", "top", '208.93px'],
            ["style", "opacity", '1'],
            ["style", "left", '-10.92px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg3DragonCopy}": [
            ["style", "top", '182px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '257.4555984556px'],
            ["style", "opacity", '1'],
            ["style", "left", '-99px'],
            ["style", "width", '279px']
         ],
         "${_pg3RoosterCopy}": [
            ["style", "top", '191px'],
            ["style", "opacity", '1'],
            ["style", "left", '410.07px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pg3Rat2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg3RatShadow',
      type: 'image',
      rect: ['19px','175px','98px','13px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg3RatShadow.svg','0px','0px']
   },
   {
      id: 'pg3Rat2',
      type: 'image',
      rect: ['-25px','-24px','150px','190px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg3Rat2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg3Rat2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '190px'],
            ["style", "width", '150px']
         ],
         "${_pg3RatShadow}": [
            ["style", "top", '175px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '19px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "loopJump": 0
         },
         timeline: [
            { id: "eid1268", tween: [ "transform", "${_pg3RatShadow}", "scaleX", '1.19', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid1271", tween: [ "transform", "${_pg3RatShadow}", "scaleX", '1', { fromValue: '1.19'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid1269", tween: [ "transform", "${_pg3RatShadow}", "scaleY", '1.19', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid1273", tween: [ "transform", "${_pg3RatShadow}", "scaleY", '1', { fromValue: '1.19'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid1125", tween: [ "style", "${_pg3Rat2}", "top", '-49px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid1126", tween: [ "style", "${_pg3Rat2}", "top", '0px', { fromValue: '-49px'}], position: 250, duration: 250, easing: "easeInQuad" },
            { id: "eid1270", tween: [ "style", "${_pg3RatShadow}", "opacity", '0.171875', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid1272", tween: [ "style", "${_pg3RatShadow}", "opacity", '1', { fromValue: '0.171875'}], position: 250, duration: 250, easing: "easeInQuad" }         ]
      }
   }
},
"page4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg4Bg',
      type: 'image',
      rect: ['0px','0px','1024px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Bg.png','0px','0px']
   },
   {
      id: 'pg4Ground',
      type: 'image',
      rect: ['0px','0','1038px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Ground.png','0px','0px']
   },
   {
      id: 'pg4StripesOnFloor',
      type: 'image',
      rect: ['63px','479px','942px','177px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4StripesOnFloor.svg','0px','0px']
   },
   {
      id: 'pg4Crowd2',
      type: 'rect',
      rect: ['-14','29','auto','auto','auto','auto']
   },
   {
      id: 'pg4Balloon22',
      type: 'rect',
      rect: ['228','-45','auto','auto','auto','auto']
   },
   {
      id: 'pg4Cheers2Copy5',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Cheers2Copy4',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Cheers2Copy3',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Position',
      type: 'image',
      rect: ['204px','283px','615px','411px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Position.svg','0px','0px']
   },
   {
      id: 'pg4Cheers2',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Cheers2Copy',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Cheers2Copy2',
      type: 'rect',
      rect: ['284','110','auto','auto','auto','auto']
   },
   {
      id: 'pg4Ox2',
      type: 'image',
      rect: ['228px','156px','213px','287px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Ox2.svg','0px','0px']
   },
   {
      id: 'pg4Tiger3',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['598','447','auto','auto','auto','auto']
   },
   {
      id: 'pg4TigerSigh',
      type: 'image',
      rect: ['726px','284px','22px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4TigerSigh.svg','0px','0px']
   },
   {
      id: 'pg4Rat3Raise',
      type: 'image',
      rect: ['382','-1','359px','324px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Rat3Raise.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pg4Rat3',
      rect: ['382px','-1px','359px','324px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pg4Rat3.svg','0px','0px']
   },
   {
      id: 'pg4BalloonA',
      type: 'rect',
      rect: ['-69','8','auto','auto','auto','auto']
   },
   {
      id: 'pg4BalloonB2',
      type: 'rect',
      rect: ['799','72','auto','auto','auto','auto']
   },
   {
      id: 'pg4Checkered',
      type: 'image',
      rect: ['-1','492px','1025px','108px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Checkered.svg','0px','0px']
   },
   {
      id: 'pg4Animals2',
      type: 'rect',
      rect: ['390','-3','auto','auto','auto','auto']
   },
   {
      id: 'pg4Animals22',
      type: 'image',
      rect: ['169px','-34px','729px','414px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Animals2.png','0px','0px']
   },
   {
      id: 'pg4Tiger',
      type: 'image',
      rect: ['290px','96px','201px','309px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Tiger.svg','0px','0px']
   },
   {
      id: 'pg4Ox',
      type: 'image',
      rect: ['567px','96px','228px','338px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Ox.svg','0px','0px']
   },
   {
      id: 'pg4Rat22',
      type: 'image',
      rect: ['380','150','348px','432px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Rat2.svg','0px','0px']
   },
   {
      id: 'pg4Rat2',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['505','30','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      rect: ['382px','150px','324px','324px','auto','auto'],
      id: 'target3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,0)']
   },
   {
      type: 'rect',
      rect: ['426px','38px','212px','230px','auto','auto'],
      id: 'target1',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['436px','105px','204px','230px','auto','auto'],
      id: 'target2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,0)']
   },
   {
      id: 'pg4Ribbon',
      type: 'image',
      rect: ['-1px','349px','1025px','251px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Ribbon.svg','0px','0px']
   },
   {
      id: 'pg4RibbonWin',
      type: 'image',
      rect: ['-1','374px','1024px','233px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonWin.svg','0px','0px']
   },
   {
      id: 'pg4Cheers',
      type: 'rect',
      rect: ['444','204','auto','auto','auto','auto']
   },
   {
      transform: [{1:0,0:0},{},{},['0.23','0.417']],
      rect: ['-950px','235px','2467px','428px','auto','auto'],
      id: 'box',
      opacity: 0.6875,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/box.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['54px','398px','500px','122px','auto','auto'],
      id: 'Text',
      text: 'Everyone is running fast to the finishing line! Help the Rat to run faster by taping the Rat!',
      align: 'left',
      font: ['Annie Use Your Telescope, cursive',24,'rgba(0,0,0,1)','900','none','normal']
   }],
   symbolInstances: [
   {
      id: 'pg4Balloon22',
      symbolName: 'pg4Balloon2'
   },
   {
      id: 'pg4Cheers2Copy4',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4Tiger3',
      symbolName: 'pg4Tiger'
   },
   {
      id: 'pg4Rat2',
      symbolName: 'pg4Rat'
   },
   {
      id: 'pg4BalloonB2',
      symbolName: 'pg4BalloonB'
   },
   {
      id: 'pg4Cheers2Copy3',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4Cheers2Copy',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4BalloonA',
      symbolName: 'pg4BalloonA'
   },
   {
      id: 'pg4Cheers2Copy2',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4Cheers',
      symbolName: 'pg4Cheers'
   },
   {
      id: 'pg4Cheers2Copy5',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4Cheers2',
      symbolName: 'pg4Cheers2'
   },
   {
      id: 'pg4Animals2',
      symbolName: 'pg4Animals'
   },
   {
      id: 'pg4Crowd2',
      symbolName: 'pg4Crowd'
   }   ]
   },
   states: {
      "Base State": {
         "${_pg4Cheers2Copy}": [
            ["transform", "scaleX", '-0.87'],
            ["style", "top", '251px'],
            ["style", "left", '124px'],
            ["transform", "scaleY", '0.87']
         ],
         "${_pg4Balloon22}": [
            ["style", "opacity", '0']
         ],
         "${_pg4Cheers2}": [
            ["style", "top", '235px'],
            ["style", "left", '443px']
         ],
         "${_pg4BalloonA}": [
            ["style", "opacity", '0']
         ],
         "${_pg4Cheers}": [
            ["style", "opacity", '1']
         ],
         "${_pg4BalloonB2}": [
            ["style", "opacity", '0']
         ],
         "${_pg4RibbonWin}": [
            ["style", "top", '374px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px']
         ],
         "${_pg4Position}": [
            ["style", "-webkit-transform-origin", [50.41,77.62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.41,77.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.41,77.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.41,77.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.41,77.62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '283px'],
            ["style", "left", '204px'],
            ["transform", "scaleY", '0']
         ],
         "${_target3}": [
            ["style", "cursor", 'pointer'],
            ["style", "top", '-344px']
         ],
         "${_pg4Cheers2Copy3}": [
            ["style", "top", '251px'],
            ["transform", "scaleY", '0.56999'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0.7265625'],
            ["style", "left", '784px']
         ],
         "${_pg4Checkered}": [
            ["style", "top", '613.5px'],
            ["transform", "scaleY", '1.25'],
            ["transform", "scaleX", '1.25'],
            ["style", "opacity", '0'],
            ["style", "left", '0.12px'],
            ["style", "-webkit-transform-origin", [50.63,109.26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.63,109.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.63,109.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.63,109.26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.63,109.26],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pg4Tiger}": [
            ["style", "top", '96px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '290px']
         ],
         "${_box}": [
            ["style", "top", '234.58px'],
            ["transform", "scaleY", '0.4171'],
            ["transform", "scaleX", '0.23'],
            ["style", "opacity", '0'],
            ["style", "left", '-1526.2px'],
            ["style", "height", '428.19488742694px']
         ],
         "${_pg4Rat22}": [
            ["style", "top", '103px'],
            ["transform", "scaleY", '0.86'],
            ["transform", "scaleX", '0.86'],
            ["style", "opacity", '0'],
            ["style", "left", '350.62px']
         ],
         "${_pg4Ribbon}": [
            ["style", "top", '750.6px'],
            ["transform", "scaleY", '2.2'],
            ["transform", "scaleX", '2.2'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px']
         ],
         "${_pg4Rat3Raise}": [
            ["style", "opacity", '0']
         ],
         "${_pg4Cheers2Copy5}": [
            ["style", "top", '235px'],
            ["transform", "scaleY", '0.56999'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0.7265625'],
            ["style", "left", '473px']
         ],
         "${_pg4StripesOnFloor}": [
            ["style", "top", '479px'],
            ["style", "opacity", '0'],
            ["style", "left", '63px']
         ],
         "${_pg4Ground}": [
            ["style", "top", '600px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_pg4Ox2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "top", '156px']
         ],
         "${_pg4Animals22}": [
            ["style", "top", '-34px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '169px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '1024px']
         ],
         "${_pg4Rat2}": [
            ["style", "top", '36.57px'],
            ["transform", "scaleY", '0.28'],
            ["transform", "scaleX", '0.28'],
            ["style", "opacity", '0'],
            ["style", "left", '511.48px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg4Bg}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_target2}": [
            ["style", "top", '-243px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '434px']
         ],
         "${_pg4TigerSigh}": [
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.41'],
            ["transform", "scaleX", '0.41'],
            ["style", "opacity", '0'],
            ["style", "left", '719px'],
            ["style", "top", '283px']
         ],
         "${_pg4Rat3}": [
            ["style", "top", '-1px'],
            ["transform", "scaleY", '0'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '1'],
            ["style", "left", '382px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg4Ox}": [
            ["style", "top", '96px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '567px']
         ],
         "${_pg4Tiger3}": [
            ["transform", "scaleY", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '398px'],
            ["style", "width", '468px'],
            ["style", "opacity", '0'],
            ["style", "height", '122px'],
            ["style", "font-family", 'Annie Use Your Telescope, cursive'],
            ["style", "left", '-522.42px'],
            ["style", "font-size", '26px']
         ],
         "${_pg4Animals2}": [
            ["style", "top", '3.57px'],
            ["transform", "scaleY", '0.28'],
            ["transform", "scaleX", '0.28'],
            ["style", "opacity", '0'],
            ["style", "left", '396.48px']
         ],
         "${_pg4Crowd2}": [
            ["style", "opacity", '0']
         ],
         "${_target1}": [
            ["style", "top", '38px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "left", '426px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pg4Cheers2Copy2}": [
            ["style", "top", '251px'],
            ["transform", "scaleY", '0.93'],
            ["style", "left", '754px'],
            ["transform", "scaleX", '-0.93']
         ],
         "${_pg4Cheers2Copy4}": [
            ["style", "top", '251px'],
            ["transform", "scaleY", '0.56999'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0.7265625'],
            ["style", "left", '154px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: true,
         labels: {
            "playPage4": 0,
            "tapRat": 3500,
            "tapRat2": 4500,
            "tapRat3": 5500,
            "RatRaiseUp": 12000,
            "TigerSigh": 14000
         },
         timeline: [
            { id: "eid1347", tween: [ "style", "${_pg4Ox}", "top", '306.4px', { fromValue: '96px'}], position: 5500, duration: 2000, easing: "easeInQuad" },
            { id: "eid1987", tween: [ "style", "${_pg4Ox}", "top", '718.4px', { fromValue: '306.4px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1181", tween: [ "transform", "${_pg4Ribbon}", "scaleY", '1', { fromValue: '2.2'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1207", tween: [ "style", "${_box}", "top", '234.59px', { fromValue: '234.58px'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid1380", tween: [ "style", "${_box}", "top", '492.58px', { fromValue: '234.59px'}], position: 5500, duration: 458, easing: "easeOutBack" },
            { id: "eid1287", tween: [ "style", "${_target2}", "left", '436px', { fromValue: '434px'}], position: 3500, duration: 112, easing: "easeOutQuad" },
            { id: "eid1350", tween: [ "transform", "${_pg4Ox}", "scaleY", '1.6', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeInQuad" },
            { id: "eid1923", tween: [ "transform", "${_pg4TigerSigh}", "scaleY", '1.17', { fromValue: '0.41'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1927", tween: [ "transform", "${_pg4TigerSigh}", "scaleY", '1.74', { fromValue: '1.17'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1810", tween: [ "transform", "${_pg4Ox2}", "scaleY", '1', { fromValue: '0'}], position: 9470, duration: 604, easing: "easeOutElastic" },
            { id: "eid1789", tween: [ "style", "${_pg4Cheers}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeOutQuad" },
            { id: "eid1153", tween: [ "style", "${_pg4Bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2177", tween: [ "style", "${_pg4Crowd2}", "opacity", '1', { fromValue: '0'}], position: 9470, duration: 1030, easing: "easeOutQuad" },
            { id: "eid1195", tween: [ "style", "${_pg4Checkered}", "left", '-1px', { fromValue: '0.12px'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1981", tween: [ "style", "${_target3}", "top", '150px', { fromValue: '-344px'}], position: 4500, duration: 107, easing: "easeInQuad" },
            { id: "eid1982", tween: [ "style", "${_target3}", "top", '-344px', { fromValue: '150px'}], position: 5500, duration: 101, easing: "easeInQuad" },
            { id: "eid1205", tween: [ "style", "${_box}", "left", '-949.8px', { fromValue: '-1526.2px'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid1886", tween: [ "style", "${_pg4Rat3Raise}", "opacity", '1', { fromValue: '0.000000'}], position: 12000, duration: 420, easing: "easeOutElastic" },
            { id: "eid1903", tween: [ "style", "${_pg4Rat3Raise}", "opacity", '0.000000', { fromValue: '1'}], position: 12420, duration: 410, easing: "easeOutElastic" },
            { id: "eid1887", tween: [ "style", "${_pg4Rat3Raise}", "opacity", '1', { fromValue: '0.000000'}], position: 12830, duration: 420, easing: "easeOutElastic" },
            { id: "eid1904", tween: [ "style", "${_pg4Rat3Raise}", "opacity", '0', { fromValue: '1'}], position: 13250, duration: 420, easing: "easeOutElastic" },
            { id: "eid1856", tween: [ "style", "${_pg4Balloon22}", "opacity", '1', { fromValue: '0'}], position: 9652, duration: 500, easing: "easeOutQuad" },
            { id: "eid1352", tween: [ "transform", "${_pg4Tiger}", "scaleY", '1.6', { fromValue: '1'}], position: 5500, duration: 2500, easing: "easeInQuad" },
            { id: "eid1873", tween: [ "style", "${_pg4BalloonA}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 402, easing: "easeOutQuad" },
            { id: "eid1881", tween: [ "style", "${_pg4BalloonA}", "opacity", '0.99000000953674', { fromValue: '1'}], position: 9652, duration: 410, easing: "easeOutElastic" },
            { id: "eid1197", tween: [ "transform", "${_pg4Checkered}", "scaleX", '1', { fromValue: '1.25'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1812", tween: [ "transform", "${_pg4Rat3}", "scaleY", '1', { fromValue: '0'}], position: 9366, duration: 604, easing: "easeOutElastic" },
            { id: "eid1217", tween: [ "style", "${_pg4Animals2}", "top", '27px', { fromValue: '3.57px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1281", tween: [ "style", "${_pg4Animals2}", "top", '47px', { fromValue: '27px'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1292", tween: [ "style", "${_pg4Animals2}", "top", '77px', { fromValue: '47px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1357", tween: [ "style", "${_pg4Animals2}", "top", '247px', { fromValue: '77px'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1791", tween: [ "style", "${_pg4Animals2}", "top", '883px', { fromValue: '247px'}], position: 8250, duration: 113, easing: "easeInQuad" },
            { id: "eid1989", tween: [ "style", "${_pg4Animals2}", "top", '1295.02px', { fromValue: '883px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1802", tween: [ "style", "${_pg4Ground}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid1362", tween: [ "transform", "${_pg4Animals22}", "scaleY", '1.72', { fromValue: '1'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1901", tween: [ "style", "${_pg4Rat3}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 420, easing: "easeOutElastic" },
            { id: "eid1900", tween: [ "style", "${_pg4Rat3}", "opacity", '1', { fromValue: '0'}], position: 12420, duration: 410, easing: "easeOutElastic" },
            { id: "eid1902", tween: [ "style", "${_pg4Rat3}", "opacity", '0', { fromValue: '1'}], position: 12830, duration: 420, easing: "easeOutElastic" },
            { id: "eid1905", tween: [ "style", "${_pg4Rat3}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 420, easing: "easeOutElastic" },
            { id: "eid1370", tween: [ "style", "${_pg4Ox}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 458, easing: "easeInQuad" },
            { id: "eid1355", tween: [ "style", "${_pg4Ox}", "opacity", '0', { fromValue: '1'}], position: 6605, duration: 895, easing: "easeInQuad" },
            { id: "eid1201", tween: [ "style", "${_pg4Checkered}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1332", tween: [ "transform", "${_pg4Rat22}", "scaleX", '1.15999', { fromValue: '0.86'}], position: 5500, duration: 1357, easing: "easeInQuad" },
            { id: "eid1361", tween: [ "transform", "${_pg4Animals22}", "scaleX", '1.72', { fromValue: '1'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1193", tween: [ "style", "${_pg4Checkered}", "top", '492px', { fromValue: '613.5px'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1915", tween: [ "style", "${_pg4TigerSigh}", "left", '729px', { fromValue: '719px'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1924", tween: [ "style", "${_pg4TigerSigh}", "left", '753.63px', { fromValue: '729px'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1189", tween: [ "style", "${_pg4Ribbon}", "left", '0px', { fromValue: '-1px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid1183", tween: [ "style", "${_pg4Ribbon}", "left", '-1px', { fromValue: '0px'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1365", tween: [ "style", "${_pg4Animals22}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 458, easing: "easeInQuad" },
            { id: "eid1368", tween: [ "style", "${_pg4Animals22}", "opacity", '0', { fromValue: '1'}], position: 5958, duration: 2292, easing: "easeInQuad" },
            { id: "eid1219", tween: [ "transform", "${_pg4Animals2}", "scaleX", '1', { fromValue: '0.28'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1308", tween: [ "transform", "${_pg4Animals2}", "scaleX", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid1309", tween: [ "transform", "${_pg4Animals2}", "scaleX", '1.05', { fromValue: '1'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1295", tween: [ "transform", "${_pg4Animals2}", "scaleX", '1.22', { fromValue: '1.05'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1359", tween: [ "transform", "${_pg4Animals2}", "scaleX", '1.72', { fromValue: '1.22'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1351", tween: [ "transform", "${_pg4Tiger}", "scaleX", '1.6', { fromValue: '1'}], position: 5500, duration: 2500, easing: "easeInQuad" },
            { id: "eid1343", tween: [ "style", "${_pg4Rat22}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 678, easing: "easeInQuad" },
            { id: "eid1344", tween: [ "style", "${_pg4Rat22}", "opacity", '0', { fromValue: '1'}], position: 6517, duration: 339, easing: "easeInQuad" },
            { id: "eid1225", tween: [ "transform", "${_pg4Rat2}", "scaleY", '1', { fromValue: '0.28'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1283", tween: [ "transform", "${_pg4Rat2}", "scaleY", '1.14999', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1294", tween: [ "transform", "${_pg4Rat2}", "scaleY", '1.5', { fromValue: '1.14999'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1335", tween: [ "transform", "${_pg4Rat2}", "scaleY", '2.09', { fromValue: '1.5'}], position: 5500, duration: 1000, easing: "easeInQuad" },
            { id: "eid1228", tween: [ "style", "${_pg4Rat2}", "left", '503px', { fromValue: '511.48px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1983", tween: [ "style", "${_pg4Rat2}", "left", '503.01px', { fromValue: '503px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1199", tween: [ "transform", "${_pg4Checkered}", "scaleY", '1', { fromValue: '1.25'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1795", tween: [ "transform", "${_pg4Checkered}", "scaleY", '1', { fromValue: '1'}], position: 2250, duration: 0, easing: "easeInSine" },
            { id: "eid1796", tween: [ "transform", "${_pg4Checkered}", "scaleY", '0', { fromValue: '1'}], position: 7500, duration: 863, easing: "easeOutQuad" },
            { id: "eid1218", tween: [ "transform", "${_pg4Animals2}", "scaleY", '1', { fromValue: '0.28'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1311", tween: [ "transform", "${_pg4Animals2}", "scaleY", '1.05', { fromValue: '1'}], position: 3500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1296", tween: [ "transform", "${_pg4Animals2}", "scaleY", '1.22', { fromValue: '1.05'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1360", tween: [ "transform", "${_pg4Animals2}", "scaleY", '1.72', { fromValue: '1.22'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1209", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid1322", tween: [ "style", "${_pg4Rat22}", "top", '263px', { fromValue: '103px'}], position: 5500, duration: 1357, easing: "easeInQuad" },
            { id: "eid1988", tween: [ "style", "${_pg4Rat22}", "top", '675.02px', { fromValue: '263px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1871", tween: [ "style", "${_pg4BalloonB2}", "opacity", '1', { fromValue: '0'}], position: 9366, duration: 402, easing: "easeOutQuad" },
            { id: "eid1913", tween: [ "style", "${_pg4TigerSigh}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1928", tween: [ "style", "${_pg4TigerSigh}", "opacity", '0', { fromValue: '1'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1224", tween: [ "style", "${_pg4Rat2}", "top", '60px', { fromValue: '36.57px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1280", tween: [ "style", "${_pg4Rat2}", "top", '110px', { fromValue: '60px'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1291", tween: [ "style", "${_pg4Rat2}", "top", '180px', { fromValue: '110px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1323", tween: [ "style", "${_pg4Rat2}", "top", '300px', { fromValue: '180px'}], position: 5500, duration: 1000, easing: "easeInQuad" },
            { id: "eid1984", tween: [ "style", "${_pg4Rat2}", "top", '712.02px', { fromValue: '300px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1373", tween: [ "style", "${_pg4RibbonWin}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 750, easing: "easeOutQuad" },
            { id: "eid1374", tween: [ "style", "${_pg4RibbonWin}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid1187", tween: [ "style", "${_pg4Ribbon}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1371", tween: [ "style", "${_pg4Ribbon}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 750, easing: "easeOutQuad" },
            { id: "eid1227", tween: [ "style", "${_pg4Rat2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1337", tween: [ "style", "${_pg4Rat2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid1203", tween: [ "style", "${_Text}", "left", '54px', { fromValue: '-522.42px'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid1378", tween: [ "style", "${_Text}", "left", '53.99px', { fromValue: '54px'}], position: 5500, duration: 458, easing: "easeOutBack" },
            { id: "eid1917", tween: [ "style", "${_pg4TigerSigh}", "top", '304px', { fromValue: '283px'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1925", tween: [ "style", "${_pg4TigerSigh}", "top", '311px', { fromValue: '304px'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1376", tween: [ "style", "${_pg4RibbonWin}", "top", '629px', { fromValue: '374px'}], position: 7750, duration: 97, easing: "easeOutQuad" },
            { id: "eid1190", tween: [ "style", "${_pg4Ribbon}", "top", '481px', { fromValue: '750.6px'}], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid1185", tween: [ "style", "${_pg4Ribbon}", "top", '349px', { fromValue: '481px'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1377", tween: [ "style", "${_pg4Ribbon}", "top", '611px', { fromValue: '349px'}], position: 7750, duration: 97, easing: "easeOutQuad" },
            { id: "eid1354", tween: [ "style", "${_pg4Tiger}", "left", '292px', { fromValue: '290px'}], position: 5500, duration: 2500, easing: "easeInQuad" },
            { id: "eid1990", tween: [ "style", "${_pg4Tiger}", "left", '292.01px', { fromValue: '292px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1221", tween: [ "style", "${_pg4Animals2}", "left", '388px', { fromValue: '396.48px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1790", tween: [ "style", "${_pg4Animals2}", "left", '388.44px', { fromValue: '388px'}], position: 8250, duration: 113, easing: "easeInQuad" },
            { id: "eid1151", tween: [ "transform", "${_pg4Bg}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid1799", tween: [ "transform", "${_pg4Bg}", "scaleY", '0', { fromValue: '1'}], position: 7887, duration: 863, easing: "easeInSine" },
            { id: "eid1289", tween: [ "style", "${_target2}", "top", '105px', { fromValue: '-243px'}], position: 3500, duration: 112, easing: "easeOutQuad" },
            { id: "eid1290", tween: [ "style", "${_target2}", "top", '-250px', { fromValue: '105px'}], position: 4500, duration: 107, easing: "easeOutQuad" },
            { id: "eid1375", tween: [ "style", "${_pg4RibbonWin}", "left", '0px', { fromValue: '-1px'}], position: 7750, duration: 97, easing: "easeOutQuad" },
            { id: "eid1211", tween: [ "style", "${_box}", "opacity", '0.6875', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBack" },
            { id: "eid1285", tween: [ "style", "${_target1}", "top", '-250px', { fromValue: '38px'}], position: 3500, duration: 112, easing: "easeOutQuad" },
            { id: "eid1353", tween: [ "style", "${_pg4Ox}", "left", '569px', { fromValue: '567px'}], position: 5500, duration: 2000, easing: "easeInQuad" },
            { id: "eid1986", tween: [ "style", "${_pg4Ox}", "left", '569.01px', { fromValue: '569px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1379", tween: [ "style", "${_Text}", "top", '656px', { fromValue: '398px'}], position: 5500, duration: 458, easing: "easeOutBack" },
            { id: "eid1226", tween: [ "transform", "${_pg4Rat2}", "scaleX", '1', { fromValue: '0.28'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1282", tween: [ "transform", "${_pg4Rat2}", "scaleX", '1.14999', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1293", tween: [ "transform", "${_pg4Rat2}", "scaleX", '1.5', { fromValue: '1.14999'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid1334", tween: [ "transform", "${_pg4Rat2}", "scaleX", '2.09', { fromValue: '1.5'}], position: 5500, duration: 1000, easing: "easeInQuad" },
            { id: "eid1333", tween: [ "transform", "${_pg4Rat22}", "scaleY", '1.15999', { fromValue: '0.86'}], position: 5500, duration: 1357, easing: "easeInQuad" },
            { id: "eid1851", tween: [ "style", "${_pg4StripesOnFloor}", "opacity", '1', { fromValue: '0'}], position: 10324, duration: 948, easing: "easeOutQuad" },
            { id: "eid1804", tween: [ "style", "${_pg4Ground}", "top", '0px', { fromValue: '600px'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid1806", tween: [ "transform", "${_pg4Position}", "scaleY", '1', { fromValue: '0'}], position: 9000, duration: 750, easing: "easeOutElastic" },
            { id: "eid1369", tween: [ "style", "${_pg4Tiger}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 458, easing: "easeInQuad" },
            { id: "eid1356", tween: [ "style", "${_pg4Tiger}", "opacity", '0', { fromValue: '1'}], position: 6882, duration: 1118, easing: "easeInQuad" },
            { id: "eid1349", tween: [ "transform", "${_pg4Ox}", "scaleX", '1.6', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeInQuad" },
            { id: "eid1792", tween: [ "style", "${_pg4Animals22}", "left", '169.44px', { fromValue: '169px'}], position: 8250, duration: 113, easing: "easeInQuad" },
            { id: "eid1358", tween: [ "style", "${_pg4Animals22}", "top", '136px', { fromValue: '-34px'}], position: 5500, duration: 2750, easing: "easeInQuad" },
            { id: "eid1793", tween: [ "style", "${_pg4Animals22}", "top", '772px', { fromValue: '136px'}], position: 8250, duration: 113, easing: "easeInQuad" },
            { id: "eid1985", tween: [ "style", "${_pg4Animals22}", "top", '1184.02px', { fromValue: '772px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1921", tween: [ "transform", "${_pg4TigerSigh}", "scaleX", '1.17', { fromValue: '0.41'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1926", tween: [ "transform", "${_pg4TigerSigh}", "scaleX", '1.74', { fromValue: '1.17'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1348", tween: [ "style", "${_pg4Tiger}", "top", '306.4px', { fromValue: '96px'}], position: 5500, duration: 2500, easing: "easeInQuad" },
            { id: "eid1991", tween: [ "style", "${_pg4Tiger}", "top", '718.4px', { fromValue: '306.4px'}], position: 8500, duration: 127, easing: "easeInQuad" },
            { id: "eid1321", tween: [ "style", "${_pg4Rat22}", "left", '350.62px', { fromValue: '350.62px'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid1284", tween: [ "style", "${_target1}", "left", '428px', { fromValue: '426px'}], position: 3500, duration: 112, easing: "easeOutQuad" },
            { id: "eid1880", tween: [ "transform", "${_pg4Tiger3}", "scaleY", '1', { fromValue: '0'}], position: 9652, duration: 604, easing: "easeOutElastic" },
            { id: "eid1906", tween: [ "transform", "${_pg4Tiger3}", "scaleY", '1.06', { fromValue: '1'}], position: 14000, duration: 750, easing: "easeOutQuad" },
            { id: "eid1908", tween: [ "transform", "${_pg4Tiger3}", "scaleY", '0.92', { fromValue: '1.06'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid1909", tween: [ "transform", "${_pg4Tiger3}", "scaleY", '1', { fromValue: '0.92'}], position: 15750, duration: 1250, easing: "easeInQuad" },
            { id: "eid1179", tween: [ "transform", "${_pg4Ribbon}", "scaleX", '1', { fromValue: '2.2'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1220", tween: [ "style", "${_pg4Animals2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid1363", tween: [ "style", "${_pg4Animals2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 458, easing: "easeInQuad" },
            { id: "eid1232", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Rat2}', ['RatRunning'] ], ""], position: 750 },
            { id: "eid1233", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Animals2}', ['AnimalsRunning'] ], ""], position: 750 },
            { id: "eid1800", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers}', ['loopDrop'] ], ""], position: 5750 },
            { id: "eid1876", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4BalloonA}', ['loopBalloonA'] ], ""], position: 9470 },
            { id: "eid2178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Crowd2}', ['loopCrowd'] ], ""], position: 9470 },
            { id: "eid1877", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4BalloonB2}', ['loopBalloonB'] ], ""], position: 9585.6717854342 },
            { id: "eid1864", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2}', ['loopDrop'] ], ""], position: 9750 },
            { id: "eid1863", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Balloon22}', ['loopBalloon2'] ], ""], position: 9834 },
            { id: "eid1865", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2Copy2}', ['loopDrop'] ], ""], position: 9842.2498697224 },
            { id: "eid1867", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2Copy}', ['loopDrop'] ], ""], position: 9969.6717854342 },
            { id: "eid1866", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2Copy5}', ['loopDrop'] ], ""], position: 9969.6717854342 },
            { id: "eid1868", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2Copy3}', ['loopDrop'] ], ""], position: 10061.921655157 },
            { id: "eid1869", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg4Cheers2Copy4}', ['loopDrop'] ], ""], position: 10189.343570868 }         ]
      }
   }
},
"pg4Animals": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: {},
      rect: ['-281px','-62px','779px','329px','auto','auto'],
      id: 'pg4Animals',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg4Animals.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4Animals}": [
            ["style", "top", '-62.42px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '-281px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92.12px'],
            ["style", "width", '218.12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         labels: {
            "AnimalsRunning": 0
         },
         timeline: [
            { id: "eid1222", tween: [ "style", "${_pg4Animals}", "top", '-68px', { fromValue: '-62.42px'}], position: 0, duration: 125, easing: "easeOutQuad" },
            { id: "eid1223", tween: [ "style", "${_pg4Animals}", "top", '-62.42px', { fromValue: '-68px'}], position: 125, duration: 125, easing: "easeOutQuad" }         ]
      }
   }
},
"pg4Rat": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: {},
      rect: ['-73px','-23px','224px','242px','auto','auto'],
      id: 'pg4Rat',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pg4Rat.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4Rat}": [
            ["style", "top", '-23.12px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '-73px']
         ],
         "${symbolSelector}": [
            ["style", "height", '67.76px'],
            ["style", "width", '62.72px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         labels: {
            "RatRunning": 0
         },
         timeline: [
            { id: "eid1229", tween: [ "style", "${_pg4Rat}", "top", '-30px', { fromValue: '-23.12px'}], position: 0, duration: 125, easing: "easeOutQuad" },
            { id: "eid1230", tween: [ "style", "${_pg4Rat}", "top", '-23.12px', { fromValue: '-30px'}], position: 125, duration: 125, easing: "easeOutQuad" }         ]
      }
   }
},
"pg4Cheers": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy3',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy5',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy6',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy4',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      id: 'pg4RibbonStripe',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy5',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy2',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy3',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy4',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy6',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy7',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4RibbonStripeCopy7}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-28px']
         ],
         "${_pg4RibbonStripeCopy6}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-28px']
         ],
         "${_pg4RibbonStripeCopy4}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "opacity", '0'],
            ["style", "left", '252px']
         ],
         "${_pg4RibbonStripeCopy2}": [
            ["style", "top", '-288px'],
            ["transform", "scaleY", '0.99'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.99'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${_pg4RibbonStripeCopy5}": [
            ["style", "top", '-288px'],
            ["transform", "scaleY", '1.65'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.65'],
            ["style", "opacity", '0'],
            ["style", "left", '82px']
         ],
         "${_EllipseCopy6}": [
            ["style", "top", '-265px'],
            ["style", "border-style", 'solid'],
            ["transform", "scaleY", '0.44'],
            ["style", "left", '120px'],
            ["transform", "scaleX", '0.44'],
            ["style", "opacity", '0'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '-265px'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.55'],
            ["style", "left", '-80px'],
            ["transform", "scaleX", '0.55'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["style", "top", '-265px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '10px'],
            ["style", "opacity", '0']
         ],
         "${_pg4RibbonStripeCopy3}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "opacity", '0'],
            ["style", "left", '-78px']
         ],
         "${_pg4RibbonStripe}": [
            ["style", "top", '-288px'],
            ["transform", "scaleY", '1.36'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.36'],
            ["style", "opacity", '0'],
            ["style", "left", '42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '164px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '-265px'],
            ["style", "border-style", 'solid'],
            ["transform", "scaleY", '0.66'],
            ["style", "left", '100px'],
            ["transform", "scaleX", '0.66'],
            ["style", "opacity", '0'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${_EllipseCopy5}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.44'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.44'],
            ["style", "opacity", '0'],
            ["style", "left", '20px'],
            ["style", "border-style", 'solid']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.66'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.66'],
            ["style", "border-style", 'solid'],
            ["style", "left", '100px'],
            ["style", "opacity", '0']
         ],
         "${_EllipseCopy4}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.85'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.85'],
            ["style", "opacity", '0'],
            ["style", "left", '210px'],
            ["style", "border-style", 'solid']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         labels: {
            "loopDrop": 0
         },
         timeline: [
            { id: "eid1404", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 277, duration: 138, easing: "easeOutQuad" },
            { id: "eid1405", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 828, duration: 413, easing: "easeOutQuad" },
            { id: "eid1444", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 1483, duration: 138, easing: "easeOutQuad" },
            { id: "eid1445", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 2034, duration: 413, easing: "easeOutQuad" },
            { id: "eid1619", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 2724, duration: 138, easing: "easeOutQuad" },
            { id: "eid1620", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 3274, duration: 413, easing: "easeOutQuad" },
            { id: "eid1389", tween: [ "style", "${_pg4RibbonStripeCopy2}", "top", '398px', { fromValue: '-288px'}], position: 277, duration: 1459, easing: "easeOutQuad" },
            { id: "eid1452", tween: [ "style", "${_pg4RibbonStripeCopy2}", "top", '398px', { fromValue: '-288px'}], position: 1936, duration: 1459, easing: "easeOutQuad" },
            { id: "eid1406", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 277, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1447", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 1483, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1622", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 2724, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1664", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 93, easing: "easeOutQuad" },
            { id: "eid1665", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 454, duration: 158, easing: "easeOutQuad" },
            { id: "eid1703", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 1002, duration: 93, easing: "easeOutQuad" },
            { id: "eid1704", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 1455, duration: 158, easing: "easeOutQuad" },
            { id: "eid1747", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 2009, duration: 93, easing: "easeOutQuad" },
            { id: "eid1748", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 2463, duration: 158, easing: "easeOutQuad" },
            { id: "eid1399", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 0, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1451", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 1206, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1626", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 2447, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1655", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 293, duration: 110, easing: "easeOutQuad" },
            { id: "eid1656", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 830, duration: 186, easing: "easeOutQuad" },
            { id: "eid1706", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 1295, duration: 110, easing: "easeOutQuad" },
            { id: "eid1707", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 1831, duration: 186, easing: "easeOutQuad" },
            { id: "eid1750", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 2302, duration: 110, easing: "easeOutQuad" },
            { id: "eid1751", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 2838, duration: 186, easing: "easeOutQuad" },
            { id: "eid1381", tween: [ "style", "${_pg4RibbonStripe}", "top", '398px', { fromValue: '-288px'}], position: 0, duration: 1936, easing: "easeOutQuad" },
            { id: "eid1460", tween: [ "style", "${_pg4RibbonStripe}", "top", '398px', { fromValue: '-288px'}], position: 2064, duration: 1936, easing: "easeOutQuad" },
            { id: "eid1396", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 0, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1448", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 1206, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1623", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 2447, duration: 1006, easing: "easeOutQuad" },
            { id: "eid1422", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 172, duration: 702, easing: "easeOutQuad" },
            { id: "eid1442", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 1378, duration: 702, easing: "easeOutQuad" },
            { id: "eid1617", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 2619, duration: 702, easing: "easeOutQuad" },
            { id: "eid1397", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 126, easing: "easeOutQuad" },
            { id: "eid1398", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 503, duration: 377, easing: "easeOutQuad" },
            { id: "eid1449", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 1206, duration: 126, easing: "easeOutQuad" },
            { id: "eid1450", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 1709, duration: 377, easing: "easeOutQuad" },
            { id: "eid1624", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 2447, duration: 126, easing: "easeOutQuad" },
            { id: "eid1625", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 2950, duration: 377, easing: "easeOutQuad" },
            { id: "eid1648", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 0, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1711", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 1460, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1755", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 2782, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1428", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 88, easing: "easeOutQuad" },
            { id: "eid1429", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 351, duration: 263, easing: "easeOutQuad" },
            { id: "eid1436", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 874, duration: 85, easing: "easeOutQuad" },
            { id: "eid1437", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 1214, duration: 255, easing: "easeOutQuad" },
            { id: "eid1641", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 1832, duration: 88, easing: "easeOutQuad" },
            { id: "eid1642", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 2183, duration: 263, easing: "easeOutQuad" },
            { id: "eid1645", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 2861, duration: 88, easing: "easeOutQuad" },
            { id: "eid1646", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 3212, duration: 263, easing: "easeOutQuad" },
            { id: "eid1687", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 388, duration: 56, easing: "easeOutQuad" },
            { id: "eid1688", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 661, duration: 95, easing: "easeOutQuad" },
            { id: "eid1694", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 1066, duration: 56, easing: "easeOutQuad" },
            { id: "eid1695", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 1338, duration: 95, easing: "easeOutQuad" },
            { id: "eid1757", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 1745, duration: 56, easing: "easeOutQuad" },
            { id: "eid1758", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 2017, duration: 95, easing: "easeOutQuad" },
            { id: "eid1769", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 2412, duration: 56, easing: "easeOutQuad" },
            { id: "eid1770", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 2685, duration: 95, easing: "easeOutQuad" },
            { id: "eid1781", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 3170, duration: 46, easing: "easeOutQuad" },
            { id: "eid1784", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 3319, duration: 46, easing: "easeOutQuad" },
            { id: "eid1785", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 3544, duration: 78, easing: "easeOutQuad" },
            { id: "eid1673", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 293, duration: 96, easing: "easeOutQuad" },
            { id: "eid1674", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 760, duration: 162, easing: "easeOutQuad" },
            { id: "eid1691", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 1254, duration: 96, easing: "easeOutQuad" },
            { id: "eid1692", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 1721, duration: 162, easing: "easeOutQuad" },
            { id: "eid1735", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 2218, duration: 96, easing: "easeOutQuad" },
            { id: "eid1736", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 2685, duration: 162, easing: "easeOutQuad" },
            { id: "eid1775", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 3171, duration: 56, easing: "easeOutQuad" },
            { id: "eid1778", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 3351, duration: 56, easing: "easeOutQuad" },
            { id: "eid1779", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 3623, duration: 95, easing: "easeOutQuad" },
            { id: "eid1409", tween: [ "style", "${_pg4RibbonStripeCopy5}", "top", '398px', { fromValue: '-288px'}], position: 0, duration: 1378, easing: "easeOutQuad" },
            { id: "eid1456", tween: [ "style", "${_pg4RibbonStripeCopy5}", "top", '398px', { fromValue: '-288px'}], position: 1659, duration: 1378, easing: "easeOutQuad" },
            { id: "eid1410", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 172, easing: "easeOutQuad" },
            { id: "eid1411", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '0', { fromValue: '1'}], position: 689, duration: 517, easing: "easeOutQuad" },
            { id: "eid1457", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '1', { fromValue: '0'}], position: 1659, duration: 172, easing: "easeOutQuad" },
            { id: "eid1458", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '0', { fromValue: '1'}], position: 2349, duration: 517, easing: "easeOutQuad" },
            { id: "eid1649", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 0, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1708", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 1460, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1752", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 2782, duration: 1218, easing: "easeOutQuad" },
            { id: "eid1686", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 388, duration: 446, easing: "easeOutQuad" },
            { id: "eid1693", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 1066, duration: 446, easing: "easeOutQuad" },
            { id: "eid1756", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 1745, duration: 446, easing: "easeOutQuad" },
            { id: "eid1768", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 2412, duration: 446, easing: "easeOutQuad" },
            { id: "eid1780", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 3170, duration: 149, easing: "easeOutQuad" },
            { id: "eid1783", tween: [ "style", "${_EllipseCopy6}", "top", '-265px', { fromValue: '-948px'}], position: 3319, duration: 369, easing: "easeOutQuad" },
            { id: "eid1430", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 0, duration: 702, easing: "easeOutQuad" },
            { id: "eid1438", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 874, duration: 679, easing: "easeOutQuad" },
            { id: "eid1643", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 1832, duration: 702, easing: "easeOutQuad" },
            { id: "eid1647", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 2861, duration: 702, easing: "easeOutQuad" },
            { id: "eid1651", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 153, easing: "easeOutQuad" },
            { id: "eid1653", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 743, duration: 259, easing: "easeOutQuad" },
            { id: "eid1709", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1460, duration: 153, easing: "easeOutQuad" },
            { id: "eid1710", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 2204, duration: 259, easing: "easeOutQuad" },
            { id: "eid1753", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 2782, duration: 153, easing: "easeOutQuad" },
            { id: "eid1754", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 3525, duration: 259, easing: "easeOutQuad" },
            { id: "eid1392", tween: [ "transform", "${_pg4RibbonStripeCopy2}", "rotateZ", '-141deg', { fromValue: '0deg'}], position: 277, duration: 1459, easing: "easeOutQuad" },
            { id: "eid1455", tween: [ "transform", "${_pg4RibbonStripeCopy2}", "rotateZ", '-141deg', { fromValue: '0deg'}], position: 1936, duration: 1459, easing: "easeOutQuad" },
            { id: "eid1680", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 556, duration: 56, easing: "easeOutQuad" },
            { id: "eid1681", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 828, duration: 95, easing: "easeOutQuad" },
            { id: "eid1697", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 1246, duration: 56, easing: "easeOutQuad" },
            { id: "eid1698", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 1518, duration: 95, easing: "easeOutQuad" },
            { id: "eid1760", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 1925, duration: 56, easing: "easeOutQuad" },
            { id: "eid1761", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 2198, duration: 95, easing: "easeOutQuad" },
            { id: "eid1772", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 2592, duration: 56, easing: "easeOutQuad" },
            { id: "eid1773", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 2865, duration: 95, easing: "easeOutQuad" },
            { id: "eid1412", tween: [ "transform", "${_pg4RibbonStripeCopy5}", "rotateZ", '-207deg', { fromValue: '0deg'}], position: 0, duration: 1378, easing: "easeOutQuad" },
            { id: "eid1459", tween: [ "transform", "${_pg4RibbonStripeCopy5}", "rotateZ", '-207deg', { fromValue: '0deg'}], position: 1659, duration: 1378, easing: "easeOutQuad" },
            { id: "eid1407", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 277, duration: 0, easing: "easeOutQuad" },
            { id: "eid1446", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 1483, duration: 0, easing: "easeOutQuad" },
            { id: "eid1621", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 2724, duration: 0, easing: "easeOutQuad" },
            { id: "eid1403", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 277, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1443", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 1483, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1618", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 2724, duration: 1102, easing: "easeOutQuad" },
            { id: "eid1418", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 172, duration: 702, easing: "easeOutQuad" },
            { id: "eid1439", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 1378, duration: 702, easing: "easeOutQuad" },
            { id: "eid1614", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 2619, duration: 702, easing: "easeOutQuad" },
            { id: "eid1663", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 0, duration: 743, easing: "easeOutQuad" },
            { id: "eid1702", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 1002, duration: 743, easing: "easeOutQuad" },
            { id: "eid1746", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 2009, duration: 743, easing: "easeOutQuad" },
            { id: "eid1654", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 293, duration: 878, easing: "easeOutQuad" },
            { id: "eid1705", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 1295, duration: 878, easing: "easeOutQuad" },
            { id: "eid1749", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 2302, duration: 878, easing: "easeOutQuad" },
            { id: "eid1382", tween: [ "transform", "${_pg4RibbonStripe}", "rotateZ", '122deg', { fromValue: '0deg'}], position: 0, duration: 1936, easing: "easeOutQuad" },
            { id: "eid1463", tween: [ "transform", "${_pg4RibbonStripe}", "rotateZ", '122deg', { fromValue: '0deg'}], position: 2064, duration: 1936, easing: "easeOutQuad" },
            { id: "eid1419", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 172, duration: 88, easing: "easeOutQuad" },
            { id: "eid1420", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 523, duration: 263, easing: "easeOutQuad" },
            { id: "eid1440", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 1378, duration: 88, easing: "easeOutQuad" },
            { id: "eid1441", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 1729, duration: 263, easing: "easeOutQuad" },
            { id: "eid1615", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 2619, duration: 88, easing: "easeOutQuad" },
            { id: "eid1616", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 2970, duration: 263, easing: "easeOutQuad" },
            { id: "eid1384", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 242, easing: "easeOutQuad" },
            { id: "eid1386", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '0', { fromValue: '1'}], position: 968, duration: 726, easing: "easeOutQuad" },
            { id: "eid1461", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '1', { fromValue: '0'}], position: 2064, duration: 242, easing: "easeOutQuad" },
            { id: "eid1462", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '0', { fromValue: '1'}], position: 3032, duration: 726, easing: "easeOutQuad" },
            { id: "eid1390", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '1', { fromValue: '0'}], position: 277, duration: 182, easing: "easeOutQuad" },
            { id: "eid1391", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '0', { fromValue: '1'}], position: 1006, duration: 547, easing: "easeOutQuad" },
            { id: "eid1453", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '1', { fromValue: '0'}], position: 1936, duration: 182, easing: "easeOutQuad" },
            { id: "eid1454", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '0', { fromValue: '1'}], position: 2665, duration: 547, easing: "easeOutQuad" },
            { id: "eid1427", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 0, duration: 702, easing: "easeOutQuad" },
            { id: "eid1435", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 874, duration: 679, easing: "easeOutQuad" },
            { id: "eid1640", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 1832, duration: 702, easing: "easeOutQuad" },
            { id: "eid1644", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 2861, duration: 702, easing: "easeOutQuad" },
            { id: "eid1672", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 293, duration: 765, easing: "easeOutQuad" },
            { id: "eid1690", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 1254, duration: 765, easing: "easeOutQuad" },
            { id: "eid1734", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 2218, duration: 765, easing: "easeOutQuad" },
            { id: "eid1774", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 3171, duration: 180, easing: "easeOutQuad" },
            { id: "eid1777", tween: [ "style", "${_EllipseCopy4}", "top", '-265px', { fromValue: '-948px'}], position: 3351, duration: 446, easing: "easeOutQuad" },
            { id: "eid1667", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 209, duration: 93, easing: "easeOutQuad" },
            { id: "eid1668", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 662, duration: 158, easing: "easeOutQuad" },
            { id: "eid1700", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 1161, duration: 93, easing: "easeOutQuad" },
            { id: "eid1701", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 1615, duration: 158, easing: "easeOutQuad" },
            { id: "eid1744", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 2168, duration: 93, easing: "easeOutQuad" },
            { id: "eid1745", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 2622, duration: 158, easing: "easeOutQuad" },
            { id: "eid1787", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 3170, duration: 93, easing: "easeOutQuad" },
            { id: "eid1788", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 3624, duration: 158, easing: "easeOutQuad" },
            { id: "eid1666", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 209, duration: 743, easing: "easeOutQuad" },
            { id: "eid1699", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 1161, duration: 743, easing: "easeOutQuad" },
            { id: "eid1743", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 2168, duration: 743, easing: "easeOutQuad" },
            { id: "eid1786", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 3170, duration: 743, easing: "easeOutQuad" },
            { id: "eid1679", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 556, duration: 446, easing: "easeOutQuad" },
            { id: "eid1696", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 1246, duration: 446, easing: "easeOutQuad" },
            { id: "eid1759", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 1925, duration: 446, easing: "easeOutQuad" },
            { id: "eid1771", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 2592, duration: 446, easing: "easeOutQuad" }         ]
      }
   }
},
"pg4Cheers2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy3',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy5',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy6',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      rect: ['10px','-265px','38px','40px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy4',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,229,118,1.00)']
   },
   {
      id: 'pg4RibbonStripe',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy5',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy2',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy3',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy4',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy6',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   },
   {
      id: 'pg4RibbonStripeCopy7',
      type: 'image',
      rect: ['42px','-288px','68px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4RibbonStripe.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4RibbonStripeCopy7}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-28px']
         ],
         "${_pg4RibbonStripeCopy6}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-28px']
         ],
         "${_pg4RibbonStripeCopy4}": [
            ["style", "top", '-266px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "opacity", '0'],
            ["style", "left", '252px']
         ],
         "${_pg4RibbonStripeCopy2}": [
            ["style", "top", '-288px'],
            ["transform", "scaleY", '0.99'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.99'],
            ["style", "opacity", '0'],
            ["style", "left", '192px']
         ],
         "${_pg4RibbonStripeCopy5}": [
            ["style", "top", '-287px'],
            ["transform", "scaleY", '1.65'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.65'],
            ["style", "opacity", '0'],
            ["style", "left", '82px']
         ],
         "${_EllipseCopy6}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.44'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.44'],
            ["style", "border-style", 'solid'],
            ["style", "left", '120px'],
            ["style", "opacity", '0']
         ],
         "${_EllipseCopy3}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.55'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.55'],
            ["style", "opacity", '0'],
            ["style", "left", '-80px'],
            ["style", "border-style", 'solid']
         ],
         "${_EllipseCopy4}": [
            ["style", "top", '-265px'],
            ["style", "border-style", 'solid'],
            ["transform", "scaleY", '0.85'],
            ["style", "left", '210px'],
            ["transform", "scaleX", '0.85'],
            ["style", "opacity", '0'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '117px'],
            ["style", "width", '164px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "top", '-265px']
         ],
         "${_pg4RibbonStripeCopy3}": [
            ["style", "top", '-268px'],
            ["transform", "scaleY", '0.88'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.88'],
            ["style", "opacity", '0'],
            ["style", "left", '-78px']
         ],
         "${_EllipseCopy5}": [
            ["style", "top", '-265px'],
            ["style", "border-style", 'solid'],
            ["transform", "scaleY", '0.44'],
            ["style", "left", '20px'],
            ["transform", "scaleX", '0.44'],
            ["style", "opacity", '0'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '-265px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)'],
            ["transform", "scaleY", '0.66'],
            ["style", "border-width", '1px'],
            ["transform", "scaleX", '0.66'],
            ["style", "border-style", 'solid'],
            ["style", "left", '100px'],
            ["style", "opacity", '0']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '-265px'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.66'],
            ["style", "left", '100px'],
            ["transform", "scaleX", '0.66'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["color", "background-color", 'rgba(255,229,118,1.00)']
         ],
         "${_pg4RibbonStripe}": [
            ["style", "top", '-288px'],
            ["transform", "scaleY", '1.36'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.36'],
            ["style", "opacity", '0'],
            ["style", "left", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         labels: {
            "loopDrop": 0
         },
         timeline: [
            { id: "eid1404", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 172, easing: "easeOutQuad" },
            { id: "eid1405", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 1034, duration: 517, easing: "easeOutQuad" },
            { id: "eid1444", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 1853, duration: 172, easing: "easeOutQuad" },
            { id: "eid1445", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 2542, duration: 517, easing: "easeOutQuad" },
            { id: "eid1619", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '1', { fromValue: '0'}], position: 3404, duration: 172, easing: "easeOutQuad" },
            { id: "eid1620", tween: [ "style", "${_pg4RibbonStripeCopy4}", "opacity", '0', { fromValue: '1'}], position: 4093, duration: 517, easing: "easeOutQuad" },
            { id: "eid1389", tween: [ "style", "${_pg4RibbonStripeCopy2}", "top", '398px', { fromValue: '-288px'}], position: 346, duration: 1824, easing: "easeOutQuad" },
            { id: "eid1452", tween: [ "style", "${_pg4RibbonStripeCopy2}", "top", '398px', { fromValue: '-288px'}], position: 2420, duration: 1824, easing: "easeOutQuad" },
            { id: "eid1406", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 346, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1447", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 1853, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1622", tween: [ "transform", "${_pg4RibbonStripeCopy4}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 3404, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1664", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 116, easing: "easeOutQuad" },
            { id: "eid1665", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 567, duration: 197, easing: "easeOutQuad" },
            { id: "eid1703", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 1252, duration: 116, easing: "easeOutQuad" },
            { id: "eid1704", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 1819, duration: 197, easing: "easeOutQuad" },
            { id: "eid1747", tween: [ "style", "${_EllipseCopy2}", "opacity", '1', { fromValue: '0'}], position: 2511, duration: 116, easing: "easeOutQuad" },
            { id: "eid1748", tween: [ "style", "${_EllipseCopy2}", "opacity", '0', { fromValue: '1'}], position: 3078, duration: 197, easing: "easeOutQuad" },
            { id: "eid1399", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 0, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1451", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 1508, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1626", tween: [ "transform", "${_pg4RibbonStripeCopy3}", "rotateZ", '-102deg', { fromValue: '0deg'}], position: 3059, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1655", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 367, duration: 138, easing: "easeOutQuad" },
            { id: "eid1656", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 1037, duration: 233, easing: "easeOutQuad" },
            { id: "eid1706", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 1619, duration: 138, easing: "easeOutQuad" },
            { id: "eid1707", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 2289, duration: 233, easing: "easeOutQuad" },
            { id: "eid1750", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 2878, duration: 138, easing: "easeOutQuad" },
            { id: "eid1751", tween: [ "style", "${_EllipseCopy}", "opacity", '0', { fromValue: '1'}], position: 3548, duration: 233, easing: "easeOutQuad" },
            { id: "eid1381", tween: [ "style", "${_pg4RibbonStripe}", "top", '398px', { fromValue: '-288px'}], position: 0, duration: 2420, easing: "easeOutQuad" },
            { id: "eid1460", tween: [ "style", "${_pg4RibbonStripe}", "top", '398px', { fromValue: '-288px'}], position: 2580, duration: 2420, easing: "easeOutQuad" },
            { id: "eid1396", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 0, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1448", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 1508, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1623", tween: [ "style", "${_pg4RibbonStripeCopy3}", "top", '398px', { fromValue: '-268px'}], position: 3059, duration: 1258, easing: "easeOutQuad" },
            { id: "eid1422", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 215, duration: 877, easing: "easeOutQuad" },
            { id: "eid1442", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 1723, duration: 877, easing: "easeOutQuad" },
            { id: "eid1617", tween: [ "transform", "${_pg4RibbonStripeCopy6}", "rotateZ", '176deg', { fromValue: '0deg'}], position: 3274, duration: 877, easing: "easeOutQuad" },
            { id: "eid1397", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 157, easing: "easeOutQuad" },
            { id: "eid1398", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 629, duration: 472, easing: "easeOutQuad" },
            { id: "eid1449", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 1508, duration: 157, easing: "easeOutQuad" },
            { id: "eid1450", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 2137, duration: 472, easing: "easeOutQuad" },
            { id: "eid1624", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '1', { fromValue: '0'}], position: 3059, duration: 157, easing: "easeOutQuad" },
            { id: "eid1625", tween: [ "style", "${_pg4RibbonStripeCopy3}", "opacity", '0', { fromValue: '1'}], position: 3687, duration: 472, easing: "easeOutQuad" },
            { id: "eid1648", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 0, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1711", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 1825, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1755", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '10px'}], position: 3478, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1428", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 110, easing: "easeOutQuad" },
            { id: "eid1429", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 439, duration: 329, easing: "easeOutQuad" },
            { id: "eid1436", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 1093, duration: 106, easing: "easeOutQuad" },
            { id: "eid1437", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 1517, duration: 318, easing: "easeOutQuad" },
            { id: "eid1641", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 2290, duration: 110, easing: "easeOutQuad" },
            { id: "eid1642", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 2728, duration: 329, easing: "easeOutQuad" },
            { id: "eid1645", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '1', { fromValue: '0'}], position: 3577, duration: 110, easing: "easeOutQuad" },
            { id: "eid1646", tween: [ "style", "${_pg4RibbonStripeCopy7}", "opacity", '0', { fromValue: '1'}], position: 4015, duration: 329, easing: "easeOutQuad" },
            { id: "eid1687", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 485, duration: 70, easing: "easeOutQuad" },
            { id: "eid1688", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 826, duration: 118, easing: "easeOutQuad" },
            { id: "eid1694", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 1332, duration: 70, easing: "easeOutQuad" },
            { id: "eid1695", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 1673, duration: 118, easing: "easeOutQuad" },
            { id: "eid1757", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 2181, duration: 70, easing: "easeOutQuad" },
            { id: "eid1758", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 2522, duration: 118, easing: "easeOutQuad" },
            { id: "eid1769", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 3015, duration: 70, easing: "easeOutQuad" },
            { id: "eid1770", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 3356, duration: 118, easing: "easeOutQuad" },
            { id: "eid1781", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 3963, duration: 58, easing: "easeOutQuad" },
            { id: "eid1784", tween: [ "style", "${_EllipseCopy6}", "opacity", '1', { fromValue: '0'}], position: 4149, duration: 58, easing: "easeOutQuad" },
            { id: "eid1785", tween: [ "style", "${_EllipseCopy6}", "opacity", '0', { fromValue: '1'}], position: 4430, duration: 98, easing: "easeOutQuad" },
            { id: "eid1673", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 366, duration: 120, easing: "easeOutQuad" },
            { id: "eid1674", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 950, duration: 203, easing: "easeOutQuad" },
            { id: "eid1691", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 1568, duration: 120, easing: "easeOutQuad" },
            { id: "eid1692", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 2151, duration: 203, easing: "easeOutQuad" },
            { id: "eid1735", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 2772, duration: 120, easing: "easeOutQuad" },
            { id: "eid1736", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 3356, duration: 203, easing: "easeOutQuad" },
            { id: "eid1775", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 3964, duration: 70, easing: "easeOutQuad" },
            { id: "eid1778", tween: [ "style", "${_EllipseCopy4}", "opacity", '1', { fromValue: '0'}], position: 4189, duration: 70, easing: "easeOutQuad" },
            { id: "eid1779", tween: [ "style", "${_EllipseCopy4}", "opacity", '0', { fromValue: '1'}], position: 4529, duration: 118, easing: "easeOutQuad" },
            { id: "eid1409", tween: [ "style", "${_pg4RibbonStripeCopy5}", "top", '398px', { fromValue: '-287px'}], position: 0, duration: 1723, easing: "easeOutQuad" },
            { id: "eid1456", tween: [ "style", "${_pg4RibbonStripeCopy5}", "top", '398px', { fromValue: '-288px'}], position: 2074, duration: 1723, easing: "easeOutQuad" },
            { id: "eid1410", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 215, easing: "easeOutQuad" },
            { id: "eid1411", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '0', { fromValue: '1'}], position: 862, duration: 646, easing: "easeOutQuad" },
            { id: "eid1457", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '1', { fromValue: '0'}], position: 2074, duration: 215, easing: "easeOutQuad" },
            { id: "eid1458", tween: [ "style", "${_pg4RibbonStripeCopy5}", "opacity", '0', { fromValue: '1'}], position: 2936, duration: 646, easing: "easeOutQuad" },
            { id: "eid1649", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 0, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1708", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 1825, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1752", tween: [ "style", "${_Ellipse}", "top", '418px', { fromValue: '-265px'}], position: 3478, duration: 1522, easing: "easeOutQuad" },
            { id: "eid1686", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 485, duration: 558, easing: "easeOutQuad" },
            { id: "eid1693", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 1332, duration: 558, easing: "easeOutQuad" },
            { id: "eid1756", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 2181, duration: 558, easing: "easeOutQuad" },
            { id: "eid1768", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 3015, duration: 558, easing: "easeOutQuad" },
            { id: "eid1780", tween: [ "style", "${_EllipseCopy6}", "top", '418px', { fromValue: '-265px'}], position: 3963, duration: 186, easing: "easeOutQuad" },
            { id: "eid1783", tween: [ "style", "${_EllipseCopy6}", "top", '-265px', { fromValue: '-948px'}], position: 4149, duration: 461, easing: "easeOutQuad" },
            { id: "eid1430", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 0, duration: 877, easing: "easeOutQuad" },
            { id: "eid1438", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 1093, duration: 849, easing: "easeOutQuad" },
            { id: "eid1643", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 2290, duration: 877, easing: "easeOutQuad" },
            { id: "eid1647", tween: [ "transform", "${_pg4RibbonStripeCopy7}", "rotateZ", '123deg', { fromValue: '0deg'}], position: 3577, duration: 877, easing: "easeOutQuad" },
            { id: "eid1651", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 191, easing: "easeOutQuad" },
            { id: "eid1653", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 929, duration: 323, easing: "easeOutQuad" },
            { id: "eid1709", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1825, duration: 191, easing: "easeOutQuad" },
            { id: "eid1710", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 2754, duration: 323, easing: "easeOutQuad" },
            { id: "eid1753", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 3478, duration: 191, easing: "easeOutQuad" },
            { id: "eid1754", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 4407, duration: 323, easing: "easeOutQuad" },
            { id: "eid1392", tween: [ "transform", "${_pg4RibbonStripeCopy2}", "rotateZ", '-141deg', { fromValue: '0deg'}], position: 346, duration: 1824, easing: "easeOutQuad" },
            { id: "eid1455", tween: [ "transform", "${_pg4RibbonStripeCopy2}", "rotateZ", '-141deg', { fromValue: '0deg'}], position: 2420, duration: 1824, easing: "easeOutQuad" },
            { id: "eid1680", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 694, duration: 70, easing: "easeOutQuad" },
            { id: "eid1681", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 1035, duration: 118, easing: "easeOutQuad" },
            { id: "eid1697", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 1557, duration: 70, easing: "easeOutQuad" },
            { id: "eid1698", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 1898, duration: 118, easing: "easeOutQuad" },
            { id: "eid1760", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 2407, duration: 70, easing: "easeOutQuad" },
            { id: "eid1761", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 2747, duration: 118, easing: "easeOutQuad" },
            { id: "eid1772", tween: [ "style", "${_EllipseCopy5}", "opacity", '1', { fromValue: '0'}], position: 3240, duration: 70, easing: "easeOutQuad" },
            { id: "eid1773", tween: [ "style", "${_EllipseCopy5}", "opacity", '0', { fromValue: '1'}], position: 3581, duration: 118, easing: "easeOutQuad" },
            { id: "eid1412", tween: [ "transform", "${_pg4RibbonStripeCopy5}", "rotateZ", '-207deg', { fromValue: '0deg'}], position: 0, duration: 1723, easing: "easeOutQuad" },
            { id: "eid1459", tween: [ "transform", "${_pg4RibbonStripeCopy5}", "rotateZ", '-207deg', { fromValue: '0deg'}], position: 2074, duration: 1723, easing: "easeOutQuad" },
            { id: "eid1407", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 346, duration: 0, easing: "easeOutQuad" },
            { id: "eid1446", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 1854, duration: 0, easing: "easeOutQuad" },
            { id: "eid1621", tween: [ "style", "${_pg4RibbonStripeCopy4}", "left", '252px', { fromValue: '252px'}], position: 3405, duration: 0, easing: "easeOutQuad" },
            { id: "eid1847", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '-268px', { fromValue: '-266px'}], position: 0, duration: 346, easing: "easeOutQuad" },
            { id: "eid1403", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 346, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1443", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 1853, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1618", tween: [ "style", "${_pg4RibbonStripeCopy4}", "top", '398px', { fromValue: '-268px'}], position: 3404, duration: 1377, easing: "easeOutQuad" },
            { id: "eid1418", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 215, duration: 877, easing: "easeOutQuad" },
            { id: "eid1439", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 1723, duration: 877, easing: "easeOutQuad" },
            { id: "eid1614", tween: [ "style", "${_pg4RibbonStripeCopy6}", "top", '398px', { fromValue: '-268px'}], position: 3274, duration: 877, easing: "easeOutQuad" },
            { id: "eid1663", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 0, duration: 929, easing: "easeOutQuad" },
            { id: "eid1702", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 1252, duration: 929, easing: "easeOutQuad" },
            { id: "eid1746", tween: [ "style", "${_EllipseCopy2}", "top", '418px', { fromValue: '-265px'}], position: 2511, duration: 929, easing: "easeOutQuad" },
            { id: "eid1654", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 367, duration: 1098, easing: "easeOutQuad" },
            { id: "eid1705", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 1619, duration: 1098, easing: "easeOutQuad" },
            { id: "eid1749", tween: [ "style", "${_EllipseCopy}", "top", '418px', { fromValue: '-265px'}], position: 2878, duration: 1098, easing: "easeOutQuad" },
            { id: "eid1382", tween: [ "transform", "${_pg4RibbonStripe}", "rotateZ", '122deg', { fromValue: '0deg'}], position: 0, duration: 2420, easing: "easeOutQuad" },
            { id: "eid1463", tween: [ "transform", "${_pg4RibbonStripe}", "rotateZ", '122deg', { fromValue: '0deg'}], position: 2580, duration: 2420, easing: "easeOutQuad" },
            { id: "eid1419", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 215, duration: 110, easing: "easeOutQuad" },
            { id: "eid1420", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 654, duration: 329, easing: "easeOutQuad" },
            { id: "eid1440", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 1723, duration: 110, easing: "easeOutQuad" },
            { id: "eid1441", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 2162, duration: 329, easing: "easeOutQuad" },
            { id: "eid1615", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '1', { fromValue: '0'}], position: 3274, duration: 110, easing: "easeOutQuad" },
            { id: "eid1616", tween: [ "style", "${_pg4RibbonStripeCopy6}", "opacity", '0', { fromValue: '1'}], position: 3713, duration: 329, easing: "easeOutQuad" },
            { id: "eid1384", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 303, easing: "easeOutQuad" },
            { id: "eid1386", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '0', { fromValue: '1'}], position: 1210, duration: 908, easing: "easeOutQuad" },
            { id: "eid1461", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '1', { fromValue: '0'}], position: 2580, duration: 303, easing: "easeOutQuad" },
            { id: "eid1462", tween: [ "style", "${_pg4RibbonStripe}", "opacity", '0', { fromValue: '1'}], position: 3790, duration: 908, easing: "easeOutQuad" },
            { id: "eid1390", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '1', { fromValue: '0'}], position: 346, duration: 228, easing: "easeOutQuad" },
            { id: "eid1391", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '0', { fromValue: '1'}], position: 1258, duration: 684, easing: "easeOutQuad" },
            { id: "eid1453", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '1', { fromValue: '0'}], position: 2420, duration: 228, easing: "easeOutQuad" },
            { id: "eid1454", tween: [ "style", "${_pg4RibbonStripeCopy2}", "opacity", '0', { fromValue: '1'}], position: 3332, duration: 684, easing: "easeOutQuad" },
            { id: "eid1427", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 0, duration: 877, easing: "easeOutQuad" },
            { id: "eid1435", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 1093, duration: 849, easing: "easeOutQuad" },
            { id: "eid1640", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 2290, duration: 877, easing: "easeOutQuad" },
            { id: "eid1644", tween: [ "style", "${_pg4RibbonStripeCopy7}", "top", '398px', { fromValue: '-268px'}], position: 3577, duration: 877, easing: "easeOutQuad" },
            { id: "eid1672", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 366, duration: 957, easing: "easeOutQuad" },
            { id: "eid1690", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 1568, duration: 957, easing: "easeOutQuad" },
            { id: "eid1734", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 2772, duration: 957, easing: "easeOutQuad" },
            { id: "eid1774", tween: [ "style", "${_EllipseCopy4}", "top", '418px', { fromValue: '-265px'}], position: 3964, duration: 225, easing: "easeOutQuad" },
            { id: "eid1777", tween: [ "style", "${_EllipseCopy4}", "top", '-265px', { fromValue: '-948px'}], position: 4189, duration: 558, easing: "easeOutQuad" },
            { id: "eid1667", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 261, duration: 116, easing: "easeOutQuad" },
            { id: "eid1668", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 828, duration: 197, easing: "easeOutQuad" },
            { id: "eid1700", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 1451, duration: 116, easing: "easeOutQuad" },
            { id: "eid1701", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 2018, duration: 197, easing: "easeOutQuad" },
            { id: "eid1744", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 2710, duration: 116, easing: "easeOutQuad" },
            { id: "eid1745", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 3277, duration: 197, easing: "easeOutQuad" },
            { id: "eid1787", tween: [ "style", "${_EllipseCopy3}", "opacity", '1', { fromValue: '0'}], position: 3963, duration: 116, easing: "easeOutQuad" },
            { id: "eid1788", tween: [ "style", "${_EllipseCopy3}", "opacity", '0', { fromValue: '1'}], position: 4530, duration: 197, easing: "easeOutQuad" },
            { id: "eid1666", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 261, duration: 929, easing: "easeOutQuad" },
            { id: "eid1699", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 1451, duration: 929, easing: "easeOutQuad" },
            { id: "eid1743", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 2710, duration: 929, easing: "easeOutQuad" },
            { id: "eid1786", tween: [ "style", "${_EllipseCopy3}", "top", '418px', { fromValue: '-265px'}], position: 3963, duration: 929, easing: "easeOutQuad" },
            { id: "eid1679", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 694, duration: 558, easing: "easeOutQuad" },
            { id: "eid1696", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 1557, duration: 558, easing: "easeOutQuad" },
            { id: "eid1759", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 2407, duration: 558, easing: "easeOutQuad" },
            { id: "eid1771", tween: [ "style", "${_EllipseCopy5}", "top", '418px', { fromValue: '-265px'}], position: 3240, duration: 558, easing: "easeOutQuad" }         ]
      }
   }
},
"pg4Balloon2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg4Balloon2',
      type: 'image',
      rect: ['0px','0px','619px','259px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Balloon2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4Balloon2}": [
            ["style", "top", '20px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '259px'],
            ["style", "width", '619px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         labels: {
            "loopBalloon2": 0
         },
         timeline: [
            { id: "eid1853", tween: [ "style", "${_pg4Balloon2}", "top", '0px', { fromValue: '20px'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid1854", tween: [ "style", "${_pg4Balloon2}", "top", '20px', { fromValue: '0px'}], position: 750, duration: 750, easing: "easeInQuad" }         ]
      }
   }
},
"pg4BalloonA": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg4Balloon',
      type: 'image',
      rect: ['0px','0px','246px','334px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Balloon.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4Balloon}": [
            ["style", "left", '0px'],
            ["style", "top", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '334px'],
            ["style", "width", '246px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "loopBalloonA": 0
         },
         timeline: [
            { id: "eid1858", tween: [ "style", "${_pg4Balloon}", "top", '0px', { fromValue: '20px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1859", tween: [ "style", "${_pg4Balloon}", "top", '20px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeInQuad" }         ]
      }
   }
},
"pg4BalloonB": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg4BalloonB',
      type: 'image',
      rect: ['0px','0px','252px','349px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4BalloonB.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4BalloonB}": [
            ["style", "top", '-20px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '349px'],
            ["style", "width", '252px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "loopBalloonB": 0
         },
         timeline: [
            { id: "eid1861", tween: [ "style", "${_pg4BalloonB}", "top", '0px', { fromValue: '-20px'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid1862", tween: [ "style", "${_pg4BalloonB}", "top", '-20px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeInQuad" }         ]
      }
   }
},
"pg4Tiger": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'pg4Tiger2',
      rect: ['0px','-272px','201px','272px','auto','auto'],
      transform: {},
      fill: ['rgba(0,0,0,0)','images/pg4Tiger2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '201px']
         ],
         "${_pg4Tiger2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '-272px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"page5": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg5BG',
      type: 'image',
      rect: ['0','80px','1024px','246px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5BG.png','0px','0px']
   },
   {
      id: 'pg5Smoke3',
      type: 'rect',
      rect: ['527','38','auto','auto','auto','auto']
   },
   {
      id: 'pg5House',
      type: 'image',
      rect: ['362px','6px','299px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5House.png','0px','0px']
   },
   {
      type: 'image',
      id: 'pg5Ground',
      rect: ['0px','0px','1024px','600px','auto','auto'],
      transform: [{1:0,0:0},{},{},['1','0']],
      fill: ['rgba(0,0,0,0)','images/pg5Ground.png','0px','0px']
   },
   {
      id: 'pg5Cat2',
      type: 'rect',
      rect: ['262','124','auto','auto','auto','auto']
   },
   {
      id: 'pg5Rat2',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['527','114','auto','auto','auto','auto']
   },
   {
      id: 'pg5RatSweat',
      type: 'image',
      rect: ['903px','142px','104px','101px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5RatSweat.svg','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.19','0.376']],
      rect: ['-984px','160px','2467px','620px','auto','auto'],
      id: 'box',
      opacity: 0.6640625,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/box.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['52px','386px','404px','165px','auto','auto'],
      id: 'Text',
      text: 'Although the Rat has won the race but he lost his friendship with the Cat.  Since then, the Cat will chase after the Rat whenever they meet.',
      align: 'left',
      font: ['\'Annie Use Your Telescope\', cursive',26,'rgba(0,0,0,1)','900','none','normal']
   }],
   symbolInstances: [
   {
      id: 'pg5Rat2',
      symbolName: 'pg5Rat'
   },
   {
      id: 'pg5Smoke3',
      symbolName: 'pg5Smoke'
   },
   {
      id: 'pg5Cat2',
      symbolName: 'pg5Cat'
   }   ]
   },
   states: {
      "Base State": {
         "${_pg5House}": [
            ["style", "-webkit-transform-origin", [50,79.23], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,79.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,79.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,79.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,79.23],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '362px'],
            ["style", "top", '6px']
         ],
         "${_pg5RatSweat}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '903px'],
            ["style", "top", '142px']
         ],
         "${_pg5Cat2}": [
            ["style", "top", '114.75px'],
            ["transform", "scaleY", '0.25'],
            ["transform", "scaleX", '0.25'],
            ["style", "opacity", '0'],
            ["style", "left", '405.75px']
         ],
         "${_pg5Rat2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.11'],
            ["style", "top", '-268.69px'],
            ["transform", "scaleX", '0.11'],
            ["style", "opacity", '0'],
            ["style", "left", '298.4px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '386.45px'],
            ["style", "height", '165.38333129883px'],
            ["style", "opacity", '0'],
            ["style", "left", '-490.64px'],
            ["style", "width", '403.83190917969px']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '1024px']
         ],
         "${_pg5Ground}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '1.0332'],
            ["style", "opacity", '0'],
            ["style", "left", '-17px'],
            ["style", "top", '0px']
         ],
         "${_pg5Smoke3}": [
            ["style", "opacity", '0']
         ],
         "${_pg5BG}": [
            ["style", "-webkit-transform-origin", [49.95,92.68], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.95,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.95,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.95,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.95,92.68],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0'],
            ["style", "top", '80px']
         ],
         "${_box}": [
            ["style", "top", '160.27px'],
            ["transform", "scaleY", '0.3761'],
            ["transform", "scaleX", '0.19'],
            ["style", "opacity", '0'],
            ["style", "left", '-1526.22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         labels: {
            "Page5": 0,
            "HoverRat": 3750
         },
         timeline: [
            { id: "eid2079", tween: [ "style", "${_pg5Rat2}", "top", '114px', { fromValue: '-268.69px'}], position: 1130, duration: 1370, easing: "easeInQuad" },
            { id: "eid2003", tween: [ "transform", "${_pg5House}", "scaleY", '1', { fromValue: '0'}], position: 390, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2075", tween: [ "transform", "${_pg5Rat2}", "scaleY", '1', { fromValue: '0.11'}], position: 1130, duration: 1370, easing: "easeInQuad" },
            { id: "eid2130", tween: [ "transform", "${_pg5Rat2}", "scaleY", '1.11', { fromValue: '1'}], position: 3750, duration: 219, easing: "easeOutQuad" },
            { id: "eid2131", tween: [ "transform", "${_pg5Rat2}", "scaleY", '0.97', { fromValue: '1.11'}], position: 3969, duration: 173, easing: "easeOutQuad" },
            { id: "eid2132", tween: [ "transform", "${_pg5Rat2}", "scaleY", '1', { fromValue: '0.97'}], position: 4142, duration: 126, easing: "easeOutQuad" },
            { id: "eid2133", tween: [ "transform", "${_pg5Rat2}", "scaleY", '1.11', { fromValue: '1'}], position: 4268, duration: 219, easing: "easeOutQuad" },
            { id: "eid2134", tween: [ "transform", "${_pg5Rat2}", "scaleY", '0.97', { fromValue: '1.11'}], position: 4487, duration: 173, easing: "easeOutQuad" },
            { id: "eid2135", tween: [ "transform", "${_pg5Rat2}", "scaleY", '1', { fromValue: '0.97'}], position: 4660, duration: 126, easing: "easeOutQuad" },
            { id: "eid2103", tween: [ "style", "${_box}", "top", '160.28px', { fromValue: '160.27px'}], position: 2102, duration: 1148, easing: "easeOutBack" },
            { id: "eid2005", tween: [ "transform", "${_pg5BG}", "scaleY", '1', { fromValue: '0'}], position: 568, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2073", tween: [ "transform", "${_pg5Rat2}", "scaleX", '1', { fromValue: '0.11'}], position: 1130, duration: 1370, easing: "easeInQuad" },
            { id: "eid2040", tween: [ "style", "${_pg5Smoke3}", "opacity", '1', { fromValue: '0'}], position: 909, duration: 341, easing: "easeInQuad" },
            { id: "eid2085", tween: [ "style", "${_box}", "opacity", '0.6640625', { fromValue: '0'}], position: 2102, duration: 1148, easing: "easeOutBack" },
            { id: "eid2089", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 2102, duration: 1148, easing: "easeOutBack" },
            { id: "eid2055", tween: [ "transform", "${_pg5Cat2}", "scaleX", '1', { fromValue: '0.25'}], position: 1750, duration: 1370, easing: "easeOutQuad" },
            { id: "eid2001", tween: [ "style", "${_pg5House}", "opacity", '1', { fromValue: '0'}], position: 390, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2061", tween: [ "style", "${_pg5Cat2}", "top", '124px', { fromValue: '114.75px'}], position: 1750, duration: 1370, easing: "easeOutQuad" },
            { id: "eid2112", tween: [ "transform", "${_pg5RatSweat}", "scaleY", '1', { fromValue: '0.14'}], position: 3935, duration: 267, easing: "easeOutQuad" },
            { id: "eid2117", tween: [ "transform", "${_pg5RatSweat}", "scaleY", '0.14', { fromValue: '1'}], position: 4202, duration: 211, easing: "easeOutQuad" },
            { id: "eid2115", tween: [ "transform", "${_pg5RatSweat}", "scaleY", '1', { fromValue: '0.14'}], position: 4413, duration: 323, easing: "easeOutQuad" },
            { id: "eid2120", tween: [ "transform", "${_pg5RatSweat}", "scaleY", '0.14', { fromValue: '1'}], position: 4736, duration: 200, easing: "easeOutQuad" },
            { id: "eid2063", tween: [ "style", "${_pg5Cat2}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 620, easing: "easeOutQuad" },
            { id: "eid2110", tween: [ "transform", "${_pg5RatSweat}", "scaleX", '1', { fromValue: '0.14'}], position: 3935, duration: 267, easing: "easeOutQuad" },
            { id: "eid2118", tween: [ "transform", "${_pg5RatSweat}", "scaleX", '0.14', { fromValue: '1'}], position: 4202, duration: 211, easing: "easeOutQuad" },
            { id: "eid2113", tween: [ "transform", "${_pg5RatSweat}", "scaleX", '1', { fromValue: '0.14'}], position: 4413, duration: 323, easing: "easeOutQuad" },
            { id: "eid2119", tween: [ "transform", "${_pg5RatSweat}", "scaleX", '0.14', { fromValue: '1'}], position: 4736, duration: 200, easing: "easeOutQuad" },
            { id: "eid2057", tween: [ "transform", "${_pg5Cat2}", "scaleY", '1', { fromValue: '0.25'}], position: 1750, duration: 1370, easing: "easeOutQuad" },
            { id: "eid2111", tween: [ "style", "${_pg5RatSweat}", "opacity", '1', { fromValue: '0'}], position: 3935, duration: 267, easing: "easeOutQuad" },
            { id: "eid2116", tween: [ "style", "${_pg5RatSweat}", "opacity", '0', { fromValue: '1'}], position: 4202, duration: 211, easing: "easeOutQuad" },
            { id: "eid2114", tween: [ "style", "${_pg5RatSweat}", "opacity", '1', { fromValue: '0'}], position: 4413, duration: 323, easing: "easeOutQuad" },
            { id: "eid2121", tween: [ "style", "${_pg5RatSweat}", "opacity", '0', { fromValue: '1'}], position: 4736, duration: 200, easing: "easeOutQuad" },
            { id: "eid2077", tween: [ "style", "${_pg5Rat2}", "left", '527px', { fromValue: '298.4px'}], position: 1130, duration: 1370, easing: "easeInQuad" },
            { id: "eid1995", tween: [ "style", "${_pg5Ground}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutSine" },
            { id: "eid1999", tween: [ "style", "${_pg5BG}", "opacity", '1', { fromValue: '0'}], position: 568, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2101", tween: [ "style", "${_box}", "left", '-983.92px', { fromValue: '-1526.22px'}], position: 2102, duration: 1148, easing: "easeOutBack" },
            { id: "eid2081", tween: [ "style", "${_pg5Rat2}", "opacity", '1', { fromValue: '0'}], position: 1130, duration: 538, easing: "easeInQuad" },
            { id: "eid2099", tween: [ "style", "${_Text}", "left", '51.67px', { fromValue: '-490.64px'}], position: 2102, duration: 1148, easing: "easeOutBack" },
            { id: "eid2059", tween: [ "style", "${_pg5Cat2}", "left", '262px', { fromValue: '405.75px'}], position: 1750, duration: 1370, easing: "easeOutQuad" },
            { id: "eid1993", tween: [ "transform", "${_pg5Ground}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutSine" },
            { id: "eid2048", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg5Smoke3}', ['loopSmoke'] ], ""], position: 1000 },
            { id: "eid2136", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg5Rat2}', ['loopPg5Rat'] ], ""], position: 1130 },
            { id: "eid2137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_pg5Cat2}', ['loopPg5Cat'] ], ""], position: 1750 }         ]
      }
   }
},
"pg5Smoke": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg5SmokeCopy2',
      type: 'image',
      rect: ['0px','0px','134px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5Smoke.svg','0px','0px']
   },
   {
      id: 'pg5SmokeCopy3',
      type: 'image',
      rect: ['0px','0px','134px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5Smoke.svg','0px','0px']
   },
   {
      id: 'pg5Smoke',
      type: 'image',
      rect: ['0px','0px','134px','57px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5Smoke.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg5SmokeCopy3}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_pg5SmokeCopy2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_pg5Smoke}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '57px'],
            ["style", "width", '134px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: false,
         labels: {
            "loopSmoke": 0
         },
         timeline: [
            { id: "eid2022", tween: [ "style", "${_pg5Smoke}", "top", '-17.38px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid2033", tween: [ "style", "${_pg5SmokeCopy3}", "top", '-17.38px', { fromValue: '0px'}], position: 816, duration: 2000, easing: "easeInQuad" },
            { id: "eid2025", tween: [ "style", "${_pg5Smoke}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid2029", tween: [ "transform", "${_pg5SmokeCopy2}", "scaleX", '0.39', { fromValue: '1'}], position: 1566, duration: 2000, easing: "easeInQuad" },
            { id: "eid2038", tween: [ "style", "${_pg5SmokeCopy3}", "left", '203.88px', { fromValue: '0px'}], position: 816, duration: 2000, easing: "easeInQuad" },
            { id: "eid2034", tween: [ "transform", "${_pg5SmokeCopy3}", "scaleY", '0.39', { fromValue: '1'}], position: 816, duration: 2000, easing: "easeInQuad" },
            { id: "eid2024", tween: [ "transform", "${_pg5Smoke}", "scaleX", '0.39', { fromValue: '1'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid2028", tween: [ "transform", "${_pg5SmokeCopy2}", "scaleY", '0.39', { fromValue: '1'}], position: 1566, duration: 2000, easing: "easeInQuad" },
            { id: "eid2032", tween: [ "style", "${_pg5SmokeCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 66, easing: "easeInQuad" },
            { id: "eid2030", tween: [ "style", "${_pg5SmokeCopy2}", "opacity", '0', { fromValue: '1'}], position: 1566, duration: 2000, easing: "easeInQuad" },
            { id: "eid2023", tween: [ "transform", "${_pg5Smoke}", "scaleY", '0.39', { fromValue: '1'}], position: 0, duration: 2000, easing: "easeInQuad" },
            { id: "eid2036", tween: [ "style", "${_pg5SmokeCopy3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 66, easing: "easeInQuad" },
            { id: "eid2037", tween: [ "style", "${_pg5SmokeCopy3}", "opacity", '0', { fromValue: '1'}], position: 816, duration: 2000, easing: "easeInQuad" },
            { id: "eid2027", tween: [ "style", "${_pg5SmokeCopy2}", "top", '-17.38px', { fromValue: '0px'}], position: 1566, duration: 2000, easing: "easeInQuad" },
            { id: "eid2031", tween: [ "style", "${_pg5SmokeCopy2}", "left", '203.88px', { fromValue: '0px'}], position: 1566, duration: 2000, easing: "easeInQuad" },
            { id: "eid2035", tween: [ "transform", "${_pg5SmokeCopy3}", "scaleX", '0.39', { fromValue: '1'}], position: 816, duration: 2000, easing: "easeInQuad" },
            { id: "eid2026", tween: [ "style", "${_pg5Smoke}", "left", '203.88px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInQuad" }         ]
      }
   }
},
"pg5Cat": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg5Cat',
      type: 'image',
      rect: ['0px','0px','238px','238px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5Cat.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg5Cat}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '238px'],
            ["style", "width", '238px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "loopPg5Cat": 0
         },
         timeline: [
            { id: "eid2050", tween: [ "transform", "${_pg5Cat}", "rotateZ", '11deg', { fromValue: '-11deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid2051", tween: [ "transform", "${_pg5Cat}", "rotateZ", '-11deg', { fromValue: '11deg'}], position: 500, duration: 500, easing: "easeInQuad" }         ]
      }
   }
},
"pg5Rat": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg5Rat',
      type: 'image',
      rect: ['0px','0px','480px','519px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg5Rat.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg5Rat}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '519px'],
            ["style", "width", '480px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1002,
         autoPlay: false,
         labels: {
            "loopPg5Rat": 0
         },
         timeline: [
            { id: "eid2065", tween: [ "transform", "${_pg5Rat}", "rotateZ", '28deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid2066", tween: [ "transform", "${_pg5Rat}", "rotateZ", '0deg', { fromValue: '28deg'}], position: 500, duration: 500, easing: "easeInQuad" }         ]
      }
   }
},
"pg4Crowd": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'pg4Crowd',
      opacity: 1,
      rect: ['0px','0px','1038px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pg4Crowd.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg4Crowd}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "-webkit-transform-origin", [50.93,61.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.93,61.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.93,61.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.93,61.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.93,61.24],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '1038px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "loopCrowd": 0
         },
         timeline: [
            { id: "eid2175", tween: [ "transform", "${_pg4Crowd}", "scaleY", '1.08', { fromValue: '1'}], position: 0, duration: 250, easing: "easeOutQuad" },
            { id: "eid2176", tween: [ "transform", "${_pg4Crowd}", "scaleY", '1', { fromValue: '1.08'}], position: 250, duration: 250, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-56815088");
