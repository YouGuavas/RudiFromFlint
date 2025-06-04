// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';

export default function EmailForm() {
	const [email, setEmail] = useState('');
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');

	const [phone, setPhone] = useState('');

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
			.insert([{ email, source: 'contact-form' }]);

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
			<div className={`full flex column gap-small`}>
				<div className={`full flex row gap-small`}>
					<input
						type="text"
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="Your First Name"
						className="py-1"
						required
					/>
					<input
						type="text"
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Your Last Name"
						className="py-1"
						required
					/>
				</div>
				<div className={`full flex row gap-small`}>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="your@email.com"
						className="py-1 full row "
						required
					/>
					<input
						type="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="(555) 555-1234"
						className="py-1 full row"
						required
					/>
				</div>
				<button
					type="submit"
					disabled={status === 'loading'}
					className="py-1 style-1 lowercase thin spaced full row "
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
