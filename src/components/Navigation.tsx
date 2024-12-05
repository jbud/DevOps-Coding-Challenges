import { Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { Challenges } from "../challenges/challenges";

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
                fontFamily: "JetBrainsMono",
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
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            role="navigation"
            variant="scrollable"
            scrollButtons="auto"
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
            {/*{props.challengeSelect.outputText.map((x) => (*/}
            {Challenges.map((x: any, index: any) => (
                <LinkTab key={index} label={x.title} href={"/chal/" + index} />
            ))}
        </Tabs>
    );
};

export default Navigation;
