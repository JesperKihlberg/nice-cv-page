import { useMemo } from "react";

export const useCalculateHighlightParts = (text: string, highlight: string, injectedUseMemo = useMemo) => {
  const parts = injectedUseMemo(() => {
    if (!highlight) {
      return [text];
    }

    return text.split(highlight);
  }, [text, highlight]);

  return parts;
};
