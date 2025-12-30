import React from "react";
import ProjectList from "@/components/project/ProjectList";
import UpcomingProject from "@/components/project/UpcomingProject";
import ContentHeader from "@/components/common/ContentHeader";
import projects from "@/data/projects";
import { UPCOMING_DATA } from "@/data/upcomingProjects";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <Container className="py-16 space-y-8">
      <ContentHeader
        heading="Projects"
        subHeading="My projects and work across various technologies and domains, exploring innovative solutions and practical applications."
        size="lg"
      />
      <ProjectList projects={projects} showAll />

      <UpcomingProject projects={UPCOMING_DATA} />
    </Container>
  );
};

export default page;
