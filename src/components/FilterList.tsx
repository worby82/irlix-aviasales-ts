import FilterItem from "./FilterItem";

import filterArray from "../utils/filterArray";
import { filterList } from "../utils/bem";
import "../css/filter-list.css"

import { filterListProps, item } from "../types";

const FilterList = ({ tickets, stop }: filterListProps) => {
    return (
        <ul className={filterList()}>
            {
                filterArray.map((item: item) => {
                    return <FilterItem
                        key={item.value}
                        value={item.value}
                        text={item.name}

                        tickets={tickets}
                        stop={stop}
                    />
                })
            }
        </ul>
    );
}

export default FilterList;