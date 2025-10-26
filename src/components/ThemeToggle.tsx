import { Moon, Sun } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { toggleTheme } from '@/store/themeSlice'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.mode)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => dispatch(toggleTheme())}
      className="transition-theme"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  )
}

