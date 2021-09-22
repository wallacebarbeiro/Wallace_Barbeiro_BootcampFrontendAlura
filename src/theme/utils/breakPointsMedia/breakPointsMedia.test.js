import breakpointsMedia from './index';

describe('breakpointsMedia()', () => {
  describe('when receives a argument', () => {
    test('and it has a only one breakpoint', () => {
      const breakpointsMediaResult = breakpointsMedia({ xs: { textAlign: 'center' } });
      expect(breakpointsMediaResult).toMatchSnapshot();
    });
  });

  // eslint-disable-next-line jest/no-identical-title
  describe('when receives a argument', () => {
    test('and it has two or more breakpoints', () => {
      const breakpointsMediaResult = breakpointsMedia({ xs: { textAlign: 'center' }, md: { textAlign: 'left' } });
      expect(breakpointsMediaResult).toMatchSnapshot();
    });
  });
});
