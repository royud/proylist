const musiclists = document.getElementById("musiclists");
// ---------------------------------------------------------------------
for(i = 0; i < video_list.length; i++){
    //뮤직 리스트 생성
    const new_music = document.createElement("div");
    new_music.className = "musiclist";

    //뮤직 리스트 목록에 자동 삽입
    musiclists.appendChild(new_music)

    new_music.innerHTML = video_list[i].title;
};

const generated_list = document.getElementsByClassName("musiclist");
generated_list[0].classList.add("selected");

//마우스 오버 이벤트
for(i = 0; i < video_list.length; i++){
    generated_list[i].addEventListener("mouseover", function(e){
        const evEl = e.target.parentElement.children;
        const index = Array.from(evEl).indexOf(e.target);

        generated_list[index].classList.add("mouseover");
    })
}
//마우스아웃 이벤트
for(i = 0; i < video_list.length; i++){
    generated_list[i].addEventListener("mouseout", function(e){
        const evEl = e.target.parentElement.children;
        const index = Array.from(evEl).indexOf(e.target);

        generated_list[index].classList.remove("mouseover");
    })
}

//클릭 이벤트
for(i = 0; i < video_list.length; i++){
    generated_list[i].addEventListener("click", function(e){
        //선택 초기화
        for(i = 0;i < generated_list.length; i++){
            generated_list[i].classList.remove("selected");
        }
        //선택한 리스트의 인덱스
        const evEl = e.target.parentElement.children;
        const index = Array.from(evEl).indexOf(e.target);

        //기존 비디오 삭제
        video_remove();

        //선택한 비디오 생성
        setTimeout(() => {
            video_make(index);
        }, 200);

        generated_list[index].classList.add("selected");
    });
};
