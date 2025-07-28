import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectTheme, setTheme } from "../features/theme/themeSlice"

const ThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      dispatch(setTheme(storedTheme))
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(setTheme("dark"))
    } else {
      dispatch(setTheme("light"))
    }
  }, [dispatch])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
