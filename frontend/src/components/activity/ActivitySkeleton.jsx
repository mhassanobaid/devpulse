function ActivitySkeleton() {

    return (

        <div className="relative pl-14">

            <div
                className="
                    absolute
                    left-3
                    top-7

                    h-4
                    w-4

                    rounded-full

                    bg-slate-200
                "
            />

            <div
                className="
                    rounded-2xl

                    border

                    border-slate-200

                    bg-white

                    p-6

                    shadow-sm

                    animate-pulse
                "
            >

                <div className="flex gap-4">

                    <div
                        className="
                            h-12
                            w-12

                            rounded-xl

                            bg-slate-200
                        "
                    />

                    <div className="flex-1">

                        <div
                            className="
                                h-3

                                w-20

                                rounded

                                bg-slate-200
                            "
                        />

                        <div
                            className="
                                mt-3

                                h-5

                                w-48

                                rounded

                                bg-slate-200
                            "
                        />

                    </div>

                </div>

                <div className="mt-6 space-y-3">

                    <div
                        className="
                            h-4

                            w-24

                            rounded

                            bg-slate-200
                        "
                    />

                    <div
                        className="
                            h-4

                            w-40

                            rounded

                            bg-slate-200
                        "
                    />

                </div>

            </div>

        </div>

    );

}

export default ActivitySkeleton;
