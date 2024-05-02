import styles from "./ProjectListPage.module.css";
import PopularUser from "../components/PopularUser.js";
import Search from "../components/Search.js";
import ProjectSummary from "../components/ProjectSummary.js";
import { useEffect, useState } from "react";
import axios from "../lib/axios.js";
import { Link } from "react-router-dom";

function ProjectListPage() {
  const [projectList, setProjectList] = useState([]);

  const getProjectList = async () => {
    const response = await axios.get("/api/posts");
    setProjectList(response.data.content);
  };
  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <body>
      <div className={styles.projectListPage}>
        {projectList.map((project) => (
          <Link to={`/ProjectInformation/${project.id}`}>
            <p key={project.id}>{project.title}</p>
          </Link>
        ))}

        <h1 className={styles.mainletter}>&#128187; 신규 프로젝트</h1>
        <div className={styles.newProject}>
          <ProjectSummary />
        </div>
        <h1 className={styles.mainletter}>&#128150; 관심 많은 프로젝트</h1>
        <div className={styles.likeProject}>
          <ProjectSummary />
        </div>
        <h1 className={styles.mainletter}>&#128587; 인기있는 사용자</h1>
        <div className={styles.likeUser}>
          <PopularUser />
        </div>
      </div>
      <div>
        <h1 className={styles.mainletter}>검색</h1>
        <Search />
      </div>
    </body>
  );
}

export default ProjectListPage;
