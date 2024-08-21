// 서브 썸네일 클릭 시 메인 썸네일 변경
function productThumbnail1() {
    document.getElementById("thumbnail").src = "./images/sub/productMain.jpg";
  }
function productThumbnail2() {
    document.getElementById("thumbnail").src = "./images/sub/productSub.jpg";
  }

// 수량 버튼 이벤트
function add() {
  var pmp = document.querySelector('input[name="amounts"]');
  var sell_price = document.querySelector('input[name="sell_price"]').value;
  pmp.value = parseInt(pmp.value) + 1;
  var check = parseInt(pmp.value) * parseInt(sell_price);
  document.getElementById("check_price").innerText = check.toLocaleString('ko-KR');
  document.getElementById("total_price").innerText = check.toLocaleString('ko-KR');
}
function del() {
  var pmp = document.querySelector('input[name="amounts"]');
  var sell_price = document.querySelector('input[name="sell_price"]').value;
  if (pmp.value > 1) {
      pmp.value = parseInt(pmp.value) - 1; 
      var check = parseInt(pmp.value) * parseInt(sell_price); 
      document.getElementById("check_price").innerText = check.toLocaleString('ko-KR');
      document.getElementById("total_price").innerText = check.toLocaleString('ko-KR'); 
  }
}