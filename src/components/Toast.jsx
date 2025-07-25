'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

// Create the context
const ToastContext = createContext()

// Toast component (internal)
function ToastMarkup({ toast, onClose }) {
  const [show, setShow] = useState(true)

  const config = {
    success: {
      icon: CheckCircleIcon,
      iconColor: 'text-green-400',
      title: toast.title,
      message: toast.message,
    },
    error: {
      icon: XCircleIcon,
      iconColor: 'text-red-400',
      title: toast.title,
      message: toast.message,
    },
  }

  const currentConfig = toast.type === 'success' ? config.success : config.error
  const IconComponent = currentConfig.icon

  return (
    <Transition show={show}>
      <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black/20 transition data-closed:opacity-0 data-enter:transform data-enter:duration-300 data-enter:ease-out data-closed:data-enter:translate-y-2 data-leave:duration-100 data-leave:ease-in data-closed:data-enter:sm:translate-x-2 data-closed:data-enter:sm:translate-y-0">
        <div className="p-4">
          <div className="flex items-start">
            {/* success or fail icons */}
            <div className="shrink-0">
              <IconComponent
                aria-hidden="true"
                className={`size-6 ${currentConfig.iconColor}`}
              />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">
                {currentConfig.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {currentConfig.message}
              </p>
            </div>
            <div className="ml-4 flex shrink-0">
              <button
                type="button"
                onClick={() => {
                  setShow(false)
                  // Also call the onClose callback after a brief delay to allow transition
                  setTimeout(() => onClose(toast.id), 100)
                }}
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:outline-hidden"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

// Toast Provider component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((toast) => {
    const id = Date.now() + Math.random()
    const newToast = { id, ...toast }

    setToasts((prev) => [...prev, newToast])

    // Remove after 5s
    setTimeout(() => {
      removeToast(id)
    }, 5000)

    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showSuccess = useCallback(
    (title, message) => {
      return addToast({ type: 'success', title, message })
    },
    [addToast],
  )

  const showError = useCallback(
    (title, message) => {
      return addToast({ type: 'error', title, message })
    },
    [addToast],
  )

  return (
    <ToastContext.Provider
      value={{ showSuccess, showError, addToast, removeToast }}
    >
      {children}

      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          {toasts.map((toast) => (
            <ToastMarkup key={toast.id} toast={toast} onClose={removeToast} />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  )
}

// Custom hook to use the toast context
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
