import { NavItem } from './nav-item/nav-item';

export const navItems2: NavItem[] = [
    {
        navCap: 'Espace Actors ',
    },
   
    {
        displayName: 'collaborateurs',
        iconName: 'mood-smile',
        route: '/dashboard/listofcollaboratorstoupdate',
    },  {
        displayName: 'managers',
        iconName: 'layout-dashboard',
        route: '/dashboard/managers',
    }, {
        displayName: 'nonManagers',
        iconName: 'rosette',
        route: '/dashboard/nonManagers',
    }, 
    {
        displayName: 'ManagersRH-Activated',
      iconName: 'user-plus',
        route: '/dashboard/ManagersRH/Activated',
    },
    {
    displayName: 'ManagersRH-Desactivated',
     iconName: 'user-plus',
    route: '/dashboard/ManagersRH/Desactivated',
    },
    {
        navCap: 'reporting',
    }, {
        displayName: 'PourcentageEcole',
        iconName: 'lock',
        route: '/dashboard/PourcentageEcole',
    },
    {
        displayName: 'diplomeRatio',
        iconName: 'aperture',
        route: '/dashboard/diplomeRatio',
    }, {
        displayName: 'VisualizeRatio',
        iconName: 'tooltip',
        route: '/dashboard/VisualizeRatio',
    }, {
        displayName: 'MaleFemaleRatio',
        iconName: 'list',
        route: '/dashboard/MaleFemaleRatio',
    }, {
        displayName: 'TurnOver',
        iconName: 'aperture',
        route: '/dashboard/TurnOver',
    }, 
    {
        displayName: 'recruitment',
        iconName: 'user-plus',
        route: '/dashboard/recruitment',
    },
    

]