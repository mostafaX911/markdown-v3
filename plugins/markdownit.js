import { defineNuxtPlugin } from "#app";

import mdit from "markdown-it";

import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import vid from "markdown-it-video";
import fn from "markdown-it-footnote";

const markdownit = new mdit({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
})
  .use(sub)
  .use(sup)
  .use(vid)
  .use(fn);

markdownit.linkify.set({ fuzzyEmail: false });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("mdit", markdownit);
});
