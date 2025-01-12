"use client"

import { useEffect, useState } from 'react'
import { CardProps } from '@/components/Card';
import { getSource, increaseView } from '@/sanity/actions';
import { use } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

interface IParams {
    sourceId: string;
}

const Single = ({ params }: { params: Promise<{ sourceId: string }> }) => {

    const [data, setData] = useState<CardProps>()

    const { sourceId } = use(params)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSource(sourceId)

                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const increaseViews = async () => {
            await increaseView(sourceId, data?.views as number)
        }

        fetchData();
        increaseViews()
    }, [])

    if (data?.image && data?.title) {
        return (<Card className='mt-32 bg-black text-white'>
            <CardHeader >
                <CardTitle>{data?.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-fit w-full">
                    <Image src={data.image} className="h-full rounded-md object-contain" alt={data.title} height={200} width={500} />
                </div>
            </CardContent>
            <CardFooter className="flex items-center gap-1 justify-between">
                <Link href={data.downloadUrl}>{data.downloadUrl}</Link>

                <div className='flex items-center gap-2'>
                    <p>{data.views} </p>
                    <FaEye size={18} />
                </div>
            </CardFooter>
        </Card>)
    }

    return (
        <h1>No Data.</h1>
    )
}

export default Single