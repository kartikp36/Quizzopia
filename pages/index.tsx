import Image from 'next/image'
import LogoImg from '../assets/quizzopia-logo.png'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between p-2`}
    >
       <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-auto h-36"
          src={LogoImg}
          alt="Quizzopia Logo"
          priority
        />
      <div className="relative flex place-items-center">
        <Link href='/quiz'>
          <Button text='Start Quiz'/>
        </Link>
      </div>
    </main>
  )
}
