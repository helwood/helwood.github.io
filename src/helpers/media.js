/**
 * Another way to do this with tagged template literals:
 * https://github.com/styled-components/styled-components/blob/902e72945712288b05dce3ee6d35e0af70005f1e/packages/styled-components/docs/tips-and-tricks.md#more-powerful-example
 *
 * Use simple interpolation inside a styled component.
 * https://github.com/styled-components/styled-components/issues/2303#issuecomment-480047731
 *
 * @example
 * const Element = styled.div`
 *   width: 200px;
 *
 *   ${breakpoints.up('tablet')} {
 *     width: 300px;
 *   }
 *
 *   ${breakpoints.up('desktop')} {
 *     width: 400px;
 *   }
 * `;
 */
function generateMedia(breakpoints) {
  return {
    up(breakpointName) {
      return `@media screen and (min-width: ${breakpoints[breakpointName]}px)`;
    },
    down(breakpointName) {
      return `@media screen and (max-width: ${
        breakpoints[breakpointName] - 1
      }px)`;
    },
  };
}

export const BREAKPOINTS = {
  desktop: 1224,
  tablet: 768,
};

export const breakpoints = generateMedia(BREAKPOINTS);
