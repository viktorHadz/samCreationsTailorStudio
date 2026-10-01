'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { Gallery } from '@/components/Gallery'

function imageIndexFromUrl(imageCount) {
  const value = new URL(window.location.href).searchParams.get('image')

  if (value === null) return null

  const imageNumber = Number(value)
  return /^\d+$/.test(value) && imageNumber >= 1 && imageNumber <= imageCount
    ? imageNumber - 1
    : -1
}

function updateImageParameter(index) {
  const url = new URL(window.location.href)

  if (index === null) {
    url.searchParams.delete('image')
  } else {
    url.searchParams.set('image', index + 1)
  }

  return url
}

export function GalleryLightbox({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [queryString, setQueryString] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [isBackdropVisible, setIsBackdropVisible] = useState(false)
  const openedFromGrid = useRef(false)
  const isOpenRef = useRef(false)
  const isClosing = useRef(false)
  const animationFrames = useRef([])
  const animationTimers = useRef([])
  const closeButtonRef = useRef(null)
  const touchStart = useRef(null)

  const clearAnimationHandles = useCallback(() => {
    animationFrames.current.forEach(cancelAnimationFrame)
    animationTimers.current.forEach(clearTimeout)
    animationFrames.current = []
    animationTimers.current = []
  }, [])

  useEffect(() => clearAnimationHandles, [clearAnimationHandles])

  const openLightbox = useCallback(
    (index) => {
      clearAnimationHandles()
      isOpenRef.current = true
      isClosing.current = false
      setSelectedIndex(index)
      setIsBackdropVisible(true)
      setIsImageVisible(false)
      setIsOpen(true)

      const firstFrame = requestAnimationFrame(() => {
        const secondFrame = requestAnimationFrame(() => {
          setIsImageVisible(true)
        })
        animationFrames.current.push(secondFrame)
      })
      animationFrames.current.push(firstFrame)
    },
    [clearAnimationHandles],
  )

  const finishHistoryClose = useCallback(() => {
    if (openedFromGrid.current && window.history.state?.galleryLightbox) {
      window.history.back()
      return
    }

    const url = updateImageParameter(null)
    window.history.replaceState(window.history.state, '', url)
    setQueryString(url.search.slice(1))
  }, [])

  const closeLightbox = useCallback(
    (updateHistory = true) => {
      if (!isOpenRef.current || isClosing.current) return

      clearAnimationHandles()
      isClosing.current = true
      setIsImageVisible(false)

      animationTimers.current.push(
        setTimeout(() => setIsBackdropVisible(false), 150),
        setTimeout(() => {
          isOpenRef.current = false
          isClosing.current = false
          setIsOpen(false)
          setSelectedIndex(null)
          if (updateHistory) finishHistoryClose()
        }, 225),
      )
    },
    [clearAnimationHandles, finishHistoryClose],
  )

  const syncFromUrl = useCallback(() => {
    const nextIndex = imageIndexFromUrl(images.length)
    let url = new URL(window.location.href)

    if (nextIndex === -1) {
      url = updateImageParameter(null)
      window.history.replaceState(window.history.state, '', url)
    }

    setQueryString(url.search.slice(1))

    if (nextIndex === null || nextIndex === -1) {
      openedFromGrid.current = false
      if (isOpenRef.current) closeLightbox(false)
      return
    }

    openedFromGrid.current = Boolean(window.history.state?.galleryLightbox)
    if (!isOpenRef.current || isClosing.current) {
      openLightbox(nextIndex)
    } else {
      setSelectedIndex(nextIndex)
    }
  }, [closeLightbox, images.length, openLightbox])

  useEffect(() => {
    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)

    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [syncFromUrl])

  const showImage = useCallback(
    (index, historyMethod = 'replaceState') => {
      const url = updateImageParameter(index)
      const state = {
        ...window.history.state,
        galleryLightbox: openedFromGrid.current,
      }

      window.history[historyMethod](state, '', url)
      setQueryString(url.search.slice(1))
      if (isOpenRef.current) {
        setSelectedIndex(index)
      } else {
        openLightbox(index)
      }
    },
    [openLightbox],
  )

  const moveImage = useCallback(
    (step) => {
      if (selectedIndex === null) return
      showImage((selectedIndex + step + images.length) % images.length)
    },
    [images.length, selectedIndex, showImage],
  )

  useEffect(() => {
    if (selectedIndex === null) return

    function handleKeyDown(event) {
      if (isClosing.current) return

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        moveImage(-1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        moveImage(1)
      } else if (event.key === 'Home') {
        event.preventDefault()
        showImage(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        showImage(images.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [images.length, moveImage, selectedIndex, showImage])

  function handleGridClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return
    }

    const link = event.target.closest('[data-gallery-index]')
    if (!link) return

    event.preventDefault()
    openedFromGrid.current = true
    showImage(Number(link.dataset.galleryIndex), 'pushState')
  }

  function handlePointerDown(event) {
    if (event.pointerType !== 'touch') return
    event.currentTarget.setPointerCapture(event.pointerId)
    touchStart.current = { x: event.clientX, y: event.clientY }
  }

  function handlePointerUp(event) {
    if (event.pointerType !== 'touch' || !touchStart.current) return

    const distanceX = event.clientX - touchStart.current.x
    const distanceY = event.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > Math.abs(distanceY)) {
      moveImage(distanceX < 0 ? 1 : -1)
    }
  }

  const selectedImage = images[selectedIndex ?? 0]

  return (
    <>
      <div onClick={handleGridClick}>
        <Gallery images={images} queryString={queryString} />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => closeLightbox()}
        initialFocus={closeButtonRef}
        className="relative z-50"
      >
        <DialogBackdrop
          className={clsx(
            'fixed inset-0 bg-neutral-950/95 transition-opacity duration-75 motion-reduce:transition-none',
            isBackdropVisible ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div className="fixed inset-0">
          <DialogPanel className="flex h-full w-full flex-col text-white">
            <DialogTitle className="sr-only">Gallery image viewer</DialogTitle>

            <div className="flex h-16 flex-none items-center justify-between px-4 sm:px-6">
              <p className="text-sm font-semibold" aria-live="polite">
                {selectedIndex === null ? 0 : selectedIndex + 1} of{' '}
                {images.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                className="rounded-full p-2 text-white transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                aria-label="Close image viewer"
              >
                <XMarkIcon className="size-7" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-3 sm:px-20 sm:py-4">
              <button
                type="button"
                onClick={() => moveImage(-1)}
                className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden sm:left-6"
                aria-label="View previous image"
              >
                <ChevronLeftIcon className="size-7" aria-hidden="true" />
              </button>

              <Image
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.src.width}
                height={selectedImage.src.height}
                sizes="100vw"
                placeholder={
                  selectedImage.src?.blurDataURL ? 'blur' : undefined
                }
                priority
                draggable={false}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => (touchStart.current = null)}
                className={clsx(
                  'h-auto max-h-full w-auto max-w-full touch-pan-y object-contain transition duration-150 ease-out motion-reduce:transition-none',
                  isImageVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-0',
                )}
              />

              <button
                type="button"
                onClick={() => moveImage(1)}
                className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden sm:right-6"
                aria-label="View next image"
              >
                <ChevronRightIcon className="size-7" aria-hidden="true" />
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
