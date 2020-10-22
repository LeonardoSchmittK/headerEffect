this.onscroll = () => {
  performEffect();
};
const title = window.document.querySelector("h1");
const header = window.document.querySelector("header");
const pos = [];
function performEffect() {
  pos.push(
    Number.parseInt(document.body.scrollTop) ||
      Number.parseInt(document.documentElement.scrollTop)
  );
  const last = pos.length-1
  header.style.display = "none";
  
  
  if (pos[last] <= pos[last-1]) {
     header.style.display = "flex";
    header.style.animation = "popUp .2s linear"
   
  }
  if(pos.length>=2){
    pos.shift()
  }
}


function goToTop() {

   window.document.body.scrollTop = 0
   document.documentElement.scrollTop = 0
   
}