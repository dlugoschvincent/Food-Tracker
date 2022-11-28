export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Food: {
        Row: {
          bar_code: number
          created_at: string | null
          name: string
          fat: number
          carbohydrates: number
          protein: number
          fibre: number
          saturated_fat: number
          salt: number
          sugar: number
        }
        Insert: {
          bar_code?: number
          created_at?: string | null
          name?: string
          fat?: number
          carbohydrates?: number
          protein?: number
          fibre?: number
          saturated_fat?: number
          salt?: number
          sugar?: number
        }
        Update: {
          bar_code?: number
          created_at?: string | null
          name?: string
          fat?: number
          carbohydrates?: number
          protein?: number
          fibre?: number
          saturated_fat?: number
          salt?: number
          sugar?: number
        }
      }
      UserAteFood: {
        Row: {
          user_id: string
          food_id: number
          created_at: string | null
          meal_id: number
          grams: number
          meal: string
        }
        Insert: {
          user_id: string
          food_id: number
          created_at?: string | null
          meal_id?: number
          grams: number
          meal: string
        }
        Update: {
          user_id?: string
          food_id?: number
          created_at?: string | null
          meal_id?: number
          grams?: number
          meal?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

