import{r as n,o as s,c as a,b as t,d as p,a as e}from"./app.a31cc54f.js";const o='{"title":"flex","description":"","frontmatter":{},"headers":[{"level":2,"title":"Flex API","slug":"flex-api"},{"level":2,"title":"FlexItem API","slug":"flexitem-api"}],"relativePath":"docs/layout/flex.md","lastUpdated":1615309115287}',l={},c=t("h1",{id:"flex"},[t("a",{class:"header-anchor",href:"#flex","aria-hidden":"true"},"#"),p(" flex")],-1),k=e('<div class="code-box code-vue-active"><div class="code-tabs"></div><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;onebay-ui&#39;</span>\n<span class="token keyword">import</span> DocsHeader <span class="token keyword">from</span> <span class="token string">&#39;../../../components/DocHeader/DocsHeader&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./index.scss&#39;</span>\n\n<span class="token keyword">const</span> FlexItem <span class="token operator">=</span> Flex<span class="token punctuation">.</span>Item\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;RowPage&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page row-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DocsHeader</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Flex<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doc-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Basic usage</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Flex</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Flex</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">FlexItem</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Flex</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page row-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DocsHeader</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Row &amp; Col<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doc-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Basic usage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexItem</span><span class="token punctuation">&gt;</span></span>Flex<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FlexItem</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;onebay-ui&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;./index.scss&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;RowPage&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Flex<span class="token punctuation">,</span>\n    FlexItem<span class="token operator">:</span> Flex<span class="token punctuation">.</span>Item\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></div><h2 id="flex-api"><a class="header-anchor" href="#flex-api" aria-hidden="true">#</a> Flex API</h2><table><thead><tr><th>Properties</th><th>Descrition</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>className</td><td>class name</td><td>string</td><td>-</td></tr><tr><td>style</td><td>custom style</td><td>CSSProperties</td><td>-</td></tr><tr><td>align</td><td>flex align</td><td>string</td><td><code>center</code></td></tr><tr><td>direction</td><td>flex direction</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>wrap</td><td>flex wrap</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>justify</td><td>flex justify</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>alignContent</td><td>flex alignContent</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h2 id="flexitem-api"><a class="header-anchor" href="#flexitem-api" aria-hidden="true">#</a> FlexItem API</h2><table><thead><tr><th>Properties</th><th>Descrition</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>className</td><td>class name</td><td>string</td><td>-</td></tr><tr><td>style</td><td>custom style</td><td>CSSProperties</td><td>-</td></tr></tbody></table>',5);l.render=function(p,e,o,l,u,i){const g=n("DemoView"),r=n("BackToTop");return s(),a("div",null,[c,t(g),t(r),k])};export default l;export{o as __pageData};
