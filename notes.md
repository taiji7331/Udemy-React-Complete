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

### Chapter 35: It's All About Components! [Core Concept]

### Chapter 36: Setting Up The Starting Project

### Chapter 37: JSX & React Components [Core Concept]

### Chapter 38: Creating & Using a First Custom Component

### Chapter 39: A Closer Look: Components & File Extensions

### Coding Exercise 3: Building & Using a Component

### Chapter 40: How React Handles Components & How It Builds a "Component Tree" [Core Concept]

### Quiz 1: Components & JSX

### Chapter 41: Using & Outputting Dynamic Values [Core Concept]

### Chapter 42: Setting HTML Attributes Dynamically & Loading Image Files

### Coding Exercise 4: Outputting Dynamic Content

### Chapter 43: Making Components Reusable with Props [Core Concept]

### Chapter 44: Alternative Props Syntaxes

### Chapter 45: More Props Syntaxes

### Coding Exercise 5: Working with Props

### Quiz 2: Dynamic Values & Props

### Chapter 46: Best Practice: Storing Components in Files & Using a Good Project Structure

### Chapter 47: Storing Component Style Files Next To Components

### Chapter 48: Component Composition: The special "children" Prop [Core Concept]

### Coding Exercise 6: Component Composition

### Chapter 49: Reacting to Events [Core Concept]

### Chapter 50: Passing Functions as Values to Props

### Coding Exercise 7: Reacting to Events

### Chapter 51: Passing Custom Arguments to Event Functions

### Coding Exercise 8: Configuring Event Handlers

### Quiz 3: Best Practices & Event Handling

### Chapter 52: How NOT to Update the UI - A Look Behind The Scenes of React [Core Concept]

### Chapter 53: Managing State & Using Hooks [Core Concept]

### Coding Exercise 9: Working with State

### Chapter 54: Deriving & Outputting Data Based on State

### Quiz 4: State & Computed Values

### Chapter 55: Rendering Content Conditionally

### Coding Exercise 10: Conditional Content

### Chapter 56: CSS Styling & Dynamic Styling

### Coding Exercise 11: Dynamic Styling

### Chapter 57: Outputting List Data Dynamically

### Coding Exercise 12: Dynamic List Content

### Quiz 5: Conditional Content & Dynamic Lists

### Chapter 58: Module Summary