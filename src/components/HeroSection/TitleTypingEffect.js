import React,{useState,useEffect} from 'react'
import {Title} from './HeroElements'

function TitleTypingEffect(props) {

    const [iLetter,setILetter] = useState(0)
    const [heroTitleParts,setHeroTitleParts] = useState(Array(props.text.split('<br/>').length).fill(""));
    const [index,setIndex] = useState(0);
    const [isShow,setIsShow] = useState(false);
    const zip = (a, b) => a.reduce((c, x, i) => c.concat(x, b[i]), []);

    useEffect(() => {

        if(!isShow) return;

        let timer = setTimeout(() => {
            const HERO_TITLE_SPLIT =props.text.split('<br/>');
            if(!HERO_TITLE_SPLIT[index]) return ;

            if (iLetter < HERO_TITLE_SPLIT[index].length) {
    
                setHeroTitleParts((prevHeroTitleParts) => {
                    const newHeroTitle = prevHeroTitleParts.concat();
                    newHeroTitle[index] += HERO_TITLE_SPLIT[index].charAt(iLetter);
                    return newHeroTitle;
                })
                setILetter(iLetter+1)
            }else{
                setIndex(index+1)
                setILetter(0)
            }
        }, props.duration);

        return () => clearTimeout(timer);
        
    },[iLetter,index,isShow,props.text,props.duration])

    useEffect(() => {
        console.log('ywha');
        let timer = setTimeout(() => {
            setIsShow(true);
        },props.delay)
        return () => clearTimeout(timer)
    },[props.delay])

    function renderHeroTitle(){
        const lineBreaks = Array(heroTitleParts.length-1).fill(<br/>)
        const render = zip(heroTitleParts,lineBreaks)
        return render
    }
    const cloneComponent = React.cloneElement(props.component,null,renderHeroTitle().map( (render,index) =>  <React.Fragment key={index}>{render}</React.Fragment> ))

    return cloneComponent;
}

TitleTypingEffect.defaultProps = {
    text: 'insert<br>text',
    delay:500,
    duration:50,
    component: <Title/>
}
export default TitleTypingEffect
