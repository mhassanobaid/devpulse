import ActivityCard from "./ActivityCard";

function ActivityFeed({ activities }) {

  return (

    <section>

      <h2>

        Activity Feed

      </h2>

      {

        activities.map(activity => (

          <ActivityCard
            key={activity.id}
            activity={activity}
          />

        ))

      }

    </section>

  );

}

export default ActivityFeed;
