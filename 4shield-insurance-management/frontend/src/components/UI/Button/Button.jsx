/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import clsx from "clsx";

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    big = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = "button"

    const props = { 
        onClick,
        ...passProps
    }

    if (href){
        props.href = href,
        Comp = "a";
    } else if (to){
        props.to = to,
        Comp = Link;
    }

    if (disabled){
        Object.key(props).forEach((key)=>{
            if (key.startsWith('on') && typeof props[key] === 'function' ){
                delete props[key];
            }
        })
    }

    return ( 
        <Comp className ={clsx(
            className,
            "flex justify-center items-center rounded",
            {
                "text-center   !bg-blue-500 border-0 focus:outline-none": primary,
                "text-center  !rounded-3xl border-0 focus:outline-none":rounded,
                "text-center  !border-2 focus:outline-none  ": outline,
                "text-center h-15 w-60 ": big,
                "text-center h-10 w-30 ": large,
                "text-center h-6 w-25 ": small,
                "text-center  !border-0 focus:outline-none !text-gray": text,

            }
        )} {...props}>
            {leftIcon && <span className="mr-1 text-center text-gray" >{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-1 text-center text-gray" >{rightIcon}</span>}
        </Comp>
     );
}

export default Button;