export default function Loading() {
  return (
    <div className="w-full max-w-[800px] mx-auto py-4">
      <div className="flex flex-col gap-2">
        {/* Render 4 Skeleton cards */}
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="border-b border-border-color py-6 flex flex-col animate-pulse"
          >
            {/* Header: Author info */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-border-dark" />
              <div className="w-32 h-3.5 bg-border-dark rounded" />
              <span className="text-text-muted text-[0.7rem]">·</span>
              <div className="w-12 h-3 bg-border-dark rounded" />
              <span className="text-text-muted text-[0.7rem]">·</span>
              <div className="w-16 h-4.5 bg-border-dark rounded-full" />
            </div>

            {/* Content: Title & Excerpt */}
            <div className="flex gap-6 justify-between items-start">
              <div className="flex-1 flex flex-col gap-2.5">
                <div className="w-4/5 h-5.5 bg-border-dark rounded" />
                <div className="w-1/2 h-5.5 bg-border-dark rounded mb-1" />
                <div className="w-full h-3.5 bg-border-dark rounded" />
                <div className="w-5/6 h-3.5 bg-border-dark rounded" />
              </div>

              {/* Image box placeholder */}
              <div className="w-[100px] h-[70px] bg-border-dark rounded-default shrink-0" />
            </div>

            {/* Footer metadata */}
            <div className="flex justify-between items-center mt-5">
              <div className="w-20 h-3 bg-border-dark rounded" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-5 bg-border-dark rounded" />
                <div className="w-5 h-5 bg-border-dark rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
