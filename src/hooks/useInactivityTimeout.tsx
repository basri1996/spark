import { debounce } from "@mui/material";
import { useEffect, useRef } from "react";

// Define the inactivity timeout duration (30 minutes)
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

// List of events to detect user activity
const events = [
  "mousedown",
  "mousemove",
  "wheel",
  "keydown",
  "touchstart",
  "scroll",
  // Add more events if needed
];

// Function to add/remove event listeners
const addListeners = (events: string[], cb: EventListener) => {
    events.forEach((event) =>
      window.addEventListener(event, cb, { passive: true } as EventListenerOptions)
    );
  
    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, cb, { passive: true } as EventListenerOptions)
      );
    };
  };
// Type for the hook parameters
interface UseInactivityTimeoutProps {
  activeAccount: string;
  timeout?: number; 
}

const useInactivityTimeout = ({ activeAccount, timeout = INACTIVITY_TIMEOUT }: UseInactivityTimeoutProps) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); 
    const unlistenRef = useRef<(() => void) | null>(null); 
    const wasActiveRef = useRef<boolean>(false);
  useEffect(() => {
    // Function to handle user inactivity
    const handleInactivity = (initial: boolean) => {
      if (!initial && !wasActiveRef.current) {
        // If no activity detected, log the user out
        console.log("User is inactive for 30 minutes. Logging out...");
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (unlistenRef.current) {
          unlistenRef.current();
        }
        return;
      }

      // Reset activity status after action
      try {
        wasActiveRef.current = false;
      } catch (error) {
        console.error("Error during inactivity check:", error);
      }
    };

    handleInactivity(true); // Initial call to set up the timeout

    // Set up the inactivity timeout
    timeoutRef.current = setTimeout(() => handleInactivity(false), timeout);

    // Debounced activity handler
    const debouncedActivityHandler = debounce(() => {
      wasActiveRef.current = true;
      // Reset inactivity timeout when activity is detected
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => handleInactivity(false), timeout);
    }, 500); // Debounce time of 500ms

    // Add event listeners for user activity
    unlistenRef.current = addListeners(events, debouncedActivityHandler);

    // Cleanup function to clear timeout and remove event listeners when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (unlistenRef.current) {
        unlistenRef.current();
      }
    };
  }, [activeAccount, timeout]); // Re-run the effect if activeAccount or timeout changes
};

export default useInactivityTimeout;
