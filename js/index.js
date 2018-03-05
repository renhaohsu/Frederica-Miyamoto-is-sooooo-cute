var vm = new Vue({
  el: "#app",
  data: {
    postits:[
      {pos: { x: 20, y: 0 }
      },
      // {pos: { x: 480, y: 0 }
      // }
    ],
    nowId: -1,
    startMousePos:{
      x: 0,
      y: 0
    }
  },methods: {
    postitCss(p){
      return {
        left: p.pos.x+"px",
        top: p.pos.y+"px",}
    },
    selectId(evt,id){
      console.log(id)
      this.nowId=id
      this.startMousePos = {
        x: evt.offsetX,
        y: evt.offsetY,
      }
      console.log(this.startMousePos)
    },
    addPostit(){
      this.postits.push(
        {
          text: "文字",
          color: "yellow",
          pos: { x: 200+Math.random()*200, y: 200+Math.random()*200 }
        }
      )
    }   
  }
})

window.onmousemove = (evt)=>{
    // console.log(evt)  
  element=document.getElementById('i')
  element.style.transitionProperty="left,top"
  element.style.transitionDuration="0.5s"
  element.style.transitionTimingFunction="linear"
  if (vm.nowId != -1){
    vm.postits[vm.nowId].pos.x=evt.pageX-vm.startMousePos.x
    vm.postits[vm.nowId].pos.y=evt.pageY-vm.startMousePos.y
  }
}

window.onmouseup = ()=>{
  vm.nowId = -1
}

//試
var t
function move(){
  element=document.getElementById('i')
  element.style.transitionProperty="left,top"
  element.style.transitionDuration="9s"
  element.style.transitionTimingFunction="linear"
  element.style.left = Math.random()*100 + "%"
  element.style.top = Math.random()*100 + "%"
  
  t = setTimeout("move()",3500)
}

// e=document.getElementById('i')
// var l = e.style.left.slice(0,-2)
  
var time1=1
element=document.getElementById('i')
function changeImage(){
  time1 += 1
  if (time1 > 0){
    setTimeout(changeImage,1000)
  }
  if (time1 % 3 == 0){
    element.style.backgroundImage = "url(../images/FreChan3.png)"}  
  if (time1 % 3 == 1){
    element.style.backgroundImage = "url(../images/FreChan2.png)"}
  if (time1 % 3 == 2){
    element.style.backgroundImage = "url(../images/FreChan1.png)"}  
  if (time1 > 3){ time1 = 1 }    
}

function loading(){
  changeImage();
  move();

  var body = document.getElementsByTagName('body');
  body[0].style.backgroundImage = 'none';
  body[0].style.backgroundColor = '#987654';

  var a = document.getElementById('a');
  a.style.display = 'none';

  var b = document.getElementById('b');
  b.style.display = 'none';

  var c = document.getElementById('c');
  c.style.display = 'none';



  loader = document.getElementsByClassName('loader');
  loader[0].style.visibility = 'visible';
  // if(loader[0].style.visibility == 'hidden'){
  //   loader[0].style.visibility = 'visible';
  // } else {
  //   loader[0].style.visibility = 'hidden';
  // }
}