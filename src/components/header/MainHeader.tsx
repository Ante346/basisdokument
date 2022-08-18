import { CaretDown, CaretUp, MagnifyingGlass, PencilSimpleLine, Question, UserCircle } from "phosphor-react";
import { DocumentButton } from "../header/DocumentButton";
import { ColorSelector } from "./ColorSelector";
import { ToolSelector } from "./ToolSelector";

export const MainHeader: React.FC<any> = ({ headerContext }) => {
  const onChangeSearchbar = (e: React.ChangeEvent<HTMLInputElement>) => {
    headerContext.setSearchbarValue(e.target.value);
  };

  return (
    <div className="flex p-3 pl-8 pr-8 justify-between border-b-[0.5px] border-lightGrey">
      {/* actions on the left side */}
      <div className="flex flex-row gap-4 items-center">
        <DocumentButton headerContext={headerContext} />
        <div
          className="flex flex-row justify-center items-center gap-1 bg-offWhite hover:bg-lightGrey rounded-full h-8 pl-2 pr-2 cursor-pointer"
          onClick={() => {
            headerContext.setShowDropdownHeader(!headerContext.showDropdownHeader);
          }}
        >
          <p className="text-sm font-bold">Ansicht</p>
          {headerContext.showDropdownHeader ? <CaretUp size={12} className="text-darkGrey" /> : <CaretDown size={12} className="text-darkGrey" />}
        </div>
        <p className="font-extralight">{headerContext.caseId}</p>
      </div>
      {/* searchbar */}
      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="flex flex-row bg-offWhite rounded-md pl-2 pr-2 h-full items-center">
          <input
            value={headerContext.searchbarValue}
            onChange={(e) => onChangeSearchbar(e)}
            className="bg-offWhite h-full outline-0 min-w-[300px] max-w-[400px] pl-2"
            type="text"
            placeholder="Im Basisdokument suchen..."
          />
          <MagnifyingGlass size={20} weight="bold" className="text-darkGrey ml-1 mr-1" />
        </div>
      </div>
      {/* actions on the right side */}
      <div className="flex flex-row gap-4 justify-end">
        <div className="flex flex-row align-middle justify-center items-center gap-2 bg-offWhite hover:bg-lightGrey rounded-md w-14 h-full cursor-pointer" onClick={headerContext.openOnboarding}>
          <Question size={20} weight="bold" className="text-darkGrey" />
        </div>
        <ColorSelector headerContext={headerContext} />
        <ToolSelector getCurrentTool={headerContext.getCurrentTool} setCurrentTool={headerContext.setCurrentTool} />
      </div>
    </div>
  );
};
