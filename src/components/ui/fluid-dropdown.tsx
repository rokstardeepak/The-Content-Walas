"use client"

import * as React from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { ChevronDown, Home, Sparkles, MessageSquare } from "lucide-react"

// Utility function for className merging
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

// Custom hook for click outside detection
function useClickAway(ref: React.RefObject<HTMLElement | null>, handler: (event: MouseEvent | TouchEvent) => void) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" && "border border-neutral-700 bg-transparent",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

// Types
export interface Category {
  id: string
  label: string
  icon: React.ElementType
  color: string
}

export const categories: Category[] = [
  { id: "Fashion Campaign", label: "Fashion Campaign & Shoots", icon: Home, color: "#ee6767" },
  { id: "Cinematic Reels", label: "Cinematic Reels & Video", icon: Sparkles, color: "#4ECDC4" },
  { id: "Brand Consulting", label: "Premium Brand Consulting", icon: MessageSquare, color: "#A06CD5" },
]

// Icon wrapper with animation
const IconWrapper = ({
  icon: Icon,
  isHovered,
  color,
}: { icon: React.ElementType; isHovered: boolean; color: string }) => (
  <motion.div 
    className="w-4 h-4 mr-2 relative" 
    initial={false} 
    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
  >
    <Icon className="w-4 h-4" />
    {isHovered && (
      <motion.div
        className="absolute inset-0 animate-pulse"
        style={{ color }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-4 h-4" strokeWidth={2} />
      </motion.div>
    )}
  </motion.div>
)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

// Main component
interface ComponentProps {
  onSelect?: (category: Category) => void
  selected?: Category
}

export function Component({ onSelect, selected }: ComponentProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(selected || categories[0])
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (selected) {
      setSelectedCategory(selected)
    }
  }, [selected])

  useClickAway(dropdownRef, () => setIsOpen(false))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="w-full relative"
        ref={dropdownRef}
      >
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full justify-between bg-zinc-950/80 text-zinc-400 border border-white/10 rounded-xl px-4",
              "hover:bg-zinc-900 hover:text-zinc-200 hover:border-[#ee6767] hover:ring-1 hover:ring-[#ee6767]/30",
              "focus:ring-1 focus:ring-[#ee6767]/30 focus:border-[#ee6767]",
              "transition-all duration-200 ease-in-out",
              "h-11 shadow-inner",
              isOpen && "bg-zinc-900 text-zinc-100 border-[#ee6767] ring-1 ring-[#ee6767]/30",
            )}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              <span style={{ color: selectedCategory.color }}>
                <IconWrapper 
                  icon={selectedCategory.icon} 
                  isHovered={false} 
                  color={selectedCategory.color} 
                />
              </span>
              <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{selectedCategory.label}</span>
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-5 h-5 text-zinc-500"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 1, y: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 0,
                  height: 0,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  },
                }}
                className="absolute left-0 right-0 top-full mt-2 z-50 overflow-hidden"
                onKeyDown={handleKeyDown}
              >
                <motion.div
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 p-1.5 shadow-2xl backdrop-blur-md"
                  initial={{ borderRadius: 12 }}
                  animate={{
                    borderRadius: 16,
                    transition: { duration: 0.2 },
                  }}
                  style={{ transformOrigin: "top" }}
                >
                  <motion.div 
                    className="py-1 relative flex flex-col gap-1" 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"
                  >
                    <motion.div
                      layoutId="hover-highlight"
                      className="absolute inset-x-1.5 bg-white/[0.04] border border-white/[0.02] rounded-lg"
                      animate={{
                        y: categories.findIndex((c) => (hoveredCategory || selectedCategory.id) === c.id) * 44,
                        height: 40,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.4,
                      }}
                    />
                    {categories.map((category) => (
                      <React.Fragment key={category.id}>
                        <motion.button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category)
                            setIsOpen(false)
                            if (onSelect) {
                              onSelect(category)
                            }
                          }}
                          onHoverStart={() => setHoveredCategory(category.id)}
                          onHoverEnd={() => setHoveredCategory(null)}
                          className={cn(
                            "relative flex w-full items-center px-4 py-2.5 text-sm rounded-lg cursor-pointer",
                            "transition-colors duration-150 text-left",
                            "focus:outline-none",
                            selectedCategory.id === category.id || hoveredCategory === category.id
                              ? "text-zinc-100"
                              : "text-zinc-400",
                          )}
                          whileTap={{ scale: 0.98 }}
                          variants={itemVariants}
                        >
                          <span style={{ color: category.color }}>
                            <IconWrapper
                              icon={category.icon}
                              isHovered={hoveredCategory === category.id}
                              color={category.color}
                            />
                          </span>
                          <span className="font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{category.label}</span>
                        </motion.button>
                      </React.Fragment>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </MotionConfig>
  )
}
