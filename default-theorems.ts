import { defineTheorem } from "./theorem-plugin";

const defaultIconSize = '1.2em';

export const defaultTheorems: Array<Plugin> = [
  defineTheorem({
    type: 'theorem',
    defaultTitle: '定理',
    titleColor: '#0077cc',
    background: '#0078ff10',
    borderColor: '#0077cc',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      innerCode: '<path fill="currentColor" d="M11 13.5v8H3v-8zm-2 2H5v4h4zM12 2l5.5 9h-11zm0 3.86L10.08 9h3.84zM17.5 13c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5" />'
    }
  }),
  defineTheorem({
    type: 'definition',
    defaultTitle: '定义',
    titleColor: '#33aa33',
    background: '#33aa3310',
    borderColor: '#33aa33',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      innerCode: '<path fill="currentColor" d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-5v8l-2.5-2.25L8 12V4H6v16h12z" />'
    }
  }),
  defineTheorem({
    type: 'proof',
    defaultTitle: '证明',
    titleColor: 'var(--vp-c-text-1)',
    background: '#80808010',
    borderColor: '#888',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      currentColor: '#888',
      innerCode: '<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" />'
    }
  }),
  defineTheorem({
    type: 'lemma',
    defaultTitle: '引理',
    titleColor: '#0077ccc0',
    background: '#0078ff10',
    borderColor: '#0077cca0',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      innerCode: '<path fill="currentColor" d="M11 13.5v8H3v-8zm-2 2H5v4h4zM12 2l5.5 9h-11zm0 3.86L10.08 9h3.84zM17.5 13c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5" />'
    }
  }),
  defineTheorem({
    type: 'problem',
    defaultTitle: '问题',
    titleColor: '#d868eb',
    background: '#4a148c0a',
    borderColor: '#d868eb',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      innerCode: '<path fill="currentColor" d="M10 19h3v3h-3zm2-17c5.35.22 7.68 5.62 4.5 9.67c-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08c.66-1 2-1.59 2.83-2.25C15.92 8.43 15.32 5.26 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6" />'
    }
  }),
  defineTheorem({
    type: 'solution',
    defaultTitle: '解答',
    titleColor: 'var(--vp-c-text-1)',
    background: '#80808010',
    borderColor: '#888',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      currentColor: '#888',
      innerCode: '<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" />'
    }
  }),
  defineTheorem({
    type: 'analyzation',
    defaultTitle: '分析',
    titleColor: '#fbb142',
    background: '#ff9d0010',
    borderColor: '#ffb74d',
    icon: {
      size: defaultIconSize, viewBoxSize: '24',
      innerCode: '<path fill="currentColor" d="M18 16h-.58l-.81-.81A7.07 7.07 0 0 0 18 11c0-3.87-3.13-7-7-7c-1.5 0-3 .5-4.21 1.4c-3.09 2.32-3.72 6.71-1.4 9.8s6.71 3.72 9.8 1.4l.81.81V18l5 5l2-2zm-7 0c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5M3 6L1 8V1h7L6 3H3zm18-5v7l-2-2V3h-3l-2-2zM6 19l2 2H1v-7l2 2v3z" />'
    }
  }),
]
