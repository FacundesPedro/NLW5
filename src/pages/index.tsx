//SPA
//SSR
//SSG
import { GetStaticProps } from 'next'
import {homeProps,Episode} from '../Models/homeProps'
import {api} from '../utils/api' 
import {parseISO,format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Home({episodes}) {
  /*useEffect(()=>{ SPA
    const response = fetch('http://localhost:8888/episodes')
      .then(res => res.json())  
      .then(console.log)
  },[])*/
  console.log(episodes)
  return (
    <>
      <h1>Newest Podcast's:</h1>
      <p>{JSON.stringify(episodes)}</p>
    </>
  )
}
/*
//SSR -> Loaded by Next
export async function getServerSideProps(){
  const response = await fetch('http://localhost:8888/episodes')
  const json = await response.json()
  
  return {
    props:{
      episodes:json,
    }
  }
}*/

//SSG
export const getStaticProps: GetStaticProps = async () =>{
  const {data} = await api.get('/episodes',{
    params:{
      _limit:5, 
      _sort: 'published_at',
      _order:'desc'  
    }
  })
  const data_map:Episode[] = data
  const episodes = data_map.map(ep =>{
    return {
      id:ep.id,
      title:ep.title,
      member
    }
  })

  return {
    props:{
      episodes:data,
    },
    revalidate:60*60*8,
  }
}

 