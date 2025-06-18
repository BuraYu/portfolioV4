import type { FunctionComponent } from "react";
import { Link } from "react-router";

const AllProjectsPage: FunctionComponent = () => {
  return (
    <div className="min-h-screen pt-16 flex justify-center items-center">
      <h1 className="text-white">AllProjectsPage</h1>
      <Link to="/" className="text-white p-4">
        Back
      </Link>
    </div>
  );
};

export default AllProjectsPage;
