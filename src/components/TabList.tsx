import TabItem from "./TabItem"

import tabArray from "../utils/tabArray";
import { tabList } from "../utils/bem";
import "../css/tab-list.css"

import { item } from "../types";

const TabList = () => {

    return (
        <div className={tabList()}>
            {
                tabArray.map((item: item, id: number) => {
                    return <TabItem
                        key={id}
                        value={item.value}
                        name={item.name}
                    />
                })
            }
        </div>
    )
}

export default TabList;