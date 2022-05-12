import Link from "next/link";
import { GoogleLogo } from "phosphor-react";

export default function Index() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <form>
          <div>
            <h1 className="text-5xl font-bold text-brand-500">G-ALMOX</h1>
            <span className="">Simplificando as tarefas do seu dia!</span>
          </div>
          <div className="mt-5">
            <label className="block text-md mb-2" htmlFor="user">
              Usuário
            </label>
            <input
              className="px-4 w-full border-0 py-2 rounded-md text-sm outline-none bg-zinc-800"
              type="text"
              name="user"
              placeholder="Usuário"
            />
          </div>
          <div className="my-3">
            <label className="block text-md mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-800 focus:border-brand-300"
              type="password"
              name="password"
              placeholder="Senha"
            />
          </div>
          <Link className="" href="/private">
            <button className="mt-4 mb-3 w-full bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100">
              Entrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
