import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Swiper from 'react-id-swiper';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Section, SectionTitle, SectionSubtitle } from 'components/style';

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
  PortfolioContentWrapper,
} from './style';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination]);

export default function Portfolio() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: false,
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
      720: {
         slidesPerView: 2
      },
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
    spaceBetween: 10,
  };
  const {
    allFeaturedWorksJson: { edges: featuredWorks },
  } = useStaticQuery(
    graphql`
      {
        allFeaturedWorksJson {
          edges {
            node {
              id
              name
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                  )
                }
              }
              description
            }
          }
        }
      }
    `
  );

  return (
    <Section id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>

      <PortfolioContainer>
        <Swiper {...params}>
          {featuredWorks.map((work) => {
            const image = getImage(work.node.image)

            return (
              <PortfolioContentWrapper key={work.node.name}>
                <PortfolioContent key={work.node.name}>
                  <PortfolioImage>
                    <GatsbyImage image={image} alt={work.node.name} />
                  </PortfolioImage>
                  <PortfolioData>
                    <PortfolioTitle>{work.node.name}</PortfolioTitle>
                    <PortfolioDescription>{work.node.description}</PortfolioDescription>
                    {work.node.url && (
                      <PortfolioButton href={work.node.url} alt={work.node.name}>
                        Preview{' '}
                        <PortfolioButtonIcon>
                          <BsArrowRightShort />
                        </PortfolioButtonIcon>
                      </PortfolioButton>
                    )}
                  </PortfolioData>
                </PortfolioContent>
              </PortfolioContentWrapper>
            )
          })}
        </Swiper>
      </PortfolioContainer>
    </Section>
  );
}
