# 🧪 TDD Learning Sample

## 📚 このリポジトリの目的
このリポジトリは、テスト駆動開発（TDD）とGitHub Actionsを実践的に学習するためのものです。

各課題にはすでにテストが用意されています。  
あなたはそのテストを通すようにコードを実装し、実務に近いGit/GitHubの開発フローを体験します。

---

## 🚩 学習の進め方（詳細フロー）

以下の流れで各課題を進めてください。

### ① 課題を始める準備をする

まず、リポジトリをローカル環境にCloneし、セットアップをします。

```bash
git clone <あなたのリポジトリURL>
cd <リポジトリ名>
npm install
```

---

### ② 課題ごとに新しいブランチを作成する

課題を開始するときは、以下のように新しいブランチを作ります。

```bash
git checkout -b feature/task-1-auth
```

- ブランチ名は `feature/課題番号-簡単な説明` で統一しましょう。

### ② コードを書き、テストを通す（TDDの実践）

課題の詳細はIssueに書かれています。Issueの内容に従ってコードを書きます。

```bash
# 必要なパッケージをインストール
npm install

# ローカルでテスト実行（TDD）
npm test
```

- まずテストが失敗することを確認し、コードを書いてテストを通過させます。

---

### ③ コミットしてGitHubにPushする

ローカルでテストが通ったら、変更をコミットし、GitHubへPushします。

```bash
git add .
git commit -m "feat: 認証機能の実装（#1）"
git push origin feature/task-1-auth
```

- Pushすると、GitHub Actionsが自動でテストを実行します。
- GitHubでテストの結果（成功✅/失敗❌）を確認しましょう。

---

### ④ Pull Requestを作成しマージする

GitHub上で、Pushしたfeatureブランチからmainブランチに向けて **空のPull Request** を作成します。

- GitHubリポジトリの画面で『Compare & Pull Request』をクリック
- Pull Requestのタイトルと説明を書き、作成をクリック（デフォルトのままでもOK）

Pull Requestの作成後、GitHub Actionsのテストが通過したことを確認したら、**あなた自身でセルフマージを実行**します。

---

### ⑤ ブランチを削除して整理する（推奨）

マージが終わったら、ブランチを削除して整理しましょう。

**GitHub上でリモートブランチを削除する**
- Pull Request画面で「Delete branch」をクリック

**ローカルブランチを削除する**
```bash
git checkout main
git pull origin main
git branch -d feature/task-1-auth
```

---

## 🚨 テスト失敗時の対処方法

もしテストが通らない場合は、以下の対応をしましょう。

- Jestのテスト結果をよく読み、エラー箇所を確認する
- コードを修正して再度テストを実行する（`npm test`）

---

## 🧑‍💻 使用している技術
- Node.js（JavaScript）
- Jest（テストフレームワーク）
- GitHub Actions（CI）

---

このフローを繰り返して、TDDとGitHubの基本的な実務の開発フローをしっかり身につけましょう！
