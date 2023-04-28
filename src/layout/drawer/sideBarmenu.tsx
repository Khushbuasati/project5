import React, { useState } from 'react';
import {
    Box, List, Divider, ListItem, ListItemButton,
    ListItemIcon, ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SubText from '../../UIComponents/subText';
import { menuList } from '../../data/drawerMenu';
import { useTheme } from '@mui/material/styles';

export default function SideBarMenu() {
    const theme = useTheme();
    const [menuOpenIndex, setMenuOpenIndex] = useState<number>(0);
    const [selectedMenuItemDetails, setSelectedMenuItemDetails] = useState<any>({ parentMenuIndex: 0, subMenuIndex: 3 });

    const handleMenuChange = (index: number) => {
        setMenuOpenIndex((prev: number) => prev === index ? -1 : index);
    };

    const handleMenuItemChange = (parentIndex: number, subMenuItemIndex: number) => {
        setSelectedMenuItemDetails({
            parentMenuIndex: parentIndex, subMenuIndex: subMenuItemIndex
        });
    };

    const isSelected = (index: number, subItemIndex: number) => {
        return index === selectedMenuItemDetails.parentMenuIndex && subItemIndex === selectedMenuItemDetails.subMenuIndex;
    }

    return (
        <Box sx={{ overflow: 'auto', marginTop: '1rem' }}>
            <List sx={{ overflow: 'auto', height: '72vh' }}>
                {menuList.map((item: any, index: number) => (
                    <>
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton onClick={() => handleMenuChange(index)} selected={menuOpenIndex === index}>
                                <ListItemIcon sx={{ minWidth: '29px' }}>
                                    <item.Icon fontSize="small" color={theme.palette.primary.light} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <SubText details={item.name}
                                            style={{ fontSize: '14px' }}
                                        />} />
                                {!item.list1 ? null : menuOpenIndex > -1 && menuOpenIndex === index ? <ExpandLessIcon fontSize='small' /> : <ExpandMoreIcon fontSize='small' />}
                            </ListItemButton>
                        </ListItem>
                        {
                            menuOpenIndex > -1 && menuOpenIndex === index && item.list1?.map((listItem: any, subItemIndex: number) => (
                                <>
                                    <ListItem key={item.id}
                                        sx={{
                                            marginBottom: '-18px',
                                            borderLeft: isSelected(index, subItemIndex) ? `4px solid ${theme.palette.blue.main}` : 'none',
                                        }}
                                    >
                                        <ListItemButton onClick={() => handleMenuItemChange(index, subItemIndex)}
                                            sx={{ paddingTop: '3px', paddingBottom: '3px' }}
                                        >
                                            <ListItemText primary={<SubText details={listItem}
                                                style={{
                                                    color: isSelected(index, subItemIndex) ? theme.palette.primary.main : theme.palette.primary.light,
                                                    fontWeight: isSelected(index, subItemIndex) ? 'bold' : 'normal',
                                                    fontSize: '14px'
                                                }}
                                            />} />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))
                        }
                    </>
                ))}
            </List>
            <Divider />
        </Box>
    );
}