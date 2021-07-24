import React, { useState } from 'react';
import { BsGrid1X2Fill, BsArrowRightShort } from 'react-icons/bs';
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
      icon: <BsGrid1X2Fill />,
      title: (
        <span>
          UI/UX
          <br />
          Designeer
        </span>
      ),
      data: [
        'I design the user interface',
        'Web page design',
        'I design interactive UX elements',
        'I position your company brand',
      ],
    },
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
        'I develop the user interface',
        'Web page development',
        'Interactive web page development',
        'Reactive components development',
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
        'REST API development',
        'GraphQL API development',
        'PHP/Node supported backend development',
        'Moder event driven services',
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
