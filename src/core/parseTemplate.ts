export default function parseTemplate(template: string) {
  let returnTarget: string;
  let prefix: string
  const isClassBased = template.split(">")[0].split("class")[1];
  const isIdBases = template.split(">")[0].split("id")[1]

  isClassBased ? returnTarget = isClassBased : returnTarget = isIdBases
  isClassBased ? prefix = "." : prefix = "#";

  return prefix + returnTarget.replace(/[^a-zA-z]/gi, "")
}
