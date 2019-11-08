export const sizes = {
  mobile: 767,
  tabletS: 768,
  tabletL: 1366,
  desktop: 1367
}

export const device = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(min-width: ${sizes.tabletS}px) and (max-width: ${sizes.tabletL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};