
import { useCallback, useEffect, useRef } from "react";

 const InfiniteScroll = ({
    load,
    hasMore,
    isLoading,
    loader,
    children,
    endMessage,
}:any) => {
    const sentinelRef = useRef<any>(null);
    const observerRef = useRef<any>(null);

    const handleIntersect = useCallback(
        (entries:any) => {
            if (isLoading || !hasMore) return;

            if (entries[0].isIntersecting) {
                load();
            }
        },
        [isLoading, load, hasMore]
    );

    useEffect(() => {
        observerRef.current = new IntersectionObserver(handleIntersect, {
            root: null,
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
    }, [handleIntersect]);

    return (
        <>
            {children}
            <div ref={sentinelRef} />
            {isLoading && loader}
            {!(hasMore || isLoading) && endMessage}
        </>
    );
};

export default InfiniteScroll