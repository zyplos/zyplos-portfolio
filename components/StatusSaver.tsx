"use client";

import { useEffect } from 'react';
import { type UserStatusData } from '@/internals/getDiscordPresence';

interface StatusSaverProps {
  userStatusData: UserStatusData;
}

export default function StatusSaver({ userStatusData }: StatusSaverProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("status", JSON.stringify(userStatusData));
    }
  }, [userStatusData]);

  return null; // This component does not render anything
}
