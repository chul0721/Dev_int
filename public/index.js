let selector = document.getElementById('int');
setInterval(() => {
    switch (Math.floor(Math.random() * 6)) {
        case 0:
            selector.style.fontFamily = 'Do Hyeon';
            break;
        case 1:
            selector.style.fontFamily = 'Inconsolata';
            break;
        case 2:
            selector.style.fontFamily = 'Turret Road';
            break;
        case 3:
            selector.style.fontFamily = 'Fjalla One';      
            break;
        case 4:
            selector.style.fontFamily = 'Dancing Script';
            break;
        case 5:
            selector.style.fontFamily = 'Architects Daughter';
            break;
    }
}, 1000);


let text = ['평범한 학생','중학생', '초보', '예비', '코딩을 좋아하는 학생', '어린'];
function callMe(){
  let myText = document.getElementById('mytext');
  let curIdx = text.indexOf(myText.innerHTML);
  myText.innerHTML = text[(curIdx+1)%text.length];
}
setInterval(callMe,1300);