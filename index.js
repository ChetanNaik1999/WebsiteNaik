console.log("Hii");
let isClick=false;
let showVideos=document.getElementById("showVideos");
showVideos.addEventListener("click",()=>{
    let menuList=document.querySelector('.menu-list');
    if(isClick)
    {
    menuList.style.display='block';
    isClick=false;
    }
    else{
        menuList.style.display='none';
        isClick=true;
    }
});
let isHide=true;
let HideVideo=document.querySelector(".HideVideo");
HideVideo.addEventListener("click",()=>{
    if(!isHide)
    {
    let video=document.querySelector('.video');
    video.style.display='none';
    isHide=true;
    }
    else{
        let video=document.querySelector('.video');
    video.style.display='block'; 
    isHide=false;
    }
});

let videosList=['c1.mp4','c2.mp4','c1.mp4','c2.mp4','c2.mp4','c1.mp4','c2.mp4','c2.mp4','c1.mp4','c2.mp4'];
let videoOn=document.getElementsByClassName('videoOn');
Array.from(videoOn).forEach(function(element,index){
    element.addEventListener("click",()=>{
 let video=document.querySelector('.video');
 video.setAttribute("src",videosList[index]);
    });
});