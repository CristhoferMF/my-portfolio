import {
  imgQuiz,
  imgQuiz1,
  imgQuiz2,
  imgQuiz3,
  imgQuiz5,
  imgQuiz1Thumb,
  imgQuiz2Thumb,
  imgQuiz3Thumb,
  imgQuiz5Thumb,
} from "../images/projects/quiz-app";
import {
  imgPortfolio,
  imgPortfolio1,
  imgPortfolio2Thumb,
  imgPortfolio2,
} from "../images/projects/portfolio";
import {
  imgTarina,
  imgTarina1,
  imgTarina1Thumb,
  imgTarina2,
  imgTarina2Thumb,
} from "../images/projects/tarinaweb/";

import {
  imgWindnb,
  imgWindnb2,
  imgWindnb1Thumb,
  imgWindnb2Thumb,
  imgWindnb1,
} from "../images/projects/winbnb";

import * as ImageUploader from "../images/projects/image-uploader";
import * as ImageMovies from "../images/projects/movies";

const projects = [
  {
    id: 1,
    slug: "trivia-quiz-app",
    title: "Trivia Quiz App",
    codeLink: "https://github.com/CristhoferMF/reactNativeTriviaJW",
    description: `Es un juego de preguntas tipo trivia. Este proyecto me permitio profundizar en el uso del framework React mediante React Native. Es uno de los proyetos que...`,
    descriptionFullText: `Es un juego de preguntas tipo trivia. Este proyecto me permitio profundizar en el uso del framework React mediante React Native. 
                        Es uno de los proyetos personales en los que mejor me lo he pasado. React Native tiene mucho potencial en miras del desarrollo de aplicacione moviles.
                        Espero poder continuar en este juego y añadirle muchas cosas más.`,
    imgURL: imgQuiz,
    images: [
      {
        src: imgQuiz1,
        thumbnail: imgQuiz1Thumb,
        caption: "Pantalla Principal - Trivia Quiz",
      },
      {
        src: imgQuiz2,
        thumbnail: imgQuiz2Thumb,
        caption: "Categorias Pantalla",
      },
      {
        src: imgQuiz3,
        thumbnail: imgQuiz3Thumb,
        caption: "Descargar Categorias desde Firebase",
      },
      {
        src: imgQuiz5,
        thumbnail: imgQuiz5Thumb,
        caption: "Pantalla Juego",
      },
    ],
    tags: ["React", "React Native", "Realm.io", "Firebase", "Adobe XD"],
  },
  {
    id: 2,
    slug: "tarinaweb-wordpress",
    title: "TarinaWeb",
    imgURL: imgTarina,
    previewLink: "https://tarinaweb.com",
    description: `Este proyecto esta pensado para la creación de paginas web mediante el uso de Wordpress a empresas del sector priorizando la personalización y...`,
    descriptionFullText: `Este proyecto esta pensado para la creación de paginas web mediante el uso de Wordpress a empresas del sector priorizando la personalización y la comunicación con el cliente. 
                En aspectos tecnicos usé Jet Engine para los Custom Post Types, Elementor y mucho SVG. Finalmente, el despliegue en un Hosting de una empresa Nacional.`,
    images: [
      {
        src: imgTarina1,
        thumbnail: imgTarina1Thumb,
      },
      {
        src: imgTarina2,
        thumbnail: imgTarina2Thumb,
      },
    ],
    tags: ["Wordpress", "Figma", "JetEngine"],
  },
  {
    id: 3,
    slug: "mi-portafolio",
    title: "Mi portafolio",
    codeLink: "https://github.com/CristhoferMF/my-portfolio",
    description: `Mi portafolio hecho con REACT JS. Diseño hecho en FIGMA. Es un proyecto que quería hacer desde hace algún tiempo para poder mostrar...`,
    imgURL: imgPortfolio,
    images: [
      {
        src: imgPortfolio1,
        thumbnail: imgPortfolio1,
      },
      {
        src: imgPortfolio2,
        thumbnail: imgPortfolio2Thumb,
      },
    ],
    descriptionFullText: `Mi portafolio hecho con REACT JS. Diseño hecho en FIGMA. Es un proyecto que quería hacer desde hace algún tiempo para poder mostrar mi continuo camino en la programación. 
                        Además, en este proyecto quise llevar un mockup hecho en Figma a una web funcional mediante Styled Components.`,
    tags: ["React JS", "Styled Commponents", "Figma"],
  },
  {
    id: 4,
    slug: "windbnb",
    title: "Windbnb",
    codeLink: "https://github.com/CristhoferMF/windnb.git",
    previewLink: "https://windnb-cristhofermf.vercel.app/",
    description: `Este proyecto es parte de un reto en devchallenges.io. Un clon de un buscador tipo Airbnb...`,
    imgURL: imgWindnb,
    images: [
      {
        src: imgWindnb1,
        thumbnail: imgWindnb1Thumb,
      },
      {
        src: imgWindnb2,
        thumbnail: imgWindnb2Thumb,
      },
    ],
    descriptionFullText: `Este proyecto es parte de un reto en devchallenges.io. Un clon de un buscador tipo Airbnb. Como parte de mi interes en el desarrollo frontend intente participar 
                        en desafios como este. Estos retos me permitieron poner en práctica mis conocimientos sobre maquetacion, eventos del DOM y el estado.`,
    tags: ["React JS", "Styled Commponents", "Wouter"],
  },
  {
    id: 5,
    slug: "movies-app",
    title: "Movies App",
    codeLink: "https://github.com/CristhoferMF/movies-react",
    previewLink: "https://movies.cristhofermf.dev",
    description: `Este proyecto es parte de un reto en devchallenges.io. Un clon de un catalogo de peliculas tipo Netflix...`,
    imgURL: ImageMovies.image,
    images: [
      {
        src: ImageMovies.img1,
        thumbnail: ImageMovies.img1Thumb,
      },
    ],
    descriptionFullText: `Este proyecto es parte de un reto en devchallenges.io. Un clon de un buscador tipo Netflix. Como parte de mi interés en el desarrollo frontend intente participar 
                        en desafíos como este. Estos retos me permitieron poner en práctica mis conocimientos sobre React, Hooks, Axios, Hook useReducer, Context API.`,
    tags: ["React JS", "TailwindCSS", "MovieDatabase API", "Hook useReducer"],
  },

  {
    id: 6,
    slug: "image-uploader",
    title: "Image uploader",
    imgURL: ImageUploader.img,
    previewLink: "https://image-uploader.cristhofermf.dev/",
    codeLink: "https://github.com/CristhoferMF/image-uploader",
    description: `Este proyecto es parte de un reto de programacion Full Stack en devchallenges.io. Una aplicación que permite subir imagenes...`,
    descriptionFullText: `Este proyecto es parte de un reto de programacion Full Stack en devchallenges.io. 
                        Una aplicación que permite subir imagenes con una funcionalidad de arrastrar y soltar. Pasate por la demo y mira como funciona. `,
    images: [
      {
        src: ImageUploader.img1,
        thumbnail: ImageUploader.img1Thumb,
      },
    ],
    tags: ["NodeJS", "Docker", "ReactJS", "TailwindCSS"],
  },
];

const data = {
  show: (num) => {
    return [...projects].slice(0, num);
  },
  all: () => {
    return [...projects];
  },
  findBySlug: (slug) => {
    let dimensions = { thumbnailHeight: 0, thumbnailWidth: 0 };

    const newProjects = projects.map((project) => {
      return project.images.map((image) => {
        return {
          ...image,
          ...dimensions,
        };
      });
    });
    console.log(newProjects);
    return projects.find((project) => project.slug === slug);
  },
};

export default data;
