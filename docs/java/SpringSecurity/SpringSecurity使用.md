---
lang: zh-CN
title: Spring Security + JWT + Redis 使用
---

#### 思路
使用Spring Security 管理安全认证;JWT产生TOKEN，TOKEN中包含用户userName，过期时间;Redis缓存用户信息.