'use client'
export default function Badge ({ children, color = '#60a5fa', delay = '0ms' }: { children: any, color?: string, delay?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: color, animationDelay: delay }} />
      <span>{children}</span>
    </div>
  )
}