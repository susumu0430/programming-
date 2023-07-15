// 'use strict';

(() => {

const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll("[data-nav]");
const $content = $tab.querySelectorAll("[data-content]");
const ACTIVE_CLASS= 'is-active';
const navLen = $nav.length;
//初期化
const init = () => {
    $content[0].style.display = "block";
};
init();
//クリックイベント
const handleClick = (e) => {
    e.preventDefault();
//クリックされたnav とそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    console.log("targetVal", targetVal);

//対象外のnav. content全て一旦リセットする
let index =0;
while(index < navLen){
    $content[index].style.display ="none";
    $nav[index].classList.remove(ACTIVE_CLASS);
    index++;
}

//対象のコンテンツをアクティブ化
$tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
$nav[targetVal].classList.add(ACTIVE_CLASS);

console.log('$nav[targetVal].classList',$nav[targetVal].classList);
};

//全nav要素に対して関数を適応 発火
let index = 0;
while(index < navLen){
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
}

})();