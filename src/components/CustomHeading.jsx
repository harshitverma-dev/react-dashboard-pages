import React from 'react'

const CustomHeading = ({ title, mt = "mt-0", mb = "mb-0" }) => {
    return (
        <h2 className={`text-[14px] font-semibold ${mt} text-foreground leading-[20px] ${mb} flex items-center`}>
            {title}
        </h2>
    )
}

export default CustomHeading

