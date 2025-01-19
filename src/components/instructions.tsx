"use client";

import { useState } from "react";
import { usePlaygroundState } from "@/hooks/use-playground-state";

export function Instructions(): JSX.Element {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { pgState } = usePlaygroundState();
  
    return (
      <div
        className={`flex flex-1 flex-col w-full gap-[4px] border p-4 rounded-lg ${
          isFocused ? "ring-1" : "ring-0"
        } h-[200px] overflow-y-auto`}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="text-xs font-semibold uppercase mr-1 tracking-widest">
              INSTRUCTIONS
            </div>
          </div>
        </div>
      </div>
    );
  }
  
