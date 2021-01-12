import React from 'react';
import {
  useIsPreviewMode,
  useSetDisplayReferenceNodeId,
  useSetInsertMode,
} from '../hooks';

const InsertNew: React.FC<{ parentCellId?: string }> = ({ parentCellId }) => {
  const setInsertMode = useSetInsertMode();

  const isPreviewMode = useIsPreviewMode();

  const setReferenceNodeId = useSetDisplayReferenceNodeId();

  if (isPreviewMode) return null;
  return (
    <div
      className="react-page-cell-insert-new"
      style={{ pointerEvents: 'all', zIndex: 1, overflow: 'hidden' }}
      onClick={(e) => {
        setReferenceNodeId(parentCellId);
        setInsertMode();
      }}
    />
  );
};

export default React.memo(InsertNew);
