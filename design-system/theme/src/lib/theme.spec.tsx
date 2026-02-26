import { render } from '@testing-library/react';

import OrgTheme from './theme';

describe('OrgTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgTheme />);
    expect(baseElement).toBeTruthy();
  });
});
