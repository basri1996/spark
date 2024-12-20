"use client";
import React, { useCallback, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  load: () => void;
  hasMore: boolean;
  isLoading: boolean;
  loader: React.ReactNode;
  children?: React.ReactNode;
  endMessage?: React.ReactNode;
  scrollContainerRef: React.RefObject<HTMLDivElement>; 
  sentinelRef: React.RefObject<HTMLDivElement>;          // Sentinel ref passed from outside
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  load,
  hasMore,
  isLoading,
  loader,
  children,
  endMessage,
  scrollContainerRef,
  sentinelRef,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isLoading || !hasMore) return;
      if (entries[0].isIntersecting) {
        load();
      }
    },
    [isLoading, load, hasMore]
  );

  useEffect(() => {
    if (!scrollContainerRef.current || !sentinelRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: scrollContainerRef.current,
      threshold: 1.0,
    });

    observerRef.current.observe(sentinelRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersect, scrollContainerRef, sentinelRef]);

  return (
    <>
      {children}
      {isLoading && loader}
      {!hasMore && !isLoading && endMessage}
    </>
  );
};

export default InfiniteScroll