"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "motion/react"
import { Search, Send } from "lucide-react"
import useDebounce from "@/hooks/use-debounce"
import { useRouter } from "next/navigation"

interface Action {
  id: string
  label: string
  href?: string
}

interface SearchResult {
  actions: Action[]
}

function ActionSearchBar({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<SearchResult | null>(null)
  const [isFocused, setIsFocused] = useState(defaultOpen)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedAction, setSelectedAction] = useState<Action | null>(null)
  const debouncedQuery = useDebounce(query, 200)
  const router = useRouter()

  const actions: Action[] = [
    {
      id: "1",
      label: `Search blogs for "${query}"`,
      href: `/resources/blogs?q=${query}`,
    },
  ]

  useEffect(() => {
    if (!isFocused) {
      setResult(null)
      return
    }

    if (!debouncedQuery) {
      setResult({ actions: actions })
      return
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim()
    const filteredActions = actions.filter((action) => {
      const searchableText = action.label.toLowerCase()
      return searchableText.includes(normalizedQuery)
    })

    setResult({ actions: filteredActions })
  }, [debouncedQuery, isFocused, actions])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsTyping(true)
  }

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  const handleFocus = () => {
    setSelectedAction(null)
    setIsFocused(true)
  }

  const handleSelectAction = (action: Action) => {
    setSelectedAction(action)
    if (action.href) {
      router.push(action.href)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative flex flex-col justify-start items-center min-h-[90px]">
        <div className="w-full max-w-sm sticky top-0 z-10 pt-4 pb-1">
          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search in Blogs"
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-md bg-[#ebffa5] border-none shadow-none focus-visible:ring-offset-0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="popLayout">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                  >
                    <Send className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                  >
                    <Search className="w-4 h-4 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="w-full max-w-sm">
          <AnimatePresence>
            {isFocused && result && !selectedAction && (
              <motion.div
                className="w-full border rounded-md shadow-xs overflow-hidden dark:border-gray-800 bg-[#E4D9CEff]"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  {result.actions.map((action) => (
                    <motion.li
                      key={action.id}
                      className="px-3 py-2 flex items-center justify-between cursor-pointer rounded-md"
                      variants={item}
                      layout
                      onClick={() => handleSelectAction(action)}
                    >
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{action.label}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* You can add an icon here if needed */}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ActionSearchBar
