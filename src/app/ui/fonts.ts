/**
 * Offline-safe font stubs matching the shape of next/font exports.
 * Prevents build failures when Google Fonts are unreachable.
 */

type FontStub = { className: string; variable: string };

const makeFont = (name: string): FontStub => ({
  className: `font-${name}`,
  variable: `--font-${name}`,
});

export const nunito = makeFont('nunito');
export const josefin = makeFont('josefin');
export const poppins = makeFont('poppins');
export const bristol = makeFont('bristol');
export const caveat = makeFont('caveat');
export const gamja = makeFont('gamja');
export const reenie_beanie = makeFont('reenie-beanie');
export const crafty_girls = makeFont('crafty-girls');
