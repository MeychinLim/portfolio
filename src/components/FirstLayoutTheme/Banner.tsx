type Props = {
    title: string;
};

function Banner({ title }: Props) {
    return (
        <div className='bg-gray-700 w-full h-44 mb-20'>
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full text-4xl'>{title}</div>
            </div>
        </div>
    );
}

export default Banner;
