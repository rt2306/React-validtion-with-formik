import React, { useRef, useState ,useEffect} from "react";   
import { useFormik } from "formik";
import * as Yup from "yup"; 
import sample from "../assets/Videos/notfound.mp4"
import '../assets/css/notfoun.css'  


export default function () { 


  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("show.svg"); 
  const [loading, setLoading] = useState(false); 

  const handleToggle = () => {

    if (type === "password") { 
        setIcon("show.svg");
        setType("text"); 
    }  
    else  {
      setIcon("hide.svg");
      setType("password");
    }
  };
   
  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      captcha_response: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required."),
      password: Yup.string()
        .required("Password is Required")
        .min(6, "Password is too short - should be 6 chars minimum")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase,one lowercase, one number and one special case character"
        ), 
    }),
    onSubmit: async (body) => {
      setTimeout(() => {
        setLoading(true); 
       
        
      }, 2000); 
      let follow = prompt('Logged in success futher code you have to follow me and type and then type my user name here')
      console.log(follow);
      if(follow != 'rt2306'){
        prompt('Logged in success futher code you have to follow me and type and then type my user name here')
        return;
      } 
     }
  });

  
  return (
    <div>
      <div className="auth_main">
        <div className="container-fluid">
          <div className="row  auth_row">
          <div className="video-container">
          <h1 className='texts'>
            <div className="col-12 col-lg-6 col-xl-6 order-2 order-lg-1">
              <div className="row justify-content-center">
                <div className="col-sm-8 col-md-7 col-lg-10 col-xl-6">
                <div className="inner-wrapper d-lg-flex align-items-center" style={{position:'relative',zIndex:'1111'}}>
                <div className="auth_box w-100" style={{marginTop:'20%'}}>
                  <div className="auth_heading text-center mb-3">
                    <h5 className="mb-0 text-uppercase">
                      Login To Your Account
                    </h5>
                  </div>
                  <div className="">
                    <form className="auth_form" onSubmit={handleSubmit}>
               
                   <div className="mb-3"> 
                   <label htmlFor="email" className="form-label">
                        Email
                      </label>
                   <div className="input-group border rounded">
                        <span className="input-group-text border-0 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 23.014 23.014"
                          >
                            <path
                              id="Icon_feather-message-square"
                              data-name="Icon feather-message-square"
                              d="M25.514,18.509a2.335,2.335,0,0,1-2.335,2.335H9.17L4.5,25.514V6.835A2.335,2.335,0,0,1,6.835,4.5H23.179a2.335,2.335,0,0,1,2.335,2.335Z"
                              transform="translate(-3.5 -3.5)"
                              fill="none"
                              stroke="var(--ch-gray)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          className="form-control border-0"
                          placeholder="Email"
                          aria-label="email"
                        />
                      </div>
                      <span>
                        {errors.email && touched.email && (
                          <span style={{ color: "red", fontSize: "small" }}>
                            {errors.email}
                          </span>
                        )}
                        </span>
                   </div>
                      <div>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      </div>
                      
                      <div className="input-group border rounded mb-1">
                        <span className="input-group-text border-0 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 20 22"
                          >
                            <g
                              id="Icon_feather-lock"
                              data-name="Icon feather-lock"
                              transform="translate(-3.5 -2)"
                            >
                              <path
                                id="Path_1554"
                                data-name="Path 1554"
                                d="M6.5,16.5h14a2,2,0,0,1,2,2v7a2,2,0,0,1-2,2H6.5a2,2,0,0,1-2-2v-7a2,2,0,0,1,2-2Z"
                                transform="translate(0 -4.5)"
                                fill="none"
                                stroke="var(--ch-gray)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                id="Path_1555"
                                data-name="Path 1555"
                                d="M10.5,12V8a5,5,0,0,1,10,0v4"
                                transform="translate(-2)"
                                fill="none"
                                stroke="var(--ch-gray)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </span>

                        <input
                          type={type}
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                          className="form-control border-0"
                          placeholder="Password"
                          aria-label="password"
                        />
                        <button
                          type="button"
                          className="input-group-text border-0"
                          id="basic-addon2"
                          onClick={handleToggle}
                        >
                          <img src={icon} />{" "}
                        </button>
                      </div>
                      <div className="input-errors">
                        {errors.password && touched.password && (
                          <span style={{ color: "red", fontSize: "small" }}>
                            {errors.password}
                          </span>
                        )}
                      </div> 
                      {/* <Link to="/spot" onClick={loader}> */}
                      {loading ? (
                        <button
                          type="button"
                          className="btn text-uppercase w-100 border-0 mb-3"
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true" style={{color:'white'}}
                          ></span>
                          Loading...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn text-uppercase w-100 border-0 mb-3" style={{color:'white'}}
                        >
                          Login
                        </button>
                      )}
 
                    </form>
                  </div>
                </div>
              </div>
                </div>
              </div>
             
            </div>
            </h1>
            <video className="background-video" autoPlay muted loop>
          <source src={sample} type="video/mp4" />
        </video>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
