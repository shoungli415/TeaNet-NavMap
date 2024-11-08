import React, { useState, useEffect, useRef } from "react";

import "../css/LoginPage.css";

const LoginPage = () => {
  const stepCardsRef = useRef([]);
  const fadeInElementsRef = useRef([]);
  const loginCardRef = useRef(null); // 로그인 카드에 대한 ref 추가

  useEffect(() => {
    // 스크롤 핸들러
    const handleScroll = () => {
      if (loginCardRef.current) {
        const cardPosition = loginCardRef.current.getBoundingClientRect().top;
        if (cardPosition < window.innerHeight - 100) {
          loginCardRef.current.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 호출

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    saveId: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-card" ref={loginCardRef}>
        {" "}
        {/* ref 추가 */}
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="input"
              placeholder="ID"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              placeholder="PASSWORD"
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="saveId"
              checked={formData.saveId}
              onChange={handleChange}
              className="checkbox"
            />
            <label className="checkbox-label">아이디 저장</label>
          </div>

          <button type="submit" className="login-button">
            로그인
          </button>

          <div className="links">
            <button type="button" className="link">
              비밀번호 찾기
            </button>
            <div className="link-group">
              <button type="button" className="link">
                개인번호 조회
              </button>
              <button type="button" className="link">
                비밀번호 초기 등록
              </button>
            </div>
            <button type="button" className="link">
              계정정보 처리방침
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;