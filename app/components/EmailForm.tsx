// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';

export default function EmailForm() {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [error, setError] = useState<string | null>(null);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!emailRegex.test(email)) {
			setError('Please enter a valid email.');
			return;
		}

		setStatus('loading');
		setError(null);

		const { error } = await supabase
			.from('emails')
			.insert([{ email, source: 'ripple-form' }]);

		if (error) {
			setStatus('error');
			setError(error.message);
		} else {
			setStatus('success');
			setEmail('');
		}
	}

	return (
		<form onSubmit={handleSubmit} className="full form">
			<div className={`full row`}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="your@email.com"
					className="py-1"
					required
				/>
				<button
					type="submit"
					disabled={status === 'loading'}
					className="py-1 style-1 lowercase thin spaced"
				>
					{status === 'loading' ? 'rippling...' : 'wave'}
				</button>
			</div>
			{status === 'success' && (
				<p className="text-green-600">
					Thanks! You&apos;re already ahead of the curve.
				</p>
			)}

			{status === 'error' && error && <p className="text-red-600">{error}</p>}
		</form>
	);
}
