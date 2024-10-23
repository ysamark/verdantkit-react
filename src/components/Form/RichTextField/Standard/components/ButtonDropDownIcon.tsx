import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useDropDown } from "~/components/DropDown/hooks";

export const ButtonDropDownIcon = () => {
  const dropDown = useDropDown();

  if (!(dropDown && typeof dropDown.show === "boolean")) {
    return null;
  }

  const ButtonDropdownIcon = dropDown.show ? FaAngleUp : FaAngleDown;

  return (
    <div className="inline-flex">
      <i className="text-[7px]">
        <ButtonDropdownIcon />
      </i>
    </div>
  );
};
