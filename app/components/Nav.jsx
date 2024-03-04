import { NavLink, useMatches } from "@remix-run/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Nav() {
  const matches = useMatches();

  const isActive = (path) => {
    return matches.some(match => match.pathname === path);
  }

  return (
    <nav className="flex justify-end p-4 bg-beige-200 text-white text-sm">
      <a href="https://www.linkedin.com/in/s%C3%B8s-wind-95a9a616b/" target="_blank" rel="noopener noreferrer" className="mx-2 text-xs text-black hover:text-brown-800 hover:bg-beige-100 border-none">
        <FaLinkedin size={20} />
      </a>
      <a href="https://github.com/soswind" target="_blank" rel="noopener noreferrer" className="mx-2 text-xs text-black hover:text-brown-800 hover:bg-beige-100 border-none">
        <FaGithub size={20} />
      </a>
      

    </nav>
  );
}