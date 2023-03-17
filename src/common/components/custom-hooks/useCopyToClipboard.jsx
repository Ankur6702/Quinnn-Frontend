import { useState } from "react";

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);

  const onCopy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, onCopy];
}

export default useCopyToClipboard;
