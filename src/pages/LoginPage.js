import { useState } from "react";
import axios from "../lib/axios";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import HorizonLine from "../components/HorizontalLine";
import { AltRoute } from "@mui/icons-material";

function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;

    try {
      const response = await axios.post("/member/login", { email, password });
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;

      //로컬 스토리지에 토큰 저장
      localStorage.setItem("accssToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      //로그인 후 마이페이지로 이동
      // navigate("/MyPage");
      alert("로그인 성공");
    } catch (error) {
      alert("로그인 실패");
    }
  }

  const handleKakaoLoginClick = () => {
    window.location.href = "http://localhost:8080/oauth/kakao"; //페이지 리다이렉트
  };

  return (
    <>
      <div className={styles.loginPage}>
        <h1 className={styles.header}>로그인 &#128274;</h1>
        <section className={styles.formLogin}>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일"
              value={values.email}
              onChange={handleChange}
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={values.password}
              onChange={handleChange}
            />
            <button type="submit">로그인</button>
          </form>
        </section>
        <section className={styles.simpleLogin}>
          <HorizonLine text="간편 로그인" />
          <img
            alt="loginImg"
            src={require(`../assets/kakaoLoginButton.png`)}
            onClick={handleKakaoLoginClick}
          />
          <img alt="loginImg" src={require(`../assets/naverLoginButton.png`)} />
        </section>
      </div>
    </>
  );
}

export default LoginPage;
