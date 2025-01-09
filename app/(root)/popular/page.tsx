import Search from "@/components/Search";
import { getSources } from "@/sanity/actions";
import Card from "@/components/Card";

type CardType = {
    _id: string
    title: string
    image: string
    downloadUrl: string
    views: number
}

interface PageProps {
    searchParams: {
        [key: string]: string | undefined
    }
}

export default async function PopularPage({ searchParams }: PageProps) {

    const { category, query } = await searchParams

    const sources = await getSources({
        query: query || "",
        category: category || "",
        page: "1"
    })

    return (
        <main className="flex justify-center items-center max-w-screen w-full flex-col mx-auto py-28">
            <h1 className="text-2xl text-purple-400 pb-5">Most Popular</h1>

            <section className="w-full">
                <Search />
            </section>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {sources.map((s: CardType) => (
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
