export function parsePrice(input) {
  return Number.parseInt(input.replace(/^\$/, ""), 10);
}
