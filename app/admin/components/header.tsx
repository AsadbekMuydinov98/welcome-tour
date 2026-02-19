import { ThemeToggle } from "@/components/ui/theme-toggle";

export function AdminHeader() {
	return (
		<header className='h-16 border-b border-border flex items-center justify-between px-6 bg-background'>
			<div>
				<p className='text-sm text-muted-foreground'>Welcome back, Admin</p>
			</div>
			<div className='flex items-center gap-4'>
				{/* Keyin theme toggle qo‘shamiz */}
				<div className='w-8 h-8 rounded-full bg-muted' />
			</div>
			<ThemeToggle />
		</header>
	);
}
