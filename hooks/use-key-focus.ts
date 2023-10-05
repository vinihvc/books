import { RefObject, useEffect } from 'react'

const useKeyFocus = (ref: RefObject<HTMLElement>, key: string) => {
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === key) {
        ref.current?.focus()
      }
    })
  }, [ref, key])
}

export default useKeyFocus
