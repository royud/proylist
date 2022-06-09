//비디오 넣을 본체 호출
const video_wrap = document.getElementById("video_wrap");

//비디오 타이틀 생성 함수
function video_make(i){
    const play_video_title = document.createElement("div");
    play_video_title.className = "video_title";
    //비디오 송출 생성
    const play_video = document.createElement("div");
    play_video.className = "video";
    //타이틀, 비디오를 본체에 삽입
    video_wrap.appendChild(play_video_title);
    video_wrap.appendChild(play_video);

    // 원하는 비디오 내용 삽입
    play_video_title.innerHTML =video_list[i].title;
    play_video.innerHTML = video_list[i].video;
}
//비디오 삭제 함수
function video_remove(){
    const play_video_title = document.getElementsByClassName("video_title");
    const play_video = document.getElementsByClassName("video");

    play_video_title[0].classList.add("remove");
    play_video[0].classList.add("remove");
    setTimeout(() => {
        play_video_title[0].remove();
        play_video[0].remove();
    }, 200);

}


//시작 시 첫번째 비디오 송출
video_make(0);