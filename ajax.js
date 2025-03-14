
/* 입력된 데이터 Json 형식으로 변경 */
var reqJson = new Object();
reqJson.product_id = product_id[i].value;
reqJson.size = size[i].value;
reqJson.quantity = Number(quantity[i].value) + 1;
/* 통신에 사용 될 XMLHttpRequest 객체 정의 */
var httpRequest = new XMLHttpRequest();
/* httpRequest의 readyState가 변화했을때 함수 실행 */
httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var result = httpRequest.response;
            if(!!result.msg){
                alert(result.msg);
                return false;
            }
            quantity[i].value = result.quantity;
            each_price[i].innerText = (price[i].value * quantity[i].value).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        } else {
            alert(httpRequest.status +  ' Error');
        }
    }
};
/* Post 방식으로 요청 */
httpRequest.open('POST', '/jnh/set-quantity', true);
/* Response Type을 Json으로 사전 정의 */
httpRequest.responseType = "json";
/* 요청 Header에 컨텐츠 타입은 Json으로 사전 정의 */
httpRequest.setRequestHeader('Content-Type', 'application/json');
/* 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송 */
httpRequest.send(JSON.stringify(reqJson));