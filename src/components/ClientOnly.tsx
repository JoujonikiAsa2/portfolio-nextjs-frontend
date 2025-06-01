"use client";

import { useEffect, useState } from "react";
import Loader from "./shared/Loader";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <Loader/>;
  }

  return <>{children}</>;
}