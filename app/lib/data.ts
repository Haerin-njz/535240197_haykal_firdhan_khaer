export interface GroupBiodata {
  name: string;
  imageSrc: string;
  description: string;
}

type GroupData = {
  [key: string]: GroupBiodata;
};

export const groupData: GroupData = {
  "Newjeans": {
    name: "Newjeans",
    imageSrc: "/images/kpop1.jpg",
    description: "NewJeans adalah grup vokal wanita Korea Selatan yang dibentuk oleh ADOR. Terdiri dari lima anggota: Minji, Hanni, Danielle, Haerin, dan Hyein."
  },
  "Lesserafim": {
    name: "Lesserafim",
    imageSrc: "/images/kpop2.jpg",
    description: "Le Sserafim adalah grup vokal wanita Korea Selatan yang dibentuk oleh Source Music dan HYBE. Terdiri dari lima anggota: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, dan Hong Eun-chae."
  },
  "Aespa": {
    name: "Aespa",
    imageSrc: "/images/kpop3.jpg",
    description: "Aespa adalah grup vokal wanita Korea Selatan yang dibentuk oleh SM Entertainment. Terdiri dari empat anggota: Karina, Giselle, Winter, dan Ningning."
  },
  "Illit": {
    name: "Illit",
    imageSrc: "/images/kpop4.jpg",
    description: "Illit adalah grup vokal wanita Korea Selatan yang dibentuk oleh Belift Lab (HYBE). Terdiri dari lima anggota: Yunah, Minju, Moka, Wonhee, dan Iroha."
  },
  "Cortis": {
    name: "Cortis",
    imageSrc: "/images/kpop5.jpg",
    description: "Deskripsi placeholder untuk Cortis. Grup ini adalah bagian dari proyek kuis."
  },
  "Heart2Heart": {
    name: "Heart2Heart",
    imageSrc: "/images/kpop6.jpg",
    description: "Deskripsi placeholder untuk Heart2Heart. Dikenal karena harmoni mereka."
  }
};