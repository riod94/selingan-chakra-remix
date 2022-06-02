import {
    CONTRIBUTE_LINK,
    DISCORD_INVITE_LINK,
    GITHUB_LINK,
} from '../../contants';

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

export interface Category {
    name: string;
    subLabel: string;
    id: string;
    children?: SubCategory[];
}

export interface SubCategory {
    name: string;
    id: string;
    description?: string;
    children?: Template[];
}

export interface Template {
    name: string;
    filename: string;
    tags?: string[];
}

const data: Category[] = [
    {
        name: 'Page Sections',
        subLabel: 'Large Page Sections like Hero, Features ...',
        id: 'page-sections',
    },
    {
        name: 'Blog',
        subLabel: 'A section regarding all blog elements',
        id: 'blog',
    },
    {
        name: 'Navigation',
        id: 'navigation',
        subLabel: 'Header Navigation for Websites & Apps',
    },
    {
        name: 'Forms',
        id: 'forms',
        subLabel: 'User Login & Newsletter Forms',
    },
    {
        name: 'Components',
        id: 'components',
        subLabel: 'Smaller buildings blocks like Cards, Buttons, Result ...',
    },
];

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Templates',
        children: data.map((category) => ({
            label: category.name,
            subLabel: category.subLabel,
            href: `/${category.id}/${category.children?.[0].id}`,
        })),
    },
    {
        label: 'Contribute',
        href: CONTRIBUTE_LINK,
    },
    {
        label: 'GitHub',
        href: GITHUB_LINK,
    },
    {
        label: 'Discord',
        href: DISCORD_INVITE_LINK,
    },
];