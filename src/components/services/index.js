import React, { useState } from 'react';
import { BsGpuCard, BsArrowRightShort } from 'react-icons/bs';
import { IoLaptopSharp } from 'react-icons/io5';
import { FaServer } from 'react-icons/fa';
import { TiTimes } from 'react-icons/ti';
import { CgCheckO } from 'react-icons/cg';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';

import {
  ServicesContainer,
  ServiceContent,
  ServiceIcon,
  ServiceTitle,
  ServiceButton,
  ServiceButtonIcon,
  ServiceModal,
  ServiceModalContent,
  ServiceModalTitle,
  ServiceModalServices,
  ServiceModalCloseIcon,
  ServiceModalService,
  ServiceModalIcon,
} from './style';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <IoLaptopSharp />,
      title: (
        <span>
          Frontend
          <br />
          Developer
        </span>
      ),
      data: [
        'Building dynamic and responsive user interfaces',
        'Developing interactive web applications',
        'Creating reusable and efficient components',
        'Enhancing user experience with seamless performance',
      ],
    },
    {
      icon: <FaServer />,
      title: (
        <span>
          Backend
          <br />
          Developer
        </span>
      ),
      data: [
        'REST API development with Nestjs/ExpressJS',
        'GraphQL API development',
        'PHP/Node/Python supported backend development',
        'Automating deployment pipelines (CI/CD)',
      ],
    },
    {
      icon: <BsGpuCard />,
      title: (
        <span>
          ML
          <br />
          Enthusiast
        </span>
      ),
      data: [
        'I like to work on fine tuning models',
        'I like to solve domain problems if possible with automation',
        'Worked on solving auto categorization, text classification and re-ranking algorithms so far',
        'I like to help on data science projects to achieve better results',
      ],
    },
  ];

  const renderContent = (content, key) => {
    const { icon, title } = content;

    return (
      <ServiceContent key={key}>
        <div>
          <ServiceIcon>
            {icon}
            <ServiceTitle>{title}</ServiceTitle>
          </ServiceIcon>
        </div>
        <ServiceButton onClick={() => setSelectedService(content)}>
          View More
          <ServiceButtonIcon>
            <BsArrowRightShort />
          </ServiceButtonIcon>
        </ServiceButton>
      </ServiceContent>
    );
  };

  const renderServiceModal = () => {
    if (selectedService) {
      const { title, data } = selectedService;

      return (
        <ServiceModal open={selectedService !== null}>
          <ServiceModalContent>
            <ServiceModalTitle>{title}</ServiceModalTitle>
            <ServiceModalCloseIcon onClick={() => setSelectedService(null)}>
              <TiTimes />
            </ServiceModalCloseIcon>

            <ServiceModalServices>
              {data.map((datum) => (
                <ServiceModalService key={data}>
                  <ServiceModalIcon>
                    <CgCheckO />
                  </ServiceModalIcon>
                  <p>{datum}</p>
                </ServiceModalService>
              ))}
            </ServiceModalServices>
          </ServiceModalContent>
        </ServiceModal>
      );
    }

    return <ServiceModal />;
  };

  return (
    <Section id="services">
      <SectionTitle>Services</SectionTitle>
      <SectionSubtitle>What I Offer</SectionSubtitle>

      <ServicesContainer>{services.map((service, index) => renderContent(service, index))}</ServicesContainer>
      {renderServiceModal()}
    </Section>
  );
}
