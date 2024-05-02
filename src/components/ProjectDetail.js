import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";
import Project from "../pages/Project";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const { idx } = useParams();

  const getProject = async () => {
    const response = await axios.get(`/api/posts/${idx}`);
    setProject(response.data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      <Project title={project.title} content={project.content} />
    </div>
  );
}

export default ProjectDetail;
