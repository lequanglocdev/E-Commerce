/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { IoIosArrowForward } from "react-icons/io";
const Breadcrumb = ({ title, category }) => {
  const routes = [
    { path: "/:category", breadcrumb: category },
    { path: "/", breadcrumb: "Home" },
    { path: "/:category/:pid/:title", breadcrumb: title },
  ];
  const breadcrumb = useBreadcrumbs(routes);
  // console.log(breadcrumb)
  return (
    <div className="flex items-center" >
      {breadcrumb
        ?.filter((el) => !el.match.route === false)
        // eslint-disable-next-line no-unused-vars
        .map(({ match, breadcrumb }, index, self) => (
          // eslint-disable-next-line react/jsx-key
          <Link  className="flex items-center">
            <span>{breadcrumb}</span>
            <IoIosArrowForward/>
          </Link>
        ))}
    </div>
  );
};

export default Breadcrumb;
