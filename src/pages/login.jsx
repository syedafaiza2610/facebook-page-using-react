
// import { auth, signInWithEmailAndPassword} from "../config/firebase";
// import React from 'react';
// import '../App.css';
// import { Col, Row } from 'antd';
// import LoginForm from "../components/login";
// const LoginPage = () => {
//   const loginUser = (values) => {
//     signInWithEmailAndPassword(auth, values.username, values.password)
// .then((userCredential) => {
// // Signed in 
// const user = userCredential.user;
// console.log("user===>",user)
// // ...
// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// console.log(alert("Register yourself!"))
// });

// }
    
//     return (
//         <div>
//             <Row>
//                 <Col xl={12} lg={12} md={8} sm={24} xs={24}>
//                     <div class="left">
//                         <h1 className='leftpara'>facebook</h1>
//                         <p className='leftpara1'>Facebook helps you connect and share with the people in your life.</p>
//                     </div>

//                 </Col>
//                 <Col xl={12} lg={12} md={8} sm={24} xs={24}><LoginForm  />
//                     <div className="last1"><a style={{ color: "black" }}><b>Create a Page</b></a> <div className='last2'>for a celebrity, brand or business.</div></div>
//                 </Col>
//             </Row>

//         </div>
//     )
// };
// export default LoginPage;