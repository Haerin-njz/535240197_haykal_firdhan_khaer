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
    description: "NewJeans adalah grup vokal wanita Korea Selatan yang dibentuk oleh ADOR. Grup ini terdiri dari lima anggota: Minji, Hanni, Danielle, Haerin, dan Hyein. Grup ini merilis singel debut mereka 'Attention' pada 22 Juli 2022."
  },
  "Lesserafim": {
    name: "Lesserafim",
    imageSrc: "/images/kpop2.jpg",
    description: "Le Sserafim adalah grup vokal wanita Korea Selatan yang dibentuk oleh Source Music dan HYBE Corporation. Grup ini terdiri dari lima anggota: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, dan Hong Eun-chae."
  },
  "Aespa": {
    name: "Aespa",
    imageSrc: "/images/kpop3.jpg",
    description: "Aespa adalah grup vokal wanita Korea Selatan yang dibentuk oleh SM Entertainment. Grup ini terdiri dari empat anggota: Karina, Giselle, Winter, dan Ningning. Mereka memulai debutnya pada 17 November 2020 dengan singel 'Black Mamba'."
  },
  "Illit": {
    name: "Illit",
    imageSrc: "/images/kpop4.jpg",
    description: "Illit adalah grup vokal wanita Korea Selatan yang dibentuk oleh Belift Lab, anak perusahaan HYBE Corporation, melalui acara survival 'R U Next?'. Grup ini terdiri dari lima anggota: Yunah, Minju, Moka, Wonhee, dan Iroha."
  },
  "Cortis": {
    name: "Cortis",
    imageSrc: "/images/kpop5.jpg",
    description: "Cortis adalah boy group K-Pop baru dari agensi BIGHIT MUSIC yang merupakan singkatan dari Color Outside The Lines."
  },
  "Heart2Heart": {
    name: "Heart2Heart",
    imageSrc: "/images/kpop6.jpg",
    description: "H2H (Hearts2Hearts) adalah grup K-pop wanita yang baru debut pada 24 Februari 2025 di bawah naungan SM Entertainment, terdiri dari delapan anggota, termasuk satu anggota asal Indonesia bernama Carmen."
  }
};