export const isDirective = (name) => name.indexOf('m-') === 0
export const isElement = (node) => node.nodeType === 1
export const isExpression = (node) => node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
