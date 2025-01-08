import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "@/components/Search";
import Filters from "@/components/Filters";

export default function HomePage() {
    return (
        <main className="flex justify-center items-center max-w-screen w-full flex-col mx-auto">
            <section className="w-full">
                <div className="flex justify-center flex-col items-center min-h-[300px] bg-cover text-center bg-center rounded-2xl bg-[url('../public/banner-bg.jpg')]" >
                    <h1 className="text-5xl uppercase">Educaspace</h1>
                    <p className="text-2xl">Learn new things.</p>
                </div>
                <Search />
            </section>
            <Filters />
        </main>
    );
}
