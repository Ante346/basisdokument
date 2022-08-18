export enum UserRole {
  Plaintiff = "Kläger",
  Defendant = "Beklagter",
  Judge = "Richter",
}

export interface IEntry {
  id: string;
  version: number;
  text: string;
  author: string;
  role: "Kläger" | "Beklagter";
  section_id: string;
  associated_entry?: string;
}

export default interface IPropsHeader {
  color: { id: string; colorCode: string; label: string };
  tool: { id: string; title: string };
  headerContext: {
    caseId: string;
    username: string;
    userParty: string;
    showDropdownHeader: Boolean;
    showColumnView: Boolean;
    getCurrentTool: { id: string; title: string };
    currentColorSelection: { id: string; colorCode: string; label: string };
    searchbarValue: string;
    highlighterData: { red: boolean; orange: boolean; yellow: boolean; green: boolean; blue: boolean; purple: boolean };
    hideEntriesHighlighter: boolean;
    hideElementsWithoutSpecificVersion: boolean;
    colorSelection: { id: string; colorCode: string; label: string }[];
    versionHistory: { author: string; role: string; timestamp: string }[];
    selectedVersion: number;
    sectionList: { id: string; title_plaintiff: string }[];
    resetPrivateSorting: any;
    openOnboarding: any;
    downloadBasisdokument: any,
    reloadPageAndSave: any,
    reloadPageAndDoNotSave: any,
    setUserParty: React.Dispatch<React.SetStateAction<string>>;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setSectionList: React.Dispatch<React.SetStateAction<{ id: string; title_plaintiff: string }[]>>;
    setSelectedVersion: React.Dispatch<React.SetStateAction<number>>;
    setVersionHistory: React.Dispatch<React.SetStateAction<{ author: string; role: string; timestamp: string }[]>>;
    selectedSorting: string;
    setColorSelection: React.Dispatch<React.SetStateAction<{ id: string; colorCode: string; label: string }[]>>;
    setShowColumnView: React.Dispatch<React.SetStateAction<Boolean>>;
    setCaseId: React.Dispatch<React.SetStateAction<string>>;
    setSearchbarValue: React.Dispatch<React.SetStateAction<string>>;
    setShowDropdownHeader: React.Dispatch<React.SetStateAction<Boolean>>;
    setHighlighterData: React.Dispatch<React.SetStateAction<{ red: boolean; orange: boolean; yellow: boolean; green: boolean; blue: boolean; purple: boolean }>>;
    setHideEntriesHighlighter: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedSorting: React.Dispatch<React.SetStateAction<string>>;
    setHideElementsWithoutSpecificVersion: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentColorSelection: React.Dispatch<React.SetStateAction<{ id: string; colorCode: string }>>;
    setCurrentTool: React.Dispatch<React.SetStateAction<{ id: string; title: string }>>;
  };
}
