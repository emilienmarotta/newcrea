import Button from "../Button/Button";
import PresentationVideo from "./PresentationVideo";

export default function Presentation() {
  return (
    <>
      <div className="mx-auto mt-16 flex w-[90%] flex-col items-center text-center">
        <h1>Votre agence Web à Nancy</h1>
        <p className="my-7">
          Développez une présence digitale qui vous ressemble, grâce à nos
          solutions modernes et sur mesure.
        </p>
        <div className="flex gap-2 text-sm xs:gap-4 xs:text-base">
          <Button text="Découvrir nos offres" style_={2} />
        </div>
      </div>
      <PresentationVideo />
    </>
  );
}
