import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/Examen">
          <a>Examen</a>
        </Link>
        <Link href="/Respuesta">
          <a>Respuestas</a>
        </Link>
        <Link href="/Informacion">
          <a>Informacion</a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;