import cx from "classnames";
import { useDrop } from "react-dnd";
import { useCase, useSection } from "../../contexts";
import { IDragItemType, UserRole } from "../../types";

interface DroppableColumnProps {
  position: { sectionId: string; rowId: string };
  columnRole: UserRole;
  children: React.ReactNode;
}

export const DroppableColumn: React.FC<DroppableColumnProps> = ({
  position,
  columnRole,
  children,
}) => {
  const { setIndividualEntrySorting } = useCase();
  const { sectionList } = useSection();

  /**
   * Moves an item from one list to another list.
   * @param from Position of the entry being dragged
   * @param to New position the entry is being dropped
   * @param indexOfEntry Index of the entry being dragged
   */
  const moveItem = (
    from: { sectionId: string; rowId: string; column: number },
    to: { sectionId: string; rowId: string },
    indexOfEntry: number
  ) => {
    // Update State
    setIndividualEntrySorting((prevEntrySorting) => {
      const newSorting = { ...prevEntrySorting };

      // Remove dragged item by the rowId
      const rowIndex = newSorting[from.sectionId].findIndex(
        (row) => row.rowId === from.rowId
      );

      const draggedItem = newSorting[from.sectionId][rowIndex].columns[
        from.column
      ].splice(indexOfEntry, 1)[0];

      // Add dragged item to the new rowId
      const newRowIndex = newSorting[to.sectionId].findIndex(
        (row) => row.rowId === to.rowId
      );

      newSorting[to.sectionId][newRowIndex].columns[from.column].push(
        draggedItem
      );

      return newSorting;
    });
  };

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: IDragItemType.ENTRY,
    drop: (_: any, monitor) => {
      const oldPosition = monitor.getItem().position;
      const indexOfItem = monitor.getItem().index;
      moveItem(oldPosition, position, indexOfItem);
    },
    canDrop: (_: any, monitor) => {
      const role = monitor.getItem().role;
      return role === columnRole;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={cx(
        "relative column space-y-4 p-4 border border-gray-300 rounded-lg text-black",
        {
          "bg-blue-600/25": isOver && canDrop,
          "bg-gray-200/50": !isOver,
        }
      )}>
      {children}
    </div>
  );
};
