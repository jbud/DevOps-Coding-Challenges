import { Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;
}

interface NavProps {
    page: string | undefined;
}
function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            sx={{
                color: "aliceblue",
                "&:hover": {
                    color: "#40a9ff",
                    opacity: 1,
                },
                "&.Mui-selected": {
                    color: "#1890ff",
                },
                "&.Mui-focusVisible": {
                    backgroundColor: "#d1eaff",
                },
            }}
            aria-current={props.selected && "page"}
            {...props}
        />
    );
}
const Navigation = (props: NavProps) => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (props.page) setValue(parseInt(props.page));
    }, [props]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== "click" ||
            (event.type === "click" &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ))
        ) {
            setValue(newValue);
        }
    };
    return (
        <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            role="navigation"
            sx={{
                "&:hover": {
                    color: "#40a9ff",
                    opacity: 1,
                },
                "&.Mui-selected": {
                    color: "#1890ff",
                },
                "&.Mui-focusVisible": {
                    backgroundColor: "#d1eaff",
                },
            }}
        >
            <LinkTab label="Addition" href="/chal/0" />
            <LinkTab label="Sum of Squares" href="/chal/1" />
        </Tabs>
    );
};

export default Navigation;