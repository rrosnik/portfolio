import { useEffect, useState } from "react";

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
  </svg>
);

type ProjectGalleryProps = {
  label: string;
  images: string[];
  onClose: () => void;
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  label,
  images,
  onClose,
}) => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${label} gallery`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="card-border fixed right-5 top-5 flex size-10 items-center justify-center rounded-full text-white-50 transition-colors hover:text-white"
      >
        <CloseIcon className="size-5" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="card-border fixed left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white-50 transition-colors hover:text-white md:left-6"
          >
            <ChevronIcon className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="card-border fixed right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white-50 transition-colors hover:text-white md:right-6"
          >
            <ChevronIcon className="size-5" />
          </button>
        </>
      )}

      <div
        className="flex max-h-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${label} screenshot ${index + 1} of ${images.length}`}
          className="max-h-[70vh] w-auto rounded-xl object-contain"
        />

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-white-50">
            {label}
            {hasMultiple ? ` — ${index + 1} / ${images.length}` : ""}
          </p>

          {hasMultiple && (
            <div className="flex flex-wrap justify-center gap-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`size-12 overflow-hidden rounded-lg border transition-colors ${
                    i === index
                      ? "border-white-50"
                      : "border-black-50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
