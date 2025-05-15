---
lang: zh-CN
title: Git常用命令
---

1. 同步仓库

```bash
git clone https://xxxxxx.xxxx/xxxx.git
```

2. 创建新分支

```bash
git branch 分支名
```
3. 查看本地分支

```bash
git branch
```

4. 查看远程分支

```bash
git branch -r
```

5. 查看所有分支（包含远程分支）

```bash
git branch -a
```

6. 提交步骤

```bash
git add <filename> # 暂存单个文件

git add .   # 暂存所有改动

git commit -m '提交信息' # 提交改动到本地仓库

git push  # 提交改动到远程仓库
```

7. 更新

```bash
git pull # 拉取当前分支最新改动
或
git pull <分支名称> # 拉取指定分支
```

8. 切换分支

```bash
git switch <分支名称> # 新版本推荐命令
或
git checkout <分支名称>
```

9. 撤销与重置

```bash
git reset [file] # 从暂存区撤销文件更改

git revert [commit] #撤销指定提交的更改

git checkout -[file] #恢复文件到最近一次提交的状态
```

10. 当本地有修改但为啥提交时，与远程仓库有冲突使用以下命令

```bash
git stash #暂存当前工作区的修改

git pull #拉取更新

git stash pop #暂存更改出栈
```