/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from "vuepress-theme-plume";
import collections from "./collections";
import navbar from "./navbar";

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: "",

  social: [{ icon: "github", link: "https://github.com/mcenahle/contents/" }],

  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */
  profile: {
    avatar: "https://b.shmc.ac.cn/img/icon.png",
    name: "Mcenahle Contents Centre",
    description: "",
  },

  navbar: [
    { text: "首页", link: "/" },
    {
      text: "笔记",
      items: [
        { text: "示例", link: "/demo/README.md" },
        { text: "献血", link: "/donate-blood/README.md" },
        { text: "年终总结", link: "/annual/README.md" },
      ],
    },
    {
      text: "博客",
      items: [
        { text: "博客", link: "/blog/index.html" },
        { text: "标签", link: "/blog/tags/" },
        { text: "归档", link: "/blog/archives/" },
      ],
    },
  ],
  collections: [
    { type: "post", dir: "blog", title: "博客" },
    {
      type: "doc",
      dir: "demo",
      linkPrefix: "/demo/",
      title: "demo",
      sidebar: ["bar", "foo"],
    },
    {
      type: "doc",
      dir: "donate-blood",
      linkPrefix: "/donate-blood/",
      title: "献血",
      sidebar: ["/donate-blood/"],
    },
    {
      type: "doc",
      dir: "annual",
      linkPrefix: "/annual/",
      title: "年终总结",
      sidebar: ["/annual/", "/annual/2025/", "/annual/2024/"],
    },
  ],
});
