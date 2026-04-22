import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscapePress(event) {
      if (event.code !== "Escape") {
        return;
      }

      callback(event);
    }

    window.addEventListener("keyup", handleEscapePress);

    return () => {
      window.removeEventListener("keyup", handleEscapePress);
    };
  }, [callback]);
}
