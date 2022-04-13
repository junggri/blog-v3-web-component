export default function template(input: string, id: string) {
  return (`
    <template id=${id}>${input.trim()}</template>
  `)
}
