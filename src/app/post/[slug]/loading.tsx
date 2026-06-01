export default function PostLoading() {
  return (
    <article className="max-w-[680px] mx-auto pb-16 animate-pulse">
      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-20 h-5 bg-border-dark rounded-full" />
          <div className="w-16 h-3 bg-border-dark rounded" />
        </div>
        
        {/* Title skeleton */}
        <div className="flex flex-col gap-3.5 mb-6">
          <div className="w-full h-10 bg-border-dark rounded" />
          <div className="w-3/4 h-10 bg-border-dark rounded" />
        </div>
        
        {/* Excerpt skeleton */}
        <div className="border-l-4 border-border-dark pl-4 mb-8 flex flex-col gap-2">
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-5/6 h-4 bg-border-dark rounded" />
        </div>

        {/* Author info box skeleton */}
        <div className="flex items-center justify-between py-4 border-y border-border-color">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-border-dark" />
            <div className="flex flex-col gap-1.5">
              <div className="w-24 h-4 bg-border-dark rounded" />
              <div className="w-32 h-3.5 bg-border-dark rounded" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content skeleton */}
      <div className="flex flex-col gap-6 mb-12">
        {/* Paragraph 1 */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-11/12 h-4 bg-border-dark rounded" />
          <div className="w-4/5 h-4 bg-border-dark rounded" />
        </div>

        {/* Paragraph 2 */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-3/4 h-4 bg-border-dark rounded" />
        </div>

        {/* Dynamic graphics placeholder */}
        <div className="w-full aspect-video bg-border-dark rounded-default my-4" />

        {/* Paragraph 3 */}
        <div className="flex flex-col gap-2.5">
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-full h-4 bg-border-dark rounded" />
          <div className="w-5/6 h-4 bg-border-dark rounded" />
        </div>
      </div>
    </article>
  );
}
