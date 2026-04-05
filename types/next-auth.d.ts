import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		currentUser?: {
			_id: string;
			email: string;
			name: string;
		};

		user: {
			name?: string | null;
			email?: string | null;
		} & DefaultSession['user'];
	}
}
