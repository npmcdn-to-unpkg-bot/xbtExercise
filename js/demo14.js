/**
 * Created by XUBAOTING on 2016/6/22.
 */
window.onload =function () {
    var left = document.getElementsByClassName('left')[0];
    var right = document.getElementsByClassName('right')[0];
    var className1 = left.getAttribute('class');
    var className2 = right.getAttribute('class');
    var n = 1;
    left.addEventListener('click',function(e) {
        var s = n-1;
        var color0 = document.getElementsByClassName('product_0'+n+'_m'+n+'')[0];
        var color1 =  document.getElementsByClassName('product_0'+s+'_m'+s+'')[0];
        color0.removeAttribute('class');
        color0.setAttribute('class',' product_0'+n+'_m'+n+'');
        color1.removeAttribute('class');
        color1.setAttribute('class',' product_0'+s+'_m'+s+'  addcolor');
        var img0 = document.getElementsByClassName('product_0'+n+'_m')[0];
        var img1 = document.getElementsByClassName('product_0'+s+'_m')[0];
        img0.removeAttribute('class');
        img0.setAttribute('class',' product_0'+n+'_m');
        img1.removeAttribute('class');
        img1.setAttribute('class',' product_0'+s+'_m  show');
        n--;
        if(n!=6) {
            right.removeAttribute('class');
            right.setAttribute('class','right  show');
        }
        if(n==1) {
            left.removeAttribute('class')
            left.setAttribute('class','left  hide');
        }

    });
    right.addEventListener('click',function(e) {
        var s= n+1;
        var color0 = document.getElementsByClassName('product_0'+n+'_m'+n+'')[0];
        var color1 =  document.getElementsByClassName('product_0'+s+'_m'+s+'')[0];
        color0.removeAttribute('class');
        color0.setAttribute('class',' product_0'+n+'_m'+n+'');
        color1.removeAttribute('class');
        color1.setAttribute('class',' product_0'+s+'_m'+s+'  addcolor');
        var img0 = document.getElementsByClassName('product_0'+n+'_m')[0];
        var img1 = document.getElementsByClassName('product_0'+s+'_m')[0];
        img0.removeAttribute('class');
        img0.setAttribute('class',' product_0'+n+'_m');
        img1.removeAttribute('class');
        img1.setAttribute('class',' product_0'+s+'_m  show');
        n++;
        if(n==2) {
            left.removeAttribute('class')
            left.setAttribute('class','left show');
        }

        if(n==5) {
            right.removeAttribute('class')
            right.setAttribute('class','right hide');
        }


    });
    var btnGroup =document.getElementsByClassName('btnGroup')[0];
    btnGroup.addEventListener('click',function(event) {
        var src = event.srcElement||event.target;
        //console.log(src.getAttribute('value'));
    });
    var btns = document.getElementsByTagName('input');
    for (var i=0;i<btns.length;i++) {
        (function (i) {
            return btns[i].addEventListener('click',function() {
                console.log(i);
            })
        })(i)
    }
}