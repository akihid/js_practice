//1.テキストエリアに入力があった場合
//2.テキストエリアの文字数を取得
//3.文字数をカウンターに反映


window.addEventListener('DOMContentLoaded',
function(){

  var node = document.querySelector('#count-text');

  node.addEventListener('keyup' , function() {
    var count = this.value.length;

    var counterNode = document.querySelector('.show-count-text');

    counterNode.innerText = count;

  }, false);

},false

);
