const checkboxes = document.getElementsByName('agree');

function selectAll(selectAll){
    checkboxes.forEach((checkbox) =>{
        checkbox.checked = selectAll.checked;
    })
}

function checkAll(checkAll){
    if(checkboxes[1].checked == true && checkboxes[2].checked == true && checkboxes[3].checked == true){
        document.querySelector('.check_box').checked = true;
    }
    if(checkAll.checked == false){
        document.querySelector('.check_box').checked = checkAll.checked;
    }
}

function checkboxCheck(){
if(checkboxes[0].checked == false)
    alert('J&H 이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.');
if(checkboxes[0].checked == true)
    location.href='signUp.html';
}