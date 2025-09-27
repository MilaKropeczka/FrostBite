declare module 'js-cookie' {
	interface CookieAttributes {
		expires?: number | Date;
		path?: string;
		domain?: string;
		secure?: boolean;
		sameSite?: 'strict' | 'lax' | 'none';
	}

	interface CookiesStatic {
		set(name: string, value: string, options?: CookieAttributes): void;
		get(name: string): string | undefined;
		remove(name: string, options?: CookieAttributes): void;
		getJSON<T = Record<string, unknown>>(name: string): T | undefined;
	}

	const Cookies: CookiesStatic;
	export default Cookies;
}
