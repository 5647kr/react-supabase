import supabase from "../supabaseClient";

export default async function ReadApi() {
  try {
    const {data, error} = await supabase.from("posts").select("*");
    
    if(error) {
      throw new Error("오류 발생", error)
    }

    return data;
  } catch (error) {
    console.error(error)
  }
}
