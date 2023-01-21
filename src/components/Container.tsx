import React from "react";

import { container } from "../utils/bem";
import "../css/container.css"

const Container = (props: React.PropsWithChildren<{children?: React.ReactNode}>) => {
    return (
        <div className={container()}>{props.children}</div>
    );
}

export default Container;