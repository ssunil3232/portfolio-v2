import { Caveat, Crafty_Girls, Gamja_Flower, Josefin_Sans, Nunito, Poppins, Reenie_Beanie } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '700']
});

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['300', '700']
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '700']
});

export const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
  weight: ['400', '700']
});

export const gamja = Gamja_Flower({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gamja',
  weight: ['400']
});

export const reenie_beanie = Reenie_Beanie({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-reenie-beanie',
  weight: ['400']
});

export const crafty_girls = Crafty_Girls({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crafty-girls',
  weight: ['400']
});