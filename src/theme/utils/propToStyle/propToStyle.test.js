import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when receives a simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');

      const compomentProps = { textAlign: 'center' };
      const styleResult = propToStyleResult(compomentProps);

      expect(styleResult).toEqual(compomentProps);
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');

      const compomentProps = { flex: 1 };
      const styleResult = propToStyleResult(compomentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');

      const compomentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResult(compomentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });

  // eslint-disable-next-line jest/no-identical-title
  describe('when receives an argument with breakpoints', () => {
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');

      const compomentProps = { textAlign: { xs: 'center', md: 'left' } };
      const styleResult = propToStyleResult(compomentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
