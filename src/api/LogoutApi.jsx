import supabase from "../supabaseClient";

export default async function LogoutApi() {
  try {
    const {data, error} = await supabase.auth.signOut();
    
    if(error) {
      throw new Error(error.message)
    }
    return data;
  } catch (error) {
    throw error
  }
}
