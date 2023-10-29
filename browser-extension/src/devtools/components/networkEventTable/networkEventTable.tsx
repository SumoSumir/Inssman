import { Dispatch, FC, ReactElement, SetStateAction, useCallback, useEffect, useState } from "react";
import { Table } from "@devtools-ds/table";
import Request = chrome.devtools.network.Request;

type Props = {
  onSelectNetworkId: Dispatch<SetStateAction<string>>;
  selectedNetworkId: string;
  networkEvents: Request[];
}

const NetworkEventTable: FC<Props> = ({ onSelectNetworkId, selectedNetworkId, networkEvents = [] }): ReactElement => {
  return <Table selected={selectedNetworkId} onSelected={onSelectNetworkId}>
    <Table.Head>
      <Table.Row>
        <Table.HeadCell>URL</Table.HeadCell>
        {!selectedNetworkId ?
          <>
            <Table.HeadCell>Method</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Size</Table.HeadCell>
            <Table.HeadCell>Time</Table.HeadCell>
          </> : null
        }
      </Table.Row>
    </Table.Head>
    <Table.Body>
        {networkEvents.map((networkEvent, index) => (
        <Table.Row key={index} id={`${index}`}>
            <Table.Cell>{networkEvent.request.url}</Table.Cell>
            {!selectedNetworkId ? <>
              <Table.Cell>{networkEvent.request.method}</Table.Cell>
              <Table.Cell>{networkEvent.response.status}</Table.Cell>
              <Table.Cell>{networkEvent.response.content.mimeType}</Table.Cell>
              <Table.Cell>size</Table.Cell>
              <Table.Cell>time</Table.Cell>
            </> : null}
        </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
}

export default NetworkEventTable;
