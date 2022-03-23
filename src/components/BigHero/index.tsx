import { Moviecards } from "../Moviecards"
import { Searchbox } from "../Searchbox"
import * as S from "./styles"

export const BigHero = () =>{
    return(
        <S.Wrapper>
            <Searchbox/>
            <Moviecards/>
        </S.Wrapper>
    )
}