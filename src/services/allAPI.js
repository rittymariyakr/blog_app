import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"



//register api
export const registerAPI = async(user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,user,"")
}

//login api
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/login`, user, "")
 }

//add blog
export const addBlogAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/blogs/add`, reqBody, reqHeader)
 }

 //home blog
 export const homeBlogAPI = async () => {
    return await commonAPI("GET", `${BASE_URL}/blogs/home-blog`)
 }
//all blog
export const allBlogAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/blogs/all-blog`,"",reqHeader)
 }
//user blog
export const userBlogAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/blogs/user-blog`,"",reqHeader)
 }
 
 //edit blog
 export const userEditBlogAPI = async (blogId,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${BASE_URL}/blog/edit/${blogId}`,reqBody,reqHeader)
 }

//delete blog
export const deleteBlogAPI = async (blogId,reqHeader) => {
    return await commonAPI("DELETE", `${BASE_URL}/blog/remove/${blogId}`,{},reqHeader)
 }

 //add category
export const addCategoryAPI = async (reqBody, reqHeader) => {
   return await commonAPI("POST", `${BASE_URL}/admin/category`, reqBody, reqHeader)
}

//get all category at admin
export const allCategoryAPI = async (reqHeader) => {
   return await commonAPI("GET", `${BASE_URL}/admin/all-category`,"",reqHeader)
}

//delete category
export const deleteCategoryAPI = async (categoryId,reqHeader) => {
   return await commonAPI("DELETE", `${BASE_URL}/admin/removeCategory/${categoryId}`,{},reqHeader)
}
//edit category
export const editCategoryAPI = async (categoryId,reqBody,reqHeader) => {
   return await commonAPI("PUT", `${BASE_URL}/admin/editCategory/${categoryId}`,reqBody,reqHeader)
}


//get all category at user
export const userCategoryAPI = async () => {
   return await commonAPI("GET", `${BASE_URL}/user/all-category`,"","")
}

//edit profile
export const editProfileAPI = async (reqBody,reqHeader) => {
   return await commonAPI("PUT", `${BASE_URL}/user/editProfile`,reqBody,reqHeader)
}

//get user details
export const userDetailsAPI = async (reqHeader) => {
   return await commonAPI("GET", `${BASE_URL}/user/userDetails`,"",reqHeader)
}

//get user and blog together
export const blogAuthorizationAPI = async (userId,reqHeader) => {
   return await commonAPI("GET", `${BASE_URL}/blogs/all-blogs/${userId}`,"",reqHeader)
}



