# 勉強した内容のまとめ

Udemyのコース[React - The Complete Guide 2024 (incl. React Router & Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)から学んだことのまとめ

## Section 1: Getting Started

このセクションにはプロジェクトの作成や環境構築についての内容になった

### Chapter 1: Welcome To The Course!

コースの概要

### Chapter 2: What is React.js? And Why Would You Use It?

Reactの基本説明

### Chapter 3: ReactJS vs "Vanilla JavaScript": Why Use React?

Reactと普通JavaScriptの比較、そしてReactの便利点  
[Reactと普通JavaScriptのプロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/01%20Getting%20Started/react-vs-vanilla-js-example)

### Chapter 4: Editing Our First React App

サンプルアプリの説明  
[サンプルアプリ](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/01%20Getting%20Started/edited-first-app)

### Chapter 5: About This Course & Course Outline

コースの流れの説明

### Chapter 6: The Two Ways (Paths) Of Taking This Course

コースの2つの流れ（シンプルと詳細的な）
* シンプル  
 必要なコース内容のみ使って、既に分かっている内容を飛ばす方法
* 詳細的な  
 すべての内容を使って勉強する

### Chapter 7: Getting The Most Out Of This Course

基本的なコースの勉強方法の説明（メモなど）

### Chapter 8: Join Our Online Community

オンラインコミュニティの参加（コミュニティに投稿）

### Chapter 9: Creating React Projects

Reactのプロジェクト作成についての説明

### Chapter 10: Why Do You Need A Special Project Setup?

なぜReactは特別なプロジェクトが必要（他のwebプロジェクトと比較）

## Section 2: JavaScript Refresher

Reactの説明に入る前に、必要なJavaScript知識の復讐の内容になった

### Chapter 11: Module Introduction

JavaScriptの復讐の軽い説明

### Chapter 12: Starting Project

プロジェクトのサンプルコードの説明  
[サンプルアプリ（モジュールの最後の時点）](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/02%20JS%20Refresher)

### Chapter 13: Adding JavaScript To A Page & How React Projects Differ

HTMLとJavaScriptの関係、JavaScriptファイルの実行条件、Reactのその違い

### Chapter 14: React Projects Use a Build Process

Reactの自動操作についての説明

### Chapter 15: "import" & "export"

JavaScriptのimportとexport文の説明

### Chapter 16: Revisiting Variables & Values

JavaScriptで変数とその値の説明

### Chapter 17: Revisiting Operators

JavaScriptでの演算子（+, -, *, /, =, <, >）の説明

### Chapter 18: Revisiting Functions & Parameters

JavaScriptでの関数とその引数の説明

### Coding Exercise 1: Working with Functions

3つ引数を取得して計算する関数を作る問題  
結果:  
```
function combine(a, b, c) {
    return a * b / c;
}
```

### Chapter 19: Arrow Functions

アロー関数(() => {})の説明、普通の関数との違いなど

### Chapter 20: More on the Arrow Function Syntax

アロー関数の続き、別の書き方や短くするための技

### Chapter 21: Revisiting Objects & Classes

JavaScriptのオブジェクトやクラスの説明

### Chapter 22: Arrays & Array Methods like map()

JavaScriptの配列とそのための関数（特にmap）

### Coding Exercise 2: Array Methods

配列のmap関数の実際使う練習  
結果:  
```
const editedArray = numberArray.map((item) => ({ val: item }));
```

### Chapter 23: Destructuring

配列とJSオブジェクトの分割の説明

### Chapter 24: Destructuring in Function Parameter Lists

関数の引数の中でも分割できる説明

### Chapter 25: The Spread Operator

スプレッド演算子（...）の説明

### Chapter 26: Revisiting Control Structures

コード流れの操作の説明（分岐、ループなど）

### Chapter 27: Manipulating the DOM - Not With React!

DOMの操作について、特にReactではしないことが大事

### Chapter 28: Using Functions as Values

関数は値として扱うことの説明

### Chapter 29: Defining Functions Inside Of Functions

関数の中でも関数が定義して使うことができる説明

### Chapter 30: Reference vs Primitive Values

プリミティブ値（数値、文字列など）と参考値（配列など）の違いの説明

### Chapter 31: Next-Gen JavaScript - Summary

JS ES6以降の違いについての説明（letとconst、アロー関数、スプレッドとレスト演算子など）

### Chapter 32: JS Array Functions

配列関係の関数の復讐

### Chapter 33: Module Resources

JavaScriptの復讐のために役に立つリソース

## Section 3: React Essentials - Components, JSX, Props, State & More

Reactの基礎の内容になった

### Chapter 34: Module Introduction

Reactの基礎の軽い説明

### Chapter 35: It's All About Components! [Core Concept]

Reactの主なポイント：コンポーネントについての説明

### Chapter 36: Setting Up The Starting Project

プロジェクトの準備  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/01-starting-project)

### Chapter 37: JSX & React Components [Core Concept]

Reactの主なポイント：JSX言語とReactのコンポーネントの作成の説明

### Chapter 38: Creating & Using a First Custom Component

初めてのカスタムコンポーネントの作成  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/02-creating-using-first-component)

### Chapter 39: A Closer Look: Components & File Extensions

コンポーネントとファイル拡張子の詳細説明

### Coding Exercise 3: Building & Using a Component

ゼロからコンポーネントの作成  
結果：  
```
export function MainGoal() {
    return (
        <p>My main goal: Learn React from the ground up.</p>
    );
}
```

### Chapter 40: How React Handles Components & How It Builds a "Component Tree" [Core Concept]

Reactの主なポイント：コンポーネントツリーについての説明

### Quiz 1: Components & JSX

クイズ：コンポーネントとJSX

### Chapter 41: Using & Outputting Dynamic Values [Core Concept]

Reactの主なポイント：動的なデータの出力についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/03-using-outputting-dynamic-values)

### Chapter 42: Setting HTML Attributes Dynamically & Loading Image Files

Reactの主なポイント：動的にHTML属性の設定と画像ファイルのロードについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/04-html-attributes-dynamically-image-files)

### Coding Exercise 4: Outputting Dynamic Content

コンポーネントで動的にデータの設定  
結果：  
```
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}
```

### Chapter 43: Making Components Reusable with Props [Core Concept]

Reactの主なポイント：プロップを使ってコンポーネントの複製についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/05-cmp-props)

### Chapter 44: Alternative Props Syntaxes

Reactの主なポイント：プロップのそれぞれの書き方についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/06-alternative-props-syntax)

### Chapter 45: More Props Syntaxes

より多くのプロップの書き方についての説明

### Coding Exercise 5: Working with Props

プロップを使ってコンポーネントを複製できるように作る  
結果：  
```
export function CourseGoal({title, description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
```

### Quiz 2: Dynamic Values & Props

クイズ：動的なデータとプロップ

### Chapter 46: Best Practice: Storing Components in Files & Using a Good Project Structure

ベストプラクティス：コンポーネントを別ファイルに保存についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/07-storing-cmp-in-files)

### Chapter 47: Storing Component Style Files Next To Components

コンポーネントで使われるスタイルシートも別ファイルに保存についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/08-styles-next-to-cmp)

### Chapter 48: Component Composition: The special "children" Prop [Core Concept]

Reactの主なポイント：特別なchildrenプロップについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/09-composition-children-prop)

### Coding Exercise 6: Component Composition

childrenを使ってコンポーネントを作成  
結果：  
```
export default function Card({children, name}) {
    return (
        <article className="card">
        <h2>{name}</h2>
        {children}
        </article>
        );
}
```

### Chapter 49: Reacting to Events [Core Concept]

Reactの主なポイント：イベントの反応についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/10-reacting-to-events)

### Chapter 50: Passing Functions as Values to Props

プロップに関数を渡すことについての説明
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/11-passing-functions-as-values)

### Coding Exercise 7: Reacting to Events

プロップに関数を渡す  
結果：  
```
<p id="actions">
    <button onClick={handleClick}>Login</button>
</p>
```

### Chapter 51: Passing Custom Arguments to Event Functions

イベントの関数に引数を渡すことについての説明
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/12-passing-custom-arguments-to-event-fn)

### Coding Exercise 8: Configuring Event Handlers

イベントの関数に引数を渡す  
結果：  
```
<p id="actions">
    <button onClick={() => handleCreateUser('new user')}>Create User</button>
</p>
```

### Quiz 3: Best Practices & Event Handling

クイズ：ベストプラクティスとイベント

### Chapter 52: How NOT to Update the UI - A Look Behind The Scenes of React [Core Concept]

Reactの主なポイント：UIの更新はJavaScriptと違うことについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/13-how-not-to-update-ui)

### Chapter 53: Managing State & Using Hooks [Core Concept]

Reactの主なポイント：ステートとフックについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/14-managing-state)

### Coding Exercise 9: Working with State

ステートを管理する  
結果：  
```
const [price, setPrice] = React.useState(100);
    
function handleClick(price) {
    setPrice(price);
}

return (
    <div>
        <p data-testid="price">${price}</p>
        <button onClick={() => handleClick(75)}>Apply Discount</button>
    </div>
);
```

### Chapter 54: Deriving & Outputting Data Based on State

ステートの情報を使って計算と出力についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/15-deriving-computing-values)

### Quiz 4: State & Computed Values

クイズ：ステートと計算された値

### Chapter 55: Rendering Content Conditionally

条件により画面の表示が違うことについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/16-rendering-content-conditionally)

### Coding Exercise 10: Conditional Content

条件がある表示  
結果：  
```
return (
    <div>
        {alert && (
            <div data-testid="alert" id="alert">
                <h2>Are you sure?</h2>
                <p>These changes can't be reverted!</p>
                <button onClick={() => handleClick(alert)}>Proceed</button>
            </div>
        )}
        <button onClick={() => handleClick(alert)}>Delete</button>
    </div>    
);
```

### Chapter 56: CSS Styling & Dynamic Styling

CSSと動的なスタイルについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/17-css-styling-dynamic-styles)

### Coding Exercise 11: Dynamic Styling

動的なスタイル  
結果：  
```
return (
    <div>
        <p className={styled ? 'active' : ''}>Style me!</p>
        <button onClick={handleClick}>Toggle style</button>
    </div>
);
```

### Chapter 57: Outputting List Data Dynamically

動的にリストのデータを出力ことについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/03%20React%20Essentials/18-outputting-list-data)

### Coding Exercise 12: Dynamic List Content

動的なリスト  
結果：  
```
export default function App() {
    return (
        <ul>
            {DUMMY_TODOS.map((item) => (
                <Todo text={item} />
            ))}
        </ul>
    );
}
```

### Quiz 5: Conditional Content & Dynamic Lists

クイズ：条件がある表示と動的なリスト

### Chapter 58: Module Summary

Reactの基礎の復讐

## Section 4: React Essentials - Deep Dive

Reactの基礎の詳細的な情報の内容になった

### Chapter 59: Module Introduction

Reactのより複雑なポイントの話も出る：JSX、ステート、コンポーネント構成など

### Chapter 60: You Don't Have To Use JSX!

Reactプロジェクトを作るのに、JSXを使うのは一番便利で書きやすいだけど、
もししたいならJSXなしで、React.createElementなどでも書くことができる

### Chapter 61: Working with Fragments

Reactのコンポーネントのreturn文には親タグ一つしかできないため、複数タグreturnしたいときは何か(divなど)
に書き込まれることしないといけない。でも、そのdivはDOMにも表示されるため、divではなくReactが提供される
Fragmentタグや<>の空タグも使える  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/02-fragments)

### Coding Exercise 13: Using Fragments

DOMに表示されるものを使わずコンポーネントの中で2つのタグをreturnする  
結果:  
```
function Summary({ text }) {
    return (
        <>
            <h1>Summary</h1>
            <p>{text}</p>
        </>
    );
}
```

### Chapter 62: When Should You Split Components?

いつ大きなコンポーネントをそれぞれの小さなコンポーネントに分けるべきかの説明

### Chapter 63: Splitting Components By Feature & State

画面の大きな部分で分けることが普通で、現在のプロジェクトの大きな部分で新しいコンポーネントを作成
することについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/03-splitting-components)

### Chapter 64: Problem: Props Are Not Forwarded To Inner Elements

問題：内のエレメントにプロップが届いていない  
もしカスタムコンポーネントにidやclassなどの属性を設定すると、そのカスタムコンポーネント
の中のタグに自動的に設定することはない。そのために、プロキシプロップを使うことができる（次のレッスン）

### Chapter 65: Forwarding Props To Wrapped Elements

プロキシプロップ、またはプロップフォワードという機能を使って、ラッパーコンポーネントから内のタグに
属性の設定ができる（JavaScriptの...演算子を使う）  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/04-forwarding-props)

### Coding Exercise 14: Forwarding Props

プロップを使って動的にインプットのタイプを設定する  
結果:  
```
export default function Input({richText, ...props}) {
    let input = <input {...props}></input>;
  
    if (richText) {
        input = <textarea {...props}></textarea>
    } 
  
    return input
}
```

### Chapter 66: Working with Multiple JSX Slots

もしラッパーコンポーネントを使いたいけど、childrenが複数ある場合、JSXをプロップとして渡すことができる  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/05-multiple-jsx-slots)

### Chapter 67: Setting Component Types Dynamically

ラッパーコンポーネントの中でも動的にタグのタイプ（div, ulなど）をプロップとして設定することもできる。
気を付けるポイントは、HTMLの内部タグなら文字列（"div", "ul"）でカスタムコンポーネントなら関数名
（Section）で設定することが必要  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/06-dynamic-component-types)

### Chapter 68: Setting Default Prop Values

プロップのデフォルトを受け取る側で=を使って設定もできることの説明

### Coding Exercise 15: Creating Flexible Components

色々な状況で表示が変わるコンポーネントの作成  
結果:  
```
export default function Button({mode = "filled", children, Icon, ...props}) {
 
    let buttonClass = `button ${mode}-button`;
    
    if (Icon) {
        buttonClass += " icon-button";
    }
    
    return (
        <button {...props} className={buttonClass}>
            <span>
                {children}
            </span>
            {Icon &&
                <span className="button-icon">
                    <Icon />
                </span>
            }
        </button>
    );
}
```

### Chapter 69: Onwards To The Next Project & Advanced Concepts

次のプロジェクト〇×ゲームの説明と準備  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/07-tic-tac-toe-starting-project)

### Chapter 70: Not All Content Must Go Into Components

Reactには、ほとんどのコードはコンポーネントに入っているけど、もし変わらなくステートが必要ないものであれば
（ページヘッダーなど）直接index.htmlに書き込んでも問題ないの説明

### Chapter 71: Closer Look: public/ vs assets/ for Image Storage

イメージの格納には、public/フォルダまたはsrc/...フォルダに格納することができ、
public/フォルダの場合誰でもブラウザからアクセスできる。
もしそれが目標であれば、public/フォルダにイメージを格納するべきだが、
もしイメージアクセスを管理したい場合、src/フォルダのどこか（例えばsrc/assets/images/）に格納するべき。

### Chapter 72: New Project: First Steps Towards Our Tic-Tac-Toe Game

プロジェクトの最初の段階の説明：シンプルなレイアウトの作成

### Chapter 73: Concept Repetition: Splitting Components & Building Reusable Components

コンセプト復讐：コンポーネントの分けと再使用できるコンポーネントの作成についての説明

### Chapter 74: Concept Repetition: Working With State

コンセプト復讐：ステートの管理についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/08-working-with-state)

### Chapter 75: Component Instances Work In Isolation!

同じコンポーネントを複数回使っても、そのコンポーネントが個別のインスタンスになり、ステートも
共有していないことについての説明

### Chapter 76: Conditional Content & A Suboptimal Way Of Updating State

いくつかのソース修正で条件がある表示やステート管理を追加した

### Chapter 77: Best Practice: Updating State Based On Old State Correctly

ベストプラクティス：正確に旧ステートから新ステートの更新のについての説明  
ステートを更新するとき、関数を使ったほうが正しい  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/09-updating-state-based-on-old-state)

### Chapter 78: User Input & Two-Way-Binding

ユーザが入力する値を取得して画面が反映する方法についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/10-two-way-binding)

### Coding Exercise 16: Two-Way-Binding

ユーザ入力を画面で反映させる  
結果:  
```
function App() {
    const [feedback, setFeedback] = React.useState();
    const [student, setStudent] = React.useState();
    
    function handleFeedbackChange(event) {
        setFeedback(event.target.value);
    }
    
    function handleStudentChange(event) {
        setStudent(event.target.value);
    }
    
    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea value={feedback} onChange={handleFeedbackChange} />
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" value={student} onChange={handleStudentChange} />
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={feedback} student={student} />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}
```

### Chapter 79: Rendering Multi-Dimensional Lists

2次元配列から動的にリストを表示させることについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/11-multi-dimensional-lists)

### Chapter 80: Best Practice: Updating Object State Immutably

ベストプラクティス：配列などのステートを更新すると、直接いじることよりコピーを作成して
そのコピーをいじって返す方法が正しい話についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/12-updating-state-immutably)

### Chapter 81: Lifting State Up [Core Concept]

Reactの主なポイント：ステートを子コンポーネントから親コンポーネントに上げる方法についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/13-lifiting-state-up)

### Chapter 82: Avoid Intersecting States!

最終的に同じ情報を使って複数箇所にステートを更新するより、そのステートを1つにまとめて必要な場所に渡した
ほうが正しいということについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/14-avoid-intersecting-state)

### Chapter 83: Prefer Computer Values & Avoid Unnecessary State Management

ステートを更新するとき、ほかのステートを触ることよりそのステートからコピーしてコピーのほうを触ること
が正しいということについての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/15-prefer-computed-values)

### Chapter 84: Deriving State From Props

プロップから取得した値を使って計算して表示する情報についての説明

### Chapter 85: Sharing State Across Components

同じステートで複数のコンポーネントの管理をすることについての説明

### Chapter 86: Reducing State Management & Identifying Unnecessary State

ステートではなく、計算された値のほうが正しいときもあり、できるだけステートが必要ないようにソース
を書くことを目指したほうがいいことの説明

### Chapter 87: Disabling Buttons Conditionally

条件で項目を無効にする方法についての説明  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/16-disabling-buttons)

### Chapter 88: Outsourcing Data Into A Separate File

ゲームの勝つ条件の説明で、データファイルダウンロード

### Chapter 89: Lifting Computed Values Up

ボードの作成もプロップとして渡して、その情報をほかのところで使うようにした

### Chapter 90: Deriving Computed Values From Other Computed Values

勝ったプレイヤーの計算の説明

### Chapter 91: Tic-Tac-Toe Game: The "Game Over" Screen & Checking for a Draw

引き分けの条件も追加してゲーム終了の画面の更新  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/17-game-over-checking-for-draw)

### Chapter 92: Why Immutability Matters - Always!

バグフィックス：計算された配列がステートの参照よりコピーして作成が正しい理由を一例での説明

### Chapter 93: When NOT To Lift State Up

コンポーネントからステートを上に上げるのはだめの時もあり、
そのコンポーネントがたくさん更新されて、親のコンポーネントはその頻度で更新されては困るときや、
複数コンポーネントのインスタンスがそれぞれステートを持っているときなど

### Chapter 94: An Alternative To Lifting State Up

ステートを上げるより違う方法として、新しいステートを作ってそれを子コンポーネントで
設定する方法の説明と実装

### Chapter 95: Final Polishing & Improving Components

最終クリーンアップのため、コードから関数に移動させて読みやすくしてプロジェクト完成  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/04%20Essentials%20Deep%20Dive/18-finished)

## Section 5: React Essentials - Practice Project

Reactの基礎の練習のためのプロジェクト

### Chapter 96: Module Introduction & A Challenge For You!

練習プロジェクト内容の紹介と概要  
コース内容を進む前に、自分でプロジェクトやってみる  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/01-starting-project)

### Chapter 97: Adding a Header Component

ヘッダーのコンポーネントの作り方

### Chapter 98: Getting Started with a User Input Component

ユーザ入力コンポーネントのレイアウト作り方

### Chapter 99: Handling Events & Using Two-Way-Binding

ユーザ入力コンポーネントのデータ管理の作り方  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/02-user-input-two-way-binding)

### Chapter 100: Lifting State Up

ユーザ入力コンポーネントのステートを親コンポーネントで管理して、
他のコンポーネントで使える形の作り方  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/03-lifting-state-up)

### Chapter 101: Computing Values & Properly Handling Number Values

データ計算関数の使い方、JavaScriptのインプットから取得したデータを数値に変換する方法  
※JavaScriptで入力データが必ず文字列として扱うので、数値に変換するなら+を頭につけることができる  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/04-computing-values)

### Chapter 102: Outputting Results in a List & Deriving More Values

出力テーブルの作り方、計算されたデータの使い方  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/05-outputting-results-in-a-list)

### Chapter 103: Outputting Content Conditionally

プロジェクトの終わり、条件がある表示の作り方  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/06-finished)

## Section 6: Styling React Components

ReactでのCSSスタイルの説明

### Chapter 104: Module Introduction & Starting Project

プロジェクトの説明、どうやってReactでCSSをコンポーネントに付けるなどについての内容になる  
[プロジェクトソース](https://github.com/academind/react-complete-guide-course-resources/tree/main/code/07%20Styling/01-starting-project)

### Chapter 105: Splitting CSS Code Across Multiple Files

