// assets
import { ProjectOutlined } from '@ant-design/icons';

// icons
const icons = { ProjectOutlined };

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

export const Register = {
    id: '0',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: '/authentication/Register',
            title: '회원가입',
            subtitle: 'Register',
            type: 'item',
            url: '/authentication/Register',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};

export const Register_Step = {
    id: '1',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: '/authentication/Register_Step',
            title: '회원가입',
            subtitle: 'Register Step',
            type: 'item',
            url: '/authentication/Register_Step',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};

export const Greeting = {
    id: '3',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: '/contents/Greeting',
            title: '인사말',
            subtitle: 'Greeting',
            type: 'item',
            url: '/contents/Greeting',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};

export const Groups = {
    id: '4',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: '/contents/Groups',
            title: '조직도',
            subtitle: 'Groups',
            type: 'item',
            url: '/contents/Groups',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};

export const Facility = {
    id: '5',
    title: 'Navigation',
    type: 'Facility',
    children: [
        {
            id: '/contents/Facility',
            title: '교육시설',
            subtitle: 'Facility',
            type: 'item',
            url: '/contents/Facility',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};

export const Directions = {
    id: '6',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: '/contents/Directions',
            title: '오시는 길',
            subtitle: 'Directions',
            type: 'item',
            url: '/contents/Directions',
            icon: icons.ProjectOutlined,
            breadcrumbs: true
        }
    ]
};
