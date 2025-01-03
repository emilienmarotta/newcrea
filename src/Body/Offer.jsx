import { div } from "framer-motion/client";

export default function Offer({
  imageSrc,
  altText,
  title,
  description,
  price,
}) {
  return (
    <div>
      <div className="flex h-full max-w-[500px] flex-row justify-between gap-4 rounded-lg bg-paletteColor3 p-4 shadow-2xl">
        <img className="size-10" src={imageSrc} alt={altText} />
        <div className="flex flex-grow flex-col items-start justify-start gap-5">
          <h3>{title}</h3>
          <p className="text-smTextWhtColor">{description}</p>
          <div className="mt-auto">
            <p className="mb-5 font-semibold">À partir de {price}€ HT</p>
            <a className="underline-animation text-paletteColor2" href="#">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
