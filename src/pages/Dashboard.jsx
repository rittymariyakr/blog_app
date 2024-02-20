import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams, useSearchParams } from 'react-router-dom'
import './Dashboard.css'
import { allBlogAPI, allCategoryAPI, blogAuthorizationAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';


function Dashboard() {

  const [allBlog, setAllBlog] = useState([])

  const [allCategory, setAllCategory] = useState([])

  const [filterCategory, setFilterCategory] = useState([])

  const [selectCategory, setSelectCategory] = useState(null)
  const [preview, setPreview] = useState("")

  const [profile, setProfile] = useState("")
  const [profileDetails, setProfileDetails] = useState({
    profile: ""
  })


  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  console.log(category);




  const getAllBlog = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allBlogAPI(reqHeader)

      console.log(result.data);
      if (result.status === 200) {
        const blogsWithUsername = await Promise.all(result.data.map(async (blog) => {
          const username = await blogAuthorizationAPI(blog.userId, reqHeader);
          return { ...blog, user: username.data };
        }));
        const profile1 = blogsWithUsername.map(item => item.user.user[0].profile)
        setProfileDetails({ profile: profile1 })
        setProfile(profile1)
        setAllBlog(blogsWithUsername)


      }
    }
  }
  console.log(profileDetails.profile);






  useEffect(() => {
    getAllBlog()
  }, [])


  //get category
  const getAllCategory = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await allCategoryAPI(reqHeader)
    console.log(result.data);
    setAllCategory(result.data)

  }

  useEffect(() => {
    getAllCategory()
  }, [])




  //get category count
  const categoryCount = () => {
    const counter = {}
    allBlog.forEach(item => {
      if (counter[item.category]) {
        counter[item.category]++
      } else {
        counter[item.category] = 1
      }
    })
    return counter
  }
  const counter = categoryCount()


  // get like
  const handleLike = (id) => {

   setAllBlog(item=>{
    return item.map(blog=>{
      if(blog._id===id){
        return{...blog,likes:(blog.likes? 0:1)}
      }
      return blog
    })
   })
  }

  //select category
  const handleSelectCategory = (categoryName) => {
    setSelectCategory(selectCategory === categoryName ? null : categoryName)

  }

  //filter category
  const handleFilterCategory = () => {
    if (selectCategory !== null) {
      const filter = allBlog.filter(item => item.category === selectCategory)
      setFilterCategory(filter)

    }
  }
  console.log(filterCategory);

  useEffect(() => {
    handleFilterCategory()
  }, [selectCategory])

  console.log(allBlog.user);
  return (
    <>

      <div>
        <Row className='container-fluid  ' style={{ height: '100vh' }}>
          <Col md={9} className='blog-card' style={{ overflowY: 'auto', maxHeight: '775px' }} >
            <h1 className='ms-3  text-center mt-3 mb-3'>Explore Our <span className='text-warning'> Blog</span></h1>
            <div className="card mt-5 mb-5 border-0">
              {selectCategory && filterCategory.length > 0 ?
                filterCategory.map((item, index) => (
                  <Card className="mb-4 shadow">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Img variant="top" src={item ? `${BASE_URL}/uploads/${item.blogImage}` : null} className="rounded" />
                        </Col>
                        <Col md={8}>
                          <Card.Title className="text-info">{item.title}</Card.Title>
                          <div className="d-flex mt-3">
                            <span><i className="fa-solid fa-calendar-days fs-5"></i> {item.createdAt}</span>
                            <span><i className="fa-regular fa-folder ms-3 fs-5"></i> {item.category}</span>
                          </div>
                          <Card.Text>{item.content.slice(0, 80)}</Card.Text>
                          <Link to={`/viewblog/${item._id}`} className="text-primary" style={{ textDecoration: 'none' }}>Read More <i className="fa-solid fa-greater-than"></i></Link>
                          <div className='d-flex'>

<p className='mt-3'><span className='text-warning'>Author:
  {profileDetails.profile[index] ?
    <img style={{ borderRadius: "50%" }} width={'50px'} height={'50px'} src={item ? `${BASE_URL}/uploads/${profileDetails.profile[index]}` : null} alt="no image" />
    :
    <img src="" alt="" />
  }</span>  {item.user.user[0].username}</p>

</div>

                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )) :
                allBlog.map((item, index) => (
                  <Card className="mb-4 ">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Img variant="top" src={item ? `${BASE_URL}/uploads/${item.blogImage}` : null} className="rounded" />
                        </Col>
                        <Col md={8}>
                          <Card.Title className="text-info">{item.title}</Card.Title>
                          <div className="d-flex mt-3">
                            <span><i className="fa-solid fa-calendar-days fs-5"></i> {item.createdAt}</span>
                            <span><i className="fa-regular fa-folder ms-3 fs-5"></i> {item.category}</span>
                          </div>
                          <Card.Text>{item.content.slice(0, 80)}</Card.Text>
                          <Link to={`/viewblog/${item._id}`} className="text-primary" style={{ textDecoration: 'none' }}>Read More <i className="fa-solid fa-greater-than"></i></Link>
                          <div className='d-flex'>

                            <p className='mt-3'><span className='text-warning'>Author:
                              {profileDetails.profile[index] ?
                                <img style={{ borderRadius: "50%" }} width={'50px'} height={'50px'} src={item ? `${BASE_URL}/uploads/${profileDetails.profile[index]}` : null} alt="no image" />
                                :
                                <img src="" alt="" />
                              }</span>  {item.user.user[0].username}</p>

                          </div>

                          {/* <div><Badge bg="secondary" className='rounded ms-2'><a href="#" onClick={()=>handleLike(item._id)}><i className="like fa-solid fa-thumbs-up fs-5"></i></a> <span className='fs-5 ms-2'>{item.likes || 0}</span></Badge></div> */}
                        </Col>

                      </Row>
                    </Card.Body>
                  </Card>))
              }

            </div>

          </Col>
          <Col md={3} style={{ background: '#f8f9fa ' }} >
            <Card className='mt-3 text-center'>
              <Card.Header className='bg-primary text-white'>
                <h4 className='text-center m-0'>CATEGORIES</h4>
              </Card.Header>
              <Card.Body>
                <ListGroup as='ol' numbered>
                  {allCategory?.length > 0 ?
                    allCategory.map((item) => (
                      <ListGroup.Item key={item.categoryName} as='li' className=' d-flex justify-content-between align-items-start bg-white'>
                        <div className='ms-2 me-auto'>
                          <div className='sidebar-link fw-bold text-dark'>
                            <a style={{ color: "#ff1493", fontSize: "16px", fontWeight: "bolder", textDecoration: "none" }} className={` pink rounded  ${selectCategory === item.categoryName ? 'active' : ''}`} onClick={() => handleSelectCategory(item.categoryName)}>{item.categoryName}</a>
                          </div>
                        </div>
                        <Badge bg='primary mt-2' style={{ fontSize: "15px" }} pill>{counter[item.categoryName] || 0}</Badge>
                      </ListGroup.Item>
                    )) : null}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div >
    </>
  )
}

export default Dashboard

