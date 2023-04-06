export const fonts = {
  primary: `Monserrat, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif`,
  secondary: `Inter,"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif`,
};

export const typography = {
  head: {
    headline1: `
      font-style: normal;
      font-weight: 300;
      font-size: 6rem;
      line-height: 8rem;
    `,
    headline2: `
      font-style: normal;
      font-weight: 300;
      font-size: 4rem;
      line-height: 5.5rem;
    `,
    headline3: `
      font-style: normal;
      font-weight: 400;
      font-size: 3rem;
      line-height: 4rem;
    `,
    headline4: `
      font-style: normal;
      font-weight: 400;
      font-size: 2.25rem;
      line-height: 3rem;
    `,
    headline5: `
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2rem;
    `,
    headline6: `
      font-style: normal;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.75rem;
    `,
  },
  subtitle: {
    subtitle1: `
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    subtitle2: `
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
  },
  body: {
    body1: `
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    body2: `
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
  },
  button: `
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  `,
  caption: `
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  `,
  overline: `
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1rem;
  `,
};

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.subtitle) {
  typography.subtitle[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.body) {
  typography.body[size] += `
  font-family: ${fonts.primary};
  `;
}
