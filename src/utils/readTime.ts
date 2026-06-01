/**
 * Calculates the estimated reading time of an article based on the word count of its body content.
 * Average reading speed: 200 words per minute (WPM).
 * 
 * @param body PortableText blocks array
 * @param fallbackReadTime Fallback reading time in minutes (default is 5)
 * @returns number of minutes estimated to read the article
 */
export function calculateReadTime(body: any[] | undefined, fallbackReadTime: number = 5): number {
  if (!body || !Array.isArray(body)) return fallbackReadTime;

  let wordCount = 0;

  body.forEach((block) => {
    if (block._type === 'block' && block.children && Array.isArray(block.children)) {
      block.children.forEach((child: any) => {
        if (typeof child.text === 'string') {
          // Splitting by spaces or punctuation to count words
          const words = child.text.trim().split(/\s+/);
          if (words.length > 0 && words[0] !== '') {
            wordCount += words.length;
          }
        }
      });
    }
  });

  if (wordCount === 0) return fallbackReadTime;

  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return minutes > 0 ? minutes : 1;
}
