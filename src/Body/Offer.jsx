export default function Offer({
  imageSrc,
  altText,
  title,
  description,
  price,
}) {
  return (
    <div className="flex h-auto w-[100%] flex-col items-center justify-between gap-3 rounded-lg bg-white px-8 py-5 text-center shadow-2xl xs:w-[250px] xs:px-3 sm:w-[300px] sm:px-8">
      <img className="h-9 xs:mb-3 xs:h-12" src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p className="flex-grow text-smTextWhtColor">{description}</p>
      <p className="font-semibold">À partir de {price}€ HT</p>
      <a className="underline-animation mt-3 text-paletteColor2" href="#">
        En savoir plus
      </a>
    </div>
  );
}
