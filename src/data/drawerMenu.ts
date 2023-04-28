import TableViewIcon from '@mui/icons-material/TableView';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const subMenu = [
    'Analytics', 'Projects', 'System', 'Monitor', 'Financial', 'Stock', 'Reports'
];

export const menuList = [
    {
        id: '1',
        name: 'Dashboards',
        Icon: HomeOutlinedIcon,
        list1: subMenu,
    },
    {
        id: '2',
        name: 'Widgets',
        Icon: AppsOutlinedIcon,
    },
    {
        id: '3',
        name: 'Cards',
        Icon: ContentCopyOutlinedIcon,
        list1: subMenu,
    },
    {
        id: '4',
        name: 'Layouts',
        Icon: ViewSidebarOutlinedIcon,
        list1: subMenu,
    },
    {
        id: '5',
        name: 'Interface',
        Icon: BorderColorIcon,
        list1: subMenu,
    },
    {
        id: '5',
        name: 'Graphs',
        Icon: CameraOutlinedIcon,
        list1: subMenu,
    },
    {
        id: '5',
        name: 'Forms',
        Icon: InsertDriveFileOutlinedIcon,
        list1: subMenu,
    },
    {
        id: '5',
        name: 'Tables',
        Icon: TableViewIcon,
        list1: subMenu,
    },
];

