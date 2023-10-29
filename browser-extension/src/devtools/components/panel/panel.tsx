import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@devtools-ds/themes';
import NetworkEventTable from '../networkEventTable/networkEventTable';
import NetworkEventInfo from '../networkEventInfo/networkEventInfo';
import Split from '../split/split';
import './panel.css';
import Request = chrome.devtools.network.Request;

const Panel: FC = (): ReactElement => {
  const [networkEvents , setNetworkEvents] = useState<Request[]>([]);
  const [selectedNetworkId, setSelectedNetworkId] = useState<string>('');

  const onRequestFinished = useCallback((networkEvent: Request) => {
    setNetworkEvents(networkEvents => [...networkEvents, networkEvent]);
  }, []);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(onRequestFinished);
    return () => {
      chrome.devtools.network.onRequestFinished.removeListener(onRequestFinished);
    }
  }, []);

  return (
    <ThemeProvider theme='chrome' colorScheme='dark'>
      <div className="w-full aspect-square bg-neutral-800">
        <Split>
          <NetworkEventTable
            selectedNetworkId={selectedNetworkId}
            onSelectNetworkId={setSelectedNetworkId}
            networkEvents={networkEvents}
          />
          {selectedNetworkId ? <NetworkEventInfo /> : null}
        </Split>
      </div>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(<Panel />, document.getElementById("root"));
