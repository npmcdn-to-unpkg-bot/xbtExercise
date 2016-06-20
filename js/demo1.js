/**
 * Created by XUBAOTING on 2016/6/20.
 */
//document.body.clientHeight,document.body.clientWidth用户定义的最外层父容器的宽高
//@charset "UTF-8";
console.log(document.body.clientHeight);
console.log(document.body.clientWidth);
console.log(document.body.offsetHeight);
console.log(document.body.offsetWidth);
console.log("显示区的高,如果控制台有打开会影响数值大小"+window.innerHeight);
console.log("浏览器的高，是对整个浏览器的页面大小进行设置时会有的效果"+window.outerHeight);
console.log("显示区的宽,如果控制台有打开会影响数值大小"+window.innerWidth);
console.log("浏览器的宽，是对整个浏览器的页面大小进行设置时会有的效果"+window.outerWidth);
console.log('返回显示器的水平分辨率'+screen.height);
console.log('返回显示器的可用水平分辨率'+screen.availHeight)