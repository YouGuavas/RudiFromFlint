// api/addEmail.ts
import { supabase } from './lib/supabase';

export async function addEmail(email: string, source = 'main-site') {
	const { data, error } = await supabase
		.from('emails')
		.insert([{ email, source }]);

	if (error) throw error;
	return data;
}
