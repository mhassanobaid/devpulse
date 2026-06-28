import activityConfig from "./activityConfig";

function ActivityCard({ activity }) {

  const config = activityConfig[activity.type];

  const Icon = config?.icon;

  return (

    <article>

      <div>

        {Icon && <Icon size={18} />}

      </div>

      <div>

        <h3>

          {activity.description}

        </h3>

        <p>

          {activity.repository}

        </p>

        <small>
          {activity.developer}
        </small>

      </div>

    </article>

  );

}

export default ActivityCard;
