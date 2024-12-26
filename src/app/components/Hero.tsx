'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}

export default function Hero() {
  const [imageUrl, setImageUrl] = useState('/default-profile.jpg')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: 'User123', text: '멋진 포트폴리오네요!', timestamp: new Date().toLocaleString() }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      username: 'Guest' + Math.floor(Math.random() * 1000),
      text: newComment,
      timestamp: new Date().toLocaleString()
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <section className="flex items-center justify-center px-4 h-screen">
      <div className="max-w-4xl w-full grid gap-4">
        {/* Profile Card */}
        <div className="bg-navy-800 rounded-lg shadow-xl p-4 border border-navy-700">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Profile Image */}
            <div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden cursor-pointer relative
                         bg-gradient-to-br from-blue-400/30 to-purple-400/30
                         hover:from-blue-400/40 hover:to-purple-400/40 transition-all group"
              onClick={handleImageClick}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-blue-200 text-sm text-center px-2">
                    클릭하여<br/>프로필 사진<br/>추가
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-all text-sm">
                  사진 변경
                </p>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-grow">
              <h2 className="text-xl font-bold mb-1 text-blue-200">I AM</h2>
              <p className="text-lg mb-1 text-white">이름: 이프로</p>
              <p className="text-base mb-2 text-purple-200">
                포지션: PM 서비스 기획 / FE Developer(jr)
              </p>
              
              {/* Contact */}
              <div className="mb-2 p-2 bg-navy-700 rounded-lg">
                <h3 className="font-bold mb-1 text-blue-200">Contact</h3>
                <p className="text-white hover:text-blue-200 transition-colors text-sm">
                  Email: leepro@naver.com
                </p>
                <p className="text-white text-sm">Phone: +082-1234-5678</p>
              </div>
              
              {/* Channel */}
              <div className="p-2 bg-navy-700 rounded-lg">
                <h3 className="font-bold mb-1 text-blue-200">Channel</h3>
                <div className="space-y-0.5">
                  <p className="text-white text-sm">SNS: <a href="#" className="text-blue-300 hover:text-blue-200">링크</a></p>
                  <p className="text-white text-sm">GitHub: <a href="#" className="text-blue-300 hover:text-blue-200">링크</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduce with Comments */}
        <div className="bg-navy-800 rounded-lg shadow-xl p-4 border border-navy-700">
          <h2 className="text-lg font-bold mb-2 text-blue-200">Introduce</h2>
          <p className="text-white text-sm mb-3">간단한 자기소개 및 인사말</p>
          
          {/* Comments Section */}
          <div className="border-t border-navy-700 pt-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-purple-200">Comments</h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className="text-xs px-2 py-1 bg-navy-700 text-blue-200 rounded hover:bg-navy-600 transition-colors"
              >
                {showComments ? '댓글 숨기기' : `댓글 보기 (${comments.length})`}
              </button>
            </div>
            
            <div className="mb-2">
              <textarea
                className="w-full p-2 rounded-lg bg-navy-700 text-white border-navy-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
                placeholder="댓글을 입력하세요..."
                rows={2}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button 
                className="mt-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                onClick={handleCommentSubmit}
              >
                댓글 작성
              </button>
            </div>

            {/* Comments List with Animation */}
            <div className={`space-y-2 overflow-hidden transition-all duration-300 ${
              showComments ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {comments.map((comment) => (
                <div key={comment.id} className="bg-navy-700 p-2 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-xs text-blue-200">{comment.username}</p>
                    <span className="text-xs text-gray-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-white text-sm">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Skills */}
        <div className="bg-navy-800 rounded-lg shadow-xl p-4 border border-navy-700">
          <h2 className="text-lg font-bold mb-2 text-blue-200">Tech Skill</h2>
          <div className="flex flex-wrap gap-2">
            {['JS', 'TS', 'React', 'Tailwindcss', 'Premierepro'].map((skill) => (
              <Link 
                href={`/portfolio/${skill.toLowerCase()}`}
                key={skill}
              >
                <span 
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 
                           text-white rounded-full text-xs font-medium shadow-sm
                           hover:from-blue-600 hover:to-purple-600 transition-all
                           cursor-pointer"
                >
                  {skill}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}