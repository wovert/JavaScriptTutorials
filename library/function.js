/**
 * 
 * @param o element object
 * @return p object element position object  
 */
function getPos(o) {
  if(o.nodeType != 1) return false;
  var p = {left:0, top:0};
  while(o) {
    p.left += o.offsetLeft;
    p.top += o.offsetTop;
    if (debug != undefined && console.log) {
      console.log(o.tagName +' offset(left:'+o.offsetLeft+', top:'+o.offsetTop+')');
    }
    o = o.offsetParent;
  }
  return p;
}

function getElementsByClassName(className) {
  if (typeof className !== 'string') {
    return;
  }
  var a = document.getElementsByTagName('*');
  var arr = [];
  var cnt = a.length;
  var pat =  new RegExp('\\b'+className+'\\b');
  for (var i=0; i<a.length; i++) {
    if (pat.test(a[i].className)) {
      arr.push(a[i]);
    }
  }
  return arr;
}