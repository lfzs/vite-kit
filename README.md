# vite-kit

vite + vue3 脚手架

## 注意事项

- 可通过安装 eslint 插件，然后在 vscode 配置文件中添加以下代码，实现保存自动格式化。其他编辑器同理

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // eslint 保存自动格式化
  },
}
```

- @ 别名导致路径无法提示，可通过安装 Path Intellisense 插件。然后在 vscode 配置文件中添加以下代码

```json
{
  "path-intellisense.mappings": {
    "@": "${workspaceFolder}/src", // @ 路径提示
  },
}
```

## TODO

- cdn 链接外置 https://github.com/vitejs/vite/issues/544 https://www.npmjs.com/package/rollup-plugin-external-globals 对 cjs 有效，esm 无效
- 接入 vue-router
- 接入组件库
- 引入 vueuse