# vue-sms-code

<baseComponent-codeBox title="基础用法" description="默认6位任何字符的code">
  <demo-default></demo-default>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/default.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="code类型" description="code-type默认为text类型，可切换为number类型只能输入数字，也可通过formatter传入方法自己实现类型处理">
  <demo-codeType></demo-codeType>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/codeType.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="密文模式" description="设置secret属性为true,可开启密文模式，输入内容不可见">
  <demo-secret></demo-secret>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/secret.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="显示输入光标" description="设置show-cursor属性为true,显示光标">
  <demo-showCursor></demo-showCursor>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/showCursor.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="设置code位数" description="设置设置code-count属性,改变code长度，默认为6位">
  <demo-codeCount></demo-codeCount>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/codeCount.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="自动聚焦" description="设置设置auto-focus属性为true,组件渲染完成自动聚焦">
  <demo-autoFocus></demo-autoFocus>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/autoFocus.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="formatter" description="自定义输入过滤规则">
  <demo-formatter></demo-formatter>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/formatter.vue
  </highlight-code>
</baseComponent-codeBox>


<baseComponent-codeBox title="输入完成回调" description="输入完成回调函数，处理业务逻辑，当然你也可以在你的页面中监听绑定的v-model变量实现业务处理">
  <demo-callback></demo-callback>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/callback.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-codeBox title="自定义样式" description="设置全局class，改变code组件默认样式">
  <demo-diyClass></demo-diyClass>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/diyClass.vue
  </highlight-code>
</baseComponent-codeBox>