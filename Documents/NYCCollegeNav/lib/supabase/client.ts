import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string | null;
          phone: string;
          first_name: string | null;
          last_name: string | null;
          high_school_id: string | null;
          graduation_year: number | null;
          preferred_language: string;
          housing_status: 'stable' | 'temporary' | 'shelter' | 'doubled_up' | null;
          citizenship_status: 'citizen' | 'permanent_resident' | 'daca' | 'undocumented' | 'other' | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      schools: {
        Row: {
          id: string;
          name: string;
          borough: string;
          district_number: number | null;
          counselor_emails: string[] | null;
          total_students: number | null;
          fafsa_completion_rate: number | null;
          created_at: string;
          updated_at: string;
        };
      };
      applications: {
        Row: {
          id: string;
          user_id: string;
          application_type: 'FAFSA' | 'DREAM_ACT' | 'TAP' | 'EXCELSIOR';
          status: 'not_started' | 'in_progress' | 'submitted' | 'completed';
          started_at: string | null;
          submitted_at: string | null;
          estimated_aid_amount: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['applications']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['applications']['Insert']>;
      };
      documents: {
        Row: {
          id: string;
          user_id: string;
          application_id: string | null;
          document_type: string;
          file_path: string | null;
          status: 'needed' | 'uploaded' | 'verified';
          reminder_sent_count: number;
          created_at: string;
          updated_at: string;
        };
      };
      conversations: {
        Row: {
          id: string;
          user_id: string;
          messages: any[];
          escalated: boolean;
          resolved: boolean;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
};
