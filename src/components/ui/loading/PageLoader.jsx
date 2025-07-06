import { ClipLoader } from "react-spinners";

const PageLoader = () => (
  <div className="w-full h-full flex justify-center items-center">
    <ClipLoader size={80} color="#1bb225" />
  </div>
);

export default PageLoader;
