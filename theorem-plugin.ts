import { markdownContainerPlugin } from '@vuepress/plugin-markdown-container'
import { Plugin } from 'vuepress/core';

const borderWidth = '5px', borderRadius = '7px', iconMargin='0.4em';

type rgba = string;
type rgb  = string;

interface Svg {
  size?: string,
  width?: string,
  height?: string,

  viewBoxSize?: string,
  viewBox?: string,

  currentColor?: rgb,
  innerCode: string,
}

interface TheoremOptions {
  type: string,
  defaultTitle: string,
  titleColor: rgb,
  background: rgba,
  borderColor: rgb | false,
  icon: Svg | false,
};

function buildSvg(svg: Svg): Svg {
  return {
    width: svg.width ?? svg.size,
    height: svg.height ?? svg.size,
    viewBox: svg.viewBox ?? `0 0 ${svg.viewBoxSize} ${svg.viewBoxSize}`,
    innerCode: svg.innerCode
  };
}

export function defineTheorem(options: TheoremOptions){
  const theoremBorder = (options.borderColor === false)? '':
    `border-left: ${borderWidth} solid ${options.borderColor};`;
  const theoremStyle = `
    background-color: ${options.background};
    ${theoremBorder}
    border-radius: ${borderRadius};
    padding: 1em 0.75em 0.25em 0.75em;
    margin: 1em 0;
  `.replaceAll('\n', '');

  const titleStyle = `
    font-weight: bold;
    color: ${options.titleColor};
    display: flex;
    align-items: center;
    margin-bottom: 0.3em; 
  `.replaceAll('\n', '');

  var icon: string;
  if (options.icon === false) {
    icon = '';
  } else {
    const iconOptions = buildSvg(options.icon);
    iconOptions.currentColor ??= options.titleColor;
    const iconStyle = `
      margin-right: ${iconMargin};
      color: ${iconOptions.currentColor};
    `.replaceAll('\n', '');

    icon = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="${iconOptions.width}"
           height="${iconOptions.height}"
           viewBox="${iconOptions.viewBox}"
           style="${iconStyle}">
        ${iconOptions.innerCode}
      </svg>
    `;
  }

  const before = (info: string) => `
    <div class="theorem theorem-${options.type}" style="${theoremStyle}">
      <div class="theorem-title theorem-title-${options.type}" style="${titleStyle}">
        ${icon}
        <span class="theorem-title">${info || options.defaultTitle}</span>
      </div>
      <div class="theorem-content">
  `;

  const after = (info: string) => `
      </div>
    </div>
  `;

  return markdownContainerPlugin({
    type: options.type,
    before, after
  })
}
