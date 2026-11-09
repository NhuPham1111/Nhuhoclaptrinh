import type { ReactNode } from "react";

export interface JobProps{
    title: string;
    icon: ReactNode;
    bgClass: string;
}

export default function Job({title, icon, bgClass: bgColor}: JobProps)
{
    return (
        <>
        <div className={`${bgColor} p-4 aspect-square rounded-lg flex flex-col items-center justify-center`}>
        {icon}
        <p className="text-bold 2xln pt-2">{title}</p>
        </div>
        </>
    )
}