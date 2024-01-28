import Switcher from "@options/components/common/switcher/switcher";
import Tooltip from "@options/components/common/tooltip/tooltip";
import Icon from "@options/components/common/icon/icon";
import { ListHeader, ListItems } from "@options/components/common/list/list";
import { IconsMap, PageName } from "@/models/formFieldModel";
import { Link } from "react-router-dom";

export const LIST_HEADERS: ListHeader[] = [
  {
    title: "Name",
    render: function () {
      return this.title;
    },
  },
  {
    title: "Type",
    render: function () {
      return this.title;
    },
  },
  {
    title: "Source",
    render: function () {
      return this.title;
    },
  },
  {
    title: "Last Matched",
    render: function () {
      return this.title;
    },
  },
  {
    title: "Status",
    render: function () {
      return this.title;
    },
  },
  {
    title: "Actions",
    classes: "flex justify-end",
    render: function () {
      return this.title;
    },
  },
];

export const LIST_ITEMS: ListItems[] = [
  {
    field: "name",
    render: function (item, handlers) {
      return handlers?.cutString(item[this.field]);
    },
  },
  {
    field: "pageType",
    render: function (item) {
      return (
        <>
          <span className="w-[18px]">{IconsMap[item[this.field]]}</span>
          <div>{PageName[item[this.field]]}</div>
        </>
      );
    },
  },
  {
    field: "source",
    render: function (item, handlers) {
      return handlers?.cutString(item[this.field]);
    },
  },
  {
    field: "lastMatchedTimestamp",
    render: function (item, handlers) {
      return handlers?.generateLastMatchedTime(item[this.field]);
    },
  },
  {
    field: "enabled",
    render: function (item, handlers) {
      return <Switcher checked={item[this.field]} onChange={(event) => handlers?.onChangeRuleStatus(event, item.id)} />;
    },
  },
  {
    field: "actions",
    classes: "gap-5 justify-end",
    render: function (item, handlers) {
      return (
        <>
          <Tooltip content="Duplicate Rule">
            <div className="cursor-pointer hover:text-sky-500" onClick={() => handlers?.duplicateRule(item.id)}>
              <Icon name="documentCopy" />
            </div>
          </Tooltip>
          <Tooltip content="Edit Rule">
            <Link className="cursor-pointer hover:text-sky-500" to={`/edit/${item.pageType}/${item.id}`}>
              <Icon name="pencil" />
            </Link>
          </Tooltip>
          <Tooltip content="Delete Rule">
            <div className="cursor-pointer hover:text-red-400" onClick={() => handlers?.handleDelete(item)}>
              <Icon name="trash" />
            </div>
          </Tooltip>
        </>
      );
    },
  },
];
