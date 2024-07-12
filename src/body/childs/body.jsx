import React, { useEffect, useState } from 'react'
import MainBodyStyles from "../styles/body1.module.scss"
import Artists from './subChilds/artists'
import Albums from './subChilds/albums'
import { songsApi } from '../utils/urls'
import axios from 'axios'

const Body = ({inputVal , setInputVal}) => {


  const [songs , setSongs] = useState([])

  const [selectedSong , setSelectedSong] = useState({})

  const getSongs = async() => {
      const { data} = await axios.get(songsApi + inputVal)

      setSongs(data.data.results)
  }


  const playNext = () => {
    const findIndOfCurrSong = songs.findIndex((e) => e.id == selectedSong.id)

    setSelectedSong(songs[findIndOfCurrSong - 1])
  }
  useEffect(()=>{
      getSongs()
  },[inputVal])


  return (
    <div className={MainBodyStyles.container}>
     {songs?.length > 0 ? 
      <div className={MainBodyStyles.songsCon}>
        {
          songs?.map((song,index)=> {
            return (
              <div className={MainBodyStyles.songCard} onClick={()=>setSelectedSong(song)} >
                
                    <img src={song?.image[1]?.url} />
               
                <div>{song?.name?.substring(0,6) + "..."}</div>
                
            
              </div>
            )
          })
        }
      </div>
     :<div>

       <Artists />
        <Albums />
        <Artists />
        <Albums />
     </div> 
      }

      {
        songs?.length && selectedSong?.id && <div className={MainBodyStyles.musicPlayer}>
            <img src={selectedSong?.image[1]?.url} onClick={playNext}  />
            <audio src={selectedSong?.downloadUrl[2]?.url} controls autoPlay  />
        </div>
      }
    </div>
  )
}

export default Body
