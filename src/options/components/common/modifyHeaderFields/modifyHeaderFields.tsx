import React, { useMemo } from 'react';
import { HeaderModificationType } from 'models/formFieldModel';
import Input from '../input/input';
import Select from '../select/select';
import RemoveSVG  from 'assets/icons/remove.svg';
import HeaderOperation = chrome.declarativeNetRequest.HeaderOperation
import InputAutocomplete from '../InputAutocomplete/InputAutocomplete';
import HTTPHeaders from '../../forms/modifyHeader/HTTPHeaders';

const ModifyHeaderFields = ({ headers, onChangeHeader, onRemoveHeader, error }) => {
  const modifyHeaderActionOptions = useMemo(() => Object.entries(HeaderOperation).reduce((previous: any, [value, label]: any) => {
    previous.push({value: value.toLowerCase(), label})
    return previous;
  }, []), []);

  const headerModificationTypeOptions = useMemo(() => Object.entries(HeaderModificationType).reduce((previous: any, [value, label]: any) => {
    previous.push({value: value.toLowerCase(), label})
    return previous;
  }, []), []);

  return <>
    {headers.map((header, index) => {
      return (
        <div key={index} className="flex items-center mt-5 w-3/3 gap-5">
          <span className="mr-4">Operator</span>
          <Select
            options={modifyHeaderActionOptions}
            name="operation"
            value={header.operation}
            onChange={event => onChangeHeader(event, index)}
            classes="flex-[1]"
            error={error?.operation}
          />
          <Select
            options={headerModificationTypeOptions}
            name="type"
            value={header.type}
            onChange={event => onChangeHeader(event, index)}
            classes="flex-[1]"
            error={error?.type}
          />
          <div className='flex-[2]'>
            <InputAutocomplete
              inputProps={{
                name: "header",
                placeholder: "Key",
                value: header.header,
                onChange: event => onChangeHeader(event, index),
                classes: "flex-[2]"
              }}
              list={HTTPHeaders[header.type]}
            />
          </div>
          <Input
            name="value"
            placeholder="Value"
            value={header.value}
            onChange={event => onChangeHeader(event, index)}
            disabled={header.operation === HeaderOperation.REMOVE}
            hidden={header.operation === HeaderOperation.REMOVE}
            classes="flex-[2]"
          />
          <div className="cursor-pointer" onClick={e => onRemoveHeader(e, index)}><span className="w-[24px] inline-block"><RemoveSVG /></span></div>
        </div>
      )
    })}
  </>
}

export default ModifyHeaderFields;