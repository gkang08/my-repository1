/**
 * Created by Administrator on 2017/3/2.
 */



function resize() {
    var windowWidth= $(window).width();//获取到的是数字 不是字符串
    // console.log(windowWidth);
    var isSmallScreen= windowWidth< 768;
    // console.log(123);
    $('#carousel-example-generic> .carousel-inner> .item> img').each(function (i,item) {
        // alert(111);
        // console.log(111)

        var $item=$(item);  //把拿到的dom对象转换为jQuery对象
        // console.log(item);
        // console.log($item);
        // var imgSrc=$item.data-(isSmallScreen ? 'image-xs':'image-lg');

        var imgSrc= isSmallScreen ? $item.data('image-xs'): $item.data('image-lg');

        $item.attr('src',imgSrc);
        // $item.css('src','url("'+imgSrc+'")');
    })
}
resize();
$(window).on('resize',resize);
// console.log(111);