import { ProductData } from '@services/dataTypes';

type SideColProps = {
    data: ProductData[];
};
const SideCol: React.FC<SideColProps> = ({ data }) => {
    const { image, subtitle, tags, title } = data[0];

    return (
        <div className="side-col text-black flex flex-col items-center gap-4">
            <img src={image} alt={title} className="w-[50%] h-auto mt-4" />
            <div className="side-col__title text-xl font-semibold">{title}</div>
            <div className="side-col__subtitle text-sm font-light text-center w-4/5">
                {subtitle}
            </div>
            <div className="side-col__tags flex flex-wrap gap-2 justify-between border-t border-b border-gray-300 p-4 my-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1 text-xs rounded border border-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SideCol;
