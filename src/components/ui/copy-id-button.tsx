"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CopyIdButton({ id }: { id: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      aria-label="Copy product ID"
    >
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
}
