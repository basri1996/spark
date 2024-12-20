import React, { useCallback, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  load: () => void;
  hasMore: boolean;
  isLoading: boolean;
  loader: React.ReactNode;
  children: React.ReactNode;
  endMessage: React.ReactNode;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  load,
  hasMore,
  isLoading,
  loader,
  children,
  endMessage,
  scrollContainerRef,
}) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!hasMore || isLoading) return;
      if (entries[0].isIntersecting) {
        load();
      }
    },
    [hasMore, isLoading, load]
  );

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersect, scrollContainerRef]);

  return (
    <>
      {children}
      <div ref={sentinelRef} />
      {isLoading && loader}
      {!(hasMore || isLoading) && endMessage}
    </>
  );
};

export default InfiniteScroll;
