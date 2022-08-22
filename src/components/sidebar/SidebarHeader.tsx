import { Bookmarks, List, Notepad, Scales } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import cx from "classnames";
import { Button } from "../Button";

interface SidebarProps {
  setActiveSidebar: Dispatch<SetStateAction<string>>;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const buttons = [
  {
    name: "Notes",
    icon: <Notepad size={18} />,
  },
  {
    name: "Hints",
    icon: <Scales size={18} />,
  },
  {
    name: "Bookmarks",
    icon: <Bookmarks size={18} />,
  },
];

export const SidebarHeader: React.FC<SidebarProps> = ({
  setActiveSidebar,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const [activeButton, setActiveButton] = useState<string>(buttons[0].name);

  return (
    <div
      className={cx(
        "flex flex-row h-14 border-b-[0.5px] border-lightGrey pt-3 pb-2 px-4",
        {
          "justify-between": sidebarOpen,
          "justify-end": !sidebarOpen,
        }
      )}
    >
      <div
        className={cx("transition duration-300", {
          "rotate-90": sidebarOpen,
          "rotate-0": !sidebarOpen,
        })}
      >
        <Button
          key={"sidebarActive"}
          bgColor="transparent"
          size="sm"
          textColor="font-bold text-darkGrey"
          hasText={false}
          alternativePadding="py-1.5 px-1.5"
          icon={<List size={18} />}
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
      </div>

      <div
        className={cx("flex flex-row gap-3", {
          hidden: !sidebarOpen,
        })}
      >
        {buttons.map((button) => (
          <Button
            key={button.name}
            bgColor={
              button.name === activeButton ? "bg-offWhite" : "transparent"
            }
            size="sm"
            textColor="font-bold text-darkGrey"
            icon={button.icon}
            hasText={false}
            alternativePadding="py-1.5 px-2"
            onClick={() => {
              setActiveButton(button.name);
              setActiveSidebar(button.name);
            }}
          />
        ))}
      </div>
    </div>
  );
};
