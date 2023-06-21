import './container.style.css'

const ContainerComp=({category1})=>
{

    const {title,img} = category1;

   return (
    

    <div className="category-container">
              <div className="background-image"  style={{
                backgroundImage:`url(${img})`
              }}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>
            SHOP NOW
          </p>
          
        </div> 

      </div>
   )
}

export default ContainerComp;