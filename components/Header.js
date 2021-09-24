import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <header className='h-16 shadow-lg hover:shadow-xl transition duration-100 ease-out'>
      <div>
        <HomeIcon
          className=' text-[#896958] rounded-full'
          onClick={() => router.push('/')}
        />
      </div>
    </header>
  );
}

export default Header;
