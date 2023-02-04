import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-full w-32" alt="Avatar"/>
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Lander Parren</h1>
        <p className="text-base md:text-xl mb-3 font-medium">Student Toegepaste Informatica</p>
        <p className="text-sm max-w-xl mb-6 font-bold">Ik ben Lander Parren, een student toegepaste informatica aan UCLL. Mijn passie voor programmeren en nieuwe technologieën drijft me ertoe om mezelf constant te blijven ontwikkelen. Ik heb diverse projecten gerealiseerd, waaronder een website voor een hoveniersbedrijf, een online leerplatform en een mobiele app. Ik ben leergierig en gemotiveerd, altijd op zoek naar nieuwe uitdagingen en kansen om mijn vaardigheden te verbeteren. Ik streef ernaar om een succesvolle carrière op te bouwen in de informaticabranche.</p>
    </div>
  );
};

export default Intro;