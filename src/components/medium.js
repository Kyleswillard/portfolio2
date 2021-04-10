import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MediumCard from '../components/card/card'

const MediumDiv = styled.div`
    margin: 0 auto;
    width: 100%;
`

const Medium = () => {
    const [articles, setArticles] = useState([])
    const url =
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kyleswillard'

    const results = async () => {
        await axios
            .get(url)
            .then((res) => setArticles(res.data.items))
            .then()
            .catch((err) => console.console.error(err))
    }
    useEffect(() => {
        setArticles(results())
    }, [])

    return (
        <MediumDiv>
            {articles.length > 0 ? (
                articles.map((item) => (
                    <MediumCard item={item} key={Date.now()} />
                ))
            ) : (
                <h3>There are No posts</h3>
            )}
        </MediumDiv>
    )
}

export default Medium
