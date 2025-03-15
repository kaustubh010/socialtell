"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Always default to light mode
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      setTheme("light")
      // Remove dark class if it exists
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}

