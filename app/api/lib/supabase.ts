import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://wkvqbhfhxtbanbjgugvx.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdnFiaGZoeHRiYW5iamd1Z3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5OTE2NjQsImV4cCI6MjA1OTU2NzY2NH0.-9NtWFtTDB1DAN5Xe1jpKT1q-CvO0GrOpusrDbOCgB8'
);
