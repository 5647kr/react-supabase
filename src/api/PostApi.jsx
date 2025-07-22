import supabase from "../supabaseClient";

export default async function PostApi({title, content}) {
  const {_, error} = await supabase.from("posts").insert([{title, content}]);

  if(error) {
    console.log("오류 발생", error)
  } else {
    console.log("정상 등록")
  }
}



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { data, error } = await supabase
  //     .from('posts')
  //     .insert([{ title, content }]);

  //   if (error) {
  //     console.error('오류 발생:', error.message);
  //   } else {

  //     alert('등록 완료!');
  //     setTitle('');
  //     setContent('');
  //   }
  // };