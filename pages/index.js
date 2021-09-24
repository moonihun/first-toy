import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Header />
      {/* Head - 메타데이터 */}
      <Head>
        <title>First Toy Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}

      {/* Main contents */}
      <main className='flex flex-col items-center justify-center w-full min-h-screen py-2 flex-1 px-20 text-center'>
        <h1>Hello</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
