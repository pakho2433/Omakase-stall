"use strict";
const TEACHER_EMAIL="yuetki1999@gmail.com",TOTAL_QUESTIONS=15,UNLOCK_COINS=30;
const foods=[
{id:"sushi",name:"sushi",level:1},{id:"oysters",name:"baked oysters",level:1},{id:"pizza",name:"pizza",level:1},
{id:"ramen",name:"ramen",level:1},{id:"tempura",name:"tempura",level:1},{id:"sashimi",name:"salmon sashimi",level:1},
{id:"onigiri",name:"onigiri",level:2},{id:"takoyaki",name:"takoyaki",level:2},{id:"udon",name:"udon",level:2},
{id:"gyoza",name:"gyoza",level:2},{id:"mochi",name:"mochi",level:2},{id:"eel",name:"grilled eel",level:2}
];
const state={student:{name:"",className:"",classNumber:""},coins:0,question:0,correct:0,wrong:0,unlocked:false,order:[],plate:[],history:[],musicOn:true,finished:false,startedAt:null};
const $=id=>document.getElementById(id);
function clampText(value,max=40){return String(value||"").trim().replace(/[<>]/g,"").slice(0,max)}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
function foodById(id){return foods.find(food=>food.id===id)}
function availableFoods(){return foods.filter(food=>food.level===1||state.unlocked)}
function formatFoodList(ids){const names=ids.map(id=>foodById(id).name);return names.length===1?names[0]:`${names.slice(0,-1).join(", ")} and ${names.at(-1)}`}
function arraysMatch(a,b){return [...a].sort().join("|")===[...b].sort().join("|")}
