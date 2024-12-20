import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../css/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const startButtonRef = useRef(null);
  const stepCardsRef = useRef([]);
  const ctaButtonRef1 = useRef(null); // 로그인 버튼 ref
  const ctaButtonRef2 = useRef(null); // 다음 버튼 ref
  const fadeInElementsRef = useRef([]);

  useEffect(() => {
    // 애니메이션 순서 설정
    const animateElements = [
      { ref: heroTitleRef, delay: 200 },
      { ref: heroSubtitleRef, delay: 400 },
      { ref: startButtonRef, delay: 600 },
    ];

    animateElements.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add("visible");
        }
      }, delay);
    });

    // CTA 버튼 초기 설정
    if (ctaButtonRef1.current) {
      ctaButtonRef1.current.style.visibility = "visible";
      ctaButtonRef1.current.style.opacity = "1";
    }

    // 다음 버튼 요소 스타일 제어
    if (ctaButtonRef2.current) {
      ctaButtonRef2.current.style.visibility = "visible";

      ctaButtonRef2.current.style.opacity = "1";
    }

    // 스크롤 핸들러
    const handleScroll = () => {
      fadeInElementsRef.current.forEach((element) => {
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          if (elementPosition < window.innerHeight - 100) {
            element.classList.add("visible");
          }
        }
      });

      stepCardsRef.current.forEach((card) => {
        if (card) {
          const cardPosition = card.getBoundingClientRect().top;
          if (cardPosition < window.innerHeight - 100) {
            card.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 호출

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNextPage = () => {
    navigate("/job-or-major"); // /job-or-major 경로로 이동
  };

  const handleLoginBtnClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="landing">
        {/* Hero Section */}
        <div
          className="hero-section fade-in"
          ref={(el) => fadeInElementsRef.current.push(el)}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="hero-title" ref={heroTitleRef}>
              AI가 제시하는 <span className="highlight">맞춤형 길잡이</span>
            </h2>
            <p className="hero-subtitle" ref={heroSubtitleRef}>
              전공 커리큘럼부터 진로 계획까지, <br /> 당신만의 특별한 여정을
              AI와 함께 설계하세요
            </p>
            <div className="button-container">
              <button
                className="button large"
                ref={startButtonRef}
                onClick={handleNextPage}
              >
                시작하기
              </button>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div
          className="features-container fade-in"
          ref={(el) => fadeInElementsRef.current.push(el)}
        >
          <div
            className="card fade-in"
            ref={(el) => fadeInElementsRef.current.push(el)}
          >
            <div className="card-content">
              <div className="icon-container">
                <div className="icon">📖</div>
              </div>
              <h3 className="card-title">전공 로드맵</h3>
              <ul className="card-description">
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  관심 키워드 기반 학과 커리큘럼 설계
                </li>
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  복수전공/부전공 연계 추천
                </li>
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  학기별 최적화된 과목 조합 제안
                </li>
              </ul>
            </div>
          </div>

          <div
            className="card fade-in"
            ref={(el) => fadeInElementsRef.current.push(el)}
          >
            <div className="card-content">
              <div className="icon-container">
                <div className="icon">🎯</div>
              </div>
              <h3 className="card-title">진로 로드맵</h3>
              <ul className="card-description">
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  희망 진로별 맞춤형 역량 개발 가이드
                </li>
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  산업 트렌드 기반 커리어 방향 제시
                </li>
                <li
                  className="feature-item fade-in"
                  ref={(el) => fadeInElementsRef.current.push(el)}
                >
                  <div className="icon">➡️</div>
                  단계별 목표 설정 및 실행 계획 수립
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div
          className="text-center how-it-works fade-in"
          ref={(el) => fadeInElementsRef.current.push(el)}
        >
          <h3 className="section-title text-center">AI 기반 맞춤형 가이드</h3>
          <div className="steps-container vertical">
            <div
              className="step-card fade-in"
              ref={(el) => {
                stepCardsRef.current[0] = el;
                fadeInElementsRef.current.push(el);
              }}
            >
              <div className="icon-container">
                <span className="step-number">01</span>
              </div>
              <h4 className="step-title">키워드 선택</h4>
              <p className="step-description">
                관심 분야와 목표를 선택하여 <br /> 맞춤형 분석을 시작합니다
              </p>
            </div>

            <div
              className="step-card fade-in"
              ref={(el) => {
                stepCardsRef.current[1] = el;
                fadeInElementsRef.current.push(el);
              }}
            >
              <div className="icon-container">
                <span className="step-number">02</span>
              </div>
              <h4 className="step-title">AI 분석</h4>
              <p className="step-description">
                AI가 최적의 학습 경로와 <br /> 진로 방향을 분석합니다
              </p>
            </div>

            <div
              className="step-card fade-in"
              ref={(el) => {
                stepCardsRef.current[2] = el;
                fadeInElementsRef.current.push(el);
              }}
            >
              <div className="icon-container">
                <span className="step-number">03</span>
              </div>
              <h4 className="step-title">맞춤형 플랜</h4>
              <p className="step-description">
                상세한 학습 계획과 <br /> 진로 로드맵을 제공받습니다
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="call-to-action fade-in"
          ref={(el) => fadeInElementsRef.current.push(el)}
        >
          <h3 className="section-title">나만의 길을 찾아보세요</h3>
          <p className="cta-description">
            AI와 함께 더 명확한 미래를 설계하세요
          </p>
          <div className="button-container">
            <button
              className="button large"
              ref={ctaButtonRef1}
              onClick={handleLoginBtnClick}
            >
              로그인하고 시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
