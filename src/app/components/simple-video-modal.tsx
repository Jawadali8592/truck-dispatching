'use client'
import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  channel?: 'youtube' | 'vimeo';
}

export default function SimpleVideoModal({ 
  isOpen, 
  onClose, 
  videoId, 
  channel = 'youtube' 
}: VideoModalProps) {
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getVideoUrl = () => {
    if (channel === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } else if (channel === 'vimeo') {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video modal"
        >
          <FiX className="w-6 h-6" />
        </button>
        
        {/* Video container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={getVideoUrl()}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video player"
          />
        </div>
      </div>
    </div>
  );
}