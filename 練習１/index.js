'use strict';

const quiz = [
    {
      question:'ゲーム市場、最も売れたゲーム機は次の内どれ？',
      answers: [
        'スーパーファミコン',
        'プレイステーション２',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct:'ニンテンドーDS'
    },{
        question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [
        'MOTHER2',
        'スーパーマリオブラザーズ３',
        'スーパードンキーコング',
        '星のカービィ'
      ],
      correct:'MOTHER2'
    },{
        question:'ファイナルファンタジーIVの主人公の名前は？',
      answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        'セシル'
      ],
      correct:'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズ問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent =quiz[quizIndex].question;
    let buttonIndex =0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
if(quiz[quizIndex].correct === e.target.textContent) {
  window.alert('正解');
} else {
  window.alert('不正解');
}

quizIndex++;

if(quizIndex < quizLength) {
  setupQuiz();
} else {
  window.alert('終了');
}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

