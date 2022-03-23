import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';


import * as S from "./styles"



export const Moviecards = ({BigData}) =>{
        {console.log(BigData)}
       return <div>
        Hello world
    </div>

  
}

interface DataProps {
    Title: string,
    Year:  number,
    imbID: string,
    type: string,
    Poster:string
}
type Props = {
    BigData: DataProps[]
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    
      const res = await fetch(`https://www.omdbapi.com/?s=ghost&apikey=7b1a56c6`)
      const data = await res.json()
      
        console.log(data);

      return {
          props:{
            BigData: data
          }
      };
     
  };