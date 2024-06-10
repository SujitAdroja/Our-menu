export default function Categories({categories,filterMenu}){
    return <main>
        <section className="section-center">
            <div className="btn-container">
                {categories.map((item,index)=><button type="button" key={index} className="filter-btn" onClick={()=>{
                    filterMenu(item)
                }}>{item}</button>)}
            </div>  
        </section>
    </main>
}