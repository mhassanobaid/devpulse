import activityConfig from "./activityConfig";
import { formatRelativeTime } from "../../utils/formatRelativeTime";

function ActivityCard({ activity }) {

  const config = activityConfig[activity.type];

  const Icon = config?.icon;

  return (

    <article className="relative pl-14">

      {/* Timeline Node */}

      <div
        className="
          absolute
          left-3
          top-7
          h-4
          w-4
          rounded-full
          border-4
          border-white
          ${config.markerColor}
        "
      />

      {/* Card */}

      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-lg
        "
      >

        {/* Header */}

        <div className="flex items-start gap-4">

          {/* Icon */}

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-xl

              ${config.iconBackground}
            "
          >

            {Icon && (

              <Icon
                size={22}
                className={config.iconColor}
              />

            )}

          </div>

          {/* Title */}

          <div>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-widest
                text-slate-400
              "
            >
              {config.title}
            </p>

            <h3
              className="
                mt-1
                text-base
                font-semibold
                text-slate-900
              "
            >
              {activity.description}
            </h3>

          </div>

        </div>

        {/* Body */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >

          <div>

            <p
              className="
                font-medium
                text-slate-800
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

          </div>

          <p
            className="
              text-xs
              text-slate-400
            "
          >
            {formatRelativeTime(activity.timestamp)}
          </p>

        </div>

      </div>

    </article>

  );

}

export default ActivityCard;
