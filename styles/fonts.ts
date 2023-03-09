import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const geliatFont = localFont({
  src: [
    { path: '../public/fonts/geliat-alt/Geliat-AltBlack.woff', weight: '900' },
    { path: '../public/fonts/geliat-alt/Geliat-AltBlack.woff2', weight: '900' },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltBlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltBlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    { path: '../public/fonts/geliat-alt/Geliat-AltBold.woff', weight: '800' },
    { path: '../public/fonts/geliat-alt/Geliat-AltBold.woff2', weight: '800' },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltBoldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    { path: '../public/fonts/geliat-alt/Geliat-AltMedium.woff', weight: '500' },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltMedium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltMediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltMediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltRegular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltRegular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltSemiBold.woff',
      weight: '600',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltSemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltSemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/geliat-alt/Geliat-AltSemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})

export const bluuNextFont = localFont({
  src: [
    {
      path: '../public/fonts/bluu-next/bluunext-bold-webfont.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/bluu-next/bluunext-bold-webfont.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/bluu-next/bluunext-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-heading',
})

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})
