// eslint-disable-next-line import/no-unresolved
import breakpointsMedia from '../breakPointsMedia';

function propToStyle(propName) {
  // eslint-disable-next-line func-names
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign : props.textAlign
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };

      return breakpointsMedia(breakpoints);

    //   return breakpointsMedia({
    //     xs: {
    //       [propName]: propValue.xs,
    //     },
    //     sm: {
    //       [propName]: propValue.sm,
    //     },
    //     md: {
    //       [propName]: propValue.md,
    //     },
    //     lg: {
    //       [propName]: propValue.lg,
    //     },
    //     xl: {
    //       [propName]: propValue.xl,
    //     },
    //   });
    }
    return this;
  };
}

export default propToStyle;
