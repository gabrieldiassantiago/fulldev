import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from 'lucide-react'

interface SuccessAlertProps {
  isOpen: boolean
  onClose: () => void
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 z-50 w-full max-w-sm"
        >
          <Alert
            variant="default"
            className="bg-green-50 border border-green-300 shadow-lg rounded-lg flex items-center gap-3 px-4 py-3"
          >
            <div className="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-10 h-10">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <AlertTitle className="text-green-800 font-semibold">
                Sucesso!
              </AlertTitle>
              <AlertDescription className="text-green-700 text-sm">
                Email enviado com sucesso. Verifique sua caixa de entrada.
              </AlertDescription>
            </div>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
