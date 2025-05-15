---
lang: zh-CN
title: VsCode远程开发环境配置
---
---

### 一、安装必备插件

1. ‌**安装 Remote-SSH 扩展**‌
    
    - 打开 VSCode，进入扩展市场（左侧栏或 `Ctrl+Shift+X`）。
    - 搜索并安装 `Remote - SSH` 插件（属于 Remote Development 扩展包的一部分）。
2. ‌**可选扩展**‌
    
    - Python 开发可安装相关调试插件，基本插件包括： 
    ![VSCode 远程开发配置](<VSCode 远程开发配置/VSCode 远程开发配置.png>)
---

### 二、配置 SSH 连接

1. ‌**生成 SSH 密钥**‌
    
    - 本地终端执行 `ssh-keygen -t rsa` 生成密钥对（默认路径为 `~/.ssh/id_rsa`），公钥文件为 `id_rsa.pub`‌。
    - 将公钥内容复制到远程服务器的 `~/.ssh/authorized_keys` 文件，实现免密登录‌。
2. ‌**编辑 SSH 配置文件**‌
    
    - 本地编辑 `~/.ssh/config` 文件，添加以下内容（示例）：
        
        textCopy Code
        
        `Host my-remote-server       HostName 192.168.1.100       User username       Port 22       IdentityFile ~/.ssh/id_rsa`  
        
    - 参数说明：`Host` 为自定义别名，`HostName` 为服务器 IP，`User` 为用户名，`IdentityFile` 指定私钥路径‌。

---

### 三、连接远程服务器

1. ‌**启动连接**‌
    
    - VSCode 中按 `Ctrl+Shift+P` 打开命令面板，输入 `Remote-SSH: Connect to Host`，选择配置好的服务器别名（如 `my-remote-server`）。
2. ‌**验证与授权**‌
    
    - 首次连接需输入服务器密码（若未配置免密登录）或确认服务器指纹‌。
    - 连接成功后，VSCode 左下角状态栏显示 `SSH: 主机名`。

---

### 四、远程开发环境使用

1. ‌**打开远程目录**‌
    
    - 连接后选择远程服务器上的项目目录，即可直接编辑文件‌45。
2. ‌**调试与编译**‌
    
    - 在远程目录中创建 `.vscode` 文件夹，配置 `tasks.json`（编译任务）和 `launch.json`（调试配置）‌4。

---

### 五、常见问题

- ‌**SSH 服务未运行**‌：远程服务器需安装并启动 SSH 服务（如 Ubuntu 执行 `sudo apt install openssh-server` 和 `service ssh status`）‌。
- ‌**密钥权限错误**‌：确保本地私钥文件权限为 `600`（命令：`chmod 600 ~/.ssh/id_rsa`）
- **远程debug不生效**：查看远程.vscode-server目录是否正常安装，修改.vscode-server在远程服务器上的安装目录。
![alt text](<VSCode 远程开发配置/4e4acbf47d7bbecbdfa6d183170625e.png>)
![alt text](<VSCode 远程开发配置/VSCode 远程开发配置 1.png>)