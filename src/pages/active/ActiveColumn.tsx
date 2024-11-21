import { Box, Card, Typography } from "@mui/material";
import ActiveColumnCard from "./ActiveColumnCard";
import { ActiveColumnTypes } from "./types";
import { useStyles } from "./useStyles";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ActiveColumn({ label, deals }: ActiveColumnTypes) {
  const [dealsState, setDealsState] = useState(deals);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const styles = useStyles();
  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setDealsState((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <Card sx={styles.SrollebleCard}>
      <Box sx={styles.CardMainBoxStyles}>
        <Typography sx={styles.CardTypographyStyles}>{label}</Typography>
      </Box>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={dealsState}
          strategy={verticalListSortingStrategy}
        >
          <Box sx={styles.CardSecondaryBoxStyles}>
            {dealsState?.map((el) => (
              <ActiveColumnCard key={el.id} {...el} />
            ))}
          </Box>
        </SortableContext>
      </DndContext>
    </Card>
  );
}

export default ActiveColumn;
