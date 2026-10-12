"use client";

import { useEffect, useState } from "react";

// The address is assembled in the browser after mount, so it never appears in
// the served HTML or as a literal string in the bundle (scrapers skip it).
export function useEmailHref(fallback = "#contact") {
  const [href, setHref] = useState(fallback);
  useEffect(() => {
    setHref("mailto:" + ["hello", "onuraltay", "dev"].join(".").replace(".", "@"));
  }, []);
  return href;
}
