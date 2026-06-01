export interface ExtractedLink {
  text: string;
  href: string;
  fetchedTitle?: string;
}

export function extractExternalLinks(portableTextVal: any[]): ExtractedLink[] {
  if (!Array.isArray(portableTextVal)) return [];

  const links: ExtractedLink[] = [];
  const seenUrls = new Set<string>();

  portableTextVal.forEach((block) => {
    if (block._type === "block" && Array.isArray(block.children)) {
      block.children.forEach((child: any) => {
        if (child.marks && Array.isArray(child.marks) && block.markDefs) {
          child.marks.forEach((markKey: string) => {
            const markDef = block.markDefs.find((def: any) => def._key === markKey);
            if (markDef && markDef._type === "link" && markDef.href) {
              const url = markDef.href;
              if (url.startsWith("http") && !seenUrls.has(url)) {
                seenUrls.add(url);
                links.push({
                  text: child.text || url,
                  href: url,
                });
              }
            }
          });
        }
      });
    }
  });

  return links;
}

export async function fetchTitleFromUrl(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 seconds timeout

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });

    clearTimeout(timeoutId);

    if (!res.ok) return null;

    const html = await res.text();

    // Extract og:title
    const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i) ||
                         html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i);
    if (ogTitleMatch && ogTitleMatch[1]) {
      return htmlDecode(ogTitleMatch[1].trim());
    }

    // Extract <title>
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch && titleMatch[1]) {
      return htmlDecode(titleMatch[1].trim());
    }

    return null;
  } catch (e) {
    return null;
  }
}

function htmlDecode(input: string): string {
  return input
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/\s+/g, ' ');
}
