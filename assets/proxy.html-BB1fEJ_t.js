import{_ as s,c as e,o as n,e as a}from"./app-C6TAOd4f.js";const l={},i=a(`<p>nginx 反向代理 代理模式，使用http代理https，并且更换域名，且在地址栏中不显示老的域名 配置如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">server {</span>
<span class="line">       listen 80;</span>
<span class="line">       server_name wscrm.ruiheng.net.cn;</span>
<span class="line">       include /etc/nginx/default.d/*.conf;</span>
<span class="line">       # pc端页面</span>
<span class="line">#       return 301 https://mallcrm.blancer.cn$request_uri;</span>
<span class="line">       location / {</span>
<span class="line">            add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39; always; # 允许http://example.com跨域访问</span>
<span class="line">            add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, PUT, DELETE, OPTIONS&#39;; # 允许的HTTP方法</span>
<span class="line">            add_header &#39;Access-Control-Allow-Headers&#39; &#39;Content-Type, Authorization, X-Requested-With&#39;; # 允许的自定义请求头</span>
<span class="line">            add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;; # 允许携带Cookie（如果需要）</span>
<span class="line">            if ($request_method = &#39;OPTIONS&#39;) {</span>
<span class="line">               return 204;</span>
<span class="line">            }</span>
<span class="line">            proxy_pass https://mallcrm.blancer.cn;</span>
<span class="line">            proxy_set_header Host mallcrm.blancer.cn;</span>
<span class="line">            proxy_set_header X-Real-IP $remote_addr;</span>
<span class="line">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">            proxy_set_header X-Scheme $scheme;</span>
<span class="line">       }</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 return 或 rewrite 来进行重定向，但是存在一个问题，重定向后浏览器的地址栏会变成重定向后的地址。 使用反向代理的方式，不会改变地址栏的地址，这里有一个点就是proxy_set_header Host 不能使用$host参数，须填写真正的域名，如：mallcrm.blacer.cn</p><p>Host的含义是表明请求的主机名，因为nginx作为反向代理使用，而如果后端真是的服务器设置 有类似防盗链或者根据http请求头中的host字段来进行路由或判断功能的话，如果反向代理层的nginx 不重写请求头中的host字段，将会导致请求失败【默认反向代理服务器会向后端真实服务器发送请求，并且请求头中的host字段应为proxy_pass指令设置的服务器】</p>`,4),r=[i];function t(c,d){return n(),e("div",null,r)}const o=s(l,[["render",t],["__file","proxy.html.vue"]]),m=JSON.parse('{"path":"/tools/nginx/proxy.html","title":"反向代理","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"反向代理"},"headers":[],"git":{"updatedTime":1725857434000,"contributors":[{"name":"william","email":"william11zhu@qq.com","commits":1}]},"filePathRelative":"tools/nginx/proxy.md"}');export{o as comp,m as data};
