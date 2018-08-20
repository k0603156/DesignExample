(function($) {


  var $slides = $('.slide'),
      max = $slides.length - 1,
      center = 1,
      classNames = '',
      animating = false;


  $('#wrap').on('click',slideaction);
  function slideaction(e) {

   if (animating) return;

   if (e.target.parentNode.className === 'btn') {
     animating = true;


     switch (e.target.parentNode.id) {
       case 'btn-left':
         center = rotate(center - 1, max);
         $slides.parent().attr('class', 'sliding-left');
         break;
       case 'btn-right':
         center = rotate(center + 1, max);
         $slides.parent().attr('class', 'sliding-right');
         break;
     }

     $slides.each(function(i) {
       classNames = 'slide';
       switch (i) {
         case rotate(center - 1, max):
           classNames += ' slide-left';
           break;
         case rotate(center, max):
           classNames += ' slide-center';
           break;
         case rotate(center + 1, max):
           classNames += ' slide-right';
           break;
       }
       this.className = classNames;
     })

     .on('transitionend', function() {
       animating = false;
     });
   }
 }


  function rotate(i, max) {
    if (i < 0) return max;
    if (i > max) return 0;
    return i;
  }
  $(document).ready(function(){
  setInterval(function(){
    $("#btn-right i").trigger("click");
  }, 5000);

  });

  $(function(){
  $('#main_menu ul li a, #sub_menu').mouseenter(function(){
 $('#sub_menu').css("display","block");
  });
  $('#main_menu ul li a, #sub_menu').mouseleave(function(){
 $('#sub_menu').css("display","none");
  });
});
}(jQuery));
