import activityConfig from "./activityConfig";

function ActivityCard({ activity }) {

  const config = activityConfig[activity.type];

  const Icon = config?.icon;

  return (

    <article className="relative pl-14">

      {/* Timeline Circle */}

      <div
        className="
          absolute
          left-3
          top-2
          h-4
          w-4
          rounded-full
          border-4
          border-white
          bg-slate-400
        "
      />

      {/* Card */}

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
        "
      >

        <div className="flex items-center gap-3">

          {Icon && (
            <Icon
              size={20}
              className="text-slate-700"
            />
          )}

          <h3
            className="
              font-semibold
              text-slate-900
            "
          >
            {activity.description}
          </h3>

        </div>

        <div className="mt-4 space-y-1">

          <p
            className="
              text-sm
              font-medium
              text-slate-700
            "
          >
            {activity.developer}
          </p>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            {activity.repository}
          </p>

          <p
            className="
              text-xs
              text-slate-400
            "
          >
            {activity.timestamp}
          </p>

        </div>

      </div>

    </article>

  );

}

export default ActivityCard;
