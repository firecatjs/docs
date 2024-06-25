import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.CbUU_PFW.js";const F=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),t={name:"guide/getting-started.md"},e=n(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Create a new project</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fire-cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>Follow the prompts to enter the project name and description</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-project-name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>Start the project</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>After execution, you will see logs similar to the following in the console:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] 3.1.3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] to restart at any time, enter </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watching</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] watching extensions: ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nodemon] starting </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cross-env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> APP_ENV=dev ts-node </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tsconfig-paths/register src/index.ts\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">🐳️app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:3000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [dev]</span></span></code></pre></div><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>project-root</span></span>
<span class="line"><span>├── build</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>   ├── config</span></span>
<span class="line"><span>   ├── controller</span></span>
<span class="line"><span>   ├── log</span></span>
<span class="line"><span>   ├── router</span></span>
<span class="line"><span>   ├── decorators</span></span>
<span class="line"><span>   ├── mixin</span></span>
<span class="line"><span>   ├── index.ts # app entry</span></span>
<span class="line"><span>├── .babelrc</span></span>
<span class="line"><span>├── .gitignore</span></span>
<span class="line"><span>├── LICENSE</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── README.zh-cn.md</span></span>
<span class="line"><span>├── ecosystem.config.js</span></span>
<span class="line"><span>├── nodemon.json</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div>`,12),p=[e];function l(h,r,k,d,o,c){return i(),a("div",null,p)}const y=s(t,[["render",l]]);export{F as __pageData,y as default};