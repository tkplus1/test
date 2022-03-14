import { css } from '@emotion/css';

const color = 'darkgreen'

function CardCustom() {
    return(
  <div
    className={css`
      background-color: black;
      &:hover {
        color: ${color};
      }
    `}
  >
    This has a hotpink background.
  </div>
)
    }

export default CardCustom;