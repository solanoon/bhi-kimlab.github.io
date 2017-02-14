$(document).ready(function(){
/* activate sidebar */
$('#sidebar').affix({
  offset: {
    top: $('#header').outerHeight(true)
  }
});

/*
 * activate scrollspy menu 
 * COMMENT: must set 'nav' on <ul> - otherwise it won't work, I dont know why
 */
var $body   = $(document.body);
$body.scrollspy({
  target: '#sidebar',
  offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

/* flexslider for members page */
$('.flexslider').flexslider({ animation: 'slide' });

/* set background img (index) */
if ($('#bg_list').length) {
  var imgs = $('#bg_list').find('li');
  var img = imgs[Math.floor(Math.random()*imgs.length)];
  var img_src = $(img).find('img').attr('data-src');
  var img_desc = $(img).find('p').text();
  $('#bg').attr('style', 'background-image: url("' + img_src + '") !important; background-size: 100%; background-size: cover;');
  $('#bg_desc').text(img_desc);
}

/* make background canvas (index) */
if ($('#bg').length) {
  $('#bg').append('<canvas id="canvas_bg"></canvas>');
  var canvas = $('#canvas_bg');
  console.log(canvas);
  canvas.width(window.innerWidth);
  canvas.height(window.innerHeight);
  canvas = canvas[0];
  var ctx=canvas.getContext('2d'),color='#ffffff';canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.display='block';ctx.fillStyle=color;ctx.lineWidth=.1;ctx.strokeStyle=color;var dots={nb:500,distance:80,d_radius:150,array:[]};function Dot() {this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=-.5+Math.random();this.vy=-.5+Math.random();this.radius=Math.random();}Dot.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();}};function makeDots(){for(i=0;i<dots.nb;i++){dots.array.push(new Dot());}}function moveDots(){for(i=0;i<dots.nb;i++){var dot=dots.array[i];if(dot.y<0||dot.y>canvas.height){dot.vx=dot.vx;dot.vy=-dot.vy;}else if(dot.x<0||dot.x>canvas.width){dot.vx=-dot.vx;dot.vy=dot.vy;}dot.x+=dot.vx;dot.y+=dot.vy;}}function animateDots(){ctx.clearRect(0, 0, canvas.width, canvas.height);for(i=0;i<dots.nb;i++){dot = dots.array[i];dot.create();}moveDots();}makeDots();setInterval(animateDots, 1000 / 30);
}

console.log('initalize done.');
});
