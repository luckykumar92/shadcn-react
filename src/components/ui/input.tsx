import * as React from "react"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react'
import { useState } from "react";
import { Button } from "./button";

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <>
            <Button
            variant="transparent"
              className="absolute right-0 top-0 h-9 w-9 rounded-full text-gray-600"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="size-4" />
              ) : (
                <EyeOff className="size-4" />
              )}
            </Button>
          </>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
