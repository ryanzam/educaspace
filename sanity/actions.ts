import { groq } from "next-sanity";
import { readclient } from "./lib/client";
import { buildQuery } from "./utils";

interface SourceParams {
    query: string
    category: string
    page: string
}

export const getSources = async (params: SourceParams) => {
    const { query, category, page } = params

    try {
        const sources = await readclient.fetch(
            groq`${buildQuery({
                type: 'source',
                query,
                category,
                page: parseInt(page),
            })}{
                title,
                _id,
                downloadUrl, 
                "image": image.asset->url,
                views,
                slug,
                category
              }`
        )
        return sources
    } catch (error) {
        console.log(error)
    }
}

export const getSource = async (id: string) => {
    try {
        const source = await readclient.fetch(
            groq`*[_type == "source" && _id == "${id}"][0]{
                title,
                _id,
                downloadUrl, 
                "image": image.asset->url,
                views,
                slug,
                category
              }`
        )
        console.log(source)
        return source
    } catch (error) {
        console.log(error)
    }
}