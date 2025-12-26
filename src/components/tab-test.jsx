import ShowTabs from "./ShowTabs"

function randoCompo() {
    return <h1 className="comositText">tag return</h1>
    
}

export default function TabTest(){

    const tabs = [
        {
            label: 'Tab 1',
            content: 'Free place for everyone is in hell, for heaven you pay'
        },
        
        {
            label: 'Tab 2',
            content: 'Though no one questions the faireness'
        },
        
        {
            label: 'Tab 3',
            content: randoCompo()
        },
        
    ]

    function handleChange(index){
        console.log(index);
    }

    return <ShowTabs content={tabs} onChange={handleChange}></ShowTabs>
}
















