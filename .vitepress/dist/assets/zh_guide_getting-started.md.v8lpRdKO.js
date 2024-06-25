import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.CbUU_PFW.js";const F=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/getting-started.md","filePath":"zh/guide/getting-started.md"}'),p={name:"zh/guide/getting-started.md"},t=n(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>创建一个项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fire-cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>根据提示输入项目名称和简介即可</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-project-name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>启动项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>执行完成后，控制台下会看到类似下面的日志：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] 3.1.3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] to restart at any time, enter </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] watching extensions: ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] starting </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cross-env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> APP_ENV=dev ts-node </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig-paths/register src/index.ts\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">🐳️app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [dev]</span></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>project-root</span></span>
<span class="line"><span>├── build # 打包配置</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>   ├── config # 配置文件</span></span>
<span class="line"><span>   ├── controller # 控制器</span></span>
<span class="line"><span>   ├── log # 日志util</span></span>
<span class="line"><span>   ├── router # 路由</span></span>
<span class="line"><span>   ├── decorators # 自定义装饰器</span></span>
<span class="line"><span>   ├── mixin # 自定义的一些mixin</span></span>
<span class="line"><span>   ├── index.ts # app 入口</span></span>
<span class="line"><span>├── .babelrc</span></span>
<span class="line"><span>├── .gitignore</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── README.zh-cn.md</span></span>
<span class="line"><span>├── ecosystem.config.js</span></span>
<span class="line"><span>├── nodemon.json</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div>`,12),e=[t];function l(h,k,d,r,c,o){return i(),a("div",null,e)}const E=s(p,[["render",l]]);export{F as __pageData,E as default};
