import Link from "next/link";

// export function Container({ children }: { children: React.ReactNode }) {
//   return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
// }
/* new
export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}


export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs backdrop-blur"
      style={{
        border: `1px solid rgba(var(--border), var(--border-alpha))`,
        background: `rgba(var(--chip), var(--chip-alpha))`,
        color: `rgba(var(--text), 0.85)`,
      }}
    >
      {children}
    </span>
  );
}
  */

/*
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur"
      style={{
        border: `1px solid rgba(var(--border), var(--border-alpha))`,
        background: `rgba(var(--card), var(--card-alpha))`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute -inset-24"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(56,189,248,0.18), transparent 45%)",
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
  */
/* new
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-1/1 group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.04] p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_45%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}  

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  target?: HTMLAnchorElement["target"];
}) {
  const common =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition";
// export function Container({ children }: { children: React.ReactNode }) {
//   return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
// }

  const primary = `${common}`;
  const ghost = `${common}`;

  const primaryStyle: React.CSSProperties = {
    background: `rgba(var(--accent), 0.9)`,
    color: "white",
    boxShadow: `0 10px 30px rgba(var(--accent), 0.18)`,
  };

  const ghostStyle: React.CSSProperties = {
    border: `1px solid rgba(var(--border), var(--border-alpha))`,
    background: `rgba(var(--chip), var(--chip-alpha))`,
    color: `rgba(var(--text), 0.9)`,
  };

  const hoverClass =
    variant === "primary"
      ? "hover:brightness-110"
      : "hover:brightness-110";

  const cls = `${variant === "primary" ? primary : ghost} ${hoverClass}`;

  const style = variant === "primary" ? primaryStyle : ghostStyle;

  if (external) {
    return (
      <a className={cls} style={style} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} style={style} href={href} target={target}>
      {children}
    </Link>
  );
}
*/

/**old */
// import Link from "next/link";

// export function Container({ children }: { children: React.ReactNode }) {
//   return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
// }

// export function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
//       {children}
//     </span>
//   );
// }

// export function Card({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="h-1/1 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
//       <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//         <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_45%)]" />
//       </div>
//       <div className="relative">{children}</div>
//     </div>
//   );
// }  

// export function ButtonLink({
//   href,
//   children,
//   variant = "primary",
//   external,
//   target,
// }: {
//   href: string;
//   children: React.ReactNode;
//   variant?: "primary" | "ghost";
//   external?: boolean;
//   target?: HTMLAnchorElement["target"];
// }) {
//   const cls =
//     variant === "primary"
//       ? "inline-flex items-center gap-2 rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-500"
//       : "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10";

//   if (external) {
//     return (
//       <a className={cls} href={href} target="_blank" rel="noreferrer">
//         {children}
//       </a>
//     );
//   }
//   return (
//     <Link className={cls} href={href} target={target}>
//       {children}
//     </Link>
//   );
// }


// import Link from "next/link";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 px-3 py-1 text-xs text-black/80 dark:text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-1/1 group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.04] p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_45%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}  

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  target?: HTMLAnchorElement["target"];
}) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center gap-2 rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/15 transition hover:bg-indigo-500"
      : "inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-black/90 dark:text-white/90 transition hover:bg-white/10";

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} target={target}>
      {children}
    </Link>
  );
}

// export const Title = ({ children }: { children: React.ReactNode }) => (
//   <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
//     {children}
//   </h2>
// );