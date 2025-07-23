
import supabase from "../supabaseClient";

export default async function LoginApi({email, password}) {
  try {
    const {data, error} = await supabase.auth.signInWithPassword({email, password})

    if(error) {
      throw new Error(error.message)
    }
    return data;
  } catch (error) {
    throw error;
  }
}
