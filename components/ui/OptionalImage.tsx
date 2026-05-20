"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptionalImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  fallback?: React.ReactNode;
}

export function OptionalImage({
  src,
  alt,
  className,
  fill = true,
  sizes = "100vw",
  fallback,
}: OptionalImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
