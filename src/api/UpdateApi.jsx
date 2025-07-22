import supabase from '../supabaseClient'

export default async function UpdateApi({title, content, id}) {
  console.log(id, title, content)
  console.log(typeof id)
  try {
    const {_, error} = await supabase.from("posts").update({title, content}).eq("id", id);
    if(error) {
      throw new Error(error)
    }
    console.log("수정 완료")
  } catch (error) {
    console.error("오류 발생", error)
  }
}
