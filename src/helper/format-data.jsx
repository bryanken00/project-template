import { motion } from "framer-motion";
import moment from "moment";
import { Link } from "react-router-dom";

export const arrayToSelectDropdown = (arr, keyValue, keyLabel) => {
  return arr.map((obj) => ({ label: obj[keyLabel], value: obj[keyValue] }));
};

export const getKeyFromValue = (array, value) => {
  return Object.keys(array).find((key) => array[key] === value);
};

export const getAge = (birthdate) => {
  return moment().diff(birthdate, "years");
};

export const formatNavigations = (arr) => {
  return Object.entries(arr)
    .reduce((acc, [key, data]) => {
      const newData = data.map((obj) => ({ ...obj, module: key }));
      acc.push(newData);
      return acc;
    }, [])
    .flat();
};

export const getItem = (label, key, icon, children, ...props) => {
  return {
    key,
    icon,
    children,
    label,
    ...props,
  };
};

export const generateItems = (arr = []) => {
  return arr
    .filter((obj) => obj?.isShow)
    .map((obj) => {
      const isParent = Array.isArray(obj.children) && obj.children.length > 0;

      const MotionLink = motion(Link);

      const label = isParent ? (
        <motion.span
          whileHover={{
            paddingLeft: "0.5rem",
            color: "currentColor",
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {obj.label}
        </motion.span>
      ) : (
        <MotionLink
          to={obj.link}
          className="text-inherit no-underline block"
          whileHover={{
            paddingLeft: "0.5rem",
            color: "currentColor",
            scale: 1.05,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {obj.label}
        </MotionLink>
      );

      return getItem(
        label,
        obj.link,
        <span>{obj.icon}</span>,
        isParent ? generateItems(obj.children) : undefined
      );
    });
};
