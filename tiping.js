let Q = ["cogito ergo sum","memento mori","vox populi vox dei","jacta alea est","vivere est militare","festina lente","usus est magister optimus","vita brevis, ars longa","homo homini lupus","nemo sine periculo vincere potest","sequere naturam","per aspera ad astra"];//問題文
let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する

let Q_i = 0;//回答初期値・現在単語どこまで合っているか判定している文字番号
let Q_l = Q[Q_No].length;//計算用の文字の長さ


window.addEventListener("keydown", push_Keydown);
//「キーが押されているとき、関数push_keydownを実行する」というプログラムをこの画面を開いているとき実行する

function push_Keydown(event){
 //押したキーで変化するpush_keydown関数
	let keyCode = event.key;//中身は「押したキー」である変数keycode
	if (Q_l == Q_l-Q_i){
		document.getElementById("img").src=Q[Q_No] + ".png";
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す
		}

	if (Q[Q_No].charAt(Q_i) == keyCode) { //押したキーが合っていたら

		Q_i++; //判定する文章に１足す
		document.getElementById("img").src=Q[Q_No] + ".png";
		document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

		if (Q_l-Q_i === 0){ //全部正解したら
	
	
			Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
			Q_i = 0;//回答初期値・現在どこまで合っているか判定している文字番号
			Q_l = Q[Q_No].length;//計算用の文字の長さ

            document.getElementById("img").src=Q[Q_No] + ".png";
			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //新たな問題を書き出す

		}
	}
}