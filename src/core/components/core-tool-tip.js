import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#e5e7ee",
    color: "#000",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(18),
    padding: 20,
    borderRadius: 7,
  },
}))(Tooltip);

const CoreToolTip = (props) => {
  return (
    <HtmlTooltip title={props.content}>
      <IconButton>
        <InfoIcon color="secondary" />
      </IconButton>
    </HtmlTooltip>
  );
};

export default CoreToolTip;
