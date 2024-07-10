import styled from 'styled-components';

import { Container } from 'components/style';

export const PortfolioContainer = styled(Container)`
  overflow: initial;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }

  .swiper-button-prev {
    left: -0.1rem;
  }

  .swiper-button-next {
    right: -0.1rem;
  }

  .swiper-pagination-bullet-active {
    border-color: var(--first-color);
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    outline: none;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -8px;
  }
`;

export const PortfolioContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 250px;
  height: 500px;
`

export const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const PortfolioImage = styled.div`
  border-radius: 0.5rem;
  justify-content: center;
  width: 100%;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  .gatsby-image-wrapper {
    display: flex;
    justify-content: center;
    height: 200px;
    width: 100%;
    img {
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const PortfolioData = styled.div`
  height: 300px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PortfolioTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin: 0;
  margin-bottom: var(--mb-0-5);
  text-align: center;
`;

export const PortfolioDescription = styled.p`
  margin: 0;
  margin-bottom: var(--mb-0-75);
  text-align: center;
`;

export const SwiperPortfolioIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const PortfolioButtonIcon = styled.div`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
  display: flex;
  align-items: center;
`;

export const PortfolioButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  &:hover {
    background-color: var(--first-color-alt);
    ${PortfolioButtonIcon} {
      transform: translateX(0.25rem);
    }
  }
`;
