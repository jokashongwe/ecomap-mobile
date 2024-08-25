
import primaryImage from "../../assets/images/field.jpg"

import primaryImage2 from "../../assets/images/field2.jpg"

export const producteurs = [
  {
    id: 1,
    firstname: 'Songolo',
    lastname: 'Pakala',
    imagePrimary: primaryImage,
    address: {
      province: 'KWG',
      territory: 'Bagata',
      sector: 'Bagata',
      city: '',
      village: 'Akimbe',
      lat: -15.98645,
      lng: 4.193645,
    },
    exploitations: [
      {
        id: 1,
        surface: 120,
        exploitationType: '',
      },
    ],
    products: [
      {
        id: 1,
        name: 'Manioc',
      },
      {
        id: 2,
        name: 'Concombre',
      },
    ],
  },
  {
    id: 2,
    firstname: 'Aminga',
    lastname: 'Sanga',
    imagePrimary: primaryImage2,
    address: {
      province: 'KWG',
      territory: 'Bagata',
      sector: 'Bagata',
      city: '',
      village: 'Akimbe',
      lat: -15.98645,
      lng: 4.193645,
    },
    exploitations: [
      {
        id: 1,
        surface: 120,
        exploitationType: '',
      },
    ],
    products: [
      {
        id: 3,
        name: 'Gingembre',
      },
      {
        id: 4,
        name: 'Mais',
      },
    ],
  },
];
