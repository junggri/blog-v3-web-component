import findDom from "../lib/findDom";
import parseTemplate from "./parseTemplate";

interface ITemplateFunction {
  afterLoad?: () => void

  (input?: any): string

}

export default function render(templateFunction: ITemplateFunction, root: string = "#main", input: any = undefined) {
  const rootElement = findDom(root);

  if (rootElement) {
    const templateString = input ? templateFunction(input) : templateFunction();
    rootElement.innerHTML += templateString

    const foundTemplate = parseTemplate(templateString)
    const template = findDom(foundTemplate);
    

    if (template) {
      const clone = document.importNode(template, true) as HTMLTemplateElement
      rootElement.appendChild(clone.content)

      rootElement.removeChild(template);

      if (templateFunction.afterLoad) {
        templateFunction.afterLoad()
      }

    }
  }
}
