/**
 * Created by Administrator on 2017/3/2.
 */
// alert(111);


function resize() {
    var windowWidth= $(window).width();//获取到的是数字 不是字符串

    var isSmallScreen= windowWidth< 768;

    $('#main-ad> .carousel-inner> .item').each(function (i,item) {
        var $item=$(item);  //把拿到的dom对象转换为jQuery对象
        // console.log(item);
        // var imgSrc=$item.data-(isSmallScreen ? 'image-xs':'image-lg');
        var imgSrc= isSmallScreen ? $item.data('image-xs'): $item.data('image-lg');

        $item.css('backgroundImage','url("'+imgSrc+'")');
        if (isSmallScreen){
            $item.html('<img src="'+imgSrc+'" />')
        }else {
            $item.empty();
        }
    })
//控制标签页的标签容器高度
//找到ul这个变量
    var $ulContainer= $('#products>.container>.wrapper>.nav-tabs');
//获取ul下面每个li元素的width  然后相加就是ul的宽度
    var width=20;
//遍历ul下面的li
    $ulContainer.children().each(function (index,element) {
        width+= element.clientWidth;
    })
    // console.log(width);
    if ( width > $ulContainer.parent().width()){
        $ulContainer.parent().css('overflow-x','scroll');
        $ulContainer.css('width',width);
    }else {
        $ulContainer.parent().css('overflow-x','hidden');
        $ulContainer.css('width','auto');
    }
}





$(window).on('resize',resize).trigger('resize');
//初始化tooltip
$('[data-toggle="tooltip"]').tooltip();


// $('#myAffix').affix({
//     offset: {
//         top: 100,
//         bottom: function () {
//             return (this.bottom = $('.footer').outerHeight(true))
//         }
//     }
// })


//控制标签页的标签容器高度
//找到ul这个变量
var $ulContainer= $('#products>.container>.wrapper>.nav-tabs')
//获取ul下面每个li元素的width  然后相加就是ul的宽度
var width=20;
//遍历ul下面的li
$ulContainer.children().each(function (index,element) {
    width+= element.clientWidth;
})
if (width> $(window).width()){
    $ulContainer.css('width',width+'px');
}


var $newsTitle=$('.news-title');
// console.log(111);
$('#news .nav-pills a').on('click',function () {
    var $this=$(this);
    var title=$this.data('title');
    // console.log(title);
    $newsTitle.text(title);
})
//获取title值


//手指触摸轮播图滑动轮播图
// 思路：获取轮播图元素
// 绑定事件，记录手指触摸时的x坐标
//          记录手指松开轮播图时候的X坐标
//          比较两次的x坐标来判断是向左滑动还是向右滑动
//          向左滑动carousel('next')向右滑动carousel('prev')

var $carousel=$('.carousel');
var startX,endX, distance;
var offset=50;
$carousel.on('touchstart',function (e) {
    startX=e.originalEvent.touches[0].clientX;
    // console.log(start);
});
$carousel.on('touchmove',function (e) {
    endX=e.originalEvent.touches[0].clientX;
    // console.log(end);
});
$carousel.on('touchend',function () {
    // console.log(end);
    distance=Math.abs(startX-endX);
    if (distance>offset){
        $(this).carousel(startX>endX?'next':'prev');
    }

    // console.log(startX>endX?'←':'→');
});


