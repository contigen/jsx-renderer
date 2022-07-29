`use strict`;
const newJsxTag = <h1></h1>;
const jsxTraverser = (jsx) => {
  let jsxString = jsx.toString();
  if (!(jsxString.StartsWith && jsx.EndsWith)) {
  }
};
const jsxFunction = (tagName, props, ...Args) => {
  // for nested arrays
  let children = Args.length ? Args.flat(Infinity) : null;
  return { tagName, props, children };
};
function jsxRenderer(node) {
  let newNode = document.createElement(node.tagName);
  let nodeAttr = node.attributes || {};
  // copy attributes

  return newNode;
}
