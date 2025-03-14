# 🧪 TDD Learning Sample

## 📚 このリポジトリの目的
このリポジトリは、テスト駆動開発（TDD）とGitHub Actionsを通じて、  
実務レベルのGit・GitHubの開発フローを体験的に学習するためのものです。

各Issueごとに課題が設定されています。  
あなたはその課題を解決するコードを書き、テストを通してからGitHubへPushし、Pull Requestを作成・マージするという一連の流れを繰り返します。

---

## 🚩 学習の進め方（共通フロー）

課題ごとに以下の手順を繰り返します。

### ① 課題（Issue）の確認

- GitHubの「Issue」を開き、課題の詳細や実装要件を確認します。
- 課題番号（Issue番号）を覚えておきましょう。（例：#1, #2, #3など）

---

### ② ブランチの作成（課題ごと）

課題ごとに専用のブランチを作成します。（例: 課題#1の場合）

```bash
git checkout -b feature/task-1
```

- ブランチ名の推奨形式：`feature/task-課題番号`

---

### ③ コードを書いてローカルテストを通す（TDDを実践）

- 課題の要件に従い、テストを通るようにコードを実装します。

```bash
npm install
npm test
```

- ローカルでテストを通過させてから次に進みましょう。

---

### ④ GitHubにPushし、自動テスト結果を確認する

- ローカルテストが通ったらコミットしてGitHubにPushします。

```bash
git add .
git commit -m "feat: 課題#1を実装"
git push origin feature/task-1
```

- GitHub Actionsで自動的にテストが実行されます。  
GitHubの画面で結果（成功✅/失敗❌）を確認しましょう。

---

### ⑤ Pull Requestを作成し、セルフマージする

- GitHubのWeb画面で、featureブランチからmainブランチへのPull Requestを作成します。
- テストが成功していることを確認してから、**自分でセルフマージを行います。**

---

### ⑥ ブランチを削除し、mainブランチを更新する（推奨）

- 課題をクリアしマージした後は、ブランチを削除しましょう。

**GitHub上での削除**
- Pull Request画面で「Delete branch」をクリック。

**ローカルでの削除とmainブランチの更新**
```bash
git checkout main
git pull origin main
git branch -d feature/task-1
```

---

## 🚨 テストが通らない場合の対処方法

テストが失敗した場合は、以下を参考に問題を解決しましょう。

- テスト結果のエラー内容をしっかり読む
- 問題箇所を修正後、再度ローカルでテストを実行する（`npm test`）

---

## 🧑‍💻 使用している技術
- Node.js (JavaScript)
- Jest（ユニットテスト）
- GitHub Actions（CI）

---

この流れを課題ごとに繰り返して、実務に必要な開発フローを自然に身につけましょう！
