"use client";

import React, { useEffect, useState } from "react";
import { Lock, Mail } from "lucide-react";
import { Discord } from "react-bootstrap-icons";
import LangButton from "@/components/LangButton";

const LoginPage = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div
<<<<<<< HEAD
      className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/bg-login.png")' }}
    >
      <div className="absolute top-5 left-5">
        <LangButton />
      </div>

      <div className="md:w-1/2 flex flex-col items-center justify-center text-white mt-16 p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
=======
      className="flex justify-between items-start h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-login.png")' }} 
    >
      <div className="w-1/2 flex flex-col items-center justify-center text-white mt-32 p-10">
        <h1 className="text-5xl font-bold">
>>>>>>> f668edd22cd8b9077dcd860cb150a6737833c00a
          Bem vindo(a) ao <br />
          <span className="text-6xl">KANDARAKU</span>
        </h1>
        <p className="mt-6 text-lg text-center max-w-md">
          Obrigatoriamente, pedimos que entre no site logado em sua conta. Para ter acesso ao site
          você precisa ter uma conta registrada.
        </p>
<<<<<<< HEAD
        {dateTime && (
          <div className="mt-6 text-lg md:text-xl text-center md:hidden">
            {/* Exibe o relógio normalmente em telas menores */}
            <p className="text-4xl md:text-5xl font-bold">{formatTime(dateTime)}</p>
            <p>{formatDate(dateTime)}</p>
          </div>
        )}
=======
        <div className="absolute bottom-16 left-8 text-xl">
          {dateTime && (
            <>
              <p className="text-5xl font-bold">{formatTime(dateTime)}</p>
              <p>{formatDate(dateTime)}</p>
            </>
          )}
        </div>
>>>>>>> f668edd22cd8b9077dcd860cb150a6737833c00a
      </div>
      <div className="w-[650px] flex items-center justify-center p-10">
        <div className="bg-neutral-800 text-white rounded-lg shadow-lg p-8 w-full">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="Kandaraku" width={32} height={32} className="w-8 h-8 mr-2" />
<<<<<<< HEAD
            <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-500">
              Kandaraku
            </h2>
=======
            <h2 className="text-3xl font-bold text-center text-purple-500">Kandaraku</h2>
>>>>>>> f668edd22cd8b9077dcd860cb150a6737833c00a
          </div>
          <h3 className="text-xl font-medium text-center mb-6">Fazer login</h3>
          <form>
            <div className="mb-4 space-y-3">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Nome de usuário ou email:
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Digite seu nome de usuário ou email"
                />
                <Mail className="absolute right-3 top-3 text-white" />
              </div>
            </div>
            <div className="mb-6 space-y-3">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Senha de sua conta:
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Digite sua senha"
                />
                <Lock className="absolute right-3 top-3 text-white" />
              </div>
            </div>
            <div className="text-sm mb-6 text-start">
              <a href="#" className="text-blue-400 underline hover:text-blue-500">
                Recuperar senha
              </a>{" "}
              <br />
              Não possui conta?{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-500">
                Criar conta
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-5 border-2 border-purple-600 hover:bg-purple-700 text-white font-semibold p-3 rounded-md transition-colors"
            >
              Entrar
            </button>
          </form>
          <div className="mt-10 text-start">
            <p className="text-sm mb-3">Outras formas de login (Recomendado):</p>
            <button className="flex items-center justify-center p-3 group">
              <Discord className="size-5 mr-2 text-white group-hover:text-blue-500 transition duration-300" />
              <span className="ml-2 overflow-hidden text-white opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                Discord
              </span>
            </button>
          </div>
          <footer className="mt-8 text-xs text-center text-gray-500">
            <p>Copyright © Kandaraku Studios 2024</p>
            <p>Todos os direitos reservados</p>
          </footer>
        </div>
      </div>

      {/* Relógio fixo no rodapé para telas maiores */}
      {dateTime && (
        <div className="hidden md:flex fixed bottom-8 left-8 text-xl text-white flex-col">
          <p className="text-5xl font-bold">{formatTime(dateTime)}</p>
          <p>{formatDate(dateTime)}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
