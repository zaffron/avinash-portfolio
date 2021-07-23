import React, { useState } from 'react'
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi'
import { BiCalendar } from 'react-icons/bi'

import { Container, Section, SectionTitle, SectionSubtitle } from 'components/style'

import {
  QualificationTabs,
  QualificationButton,
  QualificationIcon,
  QualificationSections,
  QualificationContent,
  QualificationData,
  QualificationTitle,
  QualificationSubtitle,
  QualificationCalendar,
  QualificationRounder,
  QualificationLine,
} from './style'

export default function Qualifications() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const educationQualifications = [
    {
      title: 'Commerce',
      subtitle: 'Nepal - SPA Academy',
      time: '2013-2015',
      last: false,
    },
    {
      title: 'BCA',
      subtitle: 'India - Bangalore University',
      time: '2015-2018',
      last: true,
    },
  ]

  const workQualifications = [
    {
      title: 'Intern - Junior Dev',
      subtitle: 'Nepal - Subkura',
      time: '2018 - Jan/Aug',
      last: false,
    },
    {
      title: 'Developer',
      subtitle: 'Nepal - Studytweaks',
      time: '2018 - Present',
      last: false,
    },
    {
      title: 'Software Developer - II',
      subtitle: 'Nepal - DzangoTech',
      time: '2018 - Present',
      last: true,
    },
  ]

  const renderQualificationContent = (qualificationContent, key) => {
    const { title, subtitle, time, last } = qualificationContent
    const even = key % 2 !== 0

    return (
      <QualificationData key={key}>
        {even && (
          <>
            <div></div>
            <div>
              <QualificationRounder />
              {!last && <QualificationLine />}
            </div>
          </>
        )}
        <div>
          <QualificationTitle>{title}</QualificationTitle>
          <QualificationSubtitle>{subtitle}</QualificationSubtitle>
          <QualificationCalendar>
            <BiCalendar />
            <span>{time}</span>
          </QualificationCalendar>
        </div>
        {!even && (
          <div>
            <QualificationRounder />
            {!last && <QualificationLine />}
          </div>
        )}
      </QualificationData>
    )
  }

  return (
    <Section id="qualifications">
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubtitle>My personal journey</SectionSubtitle>
      <Container>
        <QualificationTabs>
          <QualificationButton onClick={() => setActiveTabIndex(0)} active={activeTabIndex === 0}>
            <QualificationIcon>
              <HiOutlineAcademicCap />
            </QualificationIcon>
            Education
          </QualificationButton>
          <QualificationButton onClick={() => setActiveTabIndex(1)} active={activeTabIndex === 1}>
            <QualificationIcon>
              <HiOutlineBriefcase />
            </QualificationIcon>
            Work
          </QualificationButton>
        </QualificationTabs>

        <QualificationSections>
          <QualificationContent active={activeTabIndex === 0} id="education">
            {educationQualifications.map((data, index) => renderQualificationContent(data, index))}
          </QualificationContent>
          <QualificationContent active={activeTabIndex === 1} id="work">
            {workQualifications.map((data, index) => renderQualificationContent(data, index))}
          </QualificationContent>
        </QualificationSections>
      </Container>
    </Section>
  )
}
