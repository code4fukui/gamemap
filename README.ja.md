# gamemap

2020年の全国選抜小学生プログラミング大会 福井県大会に向けて小学生が作成したプログラミング作品を可視化する、ウェブベースの地図アプリケーションです。

## デモ

**[https://code4fukui.github.io/gamemap/](https://code4fukui.github.io/gamemap/)**

デモでは、カラフルなピンマーカーが配置された福井県のインタラクティブな地図を表示します。ピンにマウスカーソルを合わせると作品名が表示され、クリックすると詳細がポップアップで表示されます。

## 機能

- **インタラクティブな地図**: [国土地理院](https://maps.gsi.go.jp/)の地図タイルを使用し、福井県の地図上に小学生の作品を表示します。
- **作品の詳細**: マーカーにマウスカーソルを合わせると作品名が表示されます。マーカーをクリックすると、その場所の作品名がポップアップで開きます。
- **データ駆動型**: 2つの独立したCSVファイルからデータを取得・結合して地図上に展開します。
- **再利用可能なWebコンポーネント**: 地図はカスタムHTML要素 `<map-gsi-csv>` として実装されており、他の場所への埋め込みが容易です。
- **カスタムアイコン**: 地図のマーカーに、ユニークでカラフルなピンアイコンを使用しています。

## 技術スタック

- **マッピングライブラリ**: [Leaflet.js](https://leafletjs.com/)
- **地図タイル**: [国土地理院タイル](https://maps.gsi.go.jp/development/ichiran.html)
- **コアロジック**: Vanilla JavaScript (ES Modules)、Webコンポーネントとして実装

## 使い方

地図は `<map-gsi-csv>` Webコンポーネントとして実装されています。使用するには、スクリプトを読み込み、HTMLに要素を追加して、属性でデータソースを設定します。

**`index.html` の実装例:**

```html
<!-- コンポーネントのJavaScriptモジュールを読み込む -->
<script type="module" src="./map-gsi-csv.js"></script>

<!-- HTML内でカスタム要素を使用する -->
<map-gsi-csv 
    src="works-fukui2020.csv" 
    title-name="作品名" 
    pos-src="positions.csv" 
    pos-name="所属">
</map-gsi-csv>
```

### コンポーネントの属性

- `src`: メインデータのCSVファイルへのパス（例: 作品の詳細データ）。
- `title-name`: マーカーのタイトルやポップアップに表示する、`src` ファイル内の列名。
- `pos-src`: 位置データ（緯度・経度を含む）のCSVファイルへのパス。
- `pos-name`: `src` ファイルと `pos-src` ファイルを結合するためのキーとして使用する列名。

## データソース

本アプリケーションでは、以下の2つのCSVファイルを使用して地図上にデータを展開します。

- [`works-fukui2020.csv`](works-fukui2020.csv): 各小学生の作品の詳細データ。作品名（`作品名`）や学校・クラブなどの所属（`所属`）を含みます。
- [`positions.csv`](positions.csv): 所属名（`schema:name`）と、その地理座標（`schema:latitude`、`schema:longitude`）を紐付けるデータ。

## 謝辞

- **アプリコンセプト**: [福井県のプログラミング好き小学生が考えた「もっと好きになる わたしのまち」とは!?](https://fukuno.jig.jp/3049)
- **データ**: [福井県大会 | 全国選抜小学生プログラミング大会](https://zsjk.jp/fukui/)
- **ピンアイコンデザイン**: [by asuka](https://fukuno.jig.jp/3049)

## ライセンス

本プロジェクトは [MIT License](LICENSE) のもとで公開されています。
