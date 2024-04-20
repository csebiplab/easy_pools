import { cn } from "@/libs/utils";

export default function DashboardShell({ children, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
}
