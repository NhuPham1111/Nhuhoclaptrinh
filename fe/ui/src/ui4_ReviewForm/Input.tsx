interface InputProps{
    title: string;
    placeholder: string;
    type: 'text' | 'textarea';
}

export default function Input({title, placeholder, type}: InputProps){
    return(
        <>
        <label className="block text-sm font-normal font-semibold" htmlFor="title">{title}</label>
        {type === 'text' ?
         <input id={title} placeholder={placeholder} 
        className="w-full mt-1 rounded-lg p-2 border-2 border-gray-100"/>
        : <textarea id={title} placeholder={placeholder} 
        className="w-full mt-1 rounded-lg p-2 border-2 border-gray-100"/> }
        </>
    )
}