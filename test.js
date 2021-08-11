let gn;
let time;   
function doStart() {
    gn=5;
    time=setInterval(showText,1000);
    // 5부터 시작해서 1초에 한번씩 숫자가 감소해서
    // 5, 4, 3, 2, 1, 시작. 표시라고 정지하는 코드
    // setInterval, clearInterval 이용
} 
function showText() {
    document.getElementsByName("point")[0].value=gn;
    if(gn==0) {
        document.getElementsByName("point")[0].value="   시작    ";
        clearInterval(timer);
    }
    gn-=1;
}   