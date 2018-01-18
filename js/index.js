  window.onload=function(){
    var pic=document.getElementById('pic').getElementsByTagName('li');
    var list=document.getElementById('list').getElementsByTagName('li');
    var index=0;
    var timer=null;
    
    //遍历
//  alert(pic.length);
    for(var i=0;i<pic.length;i++){
      list[i].id=i;
      pic[i].id=i;
      list[i].onmouseover=function(){
        if(timer){
          clearInterval(timer);
        }
      changeImg(this.id);
//      alert(this.id);
      }
      list[i].onmouseout=function(){
//      alert(this.id);
            if(timer){
              index=this.id;
            }
        autoChange(index);
      }
//    autoChange(index);
        
        document.getElementById('pic').onmouseout=function(){
          autoChange(index);
//        alert(index);
        }
        document.getElementById('pic').onmouseover=function(){
          
          clearInterval(timer);
        }
    }
        autoChange(index);
        
    //图片切换
    function changeImg(id){
//    alert(id);
      for(var j=0;j<list.length;j++){
        list[j].className='';
        pic[j].style.display='none';
      }
      list[id].className='on';
      pic[id].style.display='block';
    }
    //自动切换
    function autoChange(index){
      timer=setInterval(function(){
        index++;
        if(index>=pic.length){
        index=0;
          }
        changeImg(index);
      },1000)
    }
  }
  window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


  


  