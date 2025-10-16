interface CoursePlanButtonProps {
  showCoursePlan: boolean;
  setshowCoursePlan: (showCoursePlan: boolean) => void;
}

const CoursePlanButton = ({showCoursePlan, setshowCoursePlan}: CoursePlanButtonProps) => (
  <button
    className={"btn btn-info"}
    onClick={() => setshowCoursePlan(!showCoursePlan)}
  >
    Course Plan
  </button>
);

export default CoursePlanButton;