import React from 'react'
import supabase from '../supabaseClient'

export default async function DeleteApi(id) {
  try {
    const {_, error} = await supabase.from("posts").delete().eq("id", id)
    if(error) {
      throw new Error(error)
    }
  } catch (error) {
    console.error("오류 발생", error)
  }
}
