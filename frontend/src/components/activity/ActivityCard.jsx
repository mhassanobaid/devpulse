import activityConfig from "./activityConfig";
import { motion } from "framer-motion";
import { formatRelativeTime } from "../../utils/formatRelativeTime";
import {
    cardVariants,
} from "./animations";

function ActivityCard({ activity }) {

  const config = activityConfig[activity.type];

  const Icon = config?.icon;

  return (

    <motion.article
      variants={cardVariants}
      className="relative pl-14"
    >

      {/* Timeline Node */}

      <motion.div
        initial={{
            scale: 0,
        }}

        animate={{
            scale: 1,
        }}

        transition={{
            delay: 0.25,
        }}

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

      <motion.div

        whileHover={{
            y: -4,
            scale: 1.01,
        }}

        transition={{
            duration: 0.2,
        }}

        className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
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

          <motion.div

            whileHover={{
              rotate: 8,
            }}

              transition={{
                  duration: 0.2,
              }}

              >

                  <Icon
                      size={22}
                      className={config.iconColor}
                  />

            </motion.div>

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

      </motion.div>

    </motion.article>

  );

}

export default ActivityCard;
