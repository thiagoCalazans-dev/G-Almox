import { FieldHookConfig, useField } from "formik";


type Props = {
    label?: string
} | any


export const FormField = ({label, ...props} : Props) => {
const [inputProps, meta] = useField(props)
const id = props.id || props.name;

return (
<div className="flex flex-col w-full">
{label && (
    <label className="text-md font-bold" htmlFor={id}>{label}</label>
)}
<input className="px-4 py-2 border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300" id={id} {...inputProps} {...props}/>
{meta.error && meta.touched && (<span className="text-contrast-500">{meta.error.toString()}</span>)}
</div>)
}

