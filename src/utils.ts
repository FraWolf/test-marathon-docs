import { visit } from "unist-util-visit";

export function fixImagePath() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (
        node.tagName === "img" &&
        node.properties?.src?.startsWith("/assets/")
      ) {
        node.properties.src = `https://raw.githubusercontent.com/AuroraLilly/lmg/refs/heads/master${node.properties.src}`;
      }
    });
  };
}
