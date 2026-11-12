// The slice of the Special Minds UAE database (Supabase project
// exfzewsdznyubhrvfald) that the academy touches, copied from that project's
// generated lib/supabase/database.types.ts. Everything here is reachable with
// the public anon key and nothing more:
//   - ibt_registrations and leads: anonymous INSERT only (no SELECT);
//   - attach_ibt_registration_intent, get_ibt_payment_intent_id and
//     ibt_verify_certificate: callable by anon.
// The academy must not use anything else in that database, and must never
// change it. If a column changes there, regenerate the UAE types and copy the
// matching entries here.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ibt_registrations: {
        Row: {
          amount_paid: number
          balance_due_aed: number | null
          cohort: string
          created_at: string
          email: string | null
          emirate: string | null
          id: string
          is_deposit: boolean
          name: string
          phone: string | null
          status: string
          ziina_payment_intent_id: string | null
          ziina_status: string | null
        }
        Insert: {
          amount_paid?: number
          balance_due_aed?: number | null
          cohort?: string
          created_at?: string
          email?: string | null
          emirate?: string | null
          id?: string
          is_deposit?: boolean
          name: string
          phone?: string | null
          status?: string
          ziina_payment_intent_id?: string | null
          ziina_status?: string | null
        }
        Update: {
          amount_paid?: number
          balance_due_aed?: number | null
          cohort?: string
          created_at?: string
          email?: string | null
          emirate?: string | null
          id?: string
          is_deposit?: boolean
          name?: string
          phone?: string | null
          status?: string
          ziina_payment_intent_id?: string | null
          ziina_status?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          child_age: string | null
          condition: string | null
          conditions_supported: string | null
          created_at: string
          curricula_taught: string | null
          email: string | null
          emirate: string | null
          experience_years: string | null
          gender: string | null
          handled: boolean
          id: string
          kind: string
          languages_spoken: string | null
          message: string | null
          name: string
          page: string | null
          phone: string | null
          photo_path: string | null
          qualifications: string | null
          reference1_contact: string | null
          reference1_name: string | null
          reference1_relationship: string | null
          reference2_contact: string | null
          reference2_name: string | null
          reference2_relationship: string | null
          referred_by_code: string | null
          service_interest: string | null
          setting_preference: string | null
          specialisation: string | null
          type: string | null
          urgency: string | null
        }
        Insert: {
          child_age?: string | null
          condition?: string | null
          conditions_supported?: string | null
          created_at?: string
          curricula_taught?: string | null
          email?: string | null
          emirate?: string | null
          experience_years?: string | null
          gender?: string | null
          handled?: boolean
          id?: string
          kind: string
          languages_spoken?: string | null
          message?: string | null
          name: string
          page?: string | null
          phone?: string | null
          photo_path?: string | null
          qualifications?: string | null
          reference1_contact?: string | null
          reference1_name?: string | null
          reference1_relationship?: string | null
          reference2_contact?: string | null
          reference2_name?: string | null
          reference2_relationship?: string | null
          referred_by_code?: string | null
          service_interest?: string | null
          setting_preference?: string | null
          specialisation?: string | null
          type?: string | null
          urgency?: string | null
        }
        Update: {
          child_age?: string | null
          condition?: string | null
          conditions_supported?: string | null
          created_at?: string
          curricula_taught?: string | null
          email?: string | null
          emirate?: string | null
          experience_years?: string | null
          gender?: string | null
          handled?: boolean
          id?: string
          kind?: string
          languages_spoken?: string | null
          message?: string | null
          name?: string
          page?: string | null
          phone?: string | null
          photo_path?: string | null
          qualifications?: string | null
          reference1_contact?: string | null
          reference1_name?: string | null
          reference1_relationship?: string | null
          reference2_contact?: string | null
          reference2_name?: string | null
          reference2_relationship?: string | null
          referred_by_code?: string | null
          service_interest?: string | null
          setting_preference?: string | null
          specialisation?: string | null
          type?: string | null
          urgency?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      attach_ibt_registration_intent: {
        Args: {
          p_payment_intent_id: string
          p_registration_id: string
          p_status: string
        }
        Returns: undefined
      }
      get_ibt_payment_intent_id: {
        Args: { p_registration_id: string }
        Returns: string
      }
      ibt_verify_certificate: { Args: { p_serial: string }; Returns: Json }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
