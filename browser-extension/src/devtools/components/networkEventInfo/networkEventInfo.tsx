// import { FC, ReactElement } from "react";

// const NetworkEventInfo: FC = (): ReactElement => {
//   return <div>NetworkEventInfo</div>
// }

// export default NetworkEventInfo;



import { FC, ReactElement, memo, useCallback, useState } from 'react';
import { Navigation } from '@devtools-ds/navigation';


const ResourceDetailsTabs: FC = (): ReactElement => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  console.log('currentTabIndex', currentTabIndex);

  const onTabNavigated = useCallback((tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  }, []);

  return (
    <div className="rq-resource-details">
      {/* @ts-ignore */}
      <Navigation onChange={onTabNavigated}>
        <Navigation.Controls className="rq-resource-details-header">
          <Navigation.Left>
            <Navigation.Button
              icon={<span>&times;</span>}
              aria-label="Close"
              title="Close"
              onClick={close}
            />
          </Navigation.Left>
          <Navigation.TabList>
            <Navigation.Tab key={1} id='1'>
              label
            </Navigation.Tab>
          </Navigation.TabList>
        </Navigation.Controls>
        <Navigation.Panels>
          <Navigation.Panel id={1} key={'1'}>
            asdsa
          </Navigation.Panel>
        </Navigation.Panels>
      </Navigation>
    </div>
  );
};

export default memo(ResourceDetailsTabs);
