import React from 'react';
import { BiCodeCurly, BiServer } from 'react-icons/bi';
import { BsGpuCard } from 'react-icons/bs';
import { SiAzuredevops } from 'react-icons/si';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';
import SkillSet from 'components/skill-set';

import { SkillsContainer } from './style';

export default function Skills() {
  const totalYearsWorked = 6;

  const skillSets = [
    {
      id: 1,
      icon: <BiCodeCurly />,
      title: 'Frontend Developer',
      subtitle: `More than ${totalYearsWorked} years`,
      data: [
        {
          name: 'HTML / CSS / SCSS / LESS',
          year: 4,
        },
        {
          name: 'JS / React / VueJS',
          year: 4,
        },
        {
          name: 'Gatsby / NextJS / Netlify',
          year: 2,
        },
      ],
    },
    {
      id: 2,
      icon: <BsGpuCard />,
      title: 'ML Engineer',
      subtitle: `Around ${totalYearsWorked / 6} years`,
      data: [
        {
          name: 'Auto categorization',
          year: 1,
        },
        {
          name: 'Re-ranking',
          year: 1,
        },
        {
          name: 'Content Generation',
          year: 1,
        },
      ],
    },
    {
      id: 3,
      icon: <BiServer />,
      title: 'Backend Developer',
      subtitle: 'More than 5 years',
      data: [
        {
          name: 'PHP / Laravel / MySQL',
          year: 2,
        },
        {
          name: 'NodeJS / NestJS',
          year: 4,
        },
        {
          name: 'Mongoose / Postgres',
          year: 4,
        },
        {
          name: 'Firebase / Socket.io',
          year: 1,
        },
        {
          name: 'AWS',
          year: 2,
        },
        {
          name: 'Python',
          year: 2,
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
          year: 3,
        },
        {
          name: 'Docker',
          year: 4,
        },
        {
          name: 'Ansible/Terraform',
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
