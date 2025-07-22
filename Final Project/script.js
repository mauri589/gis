// script.js の一番上に追加（変更なし）

document.addEventListener('DOMContentLoaded', function() {
    const coverPage = document.getElementById('coverPage');
    const startButton = document.getElementById('startButton');
    const mainTitle = document.querySelector('body > h1'); // マップ本体のタイトル

    startButton.addEventListener('click', function() {
        // 表紙をフェードアウトさせる
        coverPage.style.opacity = '0';
        setTimeout(() => {
            coverPage.style.display = 'none'; // フェードアウト後に非表示にする
            mainTitle.style.display = 'block'; // マップ本体のタイトルを表示
            map.invalidateSize(); // マップのサイズを再計算（重要！）
        }, 1000); // CSSのtransition時間と同じにする
    });

    // マップの初期化コードは、このDOMContentLoadedリスナーの外に置くか、
    // あるいは、カバーページが非表示になった後にマップを初期化するように変更することもできます。
    // しかし、時間がないので、既存のマップ初期化コードはそのままにしておき、
    // map.invalidateSize() を呼ぶことで対応するのが手軽です。
});


// 既存のマップ初期化コード（変更なしでこの下に続く）
const map = L.map('map').setView([35, 130], 4); 

// ... 既存の Leaflet マップの初期化コードとデータ読み込みコード ...

// (任意) 凡例の追加
// ...

// 日米韓比較データの表示ロジック（既存のコード）
// ...