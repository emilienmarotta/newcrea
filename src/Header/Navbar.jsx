import React, { useState } from "react";
import Button from "../Button/Button";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex w-[90%] items-center justify-between text-sm xs:text-base">
      <div>
        <img
          className="w-[40px] py-4 md:w-[60px]"
          src="assets/logo-w-dark-mode.svg"
          alt="Logo Newcrea"
        />
      </div>
      <ul className="hidden items-center gap-[4vw] text-paletteColor3 md:flex">
        <li>
          <a className="underline-animation" href="#">
            Accueil
          </a>
        </li>
        <li>
          <a className="underline-animation" href="#offers">
            Nos offres
          </a>
        </li>
        <li>
          <a className="underline-animation" href="#">
            Nos réalisations
          </a>
        </li>
      </ul>
      <Button text="Nous contacter" style_={1} />
      <MdMenu
        id="hbg-menu"
        className="cursor-pointer select-none text-4xl text-paletteColor3 md:hidden md:text-6xl"
        onClick={() => setOpen((prev) => !prev)}
      />
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
}
