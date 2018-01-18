dx=Math.ceil(Math.random()*10);
dy=Math.ceil(Math.random()*10);
function move()
{
var str="";
x=isNaN(parseInt(me.style.left))?0:parseInt(me.style.left);
y=isNaN(parseInt(me.style.top))?0:parseInt(me.style.top);
if(x+dx>document.body.clientWidth-me.width||x+dx<0)dx=-dx;
if(y+dy>document.body.clientHeight-me.height||y+dy<0)dy=-dy;
x+=dx;y+=dy;
me.style.left=str+x+"px";
me.style.top=str+y+"px";
}
s=setInterval("move()",180);