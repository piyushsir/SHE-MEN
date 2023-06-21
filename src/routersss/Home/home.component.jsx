
import CategoriesConatiner from "../../components/categories-container/categories.container.component";
const Homepage=()=>
 {


  const category=[
    {
      title:"HATS",
      id:1,
      img:"https://th.bing.com/th/id/OIP.v_BC1BQLfVQP4pGQiQZzgwHaFc?pid=ImgDet&rs=1"
    },
    {
      title:"JACKETS",
      id:2,
      img:"https://i.pinimg.com/originals/3f/ff/2d/3fff2d2fb9c363ad2aefffe0c2f717b1.jpg"
    },
    {
      title:"SNEAKERS",
      id:3,
      img:"https://th.bing.com/th/id/R.bbf095f830e6cbd172604f621364ab43?rik=PxCLtto77amtEQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5e7f46179beb49266ae85567%2f5e9033eb0efe3f01fb1957eb%2f5fe19d98a4c8033070195253%2f1608622165405%2fnike-air-jordan-dribbble.png%3fformat%3d1500w&ehk=4nvjUqy3LaAztDIOrpCKlZuMHJzdQaMAgFxZGB9RTpQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title:"WOMEN",
      id:4,
      img:"https://freedesignfile.com/upload/2019/02/Lying-on-the-ground-posing-woman-Stock-Photo.jpg"
    },
    {
      title:"MEN",
      id:5,
      img:"https://th.bing.com/th/id/OIP.SAi_Sqhcz1l8JG5Q2QGJ4gHaE7?pid=ImgDet&rs=1"
    }
  ]
  return (
   <div>

<CategoriesConatiner categ={category} />

   </div>
     
      
  );
}

export default Homepage;
