import React, { useEffect, useState } from 'react'
import AlbumStyles from './styles/album.module.scss' 
import axios from 'axios'
import { albumsApi } from '../../utils/urls'

const Albums = () => {

    const [albums , setAlbums] = useState([])

    const getAlbums = async () => {
        const {data} = await axios.get(albumsApi + "A")

        setAlbums(data.data.results)
    }

    useEffect(()=>{
        getAlbums()
    },[])
  return (
    <div className={AlbumStyles.container} >
        <h1>Popular Albums</h1>

        <div className={AlbumStyles.artistsCon}>
            {
                albums?.map((album) => {
                   
                    return (
                        <div className={AlbumStyles.artistCard}>
                            <div>
                                <img src={album?.image[1]?.url} />
                            </div>
                            <div>{album?.name?.substring(0,6) + "..."}</div>
                            <div>{album?.artists?.all[0]?.name?.substring(0,6) + "..."}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Albums
