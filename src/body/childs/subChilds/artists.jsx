import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { artistsApi } from '../../utils/urls'
import artistStyles from "./styles/artist.module.scss"

const Artists = () => {

    const [artists , setArtists] = useState([])

    const getArtists = async() => {
        const {data} = await axios.get(artistsApi + "M")

        setArtists(data.data.results)
    }

    useEffect(()=> {
        getArtists()
    },[])
  return (
    <div className={artistStyles.container} >
        <h1>Popular Artists</h1>
        <div className={artistStyles.artistsCon}>
            {
                artists?.map((artists) => {
                    return (
                        <div className={artistStyles.artistCard}>
                            <div>
                                <img src={artists?.image[1]?.url} />
                            </div>
                            <div>{artists?.name?.substring(0,6) + "..."}</div>
                            <div>{artists?.role}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Artists
