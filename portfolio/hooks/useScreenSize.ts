"use client";

import { useEffect, useState } from "react";

export default function useScreenSize(query: string) {
  if (typeof window !== undefined) {
    const [result, setResult] = useState(
      () => window.matchMedia(query).matches
    );
    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => {
        setResult(media.matches);
      };
      window.addEventListener("resize", listener);

      return () => {
        window.removeEventListener("resize", listener);
      };
    }, [query]);
    return result;
  }
}
