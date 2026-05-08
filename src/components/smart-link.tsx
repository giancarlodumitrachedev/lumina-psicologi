"use client";

import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode, Suspense } from "react";

interface SmartLinkProps extends Omit<LinkProps, 'href'> {
  href: string | object;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function SmartLinkInner({ children, href, className, onClick, ...props }: SmartLinkProps) {
  const searchParams = useSearchParams();
  
  let finalHref = href.toString();
  if (typeof href === "string" && searchParams && searchParams.toString()) {
    const separator = href.includes("?") ? "&" : "?";
    finalHref = `${href}${separator}${searchParams.toString()}`;
  }

  return (
    <Link href={finalHref} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

export function SmartLink(props: SmartLinkProps) {
  return (
    <Suspense fallback={<Link {...props}>{props.children}</Link>}>
      <SmartLinkInner {...props} />
    </Suspense>
  );
}
