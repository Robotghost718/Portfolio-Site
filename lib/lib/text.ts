/**
 * Truncate text and return as object with text and suffix
 * @param text - The text to truncate
 * @param length - Maximum length before truncating
 * @param suffix - Suffix to add when truncated (default: "...Continue Reading")
 */
export function truncateText(
  text: string,
  length: number = 200,
  suffix: string = '...Continue Reading'
): { text: string; isTruncated: boolean; suffix: string } {
  if (text.length <= length) {
    return { text, isTruncated: false, suffix: '' }
  }
  return {
    text: text.substring(0, length).trim(),
    isTruncated: true,
    suffix,
  }
}
