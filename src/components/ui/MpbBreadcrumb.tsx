import { Link } from "react-router-dom";

type IData = {
    title: string;
    path: string;
};
interface IProps {
    data: IData[];
}

export default function MpbBreadcrumb({ data }: IProps) {
    return (
        <nav aria-label="breadcrumb" className="text-base text-gray-500">
            <ol className="inline-flex items-center space-x-2 py-2 text-sm font-medium">
                {data?.map((item, index) => (
                    <li className="inline-flex items-center space-x-2" key={item.title}>
                        {index !== 0 && <span className="text-secondary-400">/</span>}
                        <Link
                            to={item.path}
                            className="text-secondary-500 hover:text-secondary-600"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
