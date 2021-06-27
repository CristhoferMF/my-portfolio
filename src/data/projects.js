import imgQuiz1 from '../images/projects/quiz-app/1.png'

const projects = [
{
    id:1,
    slug:'mi-portafolio',
    title:'Mi portafolio',
    description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
    Adipisicing sunt nisi reprehenderit fugiat.`,
    imgURL:'https://picsum.photos/seed/loremp/500/400',
    images:[],
    descriptionFullText:`Ut fugiat Lorem sunt elit. Laborum reprehenderit irure deserunt et consequat aute. 
        Dolor velit amet cupidatat quis esse fugiat enim sunt ex minim laborum. 
        Tempor cillum sunt laborum tempor. 
        Adipisicing occaecat elit nisi pariatur elit ex incididunt culpa quis consectetur officia. 
        Nostrud labore voluptate labore velit non aliquip sit proident consectetur aliquip excepteur elit quis dolore. 
        Aute fugiat do consequat occaecat anim est consectetur.`,
    tags:['Wordpress','Javascript','React'],
    route:'/route'},
{   
    id:3,
    slug:'trivia-quiz-app',
    title:'Trivia Quiz App',
    description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
    Adipisicing sunt nisi reprehenderit fugiat.`,
    descriptionFullText:`Ut fugiat Lorem sunt elit. Laborum reprehenderit irure deserunt et consequat aute. 
        Dolor velit amet cupidatat quis esse fugiat enim sunt ex minim laborum. 
        Tempor cillum sunt laborum tempor. 
        Adipisicing occaecat elit nisi pariatur elit ex incididunt culpa quis consectetur officia. 
        Nostrud labore voluptate labore velit non aliquip sit proident consectetur aliquip excepteur elit quis dolore. 
        Aute fugiat do consequat occaecat anim est consectetur.`,
    imgURL:imgQuiz1,
    images: 
    [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
    },
    
    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
    }]
    ,
    tags:['Wordpress','Javascript','React'],
    
    route:'/route'
},
{
    id:2,
    title:'TarinaWeb',
    description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
    Adipisicing sunt nisi reprehenderit fugiat.`,
    imgURL:'https://picsum.photos/seed/loremp_1/500/400',
    tags:['Wordpress','Nodejs','React'],
    route:'/route'},

]

const data = {
    show: (num) => {
        return [...projects].slice(0,num);
    },
    all:() => {
        return   [...projects]
    },
    findBySlug: (slug) => {
        return projects.find((project) => project.slug === slug)
    }
}

export default data;