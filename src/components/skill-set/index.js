import React, { useState } from 'react'

import { HiChevronUp } from 'react-icons/hi'

import {
  SkilSetlWrapper,
  SkilSetHeader,
  SkillSetIcon,
  SkillSetArrow,
  SkillSetTitle,
  SkillSetSubtitle,
  SkillData,
  SkillName,
  SkillBar,
  SkillPercentage,
  SkillTitle,
  SkillNumber,
  SkillList,
} from './style'

export default function SkillSet({ skillSet }) {
  const { icon, title, subtitle, data } = skillSet
  const [isOpen, setIsOpen] = useState(false)

  const showSkillSetData = () => {
    return (
      <SkillList>
        {data.map((skillData, index) => (
          <SkillData key={index}>
            <SkillTitle>
              <SkillName>{skillData.name}</SkillName>
              <SkillNumber>{skillData.number}</SkillNumber>
            </SkillTitle>
            <SkillBar>
              <SkillPercentage width={skillData.number} />
            </SkillBar>
          </SkillData>
        ))}
      </SkillList>
    )
  }

  return (
    <SkilSetlWrapper open={isOpen}>
      <SkilSetHeader onClick={() => setIsOpen(!isOpen)}>
        <SkillSetIcon>{icon}</SkillSetIcon>
        <div>
          <SkillSetTitle>{title}</SkillSetTitle>
          <SkillSetSubtitle>{subtitle}</SkillSetSubtitle>
        </div>
        <SkillSetArrow>
          <HiChevronUp />
        </SkillSetArrow>
      </SkilSetHeader>
      {showSkillSetData()}
    </SkilSetlWrapper>
  )
}
