import { Bebas_Neue, Sora } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

export const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
