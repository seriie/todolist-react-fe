interface HeadingProps {
    title: string;
    description: string;
}

export default function Heading({title, description}: HeadingProps) {
    return (
        <>
            <h1 className="text-5xl font-bold text-slate-800">{title}</h1>
            <p className="text-sm text-gray-700">{description}</p>
        </>
    )
}