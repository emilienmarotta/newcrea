import Offer from "./Offer";

export default function Offers() {
  return (
    <>
      <div className="text-center">
        <h2 id="offers">Ce que nous proposons</h2>
      </div>
      <div className="mx-auto my-20 flex w-[90%] flex-col justify-center gap-4 xs:flex-row">
        <Offer
          imageSrc="assets/web-development.svg"
          altText="Web development logo"
          title="Création de votre site"
          description="Présentez votre activité, attirez de nouveaux clients ou démarquez-vous en ligne grâce à un site qui reflète parfaitement votre image. Nous concevons pour vous un outil unique et performant qui fera la différence."
          price={900}
        />
        <Offer
          imageSrc="assets/web-redesign.svg"
          altText="Web redesign logo"
          title="Refonte de votre site"
          description="Votre site ne reflète plus vos ambitions ? Nous le transformons pour qu’il devienne un atout : un design percutant, une expérience utilisateur fluide et des performances optimisées pour marquer les esprits."
          price={500}
        />
      </div>
    </>
  );
}
