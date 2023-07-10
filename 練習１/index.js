'use strict';

const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？';
const answers = [
    'スーパーファミコン',
    'プレイステーション２','ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

console.log();
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click',() => {
  if(correct === $button[0].textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
$button[1].addEventListener('click',() => {
    if(correct === $button[1].textContent) {
      window.alert('正解');
    } else {
      window.alert('不正解');
    }
  });
  $button[2].addEventListener('click',() => {
    if(correct === $button[2].textContent) {
      window.alert('正解');
    } else {
      window.alert('不正解');
    }
  });
  $button[3].addEventListener('click',() => {
    if(correct === $button[3].textContent) {
      window.alert('正解');
    } else {
      window.alert('不正解');
    }
  });