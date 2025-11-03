"use client";

import { useState, useEffect } from "react";

interface RelativeTimeProps {
  timestamp: string;
  className?: string;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths}mo ago`;
}

export default function RelativeTime({
  timestamp,
  className,
}: RelativeTimeProps) {
  const [relativeTime, setRelativeTime] = useState("");

  useEffect(() => {
    const date = new Date(timestamp);
    const interval = setInterval(() => {
      setRelativeTime(formatRelativeTime(date));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [timestamp]);

  return <p className={className}>{relativeTime}</p>;
}
