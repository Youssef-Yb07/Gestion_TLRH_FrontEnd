import { NavItem } from './nav-item/nav-item';
//managerRH
export const navItems1: NavItem[] = [
    {
        navCap: 'Espace ManagerRH',
    },
    {
        navCap: 'Listing & update',
    },
    {
        displayName: 'collaborateurs',
        iconName: 'mood-smile',
        route: '/dashboard/collaborateurs',
    },
  
    {
        navCap: 'Reporting',
    },
    {
        displayName: 'salaryEvolution',
        iconName: 'mood-smile',
        route: '/dashboard/salaryEvolution',
    }, {
        displayName: 'VisualizeRatio',
        iconName: 'tooltip',
        route: '/dashboard/VisualizeRatio',
    }, {
        displayName: 'MaleFemaleRatio',
        iconName: 'list',
        route: '/dashboard/MaleFemaleRatio',
    }, {
        displayName: 'PourcentageEcole',
        iconName: 'lock',
        route: '/dashboard/PourcentageEcole',
    }, {
        displayName: 'TurnOver',
        iconName: 'aperture',
        route: '/dashboard/TurnOver',
    },
    {
        displayName: 'recruitment',
        iconName: 'user-plus',
        route: '/dashboard/recruitment',
    }
]