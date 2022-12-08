import styled from 'styled-components';

export const AccountListBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 10rem);
  margin: 5.4rem auto 0;
  overflow: hidden;

  ul {
    li {
      position: relative;
      overflow: hidden;

      & + li {
        border-top: 1px solid rgb(244, 244, 244);
      }

      &.active {
        dl {
          padding-right: 2rem;
          transform: translate3d(-14rem, 0, 0);
        }
      }
    }
  }

  dl {
    display: flex;
    position: relative;
    z-index: 5;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.4rem;
    transition-duration: 0.3s;
    transform: translate3d(0, 0, 0);
    background-color: #fff;

    strong {
      margin-left: 1.5rem;
    }

    dd {
      margin-left: auto;
    }

    & + div {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 14rem;

      button {
        width: 7rem;
        height: 100%;
        font-size: 1.4rem;
        color: #333;
        background-color: #eeeeee;

        & + button {
          color: #fff;
          background-color: #ff0038;
        }
      }
    }
  }
`;
