import styled from "styled-components";
import GeneralAdditionalTab from "./settingsAdditionalTabs/generalAdditionalTab/generalAdditionalTab";


interface Props{
    settingsNavigationType: "general" | "collaborations" | "moderationOptions" | "branches" | "tags" | "rules" | "actions" | "emailNotifications";
}

function NavigationWrapperDisplaying(props:Props){
    switch (props.settingsNavigationType) {
        case "general":
            return <GeneralAdditionalTab/>
        default:
            return <></>
    }
}




export default NavigationWrapperDisplaying;