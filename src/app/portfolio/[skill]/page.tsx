'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ImageItem {
  id: number;
  url: string;
  title: string;
}

export default function PortfolioPage({ params }: { params: { skill: string } }) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const url = URL.createObjectURL(file);
        setImages(prev => [...prev, {
          id: Date.now(),
          url,
          title: file.name
        }]);
      });
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 p-8">
      <Link 
        href="/" 
        className="text-blue-200 hover:text-blue-300 mb-6 inline-block"
      >
        ← 돌아가기
      </Link>
      
      <h1 className="text-2xl font-bold text-blue-200 mb-8">{params.skill} 포트폴���오</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="aspect-square relative cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Upload Button */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        이미지 업로드
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
        multiple
      />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
} 