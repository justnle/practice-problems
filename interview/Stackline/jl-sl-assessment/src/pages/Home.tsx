import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Chart from '@components/Chart';
import Header from '@components/Header';
import SideCol from '@components/SideCol';
import Table from '@components/Table';

import { fetchData } from '@features/dataSlice';
import { RootState, AppDispatch } from '../app/store';

import { Skeleton } from '@mui/material';

const Home = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, status } = useSelector((state: RootState) => state.data);

    const SideColSkeleton = () => (
        <div className="side-col text-black flex flex-col items-center p-4 gap-4">
            <Skeleton variant="rounded" width={100} height={100} />
            <div className="side-col__title w-100 flex flex-col items-center">
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="60%" />
            </div>
            <div className="side-col__tags flex flex-row gap-2 w-4/5 py-2 my-2">
                {[1, 2, 3, 4, 5].map((tag: number) => (
                    <Skeleton key={tag} variant="text" width="50%" />
                ))}
            </div>
        </div>
    );

    const MainColSkeleton = () => {
        return (
            <div className="grid grid-rows-2 gap-16 col-span-4 h-full">
                <Skeleton variant="rectangular" width="100%" height="100%" />
                <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>
        );
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchData());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return (
            <div className="home h-screen flex flex-col">
                <Header />
                <div className="home__content grid grid-cols-5 mx-4 mt-12 mb-4 gap-4 flex-grow overflow-hidden">
                    <div className="bg-white shadow">
                        <SideColSkeleton />
                    </div>
                    <MainColSkeleton />
                </div>
            </div>
        );
    }

    if (status === 'failed' || !data.length) {
        return <div>Failed to load data</div>;
    }

    return (
        <div className="home h-screen flex flex-col">
            <Header />
            <div className="home__content grid grid-cols-5 mx-4 mt-12 mb-4 gap-4 flex-grow overflow-hidden">
                <div className="bg-white shadow">
                    <SideCol data={data} />
                </div>
                <div className="grid grid-rows-2 gap-12 col-span-4 h-full overflow-hidden">
                    <div className="bg-white p-4 shadow">
                        <Chart data={data[0].sales} />
                    </div>
                    <div className="bg-white pt-4 px-4 shadow overflow-y-auto">
                        <Table data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
