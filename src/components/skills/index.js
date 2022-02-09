import React from 'react';
import { BiCodeCurly, BiServer } from 'react-icons/bi';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiAzuredevops } from 'react-icons/si';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';
import SkillSet from 'components/skill-set';

import { SkillsContainer } from './style';

export default function Skills() {
  const totalYearsWorked = 4;

  const skillSets = [
    {
      id: 1,
      icon: <BiCodeCurly />,
      title: 'Frontend Developer',
      subtitle: `More than ${totalYearsWorked} years`,
      data: [
        {
          name: 'HTML / CSS / SCSS / LESS',
          year: totalYearsWorked,
        },
        {
          name: 'JS / React / VueJS',
          year: totalYearsWorked - 1,
        },
        {
          name: 'Gatsby / NextJS / Jekyll / Netlify',
          year: totalYearsWorked - 2,
        },
      ],
    },
    {
      id: 2,
      icon: <AiOutlineAntDesign />,
      title: 'Designer',
      subtitle: `More than ${totalYearsWorked/2} years`,
      data: [
        {
          name: 'Figma',
          year: totalYearsWorked / 2,
        },
        {
          name: 'Photoshop',
          year: totalYearsWorked / 2,
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
          name: 'PHP / Laravel / MySQL',
          year: 2,
        },
        {
          name: 'NodeJS / Mongoose / Postgres',
          year: 2,
        },
        {
          name: 'Firebase / Socket.io',
          year: 1,
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
          year: 2,
        },
        {
          name: 'Docker',
          year: 2,
        },
        {
          name: 'Ansible',
          year: 1,
        },
        {
          name: 'Terraform',
          year: 1,
        },
      ],
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My Technical Level</SectionSubtitle>
      <SkillsContainer>
        {skillSets.map((skillSet) => (
          <SkillSet key={skillSet.id} skillSet={skillSet} />
        ))}
      </SkillsContainer>
    </Section>
  );
}
