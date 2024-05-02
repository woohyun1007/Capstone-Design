import styles from "./HomePage.module.css";
import jsondata from "../api/mock.json";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProjectSummaryHome from "../components/ProjectSummaryHome.js";

function HomePage() {
  const [currentHomeImageId, setCurrentHomeImageId] = useState(1);
  //홈화면 이미지 데이터 가져오기
  const data = jsondata;
  const hI = data.homeImages;

  //왼쪽 버튼 클릭 함수
  const handleLeft = () => {
    if (currentHomeImageId > 1) {
      setCurrentHomeImageId(currentHomeImageId - 1);
    }
  };
  //오른쪽 버튼 클릭 함수
  const handleRight = () => {
    if (currentHomeImageId < hI.length) {
      setCurrentHomeImageId(currentHomeImageId + 1);
    }
  };

  //일치하는 imageId 찾아 변수에 할당
  const currentImage = hI.find((img) => img.imageId === currentHomeImageId);

  const ArrowIconStyle = {
    cursor: "pointer", // 마우스 커서를 포인터로 변경
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeHeaderDiv}>
          <header className={styles.homeHeader}>
            <ArrowBackIosNewIcon
              className={styles.arrowIcon}
              onClick={handleLeft}
              style={ArrowIconStyle}
            />
            <img
              alt="homeImg"
              src={require(`../assets/${currentImage.image}`)}
            />
            <ArrowForwardIosIcon
              className={styles.arrowIcon}
              onClick={handleRight}
              style={ArrowIconStyle}
            />
          </header>
        </div>

        <main className={styles.main}>
          <h3>현재 구인중인 프로젝트들</h3>
          <div className={styles.projectSummary}>
            <ProjectSummaryHome />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
