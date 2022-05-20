import { FieldHookConfig, useField } from "formik";
import { Button } from "./Button";


type Props = {
    label?: string
    button?: React.ReactNode
    [x:string]: any 
} | any


export const FormField = ({label, button, ...props} : Props) => {
const [inputProps, meta] = useField(props)
const id = props.id || props.name;

return (   
<div className="flex flex-col w-full">
{label && (
    <label className="text-md font-bold" htmlFor={id}>{label}</label>
)}
<div className="flex gap-2">
<input className="w-full px-4 py-2 border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300" id={id} {...inputProps} {...props}/> 
{button}
</div>
{meta.error && meta.touched && (<span className="text-contrast-500">{meta.error.toString()}</span>)}
</div>)
}

