const jsxFunction = (tagName, attributes, ...Args) => {
  // for nested arrays
  let children = Args.length ? Args.flat(Infinity) : null;
  return { tagName, attributes, children };
};
function jsxRenderer(node) {
  let newNode = document.createElement(node.tagName);
  let nodeAttr = node.attributes || {};
  // copy attributes
  Object.keys(a).reduce((acc, current), []);
  (node.children || []).forEach(
    (
      child // using recursion because child might contain other nodes
    ) => newNode.appendChild(jsxRenderer(child))
  );
  return newNode;
}
