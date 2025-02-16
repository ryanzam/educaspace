"use client"
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { getSources } from "@/sanity/actions";
import Card from "@/components/Card";
import SearchTitle from "@/components/SearchTitle";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

type CardType = {
    _id: string
    title: string
    image: string
    downloadUrl: string
    views: number
}

export default function HomePage() {

    const [data, setData] = useState([])

    const searchParams = useSearchParams()
    const query = searchParams.get("query")
    const category = searchParams.get("category")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSources({
                    query: query || "",
                    category: category || "",
                    page: "1"
                })
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [data])

    return (
        <main className="flex justify-center items-center max-w-screen w-full flex-col mx-auto py-28">
            <section className="w-full">
                <div className="flex justify-center flex-col items-center min-h-[300px] bg-cover text-center bg-center rounded-2xl bg-[url('../public/banner-bg.jpg')]" >
                    <h1 className="text-5xl uppercase">Educaspace</h1>
                    <p className="text-2xl">Learn new things.</p>
                </div>
                <Search />
            </section>
            <Filters />

            {(query || category) && <SearchTitle query={query} category={category} />}

            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {data.map((s: CardType) => (
                    <Card
                        key={s._id}
                        title={s.title}
                        id={s._id}
                        image={s.image}
                        views={s.views}
                        downloadUrl={s.downloadUrl}
                    />
                ))}
            </div>
        </main>
    );
}
