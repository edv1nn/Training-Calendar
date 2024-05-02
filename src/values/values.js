import homeSwiperImh1 from "../assets/program/1.svg";
import homeSwiperImh2 from "../assets/program/2.svg";
import homeSwiperImh3 from "../assets/program/3.svg";
import homeSwiperImh4 from "../assets/program/4.svg";

import ourFood1 from "../assets/food/food2.jpg";
import ourFood2 from "../assets/food/food3.jpg";
import ourFood3 from "../assets/food/food1.jpg";
import ourFood4 from "../assets/food/food4.jpg";
import ourFood5 from "../assets/food/food5.jpg";
import ourFood6 from "../assets/food/food6.jpg";
import ourFood7 from "../assets/food/food7.jpg";
import ourFood8 from "../assets/food/food8.jpg";

import ourPlan1 from "../assets/plans/1.webp";
import ourPlan2 from "../assets/plans/2.jpg";
import ourPlan3 from "../assets/plans/3.webp";
import ourPlan4 from "../assets/plans/4.jpg";
import ourPlan5 from "../assets/plans/5.jpg";
import ourPlan6 from "../assets/plans/6.jpg";
import ourPlan7 from "../assets/plans/7.jpg";

import about1 from "../assets/about/1.png";
import about2 from "../assets/about/2.png";
import about3 from "../assets/about/3.png";

import nikePartner from "../assets/partners/nike.png";
import adidasPartner from "../assets/partners/adidas.png";
import theNorthFace from "../assets/partners/the-north-face.png";
import vans from "../assets/partners/vans.png";
import newBalance from "../assets/partners/new-balance.png";
import puma from "../assets/partners/puma.png";

export const headerLinksData = [
  {
    id: 1,
    title: "Treniruočių Planai",
    to: "/plans",
  },
  {
    id: 2,
    title: "Fitneso Maistas",
    to: "/food",
  },
  {
    id: 3,
    title: "Kainos",
    to: "/price",
  },
  {
    id: 4,
    title: "Kalendorius",
    to: "/calendar",
  },
  {
    id: 5,
    title: "Kontaktai",
    to: "/contact",
  },
];

export const homeSwiperData = [
  {
    id: 1,
    title: "Kardio jėga",
    image: homeSwiperImh1,
    description: `
    Dažnai žymima kaip tikslas, siekiant sumažinti kūno riebalų masę. Tai apima fizinį aktyvumą, subalansuotą mitybą ir tinkamus gyvenimo būdo pokyčius.
    `,
  },

  {
    id: 2,
    title: "Prarasti riebalus",
    image: homeSwiperImh2,
    description: `
    Dažnai žymima kaip tikslas, siekiant sumažinti kūno riebalų masę. Tai apima fizinį aktyvumą, subalansuotą mitybą ir tinkamus gyvenimo būdo pokyčius.
    `,
  },

  {
    id: 3,
    title: "Raumenų padidėjimas",
    image: homeSwiperImh3,

    description: `
    Fizinio aktyvumo rezultatas, kuris pasižymi raumenų masės ir tūrio didėjimu
    `,
  },

  {
    id: 4,
    title: "Mityba",
    image: homeSwiperImh4,
    description: `
    There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in some
    form, by injected humour
    `,
  },
];

export const ourPartners = [
  {
    id: 1,
    image: nikePartner,
  },
  {
    id: 2,
    image: theNorthFace,
  },
  {
    id: 3,
    image: adidasPartner,
  },
  {
    id: 4,
    image: newBalance,
  },
  {
    id: 5,
    image: vans,
  },
  {
    id: 6,
    image: puma,
  },
];

export const articlesNewsData = [
  {
    id: 1,
    image: about1,
    about: "Progresavimas",
    text: "Mūsų ekspertų komanda dirbs su jumis, kad sukurtų individualų planą, kuris padės jums pasiekti sėkmės vienu metu.",
  },

  {
    id: 2,
    image: about2,
    about: "Mankšta",
    text: "Pasirinkę daugybę treniruočių, turėsite viską, ko reikia, kad įgautumėte geriausią savo gyvenimo formą.",
  },

  {
    id: 3,
    image: about3,
    about: "Mityba",
    text: "Mūsų komanda dirbs su jumis, kad sukurtų asmeninį maitinimo planą, kuris padėtų jums pasiekti konkrečius sveikatos tikslus.",
  },
];

export const OurPlan = [
  {
    id: 1,
    title: "Šuoliukai",
    subtitle:
      "Tai paprasčiausia pritūpimų variacija su šuoliuku. Papildomas šuoliukas privers širdį aktyviau pumpuoti kraują. Šis pratimas veikia keturgalvį šlaunies raumenį.",
    image: ourPlan1,
    list: [
      "Pritūpkite, rankas laikykite šonuose. Reikia atlikti kuo žemesnį įtūpstą.",
      "Greitai šoktelkite kuo aukščiau į viršų.",
      "Grįžkite į pritūpimo poziciją ir kartokite viską nuo pradžių.",
    ],
  },
  {
    id: 2,
    title: "Pratimas „Burpee“",
    subtitle:
      "„Burpee“ yra nesudėtingas, bet visą kūną priverčiantis dirbti  pratimas. Daromas didesniu intensyvumu, „Burpee“ privers dirbti visiškai visus kūno raumenis ir išlieti turimą prakaitą! Šiam pratimui atlikti tiek namuose, o ypač lauke, jums gali būti reikalingas sporto kilimelis.",
    image: ourPlan2,
    list: [
      "Pradėkite stovimoje pozicijoje.",
      "Greitai pritūpkite ir atsiremkite delnais į grindis.",
      "Atmeskite kojas atgal ir užimkite atsispaudimo poziciją.",
      "Pritraukite kojas atgal ir šoktelkite į stovimą poziciją..",
      "Nusileidę ant kojų stovimoje pozicijoje vėl kartokite šį pratimą iš naujo.",
    ],
  },
  {
    id: 3,
    title: "Kopimo į kalną pratimas",
    subtitle:
      "Šis pratimas lengvesnis, nei „Burpee“, tačiau taip pat pagreitina širdies darbą. Jis leis jums nepavargti, tačiau ilgiau išlaikyti treniruotės efektyvumą.",
    image: ourPlan3,
    list: [
      "Užimkite poziciją taip, lyg ruoštumėtės daryti atsispaudimą.",
      "Pritraukite kairįjį kelį prie krūtinės, o kaire koja palieskite žemę. Tvirtai laikykitės ant dešinės kojos ir stenkitės jos nejudinti.",
      "Grąžinkite kairę koją į pradinę poziciją, o dešinę koją traukite link krūtinės.",
    ],
  },
  {
    id: 4,
    title: "Šuoliukai aukštai keliant kelius",
    subtitle: "Tai širdies ir kraujagyslių sistemai naudingas pratimas",
    image: ourPlan4,
    list: [
      "Pakelkite kairįjį kelį link krūtinės.",
      "Tuomet tuo pačiu metu nuleiskite kairiąją koją ant žemės ir pritraukite dešinį kelį link krūtinės.",
      "Kartokite pratimą jums tinkančiu intensyvumu bei greičiu.",
    ],
  },
  {
    id: 5,
    title: "Šuoliukai ant laiptelio",
    subtitle:
      "Nesudėtingas pratimas, kuriam reikės tik laiptelio arba žemo suoliuko. Šie šuoliukai atliekami ant pirštų galų – tai įdomus ir dinamiškas kardio pratimas.",
    image: ourPlan5,
    list: [
      "Atsistokite šalia laiptelio.",
      "Šokite į viršų aukštai keldami dešinės kojos kelį jos pirštų galais palieskite laiptelį. ",
      "Statykite dešinę koją atgal ant žemesnio laiptelio, tuo pat metu keldami kairę koją.",
      "Šio pratimo metu niekada neturėtumėte būti statiškoje padėtyje.",
    ],
  },
  {
    id: 6,
    title: "Važinėjimas dviračiu",
    subtitle:
      "Visiems pažįstamas važinėjimas dviračiais yra puiki kardio veikla, stiprinanti kojas, sėdmenis bei pilvo presą. Tai puikus pasirinkimas kenčiantiesiems nuo nugaros ar sąnarių skausmų. Norintiems prasiblaškyti, pasidžiaugti vasaros saule ir pakvėpuoti grynu oru, tai bus tobula kardio treniruotė.",
    image: ourPlan6,
  },
  {
    id: 7,
    title: "Bėgiojimas",
    subtitle:
      "Bėgimas yra viena iš kardio veiklų, suteikiančių apkrovą visoms raumenų grupėms, todėl yra labai universalus. Puiki išeitis tiems, kurie nori sportuoti ištisus metus namuose ir nemėgsta arba negali sportuoti lauke – namų treniruokliai. ",
    image: ourPlan7,
    list: [
      "Palaikykite taisyklingą laikyseną – bėgdami galvą laikykite tiesiai, žiūrėkite į priekį.",
      "Lengvai palinkite į priekį. Tokia laikysena padės amortizuoti smūgius ir lavinti stuburo bei nugaros raumenis.",
      "Įtraukite pilvą, kad raumenys įsitemptų, o krūtinę atstatykite į priekį. Rankos turi būti laikomos prie šonų.",
      "Išvystę didesnį greitį, lygiagrečiai su šonais sulenkite rankas 90 laipsnių kampu.",
    ],
  },
];

export const OurFood = [
  {
    id: 1,
    title: "Įdarytų pipirų sriuba",
    subtitle: "Su malta kalakutiena ir aitriosiomis paprikomis",
    image: ourFood1,
    to: "/yogaClass",
  },

  {
    id: 2,
    title: "Traškūs sūrio skrebučiai",
    subtitle: "Tortilijos traškučiai su taco prieskoniais ir mocarela",
    image: ourFood2,
    to: "/",
  },

  {
    id: 3,
    title: "Česnakiniai kopūstai Saute",
    subtitle: "Su alyvuogių aliejumi ir citrininiais pipirais",
    image: ourFood3,
    to: "/",
  },

  {
    id: 4,
    title: "Naminės kalakutienos dešros pusryčių lėkštė",
    subtitle: "Su „Sunny Side Up“ kiaušiniu",
    image: ourFood4,
    to: "/",
  },

  {
    id: 5,
    title: "Kaimiškas itališkas kalakutienos kotletas Marinara",
    subtitle: "Su pilno grūdo makaronais",
    image: ourFood5,
    to: "/",
  },

  {
    id: 6,
    title: "Viduržemio jūros regiono įkvėptos salotos",
    subtitle: "Su paprastu balzaminiu padažu",
    image: ourFood6,
    to: "/",
  },
  {
    id: 7,
    title: "Grūdų košė",
    subtitle: "Pagaminta iš kvinojos ir datulių",
    image: ourFood7,
    to: "/",
  },
  {
    id: 8,
    title: "Naminė kalakutienos dešra",
    subtitle: "Pagardinta šalavijais, rozmarinais ir čiobreliais",
    image: ourFood8,
    to: "/",
  },
];
