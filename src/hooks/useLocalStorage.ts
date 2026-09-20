import { useEffect, useState } from 'react'

/**
 * Hook generico per sincronizzare uno stato React con localStorage.
 * Fallisce silenziosamente se lo storage non è disponibile (es. navigazione privata):
 * in quel caso lo stato resta valido solo per la sessione corrente.
 */
export function useLocalStorage<T>(chiave: string, valoreIniziale: T) {
  const [valore, setValore] = useState<T>(() => {
    try {
      const grezzo = window.localStorage.getItem(chiave)
      return grezzo ? (JSON.parse(grezzo) as T) : valoreIniziale
    } catch {
      return valoreIniziale
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(chiave, JSON.stringify(valore))
    } catch {
      // Storage non disponibile: il progresso non viene persistito in questa sessione.
    }
  }, [chiave, valore])

  return [valore, setValore] as const
}
