import { BookmarkSimple } from "phosphor-react";
import { Bookmark, BookmarkProps } from "./Bookmark";

//TODO: remove this, this is for testing
const bookmarks: BookmarkProps[] = [
  {
    id: "1",
    title: "Lesezeichen 1",
    referenceTo: "12345",
  },
  {
    id: "2",
    title: "Lesezeichen 2",
    referenceTo: "12345",
  },
];

// const bookmarks: BookmarkProps[] = [];

export const SidebarBookmarks = () => {
  return (
    <div className="flex flex-col gap-3 h-full overflow-hidden">
      <div className="text-base font-bold text-darkGrey text-lg pt-4 px-4">
        Lesezeichen
      </div>
      {bookmarks.length <= 0 && (
        <span className="mt-7 text-darkGrey opacity-40 text-center text-sm">
          Indem Sie auf das <BookmarkSimple size={14} className="inline" />
          -Icon bei einem Beitrag klicken, wird dieser unter Ihren Lesezeichen
          gespeichert. Ihre Lesezeichen erscheinen dann in dieser Ansicht und
          sind nur für Sie sichtbar.
        </span>
      )}
      <div className="text-mediumGrey font-bold text-sm p-4">
        {bookmarks.map((hint) => (
          <Bookmark key={hint.id} {...hint}></Bookmark>
        ))}
      </div>
    </div>
  );
};
