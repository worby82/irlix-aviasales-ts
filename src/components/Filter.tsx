import React from "react";

import { filter } from "../utils/bem";
import "../css/filter.css"

const Filter = (props: React.PropsWithChildren<{children?: React.ReactNode}>) => {
    return (
        <aside className={filter()}>
            <p className={filter('text')}>Количество пересадок</p>
            {props.children}
        </aside>
    );
}

export default Filter;