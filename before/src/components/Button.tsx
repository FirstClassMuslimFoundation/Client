import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
    invert?: boolean;
    to?: LinkProps['to'];
    href?: string;
} & (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export function Button({
    invert = false,
    className,
    children,
    to,
    href,
    ...props
}: ButtonProps) {
    const combinedClassName = clsx(
        className,
        'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
        invert
            ? 'bg-white text-neutral-950 hover:bg-neutral-200'
            : 'bg-neutral-950 text-white hover:bg-neutral-800',
    );

    const inner = <span className="relative top-px">{children}</span>;

    if (to) {
        return (
            <Link className={combinedClassName} {...(props as LinkProps)}>
                {inner}
            </Link>
        );
    } else if (href) {
        return (
            <a className={combinedClassName} href={href}>
                {inner}
            </a>
        );
    }

    return (
        <button className={combinedClassName}>
            {inner}
        </button>
    );
}
