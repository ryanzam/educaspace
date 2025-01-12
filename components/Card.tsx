import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { FaEye } from "react-icons/fa";
import Image from "next/image"
import { increaseView } from "@/sanity/actions";

export interface CardProps {
    id: string
    title: string
    image: string
    downloadUrl: string
    views: number
}

const CardComponent = ({ id, title, image, downloadUrl, views }: CardProps) => {

    return (
        <Card className="w-full max-w-fit border-0 bg-black text-white sm:max-w-[350px]">
            <Link href={`/${id}`} target="_blank">
                <CardHeader>
                    <div className="h-fit w-full">
                        <Image src={image} className="h-full rounded-md object-contain" alt={title} height={400} width={380} />
                    </div>
                    <CardTitle className="line-clamp-2">{title}</CardTitle>
                </CardHeader>
            </Link>
            <CardContent className="flex items-center justify-between">
                <Link href={downloadUrl}>{downloadUrl}</Link>

                <div className="flex items-center gap-1">
                    <p>{views} </p>
                    <FaEye size={18} />
                </div>
            </CardContent>
        </Card>
    )
}

export default CardComponent