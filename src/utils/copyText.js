export function copyText(text) {
  navigator.clipboard.writeText(text).then(() => alert("Copiado!"));
}
