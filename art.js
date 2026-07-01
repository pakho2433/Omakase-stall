"use strict";
function px(ctx,color,x,y,w,h){ctx.fillStyle=color;ctx.fillRect(x,y,w,h)}
function drawFood(canvas,id){
 const c=canvas.getContext("2d");c.imageSmoothingEnabled=false;c.clearRect(0,0,64,64);
 const d="#2a2028",r="#fff3d1",s="#e66b55",n="#2f5142",b="#88aeb0",g="#e2a83b",h="#a65d37";
 if(id==="sushi"){px(c,d,9,36,46,16);px(c,r,12,31,40,17);px(c,s,9,21,46,16);px(c,"#f8a176",13,24,37,4);px(c,d,9,36,46,5)}
 else if(id==="oysters"){px(c,d,8,31,48,19);px(c,"#77818a",11,27,42,19);px(c,"#ddd0b6",16,30,32,14);px(c,"#b57550",22,33,20,9);px(c,g,28,35,8,5);px(c,"#f7d762",38,29,4,4)}
 else if(id==="pizza"){px(c,d,8,48,49,5);px(c,"#d79742",8,43,49,7);px(c,"#f4c85b",12,18,41,27);px(c,"#c94e42",18,26,8,8);px(c,"#c94e42",36,34,8,8);px(c,"#456c43",37,23,5,5);px(c,"#fff0b3",26,35,5,5);px(c,d,28,12,6,6);px(c,d,22,18,18,4)}
 else if(id==="ramen"||id==="udon"){px(c,d,7,28,50,25);px(c,id==="ramen"?"#b8413e":"#45657c",10,30,44,20);px(c,h,13,30,38,8);px(c,"#f1d27b",15,33,34,4);px(c,"#f1d27b",18,38,29,3);px(c,r,17,26,12,8);px(c,g,20,28,6,5);px(c,"#d9776b",37,24,10,10);px(c,n,45,20,7,13);px(c,d,15,12,4,18);px(c,d,45,10,4,18)}
 else if(id==="tempura"){px(c,d,9,46,46,6);px(c,b,12,43,40,6);px(c,g,18,20,12,25);px(c,"#f5ce66",22,15,10,20);px(c,"#d95d49",25,11,5,8);px(c,g,35,24,12,21);px(c,"#f5ce66",39,19,10,18);px(c,n,38,15,5,8)}
 else if(id==="sashimi"){px(c,d,7,47,50,5);px(c,b,10,43,44,6);px(c,s,13,27,18,13);px(c,"#ff9b7e",17,29,10,3);px(c,s,32,22,19,13);px(c,"#ff9b7e",36,25,11,3);px(c,n,12,40,10,4);px(c,"#9bc556",46,37,8,6)}
 else if(id==="onigiri"){px(c,d,10,45,44,6);px(c,r,15,17,34,32);px(c,r,20,12,24,8);px(c,n,23,35,18,18);px(c,d,28,27,8,5)}
 else if(id==="takoyaki"){px(c,d,7,46,50,6);px(c,"#b66d35",10,43,44,6);[[15,28],[29,25],[42,30],[23,38],[38,40]].forEach(([x,y])=>{px(c,g,x,y,12,11);px(c,"#8f432e",x+3,y+3,7,4);px(c,r,x+5,y-3,2,5)})}
 else if(id==="gyoza"){px(c,d,6,46,52,6);px(c,b,9,43,46,5);[[10,31],[23,26],[36,31]].forEach(([x,y])=>{px(c,"#e8c77c",x,y,18,13);px(c,"#fff0b0",x+3,y-5,12,8);px(c,d,x+4,y-2,2,4);px(c,d,x+9,y-3,2,4)})}
 else if(id==="mochi"){px(c,d,7,46,50,6);px(c,b,10,43,44,5);px(c,"#e89aaf",12,29,17,15);px(c,"#f6d6e0",15,25,12,8);px(c,"#a9ce82",31,28,18,16);px(c,"#dff0c2",34,24,12,8);px(c,r,25,34,14,12);px(c,"#c99768",29,31,7,6)}
 else if(id==="eel"){px(c,d,7,46,50,6);px(c,"#3e3437",10,39,44,9);px(c,r,13,35,38,8);px(c,"#7b3f2b",12,23,40,14);px(c,"#b76638",15,20,34,8);px(c,g,19,24,4,12);px(c,g,31,22,4,13);px(c,g,43,23,4,11)}
}
function createFoodDataUrl(id){const canvas=document.createElement("canvas");canvas.width=64;canvas.height=64;drawFood(canvas,id);return canvas.toDataURL("image/png")}
