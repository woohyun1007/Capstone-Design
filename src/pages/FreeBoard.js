import styles from "./FreeBoard.module.css";
import BoardSearch from "../components/BoardSearch.js";

function FreeBoard() {
  return (
    <body>
      <div className={styles.FreeBoard}>
        <h1 className={styles.header}>자유게시판</h1>
      </div>
      <div style={{display: "flex", flexDirection: "row", position: "relative"}}>
        <h2>번호</h2>
        <h2>제목</h2>
        <h2>작성자</h2>
        <h2>작성일</h2>
        <h2>조회수</h2>
      </div>
    </body>
  );
}

export default FreeBoard;