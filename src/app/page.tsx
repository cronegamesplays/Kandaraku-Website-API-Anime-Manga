// pages/index.tsx
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Kandaraku - Página Inicial</title>
        <meta name="description" content="Descrição do seu site aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Bem-vindo ao Kandaraku!
        </h1>
      </main>

      <footer className="w-full h-24 flex items-center justify-center bg-gray-800 text-white">
        <p>Footer do Kandaraku</p>
      </footer>
    </div>
  );
};

export default Home;
