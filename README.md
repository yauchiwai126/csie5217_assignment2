# csie5217_assignment2
- 姓名：邱志偉
- 學號：T13902208
- GitHub網址：https://github.com/yauchiwai126/csie5217_assignment2.git

## Repo操作
### Repo創建過程及說明：
1.	先登入GitHub。
2.	點擊New > Create a new repository。
3.	輸入Repository Name為csie5217_assignment2。
4.	設定為Public。
5.	勾選Add a README file。
6.	在Add .gitignore選擇VisualStudio。
7.	Choose a license設定為None。
8.	點擊Create repository。
9.	Repository已經創建。
### 有準備README.md
1.	在測試中修改README.md。
### 從網頁上可以看到除了Main外有額外兩個Branch
1.	在GitHub上點擊Branch，然後點擊New branch。
2.	輸入hw1-p，然後Create new branch。
3.	再次點擊New branch。
4.	輸入hw1-f，然後Create new branch。
5.	成功創建了2個分支。

## Issue
### 創建任意Issue
1.	到Issues，點擊New issue。
2.	選擇Blank issue。
3.	在Add a title輸入「創建任意Issue」。
4.	在Add a description輸入「創一個issue，open狀態」。
5.	點擊Create。
### 有Issue Template
1.	到Settings > General > Features > Issues點擊Set up templates。
2.	在Add template選擇Bug report。
3.	點擊Propose changes。
4.	點擊Commit changes。

## Pull Request
### 以hw1-f此branch對main創立Pull Request
1.	在README.md中作出修改，然後Commit及Push。
2.	在GitHub發起Pull Request。
3.	留言README.md有Typo。
4.	修改README.md後再Commit及Push。
5.	進行合併。
### 以hw1-p此branch對main創立Pull Request
1.	在README.md中作出修改，然後Commit及Push。
2.	在GitHub發起Pull Request。
3.	進行合併。
### 上述任何一個PR內有留言互動，針對程式碼變動留言
1.	在hw1-f的Pull Request留言README.md有Typo。

## GitHub Action
### 點選GitHub Action內有任何Action運行過痕跡
1.	在GitHub上的Actions以Simple Workflow建立一個Action。
2.	在main, hw1-f, hw1-p的Push及Pull Request都會運行GitHub Actions。
### Action內扣除預設，至少要有額外兩個步驟(Steps)
1.	Start the server
2.	Prompt message
3.	Sleep 10 seconds
4.	Shutdown the server
### hw1-f的PR必須要有GitHub Action運行，要失敗
1.	把node.js需要的package.json comment掉。
2.	進行Push及Pull Request。
3.	GitHub Actions運行失敗。
### hw1-p的PR必須要有GitHub Action運行，要成功
1.	把index.ejs的h1改成v2。
2.	進行Push及Pull Request。
3.	GitHub Actions運行成功。
