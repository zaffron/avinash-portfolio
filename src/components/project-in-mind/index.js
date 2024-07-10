import React from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';

import { Section } from 'components/style';

import {
  ProjectContainer,
  ProjectData,
  ProjectBackground,
  ProjectButtonIcon,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
  ProjectImg,
} from './style';

export default function ProjectInMind() {
  return (
    <Section>
      <ProjectBackground>
        <ProjectContainer>
          <ProjectData>
            <ProjectTitle>Have a new project in mind?</ProjectTitle>
            <ProjectDescription>Let me know if you like my blogs, works or you want to hire me to build something interesting</ProjectDescription>
            <ProjectButton href="/#contact" alt="Contact me">
              Contact Me
              <ProjectButtonIcon>
                <RiSendPlane2Line />
              </ProjectButtonIcon>
            </ProjectButton>
          </ProjectData>

          <ProjectImg src="/images/project.png" alt="Have a new project to setup" />
        </ProjectContainer>
      </ProjectBackground>
    </Section>
  );
}
