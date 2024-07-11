import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';
import ContactForm from '../contact-form';

import {
  ContactContainer,
  ContactInformationWrapper,
  ContactInformation,
  ContactInformationIcon,
  ContactInformationTitle,
  ContactInformationSubtitle,
} from './style';

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionSubtitle>Get in touch</SectionSubtitle>

      <ContactContainer>
        <ContactInformationWrapper>
          <ContactInformation>
            <ContactInformationIcon>
              <FiPhone />
            </ContactInformationIcon>
            <div>
              <ContactInformationTitle>Call Me</ContactInformationTitle>
              <ContactInformationSubtitle>+66-916667535</ContactInformationSubtitle>
            </div>
          </ContactInformation>

          <ContactInformation>
            <ContactInformationIcon>
              <HiOutlineMail />
            </ContactInformationIcon>
            <div>
              <ContactInformationTitle>Email</ContactInformationTitle>
              <ContactInformationSubtitle>avinashrijal@gmail.com</ContactInformationSubtitle>
            </div>
          </ContactInformation>

          <ContactInformation>
            <ContactInformationIcon>
              <GoLocation />
            </ContactInformationIcon>
            <div>
              <ContactInformationTitle>Location</ContactInformationTitle>
              <ContactInformationSubtitle>Bangkok, Thailand</ContactInformationSubtitle>
            </div>
          </ContactInformation>
        </ContactInformationWrapper>
        <ContactForm />
      </ContactContainer>
    </Section>
  );
}
