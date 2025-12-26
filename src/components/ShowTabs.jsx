import {useState} from 'react'
import './tabs.css'

export default function ShowTabs({content, onChange}){
    const [currTabIndex, setCurrTabIndex] = useState(0)

    function handleOnClick(label, index) {
        setCurrTabIndex(index)
        onChange(index)
    }

    return(
        <>
        <div className="wrapper">
            <div className="heading">
                {
                    
                    content.map((item, index)=>{
                        return <div className={index == currTabIndex? `tab-item-active`: 'tab-item'} onClick={()=>handleOnClick(item.label, index)} key={index}>
                            <span className='label'>{item.label}tab</span>
                        </div>
                    })
                }
            </div>

            <div className="content">
                {
                    content?.[currTabIndex] && content[currTabIndex]?.content

                }
            </div>
        </div>
        </>
    )

}