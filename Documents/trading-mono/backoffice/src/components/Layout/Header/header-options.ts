import { PrivateRoutes } from "@/constant-definitions";

type Item = {
    path: string;
    label: string;
};

interface Option {
    title: string;
    role: string[];
    items?: Item[];
}

export const headerOptions: Option[] = [
    {
        title: 'Enterprise',
        role: ['Product', 'Management', 'Distribution', 'Art'],
        items: [
            {
                path: PrivateRoutes.PROJECTS,
                label: 'Projects',
            },
            {
                path: PrivateRoutes.KANBAN,
                label: 'Tasks',
            },
            {
                path: 'blogs',
                label: 'Blogs',
            },
        ],
    },
    {
        title: 'Prooving',
        role: ['Management', 'Distribution'],
        items: [
            {
                path: PrivateRoutes.BRANDS,
                label: 'Brands',
            },
            {
                path: PrivateRoutes.GAMES,
                label: 'Games',
            },
            {
                path: PrivateRoutes.PROGRAMS,
                label: 'Programs',
            },
            {
                path: PrivateRoutes.PRODUCTS_CATEGORIES,
                label: 'Product Categories',
            },
            {
                path: PrivateRoutes.PRODUCTS,
                label: 'Products',
            },
            {
                path: PrivateRoutes.COMPUTERS_CATEGORIES,
                label: 'Computer Categories',
            },
            {
                path: PrivateRoutes.COMPUTERS,
                label: 'Computers',
            },
            {
                path: PrivateRoutes.DESKS,
                label: 'Desks',
            },
            {
                path: PrivateRoutes.ORDERS,
                label: 'Orders',
            },
            {
                path: PrivateRoutes.QUOTE,
                label: 'Quote',
            },
        ],
    },
    {
        title: 'Nevobit',
        role: ['Product', 'Management'],
        items: [
            {
                path: '/leads',
                label: 'Leads',
            },
            {
                path: '/case-studies',
                label: 'Case Studies',
            },
            {
                path: '/nevo-quote',
                label: 'Quote',
            },
        ],
    },
     {
         title: 'Management',
        role: ['Management'],
         items: [
             {
                 path: PrivateRoutes.EMPLOYES,
                 label: 'Collaborators',
             },
         ],
     },
    { 
        title: 'Helebba',
        role: ['Product', 'Management', 'Distribution'],
        items: [
         {
             path: '/helebba-users',
             label: 'Users',
         },
     ],},
     {
         title: 'Marketing',
         role: ['Management', 'Distribution'],
         items: [
             {
                 path: PrivateRoutes.SOCIALSCRIPT,
                 label: 'Social Script',
             },
         ],
     },
   
];