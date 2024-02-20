import React, { createContext, useState } from 'react'
//ceate contextapi for add blog
export const addBlogResponseContext = createContext()
//ceate contextapi for edit blog
export const editBlogResponseContext = createContext()
//ceate contextapi for add category
export const addCategoryResponseContext = createContext()
//ceate contextapi for edit category
export const editCategoryResponseContext = createContext()
//logout
export const isAuthTokenContext = createContext()

//ceate contextapi for profile update
export const editProfileResponseContext = createContext()


//children is a predefined  prop used to share data between all components
function ContextShare({children}) {
//to store data
  const [addBlogResponse, setAddBlogResponse] = useState({})
  const [editBlogResponse, setEditBlogResponse] = useState({})
  const [addCategoryResponse, setAddCategoryResponse] = useState({})
  const [editCategoryResponse, setEditCategoryResponse] = useState({})
  const [isAuthToken, setIsAuthToken] = useState(false)
  const [editProfileResponse, setEditProfileResponse] = useState({})
  return (
    <>
    <addBlogResponseContext.Provider value={{addBlogResponse, setAddBlogResponse}}>
      <editBlogResponseContext.Provider value={{editBlogResponse, setEditBlogResponse}}>
        <addCategoryResponseContext.Provider value={{addCategoryResponse, setAddCategoryResponse}}>
          <editCategoryResponseContext.Provider value={{editCategoryResponse, setEditCategoryResponse}}>
            <isAuthTokenContext.Provider value={{isAuthToken, setIsAuthToken}}>
            <editProfileResponseContext.Provider value={{editProfileResponse, setEditProfileResponse}}>
              {children}
            </editProfileResponseContext.Provider>
            </isAuthTokenContext.Provider>
          </editCategoryResponseContext.Provider>
        </addCategoryResponseContext.Provider>  
      </editBlogResponseContext.Provider>
    </addBlogResponseContext.Provider>
    </>
  )
}

export default ContextShare
