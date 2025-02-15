
export async function fetchCategories(){
    const options = {
      headers : {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    }

    try{
      const res = await fetch("http://localhost:1337/api/categories",options);
      const data = await res.json();

      return data;
    }catch(err){
      console.log(err);
    }

}

export async function fetchBlogs(){

  const options = {
    headers : {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  }
  try{
    const res = await fetch("http://localhost:1337/api/blogs?populate=*",options);
    const data = await res.json();

    return data;
  }catch(err){
    console.log(err);
  }


}


export async function fetchBlogById(documentId: string){

  const options = {
    headers : {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  }
  try{
    const res = await fetch(`http://localhost:1337/api/blogs/${documentId}?populate=*`,options);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err);
  }


}


