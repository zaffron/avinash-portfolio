import React from 'react'
import { RiDownloadCloud2Line } from 'react-icons/ri'

import { Section, SectionTitle, SectionSubtitle, Button } from 'components/style'

import {
  AboutContainer,
  AboutImage,
  AboutDescription,
  AboutInfo,
  AboutInfoTitle,
  AboutInfoTitleName,
  AboutInfoButtonIcon,
  AboutInfoLink,
  AboutInfoButtons,
} from './style'

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>My Introduction</SectionSubtitle>
      <AboutContainer>
        <AboutImage src="/me-secondary.jpeg" alt="Me reading" />
        <AboutDescription>
          Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux
          design, delivering quality work.
        </AboutDescription>
        <AboutInfo>
          <div>
            <AboutInfoTitle>08+</AboutInfoTitle>
            <AboutInfoTitleName>
              Years <br /> Experience
            </AboutInfoTitleName>
          </div>
          <div>
            <AboutInfoTitle>20+</AboutInfoTitle>
            <AboutInfoTitleName>
              Completed <br /> Projects
            </AboutInfoTitleName>
          </div>
          <div>
            <AboutInfoTitle>05+</AboutInfoTitle>
            <AboutInfoTitleName>
              Companies <br /> Worked
            </AboutInfoTitleName>
          </div>
        </AboutInfo>

        <AboutInfoButtons>
          <AboutInfoLink download href="assets/pdf/cv.pdf">
            <Button variant="flex">
              Download CV
              <AboutInfoButtonIcon>
                <RiDownloadCloud2Line />
              </AboutInfoButtonIcon>
            </Button>
          </AboutInfoLink>
        </AboutInfoButtons>
      </AboutContainer>
    </Section>
  )
}
