import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Swiper from 'react-id-swiper'
import { BsArrowRightShort } from 'react-icons/bs'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import { Section, SectionTitle, SectionSubtitle } from 'components/style'

import {
  PortfolioContainer,
  PortfolioContent,
  PortfolioImage,
  PortfolioData,
  PortfolioTitle,
  PortfolioButtonIcon,
  PortfolioDescription,
  SwiperPortfolioIcon,
  PortfolioButton,
} from './style'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination])

export default function Portfolio() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => (
      <div className="swiper-button-prev">
        <SwiperPortfolioIcon>
          <BiChevronLeft />
        </SwiperPortfolioIcon>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-button-next">
        <SwiperPortfolioIcon>
          <BiChevronRight />
        </SwiperPortfolioIcon>
      </div>
    ),
    spaceBetween: 30,
  }

  const recentWorks = [
    {
      id: 1,
      image: '/images/portfolio1.jpg',
      title: 'Modern Website',
      description: 'Website adaptable to all devices, with ui components and animated interactions',
      previewLink: 'https://google.com',
    },
    {
      id: 2,
      image: '/images/portfolio2.jpg',
      title: 'Brand Website',
      description: 'Website adaptable to all devices, with ui components and animated interactions',
    },
    {
      id: 3,
      image: '/images/portfolio3.jpg',
      title: 'Test Website',
      description: 'Website adaptable to all devices, with ui components and animated interactions',
    },
  ]
  return (
    <Section id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>

      <PortfolioContainer>
        <Swiper {...params}>
          {recentWorks.map(work => (
            <PortfolioContent key={work.id}>
              <PortfolioImage src={work.image} />
              <PortfolioData>
                <PortfolioTitle>{work.title}</PortfolioTitle>
                <PortfolioDescription>{work.description}</PortfolioDescription>
                {work.previewLink && (
                  <PortfolioButton href={work.previewLink} alt={work.title}>
                    Preview{' '}
                    <PortfolioButtonIcon>
                      <BsArrowRightShort />
                    </PortfolioButtonIcon>
                  </PortfolioButton>
                )}
              </PortfolioData>
            </PortfolioContent>
          ))}
        </Swiper>
      </PortfolioContainer>
    </Section>
  )
}
