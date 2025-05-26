var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
//변수 video,btn는 도큐먼트에서 id myVideo, myBtn를 찾는다

function myFunction(){
    //가정법으로 두 가지의 이벤트를 실행
    if(video.paused){
        //첫 번째 : 비디오 실행 중
        video.play();
        btn.innerHTML = "Pause"
    }else{
        //두 번째 : 비디오 멈춤 (위의 사항과 반대)
        video.pause();
        btn.innerHTML = "Play";
    }
}