export default function findDom<T extends Element>(selector: string) {
  return document.querySelector<T>(selector);
}
