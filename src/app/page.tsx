import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Home() {

  const links = [
    { name: "GitHub", url: "https://github.com/Sammuell3", icon: <FaGithub className="inline-block mr-2" /> },
    { name: "Instagram", url: "https://instagram.com/sa_uell3/profilecard/", icon: <FaInstagram className="inline-block mr-2" /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/samuel-barros-219378296", icon: <FaLinkedin className="inline-block mr-2"/>},
  ];
  

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
      {/*Cabeçalho com foto de perfil e descrição*/}
        <Image
          className="w-24 h-24 rounded-full mx-auto"
          src="/foto.png"
          alt="Foto de perfil"
          width={128}
          height={128}
        />
        <h1 className="flex justify-center items-center text-2x1 font-semibold w-full text-gray my-5">Samuel Barros</h1>

        {/*Lista de link*/}
        <div className="mt-8 w-full max-w-md">

          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-4">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 text-black p-4 w-full rounded-full text-center hover:scale-105 transition-all border border-gray-700"
                >
                  {link.name} {link.icon}
                </a>
              </li>
            ))}
          </ul>

        </div>
        <footer>
        <p className="text-sm font-light">
          Feito com <span className="text-yellow-300">Next.js e Tailwind CSS</span> por Samuel Barros 🧐
        </p>
        </footer>
    </div>
  );
}
