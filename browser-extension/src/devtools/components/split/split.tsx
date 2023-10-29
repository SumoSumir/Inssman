import { FC, ReactElement, memo, useCallback, useEffect } from "react";
import ReactSplit from 'react-split'
import './split.css'

type Props = {
  children: [ReactElement, ReactElement | null];
}

const Split: FC<Props> = ({ children }): ReactElement => {
  const leftPaneSize = 50;

  const positionDragger = useCallback(([leftSize]: [number]) => {
    const dragger = document.querySelector('.split-pane .gutter') as HTMLDivElement;
    if (dragger) {
      dragger.style.position = 'absolute';
      dragger.style.left = `${leftSize}%`;
    }
  }, []);

  useEffect(() => {
    positionDragger([leftPaneSize]);
  }, [positionDragger, leftPaneSize]);

  if(!children[1]) {
    return children[0];
  }

  return (
      <ReactSplit
          direction="horizontal"
          cursor="ew-resize"
          sizes={[leftPaneSize, 100 - leftPaneSize]}
          minSize={[200, 200]}
          gutterSize={6}
          gutterAlign="center"
          snapOffset={30}
          onDragEnd={positionDragger}
          className="flex w-full h-full"
        >
          {children}
      </ReactSplit>
  )
}

export default memo(Split);
