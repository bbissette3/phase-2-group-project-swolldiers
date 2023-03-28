import React from "react";
import WorkoutCard from "./WorkoutCard";

const Favorites = ({ savedWorkouts }) => {
  const likedWorkouts = savedWorkouts.map((workoutDetail) => {
    return <WorkoutCard key={workoutDetail.id} workoutDetail={workoutDetail} />;
  });
  return (
    <div className="favorites">
      <h1>My Workouts</h1>
      <p>{likedWorkouts}</p>
    </div>
  );
};

export default Favorites;
