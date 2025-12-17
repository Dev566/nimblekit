import { cn } from '@/utils/cn'

interface AdSlotProps {
  className?: string
}

export const AdSlot = ({ className }: AdSlotProps) => {
  return (
    <div
      className={cn(
        'w-full h-24 bg-surface border border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 text-sm',
        className
      )}
      aria-hidden="true"
    >
      Ad Space
    </div>
  )
}
