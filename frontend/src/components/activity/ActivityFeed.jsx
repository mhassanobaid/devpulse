import ActivityCard from "./ActivityCard";

function ActivityFeed({ activities }) {
  return (
    <section>

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-xl font-semibold text-slate-900">
          Activity Feed
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest engineering events
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}

        <div
          className="
            absolute
            left-5
            top-0
            h-full
            w-px
            bg-slate-200
          "
        />

        <div className="space-y-8">

          {activities.map((activity) => (

            <ActivityCard
              key={activity.id}
              activity={activity}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default ActivityFeed;
