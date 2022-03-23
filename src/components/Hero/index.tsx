import cinema from '../../../public/Rectangle5.png'
import * as S from "./styles"
export type HeroProps = {
    img: string;
    title:string;
}

export const Hero = ({
img, title
}: HeroProps) =>{
    return(
        <S.Wrapper>
           <S.Image image={cinema}>
           <S.TextContainer>
               <S.Text>
                   Watch something incredible
               </S.Text>
           </S.TextContainer>
           </S.Image>
        </S.Wrapper>
    )
}