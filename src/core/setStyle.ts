import classNames from "classnames";

export default function setStyle(htmlElement: Element, styles: any) {
  const isClassBase = htmlElement.getAttribute("class")
  const isIdBase = htmlElement.getAttribute("id")

  const rootIdentifier = isClassBase ? isClassBase : isIdBase

  if (rootIdentifier && styles[rootIdentifier]) {
    htmlElement.setAttribute("class", classNames(styles[rootIdentifier]));
  }


  if (htmlElement.hasChildNodes()) {
    Array.from(htmlElement.children).forEach((e) => {
      setStyle(e, styles)
    })
  }

}
