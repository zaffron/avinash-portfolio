import React from 'react';
import { BiCodeCurly, BiServer } from 'react-icons/bi';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiAzuredevops } from 'react-icons/si';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';
import SkillSet from 'components/skill-set';

import { SkillsContainer } from './style';

export default function Skills() {
  const skillSets = [
    {
      id: 1,
      icon: <BiCodeCurly />,
      title: 'Frontend Developer',
      subtitle: 'More than 4 years',
      data: [
        {
          name: 'HTML',
          number: '90%',
        },
        {
          name: 'CSS',
          number: '80%',
        },
        {
          name: 'JavaScript',
          number: '80%',
        },
        {
          name: 'React',
          number: '90%',
        },
      ],
    },
    {
      id: 2,
      icon: <AiOutlineAntDesign />,
      title: 'Designer',
      subtitle: 'More than 4 years',
      data: [
        {
          name: 'Figma',
          number: '90%',
        },
        {
          name: 'Sketch',
          number: '80%',
        },
        {
          name: 'Photoshop',
          number: '80%',
        },
        {
          name: 'Illustrator',
          number: '50%',
        },
      ],
    },
    {
      id: 3,
      icon: <BiServer />,
      title: 'Backend Developer',
      subtitle: 'More than 3 years',
      data: [
        {
          name: 'PHP',
          number: '90%',
        },
        {
          name: 'NodeJS',
          number: '80%',
        },
        {
          name: 'Laravel',
          number: '80%',
        },
        {
          name: 'Firebase',
          number: '90%',
        },
      ],
    },
    {
      id: 4,
      icon: <SiAzuredevops />,
      title: 'DevOps Enginner',
      subtitle: 'More than 3 years',
      data: [
        {
          name: 'CI/CD',
          number: '90%',
        },
        {
          name: 'Docker',
          number: '80%',
        },
        {
          name: 'Ansible',
          number: '80%',
        },
        {
          name: 'Terraform',
          number: '90%',
        },
      ],
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My technical level</SectionSubtitle>
      <SkillsContainer>
        {skillSets.map((skillSet) => (
          <SkillSet key={skillSet.id} skillSet={skillSet} />
        ))}
      </SkillsContainer>
    </Section>
  );
}
