;(function($){
// header->detai开始
setTimeout(function(){
	$('.bar>li').hover(function(){
	$submenu = $(this).find('ul');
	$submenu.stop().slideDown();
},function(){
	$submenu.stop().slideUp();
});
},1500);
// nav-bar开始
$('.font-style li').on('click',function(e){
	$(this).addClass('bgcolor').siblings().removeClass('bgcolor');
	e.preventDefault();
});
var timer;
clearInterval(timer);
var aLinks = document.querySelectorAll('.link');
	 // Array.prototype.forEach.call(aLinks,function(aLink){
	 	for(var i=0;i<aLinks.length;i++){
	 		var aLink  = aLinks[i];
	 		aLink.addEventListener('click',function(e){
            var hash = this.href.substring(this.href.indexOf('#')+1);
            var oDiv = document.querySelector('#'+hash);
            var top = oDiv.offsetTop;
            var current =  document.documentElement.scrollTop ||document.body.scrollTop;
            timer = setInterval(function(){
               var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
               var speed = (top - scrollTop)/8;
               // spend = speed >0?Math.ceil(speed):Math.floor(speed);
               // current+=speed;
               if(speed>0){
               		speed=Math.ceil(speed);
               		current+=speed;
		           if(current>=top){
		              // current = top;
		              clearInterval(timer);
		           }
               }else if(speed<0){
               		speed=Math.floor(speed);
               		current+=speed;
		           if(current<=top){
		              // current = top;
		              clearInterval(timer);
		           }
               }
               window.scrollTo(0,current);
            },10);      
            e.preventDefault();
         },false);
	 	}
        
      // });
// nav-bar结束
// header->detai结束
// container-works开始
$('.view-1').hover(function(){
	$(this).find('img').stop().animate({
			width: 200,
			height: 200,
			marginLeft: -10,
			marginTop: -7
		});
	$(this).find('.mask').stop().show().animate({
		opacity:0.8
	});
},function(){
	$(this).find('img').stop().animate({
			width: 180,
			height: 180,
			marginLeft: 0,
			marginTop: 0
		});
	$(this).find('.mask').stop().animate({
		opacity:0
	});
});



// container-works结束



})(jQuery);

