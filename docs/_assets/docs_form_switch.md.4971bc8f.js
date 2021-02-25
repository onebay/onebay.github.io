import{g as n,j as a,l as s,C as t,q as p,f as o}from"./common-fdfbc665.js";const c='{"title":"switch","frontmatter":{},"relativePath":"docs/form/switch.md","lastUpdated":1612976492032.1726}';var e={};const l=a("h1",{id:"switch"},[a("a",{class:"header-anchor",href:"#switch","aria-hidden":"true"},"#"),s(" switch")],-1),u=t('<div class="code-box code-vue-active"><div class="code-tabs"></div><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;onebay-ui&#39;</span>\n<span class="token keyword">import</span> DocsHeader <span class="token keyword">from</span> <span class="token string">&#39;../../../components/DocHeader/DocsHeader&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;SwitchPage&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Form<span class="token punctuation">,</span>\n    Switch\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      switchValue1<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      switchValue2<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">type</span> <span class="token class-name">State</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> state\n    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token operator">:</span> State<span class="token punctuation">,</span> value<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> switchValue1<span class="token punctuation">,</span> switchValue2 <span class="token punctuation">}</span> <span class="token operator">=</span> state\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- S Header --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DocsHeader</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Switch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DocsHeader</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- E Header --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n\n          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- S Body --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doc-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- Basic usage --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Basic usage</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>\n                      <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>switchValue1 <span class="token operator">?</span> <span class="token string">&#39;Opening&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Closed&#39;</span><span class="token punctuation">}</span></span>\n                      <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>switchValue1<span class="token punctuation">}</span></span>\n                      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">&#39;switchValue1&#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>\n                      <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>switchValue2 <span class="token operator">?</span> <span class="token string">&#39;Opening&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Closed&#39;</span><span class="token punctuation">}</span></span>\n                      <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>switchValue2<span class="token punctuation">}</span></span>\n                      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">&#39;switchValue2&#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                    <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>No border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Custom color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#f45<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n\n            </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- Disabled state --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Disabled state</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Not clickable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Not clickable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token comment">/* &lt;!-- E Body --&gt; */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- S Header --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DocsHeader</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Switch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DocsHeader</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- E Header --&gt;</span>\n\n    <span class="token comment">&lt;!-- S Body --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doc-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- Basic usage --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Basic usage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n                <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchValue1 ? <span class="token punctuation">&#39;</span>Opening<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>Closed<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>\n                <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchValue1<span class="token punctuation">&quot;</span></span>\n                <span class="token attr-name">:onChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(v) =&gt; handleChange(<span class="token punctuation">&#39;</span>switchValue1<span class="token punctuation">&#39;</span>, v)<span class="token punctuation">&quot;</span></span>\n              <span class="token punctuation">/&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n                <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchValue2 ? <span class="token punctuation">&#39;</span>Opening<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>Closed<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>\n                <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchValue2<span class="token punctuation">&quot;</span></span>\n                <span class="token attr-name">:onChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(v) =&gt; handleChange(<span class="token punctuation">&#39;</span>switchValue2<span class="token punctuation">&#39;</span>, v)<span class="token punctuation">&quot;</span></span>\n              <span class="token punctuation">/&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>No border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Custom color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#f45<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n      <span class="token comment">&lt;!-- Disabled state --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Disabled state<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel__content no-padding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Not clickable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Not clickable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- E Body --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;onebay-ui&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;SwitchPage&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Form<span class="token punctuation">,</span>\n    Switch\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      switchValue1<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      switchValue2<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div></div>',1);e.render=function(s,t,c,e,k,i){const r=p("DemoView"),g=p("BackToTop");return o(),n("div",null,[l,a(r),a(g),u])};export default e;export{c as __pageData};
