import './button.style.scss'

const ButtnTypes={

    google:'google-sign-in',
    inverted:'inverted'
}
const Button=({children,btntype,...others})=>
{
return(
    <button className={`button-container ${ButtnTypes[btntype]}`} {...others}>
{children}
    </button>
)
}
export default Button;