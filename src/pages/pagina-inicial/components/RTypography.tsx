import { Typography, useMediaQuery, useTheme } from "@mui/material"

interface IRTypography {
    text?: string;
    top?: string;
    bottom?: string;
    textColor?: string;
    textH?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
    smTextH?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
    mdTextH?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline";
    WrapX?: 'wrap' | 'nowrap';
}

export const RTypography: React.FC<IRTypography> = ({
    text,
    textH = 'h4',
    top,
    bottom,
    textColor,
    smTextH,
    mdTextH,
    WrapX = 'wrap', }) => {

    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={smDown ? smTextH : mdDown ? mdTextH : textH} whiteSpace={WrapX} textOverflow="ellipsis" overflow='hidden' sx={{ marginTop: top, marginBottom: bottom, color: textColor, marginInline: 5 }} >{text}</Typography>
    )
}