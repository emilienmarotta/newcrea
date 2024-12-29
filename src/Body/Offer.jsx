export default function Offer({
  imageSrc,
  altText,
  title,
  description,
  price,
}) {
  return (
    <div className="flex h-auto w-[100%] flex-col items-center justify-between gap-3 rounded-lg bg-white px-3 py-5 text-center shadow-2xl xs:w-[250px] sm:w-[300px] sm:px-8">
      <img className="mb-3 h-20" src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p className="text-smTextWhtColor flex-grow">{description}</p>
      <p className="font-semibold">À partir de {price}€ HT</p>
      <a className="underline-animation text-paletteColor2 mt-3" href="#">
        En savoir plus
      </a>
    </div>
  );
}
