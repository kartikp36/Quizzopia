import Image from 'next/image';
import LogoImg from '../assets/quizzopia-logo.png';
import { Inter } from 'next/font/google';
import Button from '@/components/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-2'>
      <Image
        className='relative w-auto h-36'
        src={LogoImg}
        alt='Quizzopia Logo'
        priority
      />
      <div className='relative flex flex-col items-center justify-center text-center'>
        <p className='text-gray-800 font-bold text-3xl mb-4'>
          Welcome to <span className='text-[#63B69C]'>Quizzopia</span>
        </p>
        <p className='text-gray-600 text-lg mb-8'>A quick quiz app!</p>
        <Link href='/quiz'>
          <button className='transition ease-in-out delay-150 bg-[#63B69C] hover:-translate-y-1 hover:scale-110 hover:bg-[#76B69C] duration-300  text-white font-bold py-2 px-4 rounded'>
            Start Quiz

          </button>
        </Link>
      </div>
    </main>
  );
}
