import styled from "styled-components";

export const RatingContainer = styled.div`
  width: 4rem;

  .progressCircularBar {
    position: relative;
    height: 4rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
    overflow: hidden;
    .progressCircle {
      transform: rotate(-90deg);
      position: absolute;
      height: 100%;
      width: 100%;
      .progressCircleBack {
        stroke: currentColor;
        stroke-width: 10;
        color: #f5f5f5;
      }

      .progressCircleFront {
        stroke: currentColor;
        stroke-width: 12;
        color: #1fd789;
        transition: stroke-dasharray 1.2s ease;
      }
    }

    .rating {
      font-weight: 600;
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .name {
    display: flex;
    justify-content: center;
    font-size: 0.875rem;
    color: #000;
  }
`;
