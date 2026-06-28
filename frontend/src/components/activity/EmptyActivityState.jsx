import { Inbox } from "lucide-react";

function EmptyActivityState() {

    return (

        <div
            className="
                flex

                flex-col

                items-center

                justify-center

                py-16

                text-center
            "
        >

            <div
                className="
                    rounded-full

                    bg-slate-100

                    p-5
                "
            >

                <Inbox
                    size={32}
                    className="text-slate-500"
                />

            </div>

            <h3
                className="
                    mt-5

                    text-lg

                    font-semibold

                    text-slate-800
                "
            >
                No recent activity
            </h3>

            <p
                className="
                    mt-2

                    text-sm

                    text-slate-500
                "
            >
                Engineering events will appear here once activity is available.
            </p>

        </div>

    );

}

export default EmptyActivityState;
