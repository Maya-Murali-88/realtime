"use client";

import { useState } from "react";
import { usePlaygroundState } from "@/hooks/use-playground-state";

export function Instructions() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pgState } = usePlaygroundState();
             
}
