const projects = [
    {
        title:'Mi portafolio',
        description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
        Adipisicing sunt nisi reprehenderit fugiat.`,
        imgURL:'https://picsum.photos/seed/loremp/500/400',
        route:'/route'},
    {
        title:'TarinaWeb',
        description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
        Adipisicing sunt nisi reprehenderit fugiat.`,
        imgURL:'https://picsum.photos/seed/loremp_1/500/400',
        route:'/route'},
    {   
        title:'Quiz App',
        description:`Labore veniam nostrud ex ipsum. Ipsum sint elit in occaecat incididunt ullamco.
        Adipisicing sunt nisi reprehenderit fugiat.`,
        imgURL:'https://picsum.photos/seed/loremp_2/500/400',
        route:'/route'}
]

export const dataProjects = {
    projects:{
        show: (num) => {
            return [...projects].slice(0,num);
        },
        all:() => {
            return   [...projects]
        }
    }
}