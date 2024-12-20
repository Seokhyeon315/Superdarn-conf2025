import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPublicPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
}
