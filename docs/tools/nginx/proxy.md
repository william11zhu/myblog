---
lang: zh-CN
title: 反向代理
---

nginx 反向代理 代理模式，使用http代理https，并且更换域名，且在地址栏中不显示老的域名
配置如下：
````
server {
       listen 80;
       server_name wscrm.ruiheng.net.cn;
       include /etc/nginx/default.d/*.conf;
       # pc端页面
#       return 301 https://mallcrm.blancer.cn$request_uri;
       location / {
            add_header 'Access-Control-Allow-Origin' '*' always; # 允许http://example.com跨域访问
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS'; # 允许的HTTP方法
            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, X-Requested-With'; # 允许的自定义请求头
            add_header 'Access-Control-Allow-Credentials' 'true'; # 允许携带Cookie（如果需要）
            if ($request_method = 'OPTIONS') {
               return 204;
            }
            proxy_pass https://mallcrm.blancer.cn;
            proxy_set_header Host mallcrm.blancer.cn;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Scheme $scheme;
       }
  }
````

可以使用 return 或 rewrite 来进行重定向，但是存在一个问题，重定向后浏览器的地址栏会变成重定向后的地址。
使用反向代理的方式，不会改变地址栏的地址，这里有一个点就是proxy_set_header Host 不能使用$host参数，须填写真正的域名，如：mallcrm.blacer.cn

Host的含义是表明请求的主机名，因为nginx作为反向代理使用，而如果后端真是的服务器设置
有类似防盗链或者根据http请求头中的host字段来进行路由或判断功能的话，如果反向代理层的nginx
不重写请求头中的host字段，将会导致请求失败【默认反向代理服务器会向后端真实服务器发送请求，并且请求头中的host字段应为proxy_pass指令设置的服务器】
