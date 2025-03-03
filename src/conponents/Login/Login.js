import styles from "./Login.module.scss"
import classNames from "classnames/bind";
import bgImages from"../../assets/img/bgr-imge.webp"
import { useState } from "react";
const cx = classNames.bind(styles)
function Login() {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    console.log(username,password)

    return ( 
        <>
        <div 
            className={cx('body')} 
            style={{
                backgroundImage: `url(${bgImages})`,
                height:"700px",
                }}>
            <div className={cx("content")}>
                <div className={cx("header")}>
                    <h1 className="text-center">Login</h1>
                    <p className="text-center my-50">Enter Login details to get access</p>
                </div>
                <div className={cx("more-input")}>
                    <div className={cx("input-email")}>
                        <h6 className={cx('title-inp')}>Username or Email Address</h6>
                        <input 
                        type="text" 
                        placeholder="Username / Email address" 
                        className={cx("input-form")}
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />    
                    </div>
                    
                    <div className={cx("input-pass")}>
                        <h6 className={cx('title-inp')}>Password</h6>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            className={cx("input-form")}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </div>
                    <div className={cx("sub-end")}>
                        <div className={cx("left-sub")}>
                            <input type="checkbox" className={cx("input-check")}/>
                            <p className={cx("keep")}>Keep me logged in</p>
                         </div>
                        <div className={cx("right-sub")}>
                            <a href="#" className="" alt="">Forgot Password?</a>
                        </div>
                    </div>
                </div>
                
                <div className={cx("foot")}>
                    <div className={cx('foot-left')}>
                        <p>
                            Don’t have an account? 
                            <a href="#" className="" alt="">Sign Up</a>
                            here
                        </p>
                    </div>
                    <div className={cx('foot-right')}>
                        <button type="submit" className={cx("foot-left-btn")}>Sign In</button>
                    </div>
                        
                </div>
            </div>
        </div>
        </>
     );
}

export default Login;