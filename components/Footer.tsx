"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Bug, X, ExternalLink, MessageSquare } from "lucide-react"
import { Discord, Github, Send } from "react-bootstrap-icons";
import { Button } from '@/ui/button';

export default function Footer({ f, t }: { f: (key: string) => string, t: (key: string) => string }) {
  const [isBugModalOpen, setBugModalOpen] = useState(false)
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = (isBugModalOpen || isFeedbackModalOpen) ? 'hidden' : 'unset'
    
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setBugModalOpen(false)
        setFeedbackModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBugModalOpen, isFeedbackModalOpen])

  return (
    <>
      <footer className="relative bg-gradient-to-b from-zinc-900/90 to-black text-zinc-300 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/footer-background.png"
            alt="Footer Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-zinc-100">
                {f('title')}
              </h2>
              <p className="text-sm leading-relaxed">{f('sobre')}</p>
              <small className="block text-xs text-zinc-400">
                {f('codigo')} <a href="https://github.com/cronegamesplays" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-100 transition-colors duration-300">@CroneGamesPlays</a>
              </small>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-100">Links</h3>
              <div className="flex flex-col space-y-3">
                <FooterLink href="https://discord.gg/wV2WamExr5" icon={<Discord className="w-5 h-5" />} text={f('servidor')} />
                <FooterLink href="https://github.com/cronegamesplays/Kandaraku-Website-API-Anime-Manga" icon={<Github className="w-5 h-5" />} text={f('fonte')} />
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => setBugModalOpen(true)} 
                    className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-2 px-3 rounded-md transition-colors duration-300 text-sm"
                  >
                    <Bug className="w-4 h-4 mr-1" />
                    {f('reportBug')}
                  </Button>
                  <Button 
                    onClick={() => setFeedbackModalOpen(true)} 
                    className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-2 px-3 rounded-md transition-colors duration-300 text-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {f('feedback')}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{f('parceiros')}</h3>
                <a href="https://discord.gg/zgQzcztRXC" className="inline-flex items-center text-zinc-300 hover:text-zinc-100 transition-colors duration-300">
                  ADSS Cloud ({t('hospedagem')})
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{f('colaboradores')}</h3>
                <ul className="space-y-1">
                  <li><FooterLink href="https://github.com/kevinmarquesp" text="@kevinmarquesp" /></li>
                  <li><FooterLink href="https://github.com/kx4x" text="@kx4x" /></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
            <p>&copy; {new Date().getFullYear()} {f('title')}. {t('direitos')}</p>
          </div>
        </div>
      </footer>

      {isBugModalOpen && (
        <Modal
          title={f('reportBugTitle')}
          description={f('reportBugDescription')}
          onClose={() => setBugModalOpen(false)}
          ref={modalRef}
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                {f('emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">
                {f('bugDescriptionLabel')}
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="resize-none w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-colors duration-300"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/20 text-zinc-100 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
             <Send className="w-4 h-4 mr-2" /> {f('submitBugReport')}
            </Button>
          </form>
        </Modal>
      )}

      {isFeedbackModalOpen && (
        <Modal
          title={f('feedbackTitle')}
          description={f('feedbackDescription')}
          onClose={() => setFeedbackModalOpen(false)}
          ref={modalRef}
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="feedbackEmail" className="block text-sm font-medium text-zinc-300 mb-1">
                {f('emailLabel')}
              </label>
              <input
                type="email"
                id="feedbackEmail"
                name="feedbackEmail"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="feedbackMessage" className="block text-sm font-medium text-zinc-300 mb-1">
                {f('feedbackMessageLabel')}
              </label>
              <textarea
                id="feedbackMessage"
                name="feedbackMessage"
                rows={4}
                className="resize-none w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-colors duration-300"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/20 text-zinc-100 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
             <Send className="w-4 h-4 mr-2" /> {f('submitFeedback')}
            </Button>
          </form>
        </Modal>
      )}
    </>
  )
}

function FooterLink({ href, icon, text }: { href: string; icon?: React.ReactNode; text: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center text-zinc-300 hover:text-zinc-100 transition-colors duration-300"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
      <ExternalLink className="w-4 h-4 ml-1" />
    </a>
  )
}

const Modal = React.forwardRef<HTMLDivElement, { title: string, description: string, onClose: () => void, children: React.ReactNode }>(
  ({ title, description, onClose, children }, ref) => {
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div ref={ref} className="bg-zinc-900 border border-zinc-800 rounded-lg max-w-md w-full p-6 relative shadow-xl">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-semibold mb-4 text-zinc-100">{title}</h2>
          <p className="text-zinc-300 mb-6">{description}</p>
          {children}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'