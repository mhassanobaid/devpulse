import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from
"../components/layout/DashboardLayout";


function Dashboard() {

  return ( 
    <DashboardLayout>
      <main
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-4
          sm:px-6
          sm:py-6
          lg:px-8
          lg:py-8
          space-y-8
        "
      >
        {/* Stats */}
        <section>
          <div
            className="
              rounded-3xl
              bg-white
              p-5
              sm:p-6
              lg:p-8
              shadow-sm
              min-h-[140px]
            "
          >
            Stats
          </div>
        </section>

        {/* Bottom Section */}
        <section
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          <div
            className="
              lg:col-span-2
              rounded-3xl
              bg-white
              p-5
              sm:p-6
              lg:p-8
              shadow-sm
              min-h-[420px]
            "
          >
            Repository Section
          </div>

          <div
            className="
              rounded-3xl
              bg-white
              p-5
              sm:p-6
              lg:p-8
              shadow-sm
              min-h-[420px]
            "
          >
            Activity Feed
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default Dashboard;
