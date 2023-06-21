import './input-form.style.scss'

const FormInput1=({label,inputoptions={}})=>
{
    return(
        <div className='group'>
            <input className='form-input' {...inputoptions}/>
            {<label className={`${inputoptions.value.length ? 'shrink':''} form-input-label` }>{label}</label>}


        </div>
    )
}

export default FormInput1;