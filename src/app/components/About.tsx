export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                안녕하세요! 저는 3년차 프론트엔드 개발자입니다.
                React와 Next.js를 주로 사용하여 웹 애플리케이션을 개발하고 있습니다.
              </p>
              <p className="text-gray-600">
                사용자 중심의 인터페이스 설계와 성능 최적화에 관심이 많으며,
                새로운 기술을 배우고 적용하는 것을 즐깁니다.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold mb-4">주요 정보</h3>
              <ul className="space-y-2">
                <li>📍 위치: 서울</li>
                <li>📧 이메일: example@email.com</li>
                <li>🎓 학력: OO대학교 컴퓨터공학과</li>
                <li>💼 현재 직장: OO회사</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }