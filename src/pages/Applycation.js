import React from "react";
import axios from "../lib/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./Applycation.module.css";

const Applycation = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [project, setProject] = useState({});

  const [applyInfo, setApplyInfo] = useState({
    category: "PROJECT",
    content: "",
    fieldCategory: "BACKEND",
  });

  //비구조화 할당으로 applyInfo가 바로 값을 분해해 변수에 할당함
  const { category, content } = applyInfo;

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져옴
    setApplyInfo({
      ...applyInfo,
      [name]: value,
    });
  };

  //지원서 취소하기
  const cancel = async () => {
    if (window.confirm("작업을 그만 두시겠습니까?")) {
      navigate(`/ProjectInformation/${idx}`);
    }
  };
  //지원서 작성하기
  const complete = async () => {
    if (window.confirm("지원서를 보내시겠습니까?")) {
      await axios.post(`/api/applies/apply/${idx}`, applyInfo).then((res) => {
        alert("전송되었습니다.");
        navigate(`/ProjectInformation/${idx}`);
      });
    }
  };

  return (
    <>
      <div className={styles.Applycation}>
        <h1 className={styles.header}>지원서 작성하기</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          name="content"
          cols="100"
          rows="50"
          value={content}
          onChange={onChange}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={complete} className={styles.btn}>
          확인
        </button>
        <button onClick={cancel} className={styles.btn}>
          취소
        </button>
      </div>
    </>
  );
};

export default Applycation;
