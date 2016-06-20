/**
 * Created by XUBAOTING on 2016/6/20.
 */
window.onload =function() {
    var div = document.getElementsByClassName('box1');
    var height = div[0].getAttribute('style');
    console.log(div[0].getAttribute('height'));
    window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t>=100) {
            div.style.display = 'block';
        }else {
            div.style.display ='none';
        }
    }
}