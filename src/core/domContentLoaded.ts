export default function domContentLoaded(cb: () => void) {
  document.addEventListener("DOMContentLoaded", () => {
    cb()
  })
}
