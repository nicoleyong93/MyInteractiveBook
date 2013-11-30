/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4758, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12096, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg1Buddha}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("page2");
         
         EC.Sound.play("Chime");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds_3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloud3Fade");
         EC.Sound.play("Swoosh");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds_2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloud2Fade");
         
         EC.Sound.play("Swoosh");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds_5}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloud5Fade");
         
         EC.Sound.play("Swoosh");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds_4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloud4Fade");
         EC.Sound.play("Swoosh");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds_1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloud1Fade");
         
         EC.Sound.play("Swoosh");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_clouds}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudFade");
         EC.Sound.play("Swoosh");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21787, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg2RatThinking}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("page2B");
         
         EC.Sound.play("Pop");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26514, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg2doorClose2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("openDoor");
         
         EC.Sound.play("button");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope({nope:['js/jquery-ui-1.10.3.custom.min.js'], complete: init});
         
         function init(){
         
         	//Ox 
         	sym.$('pg3Ox').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('OxBox').droppable({
         		accept: sym.$("pg3Ox"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultOx').droppable({
         		accept: sym.$("pg3Ox"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Tiger
         	sym.$('pg3Tiger').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('TigerBox').droppable({
         		accept: sym.$("pg3Tiger"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultTiger').droppable({
         		accept: sym.$("pg3Tiger"),
         		drop: function(){
         	}
         	}
         	);
         
         
         	//Rabbit
         	sym.$('pg3Rabbit').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('RabbitBox').droppable({
         		accept: sym.$("pg3Rabbit"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultRabbit').droppable({
         		accept: sym.$("pg3Rabbit"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Dragon
         	sym.$('pg3Dragon').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('DragonBox').droppable({
         		accept: sym.$("pg3Dragon"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultDragon').droppable({
         		accept: sym.$("pg3Dragon"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Snake
         	sym.$('pg3Snake').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('SnakeBox').droppable({
         		accept: sym.$("pg3Snake"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultSnake').droppable({
         		accept: sym.$("pg3Snake"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Horse
         	sym.$('pg3Horse').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('HorseBox').droppable({
         		accept: sym.$("pg3Horse"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultHorse').droppable({
         		accept: sym.$("pg3Horse"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Goat
         	sym.$('pg3Goat').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('GoatBox').droppable({
         		accept: sym.$("pg3Goat"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultGoat').droppable({
         		accept: sym.$("pg3Goat"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Monkey
         	sym.$('pg3Monkey').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('MonkeyBox').droppable({
         		accept: sym.$("pg3Monkey"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultMonkey').droppable({
         		accept: sym.$("pg3Monkey"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Rooster
         	sym.$('pg3Rooster').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('RoosterBox').droppable({
         		accept: sym.$("pg3Rooster"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultRooster').droppable({
         		accept: sym.$("pg3Rooster"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Dog
         	sym.$('pg3Dog').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('DogBox').droppable({
         		accept: sym.$("pg3Dog"),
         		drop: function(){
         		EC.Sound.play("Water");
         
         	}
         	}
         	);
         
         	sym.$('defaultDog').droppable({
         		accept: sym.$("pg3Dog"),
         		drop: function(){
         	}
         	}
         	);
         
         	//Pig
         	sym.$('pg3Pig').draggable({opacity:0.5, revert: 'invalid'});
         
         	sym.$('PigBox').droppable({
         		accept: sym.$("pg3Pig"),
         		drop: function(){
         		EC.Sound.play("Water");
         		// play the timeline from the given position (ms or label)
         		sym.play("page4");
         
         
         
         	}
         	}
         	);
         
         	sym.$('defaultPig').droppable({
         		accept: sym.$("pg3Pig"),
         		drop: function(){
         	}
         	}
         	);
         
         
         }
         
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	complete: function() {
         		EC.debug("Ready to go!");
         
         		var assetsPath = "audio/";
         EC.Sound.setup(
             [
         
                 {src: assetsPath + "BGMusic.mp3|", id: "BGMusic"},
                 {src: assetsPath + "ending.mp3|", id: "ending"},
                 {src: assetsPath + "button.mp3|", id: "button"},
                 {src: assetsPath + "Swoosh.mp3|", id: "Swoosh"},
                 {src: assetsPath + "POP.mp3|", id: "Pop"},
                 {src: assetsPath + "water.mp3|", id: "Water"},
                 {src: assetsPath + "cheer.mp3|", id: "Cheer"},
                 {src: assetsPath + "Squeek.mp3|", id: "Squeek"},
                 {src: assetsPath + "chime.mp3|", id: "Chime"}
             ],
             function(){ EC.info("Sound setup finished", "DEMO"); }
         );
         
         
         	}
         });
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg4Cat2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("page5");
         
         EC.Sound.stop("BGMusic");
         EC.Sound.stop("Cheer");
         EC.Sound.play("ending");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_endBtn}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("End");
         
         
         
         EC.Sound.stop("ending");
         EC.Sound.play("button");
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5093, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5307, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchRat}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Rat");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchOx}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Ox");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchTiger}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Tiger");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5701, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchRabbit}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Rabbit");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_playbtnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // play the timeline from the given position (ms or label)
         sym.play("page1");
         
         
         
         EC.Sound.play("button");
         EC.Sound.play("BGMusic");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5895, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6111, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6305, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6704, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6907, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7100, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7307, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchDragon}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Dragon");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchSnake}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Snake");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchHorse}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Horse");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchGoat}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Goat");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchRooster}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Rooster");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchPig}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Pig");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchMonkey}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Monkey");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TouchDog}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Dog");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'coverPage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("coverPage");
   //Edge symbol end:'coverPage'

   //=========================================================
   
   //Edge symbol: 'Mouse'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 894, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBlink");

      });
      //Edge binding end

   })("Mouse");
   //Edge symbol end:'Mouse'

   //=========================================================
   
   //Edge symbol: 'page1'
   (function(symbolName) {   
   
   })("page1");
   //Edge symbol end:'page1'

   //=========================================================
   
   //Edge symbol: 'Bird'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBirdFly");

      });
      //Edge binding end

   })("Bird");
   //Edge symbol end:'Bird'

   //=========================================================
   
   //Edge symbol: 'skyBG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBG");

      });
      //Edge binding end

   })("skyBG");
   //Edge symbol end:'skyBG'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'clouds_1'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds_1");
   //Edge symbol end:'clouds_1'

   //=========================================================
   
   //Edge symbol: 'clouds_2'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds_2");
   //Edge symbol end:'clouds_2'

   //=========================================================
   
   //Edge symbol: 'clouds_3'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds_3");
   //Edge symbol end:'clouds_3'

   //=========================================================
   
   //Edge symbol: 'clouds_4'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds_4");
   //Edge symbol end:'clouds_4'

   //=========================================================
   
   //Edge symbol: 'clouds_5'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_pg1Cloud1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("cloudDisappear");
         

      });
      //Edge binding end

   })("clouds_5");
   //Edge symbol end:'clouds_5'

   //=========================================================
   
   //Edge symbol: 'buddhaShine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBuddhaShine");

      });
      //Edge binding end

   })("buddhaShine");
   //Edge symbol end:'buddhaShine'

   //=========================================================
   
   //Edge symbol: 'page2'
   (function(symbolName) {   
   
   })("page2");
   //Edge symbol end:'page2'

   //=========================================================
   
   //Edge symbol: 'Clock'
   (function(symbolName) {   
   
   })("Clock");
   //Edge symbol end:'Clock'

   //=========================================================
   
   //Edge symbol: 'clockSecond'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopSecond");

      });
      //Edge binding end

   })("clockSecond");
   //Edge symbol end:'clockSecond'

   //=========================================================
   
   //Edge symbol: 'questionMark'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopQuestion");

      });
      //Edge binding end

   })("questionMark");
   //Edge symbol end:'questionMark'

   //=========================================================
   
   //Edge symbol: 'questionMark_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopQuestion");

      });
      //Edge binding end

   })("questionMark_1");
   //Edge symbol end:'questionMark_1'

   //=========================================================
   
   //Edge symbol: 'page2B'
   (function(symbolName) {   
   
   })("page2B");
   //Edge symbol end:'page2B'

   //=========================================================
   
   //Edge symbol: 'sleepingCat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopSleepingBubbles");

      });
      //Edge binding end

   })("sleepingCat");
   //Edge symbol end:'sleepingCat'

   //=========================================================
   
   //Edge symbol: 'Zzz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopZzz");

      });
      //Edge binding end

   })("Zzz");
   //Edge symbol end:'Zzz'

   //=========================================================
   
   //Edge symbol: 'page3'
   (function(symbolName) {   
   
   })("page3");
   //Edge symbol end:'page3'

   //=========================================================
   
   //Edge symbol: 'Fishie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopFishie");

      });
      //Edge binding end

   })("Fishie");
   //Edge symbol end:'Fishie'

   //=========================================================
   
   //Edge symbol: 'Fishie_1'
   (function(symbolName) {   
   
   })("Fishie_1");
   //Edge symbol end:'Fishie_1'

   //=========================================================
   
   //Edge symbol: 'pg3Animals'
   (function(symbolName) {   
   
   })("pg3Animals");
   //Edge symbol end:'pg3Animals'

   //=========================================================
   
   //Edge symbol: 'pg3Rat2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopJump");

      });
      //Edge binding end

   })("pg3Rat2");
   //Edge symbol end:'pg3Rat2'

   //=========================================================
   
   //Edge symbol: 'page4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_target1}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("tapRat");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_target2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("tapRat2");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg4Rat3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("RatRaiseUp");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg4Tiger3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("TigerSigh");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_target3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("tapRat3");
         
         EC.Sound.play("Cheer");
         

      });
      //Edge binding end

   })("page4");
   //Edge symbol end:'page4'

   //=========================================================
   
   //Edge symbol: 'pg4Animals'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("AnimalsRunning");

      });
      //Edge binding end

   })("pg4Animals");
   //Edge symbol end:'pg4Animals'

   //=========================================================
   
   //Edge symbol: 'pg4Rat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("RatRunning");

      });
      //Edge binding end

   })("pg4Rat");
   //Edge symbol end:'pg4Rat'

   //=========================================================
   
   //Edge symbol: 'pg4Cheers'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopDrop");

      });
      //Edge binding end

   })("pg4Cheers");
   //Edge symbol end:'pg4Cheers'

   //=========================================================
   
   //Edge symbol: 'pg4Cheers_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopDrop");

      });
      //Edge binding end

   })("pg4Cheers2");
   //Edge symbol end:'pg4Cheers2'

   //=========================================================
   
   //Edge symbol: 'pg4Balloon2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBalloon2");

      });
      //Edge binding end

   })("pg4Balloon2");
   //Edge symbol end:'pg4Balloon2'

   //=========================================================
   
   //Edge symbol: 'pg4BalloonA'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBalloonA");

      });
      //Edge binding end

   })("pg4BalloonA");
   //Edge symbol end:'pg4BalloonA'

   //=========================================================
   
   //Edge symbol: 'pg4BalloonB'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopBalloonB");

      });
      //Edge binding end

   })("pg4BalloonB");
   //Edge symbol end:'pg4BalloonB'

   //=========================================================
   
   //Edge symbol: 'pg4Tiger'
   (function(symbolName) {   
   
   })("pg4Tiger");
   //Edge symbol end:'pg4Tiger'

   //=========================================================
   
   //Edge symbol: 'page5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pg5Rat2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("HoverRat");
         
         EC.Sound.play("Squeek");
         

      });
      //Edge binding end

   })("page5");
   //Edge symbol end:'page5'

   //=========================================================
   
   //Edge symbol: 'pg5Smoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopSmoke");

      });
      //Edge binding end

   })("pg5Smoke");
   //Edge symbol end:'pg5Smoke'

   //=========================================================
   
   //Edge symbol: 'pg5Cat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopPg5Cat");

      });
      //Edge binding end

   })("pg5Cat");
   //Edge symbol end:'pg5Cat'

   //=========================================================
   
   //Edge symbol: 'pg5Rat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1002, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopPg5Rat");

      });
      //Edge binding end

   })("pg5Rat");
   //Edge symbol end:'pg5Rat'

   //=========================================================
   
   //Edge symbol: 'pg4Crowd'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopCrowd");

      });
      //Edge binding end

   })("pg4Crowd");
   //Edge symbol end:'pg4Crowd'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-56815088");