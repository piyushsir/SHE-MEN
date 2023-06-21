import './categories.container.style.css'
import ContainerComp from '../container/container.component'

const CategoriesConatiner=({categ})=>
{
   return (
   <div className="categories-container">
    {categ.map((cat)=>
        {
            return (
  
  
              <ContainerComp category1={cat} key={cat.id}/>
        
            )
        })}
   </div>)
}

export default CategoriesConatiner;