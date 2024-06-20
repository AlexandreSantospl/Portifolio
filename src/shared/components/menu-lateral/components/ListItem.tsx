import { Icon, ListItemButton, ListItemIcon, ListItemText, ListItem } from "@mui/material";

interface IListItemProps {
    icone: string;
    text: string;
    onClick?: () => void;
}

export const UseListItem: React.FC<IListItemProps> = ({ text, icone, onClick }) => {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Icon>{icone}</Icon>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}