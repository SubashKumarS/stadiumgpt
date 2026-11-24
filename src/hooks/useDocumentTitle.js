import { useEffect } from 'react'

/**
 * Sets document.title for the current route.
 * Call it once at the top of every page component:
 *   useDocumentTitle('Events | StadiumGPT')
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
